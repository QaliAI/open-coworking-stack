import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { StackSchema, ToolSchema, WorkflowDefSchema } from '@ocs/schema';
import { generateDerivedDocs } from './generate-docs.js';

const temporaryDirectories: string[] = [];
const today = new Date().toISOString().slice(0, 10);

const tool = ToolSchema.parse({
  schema_version: '1.0.0',
  id: 'example-tool',
  name: 'Example Tool',
  tagline: 'A test tool for generated output',
  description:
    'A deliberately detailed test description that satisfies the catalog minimum length.',
  categories: ['automation-integration'],
  roles: ['technical-operator'],
  workflows: ['member-onboarding'],
  problems: ['integrate-stack'],
  deployment: ['self-hosted'],
  license: { class: 'oss-osi-approved', spdx: 'MIT' },
  cost: { model: 'free-self-hosted', summary: 'Infrastructure costs remain with the operator.' },
  implementation: {
    difficulty: 'easy',
    smallest_useful_experiment: 'Run one isolated test with synthetic data.',
  },
  homepage: 'https://example.com',
  tasks_reduced_or_augmented: ['Repeated test setup'],
  human_oversight_still_needed: ['Reviewing test output'],
  data_privacy: { data_held: ['test configuration'], personal_data: false },
  guide_status: 'full',
  guide_path: 'guides/tools/example-tool.md',
  verification: {
    status: 'verified',
    last_reviewed: today,
    sources: ['https://example.com'],
  },
});

const stack = StackSchema.parse({
  schema_version: '1.0.0',
  id: 'example-stack',
  name: 'Example Stack',
  tagline: 'A generated stack fixture',
  description:
    'A deliberately detailed stack description that satisfies the catalog minimum length.',
  audience_roles: ['technical-operator'],
  problems_solved: ['integrate-stack'],
  workflows: ['member-onboarding'],
  monthly_cash_budget_band: 'near-zero',
  components: [
    { tool_id: 'example-tool', role_in_stack: 'Primary system' },
    { tool_id: 'example-tool', role_in_stack: 'Secondary system' },
  ],
  assumptions: ['Synthetic data is available.'],
  risks: ['This fixture is not production software.'],
  getting_started: ['Create the fixture.'],
  verification: { last_reviewed: today },
});

const workflow = WorkflowDefSchema.parse({
  schema_version: '1.0.0',
  id: 'member-onboarding',
  name: 'Member onboarding',
  description:
    'A deliberately detailed workflow description that satisfies the catalog minimum length.',
  primary_roles: ['technical-operator'],
  stages: [
    {
      id: 'configure',
      name: 'Configure',
      description: 'Configure the generated fixture.',
      suggested_tool_ids: ['example-tool'],
    },
  ],
  success_metrics: ['The generated route is usable.'],
  verification: { last_reviewed: today },
});

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true })),
  );
});

describe('generateDerivedDocs', () => {
  it('cleans owned outputs and emits routable docs plus every data format', async () => {
    const repoRoot = await mkdtemp(path.join(tmpdir(), 'ocs-generator-'));
    temporaryDirectories.push(repoRoot);

    const docsRoot = path.join(repoRoot, 'apps/web/src/content/docs');
    const staleDirectories = [
      path.join(docsRoot, 'tools/generated'),
      path.join(docsRoot, 'stacks/generated'),
      path.join(docsRoot, 'workflows/generated'),
      path.join(repoRoot, 'apps/web/public/data'),
    ];
    for (const directory of staleDirectories) {
      await mkdir(directory, { recursive: true });
      await writeFile(path.join(directory, 'stale.txt'), 'stale', 'utf8');
    }
    await mkdir(path.join(repoRoot, 'guides/tools'), { recursive: true });
    await writeFile(
      path.join(repoRoot, 'guides/tools/example-tool.md'),
      '---\ntitle: Authored guide\n---\n\n# Authored guide\n\nGuide body.\n',
      'utf8',
    );
    await writeFile(path.join(docsRoot, 'workflows/authored.md'), '# Authored workflow', 'utf8');

    await generateDerivedDocs(repoRoot, [tool], [stack], [workflow]);

    const toolPage = await readFile(
      path.join(docsRoot, 'tools/generated/example-tool.mdx'),
      'utf8',
    );
    const stackPage = await readFile(
      path.join(docsRoot, 'stacks/generated/example-stack.md'),
      'utf8',
    );
    const workflowPage = await readFile(
      path.join(docsRoot, 'workflows/generated/member-onboarding.md'),
      'utf8',
    );
    const toolIndex = await readFile(path.join(docsRoot, 'tools/generated/index.md'), 'utf8');
    const dataDirectory = path.join(repoRoot, 'apps/web/public/data');
    const catalog = JSON.parse(
      await readFile(path.join(dataDirectory, 'catalog.json'), 'utf8'),
    ) as {
      tool_count: number;
      stack_count: number;
      workflow_count: number;
      workflows: Array<{ id: string }>;
    };

    expect(toolPage).not.toMatch(/^# /m);
    expect(stackPage).not.toMatch(/^# /m);
    expect(workflowPage).not.toMatch(/^# /m);
    expect(toolPage).toContain('(../../../guides/tools/example-tool/)');
    expect(await readFile(path.join(docsRoot, 'guides/tools/example-tool.md'), 'utf8')).toBe(
      '---\ntitle: Authored guide\n---\n\nGuide body.\n',
    );
    expect(stackPage).toContain('(../../../tools/generated/example-tool/)');
    expect(workflowPage).toContain('(../../../tools/generated/example-tool/)');
    expect(toolIndex).toContain('(./example-tool/)');
    expect(catalog).toMatchObject({
      tool_count: 1,
      stack_count: 1,
      workflow_count: 1,
      workflows: [{ id: 'member-onboarding' }],
    });
    expect((await readdir(dataDirectory)).sort()).toEqual([
      'catalog.json',
      'stacks.json',
      'tools.csv',
      'tools.json',
      'workflows.json',
    ]);
    expect(await readFile(path.join(docsRoot, 'workflows/authored.md'), 'utf8')).toBe(
      '# Authored workflow',
    );
    for (const directory of staleDirectories) {
      expect(await readdir(directory)).not.toContain('stale.txt');
    }
  });

  it('does not create a link for a declared guide that is not routable', async () => {
    const repoRoot = await mkdtemp(path.join(tmpdir(), 'ocs-generator-'));
    temporaryDirectories.push(repoRoot);

    await generateDerivedDocs(repoRoot, [tool], [], []);

    const page = await readFile(
      path.join(repoRoot, 'apps/web/src/content/docs/tools/generated/example-tool.mdx'),
      'utf8',
    );
    expect(page).toContain('A routable implementation guide is not currently published.');
    expect(page).not.toContain('(../../../guides/tools/example-tool/)');
  });
});
