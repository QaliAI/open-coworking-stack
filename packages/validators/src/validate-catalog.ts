import path from 'node:path';
import { stat } from 'node:fs/promises';
import {
  ToolSchema,
  StackSchema,
  WorkflowDefSchema,
  type Tool,
  type Stack,
  type WorkflowDef,
} from '@ocs/schema';
import { listYamlFiles, loadYamlFile } from '@ocs/shared';

export interface ValidationIssue {
  file: string;
  message: string;
  level: 'error' | 'warning';
}

export interface CatalogSnapshot {
  tools: Tool[];
  stacks: Stack[];
  workflows: WorkflowDef[];
  issues: ValidationIssue[];
}

function reportDuplicates(
  values: readonly string[],
  field: string,
  file: string,
  issues: ValidationIssue[],
): void {
  const seen = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) {
      issues.push({ file, level: 'error', message: `duplicate value "${value}" in ${field}` });
    }
    seen.add(value);
  }
}

export async function validateCatalog(repoRoot: string): Promise<CatalogSnapshot> {
  const issues: ValidationIssue[] = [];
  const toolsDir = path.join(repoRoot, 'catalog', 'tools');
  const stacksDir = path.join(repoRoot, 'catalog', 'stacks');
  const workflowsDir = path.join(repoRoot, 'catalog', 'workflows');

  const tools: Tool[] = [];
  const toolSources: Array<{ tool: Tool; file: string }> = [];
  const toolIds = new Set<string>();

  for (const file of await listYamlFiles(toolsDir)) {
    const rel = path.relative(repoRoot, file);
    try {
      const raw = await loadYamlFile<unknown>(file);
      const parsed = ToolSchema.safeParse(raw);
      if (!parsed.success) {
        for (const err of parsed.error.issues) {
          issues.push({
            file: rel,
            level: 'error',
            message: `${err.path.join('.') || '(root)'}: ${err.message}`,
          });
        }
        continue;
      }
      const tool = parsed.data;
      const base = path.basename(file, '.yaml');
      if (base !== tool.id) {
        issues.push({
          file: rel,
          level: 'error',
          message: `filename slug "${base}" must match id "${tool.id}"`,
        });
      }
      if (toolIds.has(tool.id)) {
        issues.push({ file: rel, level: 'error', message: `duplicate tool id "${tool.id}"` });
      }
      toolIds.add(tool.id);

      reportDuplicates(tool.categories, 'categories', rel, issues);
      reportDuplicates(tool.secondary_categories, 'secondary_categories', rel, issues);
      reportDuplicates(tool.roles, 'roles', rel, issues);
      reportDuplicates(tool.workflows, 'workflows', rel, issues);
      reportDuplicates(tool.problems, 'problems', rel, issues);
      reportDuplicates(tool.deployment, 'deployment', rel, issues);
      reportDuplicates(tool.related_tools, 'related_tools', rel, issues);
      reportDuplicates(tool.tags, 'tags', rel, issues);

      if (tool.license.class === 'oss-osi-approved' && !tool.license.spdx) {
        issues.push({
          file: rel,
          level: 'warning',
          message: 'oss-osi-approved tools should include license.spdx when known',
        });
      }
      if (
        tool.license.class === 'oss-osi-approved' &&
        !tool.repository &&
        !tool.links.some((l) => l.kind === 'repo')
      ) {
        issues.push({
          file: rel,
          level: 'warning',
          message: 'oss-osi-approved tools should include a repository URL when available',
        });
      }
      if (
        tool.tasks_reduced_or_augmented.some((t) =>
          /replaces (the )?(community manager|staff|employee)/i.test(t),
        )
      ) {
        issues.push({
          file: rel,
          level: 'error',
          message: 'tasks_reduced_or_augmented must not claim staff replacement',
        });
      }
      if (tool.guide_status === 'full' || tool.guide_status === 'stub') {
        if (!tool.guide_path) {
          issues.push({
            file: rel,
            level: 'error',
            message: `${tool.guide_status} guide requires guide_path`,
          });
        } else {
          const guideFile = path.resolve(repoRoot, tool.guide_path);
          const guidesRoot = path.resolve(repoRoot, 'guides');
          if (!guideFile.startsWith(`${guidesRoot}${path.sep}`)) {
            issues.push({
              file: rel,
              level: 'error',
              message: 'guide_path must resolve inside guides/',
            });
          } else {
            try {
              await stat(guideFile);
            } catch {
              issues.push({
                file: rel,
                level: 'error',
                message: `guide_path does not exist: ${tool.guide_path}`,
              });
            }
          }
        }
      }
      if (tool.compose_pack) {
        const packDirectory = path.resolve(repoRoot, tool.compose_pack);
        const composeRoot = path.resolve(repoRoot, 'compose');
        if (!packDirectory.startsWith(`${composeRoot}${path.sep}`)) {
          issues.push({
            file: rel,
            level: 'error',
            message: 'compose_pack must resolve inside compose/',
          });
        } else {
          try {
            await stat(path.join(packDirectory, 'compose.yaml'));
          } catch {
            issues.push({
              file: rel,
              level: 'error',
              message: `compose_pack does not contain compose.yaml: ${tool.compose_pack}`,
            });
          }
        }
      }
      tools.push(tool);
      toolSources.push({ tool, file: rel });
    } catch (err) {
      issues.push({
        file: rel,
        level: 'error',
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  for (const { tool, file } of toolSources) {
    for (const relatedToolId of tool.related_tools) {
      if (!toolIds.has(relatedToolId)) {
        issues.push({
          file,
          level: 'error',
          message: `related_tools references unknown tool id "${relatedToolId}"`,
        });
      }
    }
  }

  const stacks: Stack[] = [];
  const stackIds = new Set<string>();
  for (const file of await listYamlFiles(stacksDir)) {
    const rel = path.relative(repoRoot, file);
    try {
      const raw = await loadYamlFile<unknown>(file);
      const parsed = StackSchema.safeParse(raw);
      if (!parsed.success) {
        for (const err of parsed.error.issues) {
          issues.push({
            file: rel,
            level: 'error',
            message: `${err.path.join('.') || '(root)'}: ${err.message}`,
          });
        }
        continue;
      }
      const stack = parsed.data;
      const base = path.basename(file, '.yaml');
      if (base !== stack.id) {
        issues.push({
          file: rel,
          level: 'error',
          message: `filename slug "${base}" must match id "${stack.id}"`,
        });
      }
      if (stackIds.has(stack.id)) {
        issues.push({ file: rel, level: 'error', message: `duplicate stack id "${stack.id}"` });
      }
      stackIds.add(stack.id);
      reportDuplicates(stack.audience_roles, 'audience_roles', rel, issues);
      reportDuplicates(stack.problems_solved, 'problems_solved', rel, issues);
      reportDuplicates(stack.workflows, 'workflows', rel, issues);
      reportDuplicates(
        stack.components.map((component) => component.tool_id),
        'components.tool_id',
        rel,
        issues,
      );
      for (const c of stack.components) {
        if (!toolIds.has(c.tool_id)) {
          issues.push({
            file: rel,
            level: 'error',
            message: `unknown tool_id "${c.tool_id}" in stack components`,
          });
        }
      }
      stacks.push(stack);
    } catch (err) {
      issues.push({
        file: rel,
        level: 'error',
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  const workflows: WorkflowDef[] = [];
  const workflowIds = new Set<string>();
  for (const file of await listYamlFiles(workflowsDir)) {
    const rel = path.relative(repoRoot, file);
    try {
      const raw = await loadYamlFile<unknown>(file);
      const parsed = WorkflowDefSchema.safeParse(raw);
      if (!parsed.success) {
        for (const err of parsed.error.issues) {
          issues.push({
            file: rel,
            level: 'error',
            message: `${err.path.join('.') || '(root)'}: ${err.message}`,
          });
        }
        continue;
      }
      const wf = parsed.data;
      const base = path.basename(file, '.yaml');
      if (base !== wf.id) {
        issues.push({
          file: rel,
          level: 'error',
          message: `filename slug "${base}" must match id "${wf.id}"`,
        });
      }
      if (workflowIds.has(wf.id)) {
        issues.push({ file: rel, level: 'error', message: `duplicate workflow id "${wf.id}"` });
      }
      workflowIds.add(wf.id);
      reportDuplicates(wf.primary_roles, 'primary_roles', rel, issues);
      reportDuplicates(
        wf.stages.map((stage) => stage.id),
        'stages.id',
        rel,
        issues,
      );
      for (const stage of wf.stages) {
        reportDuplicates(
          stage.suggested_tool_ids,
          `stage ${stage.id} suggested_tool_ids`,
          rel,
          issues,
        );
        for (const tid of stage.suggested_tool_ids) {
          if (!toolIds.has(tid)) {
            issues.push({
              file: rel,
              level: 'error',
              message: `stage ${stage.id} references unknown tool_id "${tid}"`,
            });
          }
        }
      }
      workflows.push(wf);
    } catch (err) {
      issues.push({
        file: rel,
        level: 'error',
        message: err instanceof Error ? err.message : String(err),
      });
    }
  }

  if (tools.length < 75) {
    issues.push({
      file: 'catalog/tools',
      level: 'error',
      message: `expected at least 75 tools, found ${tools.length}`,
    });
  }

  const fullGuides = tools.filter((t) => t.guide_status === 'full').length;
  if (fullGuides < 25) {
    issues.push({
      file: 'catalog/tools',
      level: 'warning',
      message: `expected at least 25 full guides, found ${fullGuides}`,
    });
  }

  return { tools, stacks, workflows, issues };
}
