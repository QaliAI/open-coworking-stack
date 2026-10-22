import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { stringify } from 'yaml';
import { validateCatalog } from './validate-catalog.js';

const temporaryDirectories: string[] = [];
const today = new Date().toISOString().slice(0, 10);

function tool(id: string, overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    schema_version: '1.0.0',
    id,
    name: id,
    tagline: 'A valid test catalog tool',
    description: 'A deliberately detailed description that is long enough for schema validation.',
    categories: ['automation-integration'],
    roles: ['technical-operator'],
    workflows: ['member-onboarding'],
    problems: ['integrate-stack'],
    deployment: ['self-hosted'],
    license: { class: 'oss-osi-approved', spdx: 'MIT' },
    cost: { model: 'free-self-hosted', summary: 'The operator pays infrastructure costs.' },
    implementation: {
      difficulty: 'easy',
      smallest_useful_experiment: 'Test with synthetic data.',
    },
    homepage: 'https://example.com',
    tasks_reduced_or_augmented: ['Repeated data entry'],
    human_oversight_still_needed: ['Reviewing results'],
    data_privacy: { data_held: ['configuration'], personal_data: false },
    verification: { status: 'verified', last_reviewed: today, sources: ['https://example.com'] },
    ...overrides,
  };
}

function stack(id: string): Record<string, unknown> {
  return {
    schema_version: '1.0.0',
    id,
    name: id,
    tagline: 'A valid stack fixture',
    description: 'A deliberately detailed stack description that is long enough for validation.',
    audience_roles: ['technical-operator'],
    problems_solved: ['integrate-stack'],
    workflows: ['member-onboarding'],
    monthly_cash_budget_band: 'near-zero',
    components: [
      { tool_id: 'alpha-tool', role_in_stack: 'First role' },
      { tool_id: 'alpha-tool', role_in_stack: 'Duplicate role' },
    ],
    assumptions: ['Synthetic data exists.'],
    risks: ['This is only a fixture.'],
    getting_started: ['Start the fixture.'],
    verification: { last_reviewed: today },
  };
}

function workflow(id = 'member-onboarding'): Record<string, unknown> {
  const stage = {
    id: 'configure',
    name: 'Configure',
    description: 'Configure the fixture.',
    suggested_tool_ids: ['alpha-tool'],
  };
  return {
    schema_version: '1.0.0',
    id,
    name: id,
    description: 'A deliberately detailed workflow description that is long enough for validation.',
    primary_roles: ['technical-operator'],
    stages: [stage, stage],
    success_metrics: ['The fixture validates.'],
    verification: { last_reviewed: today },
  };
}

async function createCatalog(): Promise<string> {
  const root = await mkdtemp(path.join(tmpdir(), 'ocs-validator-'));
  temporaryDirectories.push(root);
  await Promise.all(
    ['tools', 'stacks', 'workflows'].map((directory) =>
      mkdir(path.join(root, 'catalog', directory), { recursive: true }),
    ),
  );
  return root;
}

async function writeYaml(root: string, area: string, name: string, value: unknown): Promise<void> {
  await writeFile(path.join(root, 'catalog', area, `${name}.yaml`), stringify(value), 'utf8');
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true })),
  );
});

describe('validateCatalog', () => {
  it('reports duplicate IDs, filenames, arrays, components, stages, and bad references', async () => {
    const root = await createCatalog();
    await writeYaml(
      root,
      'tools',
      'alpha-tool',
      tool('alpha-tool', {
        categories: ['automation-integration', 'automation-integration'],
        related_tools: ['missing-tool'],
      }),
    );
    await writeYaml(root, 'stacks', 'example-stack', stack('example-stack'));
    await writeYaml(root, 'stacks', 'wrong-stack-file', stack('example-stack'));
    await writeYaml(root, 'workflows', 'member-onboarding', workflow());
    await writeYaml(root, 'workflows', 'wrong-workflow-file', workflow());

    const messages = (await validateCatalog(root)).issues.map((issue) => issue.message);

    expect(messages).toContain('duplicate value "automation-integration" in categories');
    expect(messages).toContain('related_tools references unknown tool id "missing-tool"');
    expect(messages).toContain('duplicate value "alpha-tool" in components.tool_id');
    expect(messages).toContain('duplicate stack id "example-stack"');
    expect(messages).toContain('filename slug "wrong-stack-file" must match id "example-stack"');
    expect(messages).toContain('duplicate value "configure" in stages.id');
    expect(messages).toContain('duplicate workflow id "member-onboarding"');
    expect(messages).toContain(
      'filename slug "wrong-workflow-file" must match id "member-onboarding"',
    );
  });

  it('reports tool filename mismatches and invalid or future review dates', async () => {
    const root = await createCatalog();
    const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10);
    await writeYaml(root, 'tools', 'wrong-name', tool('calendar-date'));
    await writeYaml(
      root,
      'tools',
      'invalid-date',
      tool('invalid-date', {
        verification: {
          status: 'verified',
          last_reviewed: '2026-02-30',
          sources: ['https://example.com'],
        },
      }),
    );
    await writeYaml(
      root,
      'tools',
      'future-date',
      tool('future-date', {
        verification: {
          status: 'verified',
          last_reviewed: tomorrow,
          sources: ['https://example.com'],
        },
      }),
    );

    const messages = (await validateCatalog(root)).issues.map((issue) => issue.message);

    expect(messages).toContain('filename slug "wrong-name" must match id "calendar-date"');
    expect(messages).toContain('verification.last_reviewed: Expected a valid calendar date');
    expect(messages).toContain('verification.last_reviewed: Date must not be in the future');
  });

  it('rejects a full guide that does not meet the flagship section standard', async () => {
    const root = await createCatalog();
    await mkdir(path.join(root, 'guides', 'tools'), { recursive: true });
    await writeFile(
      path.join(root, 'guides', 'tools', 'alpha-tool.md'),
      `${Array.from({ length: 32 }, (_, index) => `## ${index + 1}. Section\n\nPlaceholder.`).join('\n\n')}\n`,
      'utf8',
    );
    await writeYaml(
      root,
      'tools',
      'alpha-tool',
      tool('alpha-tool', {
        guide_status: 'full',
        guide_path: 'guides/tools/alpha-tool.md',
      }),
    );

    const messages = (await validateCatalog(root)).issues.map((issue) => issue.message);

    expect(messages).toContain(
      'full guide requires 33 substantive sections or a 33-point coverage checklist, found 32 H2 sections',
    );
    expect(messages).toContain('full guide is missing required concept "backup"');
  });
});
