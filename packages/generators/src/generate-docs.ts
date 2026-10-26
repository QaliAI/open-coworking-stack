import { mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  categoryShortcuts,
  emptyDirectoryFilters,
  matchesDirectoryTool,
  readableLabel,
} from '@ocs/shared/directory';
import type { RoleRecord, Stack, TaskRecord, Tool, WorkflowDef } from '@ocs/schema';

export interface CatalogExport {
  schema_version: '1.0.0';
  generated_at: string;
  tool_count: number;
  stack_count: number;
  workflow_count: number;
  task_count: number;
  role_count: number;
  tools: Array<{
    id: string;
    name: string;
    tagline: string;
    categories: Tool['categories'];
    roles: Tool['roles'];
    workflows: Tool['workflows'];
    problems: Tool['problems'];
    deployment: Tool['deployment'];
    license_class: Tool['license']['class'];
    spdx: string | null;
    cost_model: Tool['cost']['model'];
    difficulty: Tool['implementation']['difficulty'];
    maintenance_burden: Tool['implementation']['maintenance_burden'];
    skills_required: Tool['implementation']['skills_required'];
    guide_status: Tool['guide_status'];
    featured: boolean;
    rank_score: number;
    homepage: string;
    repository?: string;
    description: string;
    tags: string[];
    coworking_use_cases: string[];
    verification_status: Tool['verification']['status'];
    last_reviewed: string;
    verification_completeness: Tool['verification']['completeness'];
    verification_confidence: Tool['verification']['confidence'];
    verification_tier: Tool['verification']['tier'];
    task_fits: Array<{
      task_id: string;
      relationship: string;
      automation_level: string;
      role_assisted: string;
      manual_process: string;
      human_work: string;
      failure_consequence: string;
      pilot_metric: string;
    }>;
  }>;
  stacks: Array<{
    id: string;
    name: string;
    tagline: string;
    budget: Stack['monthly_cash_budget_band'];
    components: string[];
  }>;
  workflows: Array<{
    id: string;
    name: string;
    description: string;
    primary_roles: WorkflowDef['primary_roles'];
    stages: Array<{ id: string; name: string; suggested_tool_ids: string[] }>;
    last_reviewed: string;
  }>;
  tasks: TaskRecord[];
  roles: RoleRecord[];
}

function escapeMd(s: string): string {
  return s.replace(/\|/g, '\\|');
}

function toolDoc(tool: Tool, guideRoute: string | null): string {
  const license = [tool.license.class, tool.license.spdx ? `(\`${tool.license.spdx}\`)` : '']
    .filter(Boolean)
    .join(' ');

  return `---
title: ${JSON.stringify(tool.name)}
description: ${JSON.stringify(tool.tagline)}
editUrl: false
---

import { Aside, Badge } from '@astrojs/starlight/components';

${tool.tagline}

**Review status: ${readableLabel(tool.verification.tier)}.** ${tool.verification.tier === 'research-backlog' ? "We haven't fully reviewed this tool yet. Treat it as a lead and confirm pricing and features on the official site." : 'Check the costs, setup effort and limits below before choosing.'}

[Official Website](${tool.homepage})${tool.repository ? ` · [Source Code](${tool.repository})` : ''}

<Badge text="${tool.license.class}" variant="note" />
<Badge text="${tool.guide_status} guide" variant="caution" />
${tool.featured ? '<Badge text="featured" variant="success" />' : ''}

## Overview

${tool.description}

## At a glance

| Field | Value |
| --- | --- |
| Categories | ${tool.categories.map((c) => `\`${c}\``).join(', ')} |
| Deployment | ${tool.deployment.map((d) => `\`${d}\``).join(', ')} |
| License class | ${license} |
| Cost model | \`${tool.cost.model}\` |
| Implementation difficulty | \`${tool.implementation.difficulty}\` |
| Maintenance burden | \`${tool.implementation.maintenance_burden}\` |
| Maturity | \`${tool.maturity}\` |
| Freshness status | \`${tool.verification.status}\` (${tool.verification.last_reviewed}) |
| Completeness | \`${tool.verification.completeness}\` |
| Confidence | \`${tool.verification.confidence}\` |
| Directory tier | \`${tool.verification.tier}\` |

## Cost reality

${tool.cost.summary}

${tool.cost.free_tier_notes ? `**Free tier notes:** ${tool.cost.free_tier_notes}` : ''}

${tool.cost.self_host_cost_notes ? `**Self-host notes:** ${tool.cost.self_host_cost_notes}` : ''}

> ${tool.cost.currency_caveat}

${tool.cost.pricing_url ? `[Official pricing](${tool.cost.pricing_url})` : ''}

## Tasks reduced or augmented

Software does **not** replace community or ops staff. It may reduce or augment:

${tool.tasks_reduced_or_augmented.map((t) => `- ${t}`).join('\n')}

### Human oversight still needed

${tool.human_oversight_still_needed.map((t) => `- ${t}`).join('\n')}

## Manual process this can replace

${
  tool.task_fits.length > 0
    ? tool.task_fits
        .map(
          (fit) => `### ${fit.task_id}

- **Relationship:** ${fit.relationship}
- **Automation level:** ${fit.automation_level}
- **Manual process this can replace:** ${fit.what_manual_process_it_can_replace}
- **Tasks it can reduce:** ${fit.what_it_takes_off_the_team}
- **Role it assists:** ${fit.role_assisted}
- **What still requires a person:** ${fit.what_remains_human}
- **What happens if it fails:** ${fit.failure_consequence}
- **How to measure the pilot:** ${fit.pilot_metric}
- **Confidence:** ${fit.confidence}`,
        )
        .join('\n\n')
    : 'Structured task-fit review has not been completed for this tool. Treat the free-text examples above as evaluation prompts, not replacement claims.'
}

## Data held

${tool.data_privacy.data_held.map((d) => `- ${d}`).join('\n')}

- Personal data: **${tool.data_privacy.personal_data ? 'yes' : 'no / limited'}**
- Payment data: **${tool.data_privacy.payment_data ? 'yes / possible' : 'no / not primary'}**

${tool.data_privacy.notes ? `\n${tool.data_privacy.notes}\n` : ''}
${tool.data_privacy.privacy_url ? `[Privacy policy](${tool.data_privacy.privacy_url})\n` : ''}

## Risks

| Area | Notes |
| --- | --- |
| Vendor lock-in | ${escapeMd(tool.risks.vendor_lock_in ?? 'See verification notes.')} |
| Security | ${escapeMd(tool.risks.security ?? 'Follow upstream security advisories.')} |
| Compliance | ${escapeMd(tool.risks.compliance ?? 'Operator remains responsible for local obligations.')} |
| Licensing | ${escapeMd(tool.risks.licensing ?? tool.license.notes ?? 'Re-check license terms before production.')} |
| Operational | ${escapeMd(tool.risks.operational ?? 'Plan backups, updates, and access control.')} |

## Coworking fit

**Roles:** ${tool.roles.map((r) => `\`${r}\``).join(', ')}

**Workflows:** ${tool.workflows.map((w) => `\`${w}\``).join(', ')}

**Problems:** ${tool.problems.map((p) => `\`${p}\``).join(', ')}

## Smallest useful experiment

${tool.implementation.smallest_useful_experiment}

${tool.implementation.typical_time_to_first_value ? `**Initial planning estimate (unverified):** ${tool.implementation.typical_time_to_first_value}` : ''}

## Links

- [Homepage](${tool.homepage})
${tool.repository ? `- [Repository](${tool.repository})` : ''}
${tool.documentation ? `- [Documentation](${tool.documentation})` : ''}
${tool.links.map((l) => `- [${l.label}](${l.url})`).join('\n')}

## Implementation guide

${
  guideRoute
    ? `See the [human-written implementation guide](${guideRoute}).`
    : 'No implementation guide is published yet.'
}

${tool.compose_pack ? `**Compose pack:** \`${tool.compose_pack}\`` : ''}

## Verification

- Status: \`${tool.verification.status}\`
- Completeness: \`${tool.verification.completeness}\`
- Confidence: \`${tool.verification.confidence}\`
- Tier: \`${tool.verification.tier}\`
- Last reviewed: \`${tool.verification.last_reviewed}\`
- Sources:
${tool.verification.sources.map((s) => `  - ${s}`).join('\n')}
${tool.verification.notes ? `\n${tool.verification.notes}\n` : ''}

<Aside type="caution">
Always re-check official project pages before production decisions. Metadata can become stale.
</Aside>
`;
}

function taskDoc(task: TaskRecord): string {
  return `---
title: ${JSON.stringify(task.name)}
description: ${JSON.stringify(task.description)}
editUrl: false
---

${task.description}

| Field | Value |
| --- | --- |
| Business area | ${task.business_area} |
| Primary role | [${task.primary_role}](../../../roles/generated/${task.primary_role}/) |
| Frequency | ${task.frequency} |
| Privacy sensitivity | ${task.privacy_sensitivity} |
| Security sensitivity | ${task.security_sensitivity} |
| Compliance review | ${task.compliance_review_needed ? 'needed' : 'not normally required'} |

## Trigger and handoff

**Trigger:** ${task.trigger}

**Inputs**

${task.inputs.map((item) => `- ${item}`).join('\n')}

**Outputs**

${task.outputs.map((item) => `- ${item}`).join('\n')}

## Current manual methods

${task.current_manual_methods.map((item) => `- ${item}`).join('\n')}

## Human judgment and approvals

${task.human_judgment_required.map((item) => `- ${item}`).join('\n')}

${task.approval_points.map((item) => `- Approval: ${item}`).join('\n')}

## Failure modes

${task.common_failure_modes.map((item) => `- ${item}`).join('\n')}

## Success metrics

${task.success_metrics.map((item) => `- ${item}`).join('\n')}
`;
}

function roleDoc(role: RoleRecord): string {
  const section = (title: string, values: string[]) =>
    `## ${title}\n\n${values.map((value) => `- ${value}`).join('\n')}`;
  return `---
title: ${JSON.stringify(role.name)}
description: ${JSON.stringify(role.description)}
editUrl: false
---

${role.description}

${section('Responsibilities', role.responsibilities)}

${section('Daily tasks', role.daily_tasks)}

${section('Weekly tasks', role.weekly_tasks)}

${section('Monthly tasks', role.monthly_tasks)}

${section('Revenue-impacting work', role.revenue_impacting_work)}

${section('Member-experience work', role.member_experience_work)}

${section('Repetitive administrative work', role.repetitive_administrative_work)}

${section('Dangerous tasks to automate blindly', role.dangerous_to_automate_blindly)}

## Stack choices

- **Easiest hosted:** [${role.easiest_hosted_stack}](../../../stacks/generated/${role.easiest_hosted_stack}/)
- **Hybrid:** [${role.hybrid_stack}](../../../stacks/generated/${role.hybrid_stack}/)
- **Self-hosted:** [${role.self_hosted_stack}](../../../stacks/generated/${role.self_hosted_stack}/)

${section('KPIs', role.kpis)}

${section('30-day improvement plan', role.improvement_plan_30_day)}

**Implementation owner:** ${role.implementation_owner}

${section('When to get expert help', role.expert_help_triggers)}
`;
}

function stackDoc(stack: Stack): string {
  return `---
title: ${JSON.stringify(stack.name)}
description: ${JSON.stringify(stack.tagline)}
editUrl: false
---

${stack.tagline}

${stack.description}

## Budget band

\`${stack.monthly_cash_budget_band}\`${stack.self_host_heavy ? ' · self-host heavy' : ''}

## Components

| Tool | Role in stack | Required |
| --- | --- | --- |
${stack.components
  .map(
    (c) =>
      `| [${c.tool_id}](../../../tools/generated/${c.tool_id}/) | ${escapeMd(c.role_in_stack)} | ${c.required ? 'yes' : 'optional'} |`,
  )
  .join('\n')}

## Assumptions

${stack.assumptions.map((a) => `- ${a}`).join('\n')}

## Risks

${stack.risks.map((r) => `- ${r}`).join('\n')}

## Getting started

${stack.getting_started.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## Audience

**Roles:** ${stack.audience_roles.map((r) => `\`${r}\``).join(', ')}

**Problems:** ${stack.problems_solved.map((p) => `\`${p}\``).join(', ')}

**Workflows:** ${stack.workflows.map((w) => `\`${w}\``).join(', ')}

_Last reviewed: ${stack.verification.last_reviewed}_
`;
}

function indexTools(tools: Tool[]): string {
  const sorted = [...tools].sort((a, b) => a.name.localeCompare(b.name));
  return `---
title: Tool directory
description: Machine-generated index of catalog tools for coworking operators.
editUrl: false
---

This page is generated from \`catalog/tools/*.yaml\`. Prefer filters on the [interactive directory](../../directory/) when browsing.

| Tool | License class | Categories | Guide |
| --- | --- | --- | --- |
${sorted
  .map(
    (t) =>
      `| [${escapeMd(t.name)}](./${t.id}/) | \`${t.license.class}\` | ${t.categories.map((c) => `\`${c}\``).join(', ')} | \`${t.guide_status}\` |`,
  )
  .join('\n')}
`;
}

function workflowDoc(workflow: WorkflowDef): string {
  return `---
title: ${JSON.stringify(workflow.name)}
description: ${JSON.stringify(workflow.description)}
editUrl: false
---

${workflow.description}

**Primary roles:** ${workflow.primary_roles.map((role) => `\`${role}\``).join(', ')}

## Stages

${workflow.stages
  .map(
    (stage, index) => `### ${index + 1}. ${stage.name}

${stage.description}

#### Manual tasks

${stage.manual_tasks.length > 0 ? stage.manual_tasks.map((task) => `- ${task}`).join('\n') : '- None documented.'}

#### Automation opportunities

${stage.automation_opportunities.length > 0 ? stage.automation_opportunities.map((item) => `- ${item}`).join('\n') : '- None documented.'}

#### Suggested tools

${
  stage.suggested_tool_ids.length > 0
    ? stage.suggested_tool_ids
        .map((toolId) => `- [${toolId}](../../../tools/generated/${toolId}/)`)
        .join('\n')
    : '- None documented.'
}

#### Risks

${stage.risks.length > 0 ? stage.risks.map((risk) => `- ${risk}`).join('\n') : '- None documented.'}`,
  )
  .join('\n\n')}

## Success metrics

${workflow.success_metrics.map((metric) => `- ${metric}`).join('\n')}

Last reviewed: ${workflow.verification.last_reviewed}
`;
}

async function findGuideRoute(repoRoot: string, tool: Tool): Promise<string | null> {
  if (!tool.guide_path) return null;

  const relativePath = tool.guide_path.replace(/\\/g, '/');
  if (!relativePath.endsWith('.md') && !relativePath.endsWith('.mdx')) return null;

  const candidate = path.resolve(repoRoot, ...relativePath.split('/'));
  if (!candidate.startsWith(`${path.resolve(repoRoot)}${path.sep}`)) return null;

  try {
    if (!(await stat(candidate)).isFile()) return null;
  } catch {
    return null;
  }

  return `../../../${relativePath.replace(/\.(?:md|mdx)$/, '')}/`;
}

async function publishGuides(repoRoot: string, guidesOut: string): Promise<void> {
  const guidesSource = path.join(repoRoot, 'guides/tools');
  let entries;
  try {
    entries = await readdir(guidesSource, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries
    .filter((item) => item.isFile() && /\.mdx?$/.test(item.name))
    .sort((a, b) => a.name.localeCompare(b.name))) {
    const source = await readFile(path.join(guidesSource, entry.name), 'utf8');
    // Starlight renders the frontmatter title as the page H1.
    const published = source.replace(/\n# [^\n]+\n\n?/, '\n');
    await writeFile(path.join(guidesOut, entry.name), published, 'utf8');
  }
}

async function publishIntegrationRecipes(repoRoot: string, integrationsOut: string): Promise<void> {
  const sourceDirectory = path.join(repoRoot, 'docs/integrations');
  let entries;
  try {
    entries = await readdir(sourceDirectory, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries
    .filter((item) => item.isFile() && item.name.endsWith('.md'))
    .sort((a, b) => a.name.localeCompare(b.name))) {
    const source = await readFile(path.join(sourceDirectory, entry.name), 'utf8');
    const title = source.match(/^# (.+)$/m)?.[1] ?? 'Integration recipe';
    // Source recipes link to sibling .md files for GitHub; the published site uses directory URLs.
    const linkPrefix = entry.name === 'README.md' ? './' : '../';
    const body = source
      .replace(/^# [^\n]+\n\n?/, '')
      .replace(/\]\(([a-z0-9-]+)\.md\)/g, (_match, name: string) =>
        name === 'README' ? `](${linkPrefix})` : `](${linkPrefix}${name}/)`,
      );
    const published = `---
title: ${JSON.stringify(title)}
description: Vendor-neutral coworking integration pattern with explicit human controls.
editUrl: false
---

${body}`;
    const outputName = entry.name === 'README.md' ? 'index.md' : entry.name;
    await writeFile(path.join(integrationsOut, outputName), published, 'utf8');
  }
}

function csvCell(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

function toolsCsv(tools: Tool[]): string {
  const rows = [
    [
      'id',
      'name',
      'tagline',
      'categories',
      'roles',
      'workflows',
      'license_class',
      'cost_model',
      'homepage',
      'verification_status',
      'last_reviewed',
    ],
    ...tools.map((tool) => [
      tool.id,
      tool.name,
      tool.tagline,
      tool.categories.join(';'),
      tool.roles.join(';'),
      tool.workflows.join(';'),
      tool.license.class,
      tool.cost.model,
      tool.homepage,
      tool.verification.status,
      tool.verification.last_reviewed,
    ]),
  ];
  return `${rows.map((row) => row.map(csvCell).join(',')).join('\n')}\n`;
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

export async function generateDerivedDocs(
  repoRoot: string,
  tools: Tool[],
  stacks: Stack[],
  workflows: WorkflowDef[],
  tasks: TaskRecord[] = [],
  roles: RoleRecord[] = [],
): Promise<void> {
  const toolsOut = path.join(repoRoot, 'apps/web/src/content/docs/tools/generated');
  const stacksOut = path.join(repoRoot, 'apps/web/src/content/docs/stacks/generated');
  const workflowsOut = path.join(repoRoot, 'apps/web/src/content/docs/workflows/generated');
  const guidesOut = path.join(repoRoot, 'apps/web/src/content/docs/guides/tools');
  const integrationsOut = path.join(repoRoot, 'apps/web/src/content/docs/integrations/generated');
  const dataOut = path.join(repoRoot, 'apps/web/public/data');
  const tasksOut = path.join(repoRoot, 'apps/web/src/content/docs/tasks/generated');
  const rolesOut = path.join(repoRoot, 'apps/web/src/content/docs/roles/generated');

  await Promise.all(
    [
      toolsOut,
      stacksOut,
      workflowsOut,
      guidesOut,
      integrationsOut,
      tasksOut,
      rolesOut,
      dataOut,
    ].map((directory) => rm(directory, { recursive: true, force: true })),
  );
  await mkdir(toolsOut, { recursive: true });
  await mkdir(stacksOut, { recursive: true });
  await mkdir(workflowsOut, { recursive: true });
  await mkdir(guidesOut, { recursive: true });
  await mkdir(integrationsOut, { recursive: true });
  await mkdir(dataOut, { recursive: true });
  await mkdir(tasksOut, { recursive: true });
  await mkdir(rolesOut, { recursive: true });

  await publishGuides(repoRoot, guidesOut);
  await publishIntegrationRecipes(repoRoot, integrationsOut);

  const sortedTools = [...tools].sort((a, b) => a.id.localeCompare(b.id));
  const sortedStacks = [...stacks].sort((a, b) => a.id.localeCompare(b.id));
  const sortedWorkflows = [...workflows].sort((a, b) => a.id.localeCompare(b.id));
  const sortedTasks = [...tasks].sort((a, b) => a.id.localeCompare(b.id));
  const sortedRoles = [...roles].sort((a, b) => a.id.localeCompare(b.id));

  for (const tool of sortedTools) {
    const guideRoute = await findGuideRoute(repoRoot, tool);
    await writeFile(path.join(toolsOut, `${tool.id}.mdx`), toolDoc(tool, guideRoute), 'utf8');
  }
  await writeFile(path.join(toolsOut, 'index.md'), indexTools(sortedTools), 'utf8');

  for (const stack of sortedStacks) {
    await writeFile(path.join(stacksOut, `${stack.id}.md`), stackDoc(stack), 'utf8');
  }

  for (const workflow of sortedWorkflows) {
    await writeFile(path.join(workflowsOut, `${workflow.id}.md`), workflowDoc(workflow), 'utf8');
  }
  for (const task of sortedTasks) {
    await writeFile(path.join(tasksOut, `${task.id}.md`), taskDoc(task), 'utf8');
  }
  for (const role of sortedRoles) {
    await writeFile(path.join(rolesOut, `${role.id}.md`), roleDoc(role), 'utf8');
  }

  const toolExport = sortedTools.map((tool) => ({
    id: tool.id,
    name: tool.name,
    tagline: tool.tagline,
    categories: tool.categories,
    roles: tool.roles,
    workflows: tool.workflows,
    problems: tool.problems,
    deployment: tool.deployment,
    license_class: tool.license.class,
    spdx: tool.license.spdx ?? null,
    cost_model: tool.cost.model,
    difficulty: tool.implementation.difficulty,
    maintenance_burden: tool.implementation.maintenance_burden,
    skills_required: tool.implementation.skills_required,
    guide_status: tool.guide_status,
    featured: tool.featured,
    rank_score: tool.rank_score,
    homepage: tool.homepage,
    repository: tool.repository,
    description: tool.description,
    tags: tool.tags,
    coworking_use_cases: tool.tasks_reduced_or_augmented,
    verification_status: tool.verification.status,
    last_reviewed: tool.verification.last_reviewed,
    verification_completeness: tool.verification.completeness,
    verification_confidence: tool.verification.confidence,
    verification_tier: tool.verification.tier,
    task_fits: tool.task_fits.map((fit) => ({
      task_id: fit.task_id,
      relationship: fit.relationship,
      automation_level: fit.automation_level,
      role_assisted: fit.role_assisted,
      manual_process: fit.what_manual_process_it_can_replace,
      human_work: fit.what_remains_human,
      failure_consequence: fit.failure_consequence,
      pilot_metric: fit.pilot_metric,
    })),
  }));
  const stackExport = sortedStacks.map((stack) => ({
    id: stack.id,
    name: stack.name,
    tagline: stack.tagline,
    budget: stack.monthly_cash_budget_band,
    components: stack.components.map((component) => component.tool_id),
  }));
  const workflowExport = sortedWorkflows.map((workflow) => ({
    id: workflow.id,
    name: workflow.name,
    description: workflow.description,
    primary_roles: workflow.primary_roles,
    stages: workflow.stages.map((stage) => ({
      id: stage.id,
      name: stage.name,
      suggested_tool_ids: stage.suggested_tool_ids,
    })),
    last_reviewed: workflow.verification.last_reviewed,
  }));

  const exportPayload: CatalogExport = {
    schema_version: '1.0.0',
    generated_at: new Date().toISOString(),
    tool_count: toolExport.length,
    stack_count: stackExport.length,
    workflow_count: workflowExport.length,
    task_count: sortedTasks.length,
    role_count: sortedRoles.length,
    tools: toolExport,
    stacks: stackExport,
    workflows: workflowExport,
    tasks: sortedTasks,
    roles: sortedRoles,
  };

  await writeJson(path.join(dataOut, 'catalog.json'), exportPayload);
  const docFiles = async (dir: string): Promise<string[]> => {
    try {
      return (await readdir(path.join(repoRoot, dir))).filter(
        (name) => /\.mdx?$/.test(name) && !/^index\./.test(name),
      );
    } catch {
      return [];
    }
  };
  const comparisons = await docFiles('apps/web/src/content/docs/comparisons');
  const packs = await readdir(path.join(repoRoot, 'compose'), { withFileTypes: true }).catch(
    () => [],
  );
  const packNames = packs
    .filter((entry) => entry.isDirectory() && entry.name !== 'scripts')
    .map((entry) => entry.name);
  const recipes = (await docFiles('docs/integrations')).filter((name) => name !== 'README.md');
  const resources = [
    {
      id: 'guides',
      label: 'Setup guides',
      count: toolExport.filter((t) => t.guide_status === 'full').length,
      href: '/guides/',
      description: 'Step-by-step instructions for setting up a tool.',
    },
    {
      id: 'workflows',
      label: 'Workflows',
      count: workflowExport.length,
      href: '/workflows/',
      description: 'Processes like member onboarding and tour to signed agreement.',
    },
    {
      id: 'tasks',
      label: 'Everyday tasks',
      count: sortedTasks.length,
      href: '/tasks/',
      description: 'Start from a job, like managing room bookings.',
    },
    {
      id: 'comparisons',
      label: 'Side-by-side comparisons',
      count: comparisons.length,
      href: '/comparisons/',
      description: 'How similar tools stack up for the same job.',
    },
    {
      id: 'stacks',
      label: 'Ready-made stacks',
      count: stackExport.length,
      href: '/stacks/',
      description: 'Example tool combinations for different kinds of spaces.',
    },
    {
      id: 'roles',
      label: 'Team roles',
      count: sortedRoles.length,
      href: '/roles/',
      description: 'Tools that help each person on your team.',
    },
    {
      id: 'packs',
      label: 'Starter packs',
      count: packNames.length,
      href: '/guides/starter-packs/',
      description: 'Technical starter kits for self-hosting a group of tools.',
    },
    {
      id: 'recipes',
      label: 'Connecting tools together',
      count: recipes.length,
      href: '/integrations/generated/',
      description: 'Pass data between tools, like new member to door access.',
    },
    {
      id: 'estimator',
      label: 'Cost and time estimator',
      href: '/roi-calculator/',
      description: 'Rough hosting, upkeep and staff-time numbers for a tool.',
    },
    {
      id: 'builder',
      label: 'Build my tech stack',
      href: '/stack-builder/',
      description: 'Answer a few questions and get a suggested set of tools.',
    },
  ];
  await writeJson(path.join(dataOut, 'discovery.json'), {
    schema_version: '1.0.0',
    generated_at: exportPayload.generated_at,
    tool_count: toolExport.length,
    tiers: Object.fromEntries(
      ['evaluated', 'research-backlog', 'commercial-benchmark', 'verified-core'].map((tier) => [
        tier,
        toolExport.filter((t) => t.verification_tier === tier).length,
      ]),
    ),
    collections: categoryShortcuts.map((collection) => ({
      ...collection,
      count: toolExport.filter((tool) =>
        matchesDirectoryTool(tool, { ...emptyDirectoryFilters(), collection: collection.id }),
      ).length,
      href: `/directory/?collection=${collection.id}`,
      description: collection.categories.map(readableLabel).join(' · '),
    })),
    resources,
    // Reviewed tools with full setup guides, each paired with the everyday job it handles.
    samples: [
      ['cal-com', 'Let prospects book tours online'],
      ['seatsurfing', 'Let members book desks and rooms'],
      ['chatwoot', 'Answer website chat and member messages in one inbox'],
      ['bookstack', 'Keep house rules and staff how-tos in one place'],
      ['listmonk', 'Send the member newsletter'],
      ['n8n', 'Connect your apps so data moves on its own'],
    ].flatMap(([id, job]) => {
      const tool = toolExport.find((t) => t.id === id);
      return tool
        ? [
            {
              id,
              name: tool.name,
              job,
              use_case: tool.coworking_use_cases[0] ?? tool.tagline,
              tagline: tool.tagline,
              license: readableLabel(tool.license_class),
              cost: readableLabel(tool.cost_model),
              difficulty: readableLabel(tool.difficulty),
              review: readableLabel(tool.verification_tier),
              homepage: tool.homepage,
              repository: tool.repository,
              href: `/tools/generated/${id}/`,
              guide_href: tool.guide_status === 'full' ? `/guides/tools/${id}/` : undefined,
            },
          ]
        : [];
    }),
  });
  await writeJson(path.join(dataOut, 'tools.json'), toolExport);
  await writeJson(path.join(dataOut, 'stacks.json'), stackExport);
  await writeJson(path.join(dataOut, 'workflows.json'), workflowExport);
  await writeJson(path.join(dataOut, 'tasks.json'), sortedTasks);
  await writeJson(path.join(dataOut, 'roles.json'), sortedRoles);
  await writeFile(path.join(dataOut, 'tools.csv'), toolsCsv(sortedTools), 'utf8');
}
