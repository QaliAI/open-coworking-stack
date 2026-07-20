import path from 'node:path';
import { readFile, readdir, stat } from 'node:fs/promises';
import {
  ToolSchema,
  StackSchema,
  WorkflowDefSchema,
  RoleRecordSchema,
  TaskRecordSchema,
  type Tool,
  type Stack,
  type WorkflowDef,
  type RoleRecord,
  type TaskRecord,
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
  tasks: TaskRecord[];
  roles: RoleRecord[];
  issues: ValidationIssue[];
}

async function directoryExists(directory: string): Promise<boolean> {
  try {
    return (await stat(directory)).isDirectory();
  } catch {
    return false;
  }
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
  const tasksDir = path.join(repoRoot, 'catalog', 'tasks');
  const rolesDir = path.join(repoRoot, 'catalog', 'roles');

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
              if (tool.guide_status === 'full') {
                const guide = await readFile(guideFile, 'utf8');
                const levelTwoHeadings = guide.match(/^## /gm)?.length ?? 0;
                const hasCoverageChecklist =
                  /^## Flagship requirement coverage/m.test(guide) && /^33\. /m.test(guide);
                if (levelTwoHeadings < 33 && !hasCoverageChecklist) {
                  issues.push({
                    file: rel,
                    level: 'error',
                    message: `full guide requires 33 substantive sections or a 33-point coverage checklist, found ${levelTwoHeadings} H2 sections`,
                  });
                }
                const requiredGuideConcepts = [
                  'fit',
                  'tasks',
                  'human',
                  'cost',
                  'data map',
                  'integration',
                  'failure',
                  'security',
                  'privacy',
                  'backup',
                  'restore',
                  'upgrade',
                  'rollback',
                  'exit',
                  'sources',
                  'review',
                  'expert',
                ];
                const normalizedGuide = guide.toLowerCase();
                for (const concept of requiredGuideConcepts) {
                  if (!normalizedGuide.includes(concept)) {
                    issues.push({
                      file: rel,
                      level: 'error',
                      message: `full guide is missing required concept "${concept}"`,
                    });
                  }
                }
                const placeholderMarkers =
                  /\b(TODO|FIXME|HACK|XXX|PLACEHOLDER|TO DO)\b/i;
                const placeholderMatches = guide.match(placeholderMarkers);
                if (placeholderMatches) {
                  issues.push({
                    file: rel,
                    level: 'warning',
                    message: `full guide contains placeholder markers: ${[...new Set(placeholderMatches.map((m) => m.toUpperCase()))].join(', ')}`,
                  });
                }
                const lines = guide.split('\n');
                const nonEmptyLines = lines.filter((l) => l.trim().length > 0);
                const boilerplateSentences = [
                  /^this guide covers/i,
                  /^this document describes/i,
                  /^(please )?refer to/i,
                  /^(contact|consult|review|check) (the )?(official|vendor|tool)/i,
                ];
                const boilerplateCount = nonEmptyLines.filter((l) =>
                  boilerplateSentences.some((bs) => bs.test(l.trim())),
                ).length;
                if (boilerplateCount / nonEmptyLines.length > 0.3 && nonEmptyLines.length > 20) {
                  issues.push({
                    file: rel,
                    level: 'warning',
                    message: `full guide has high boilerplate ratio: ${Math.round(boilerplateCount / nonEmptyLines.length * 100)}% boilerplate (${boilerplateCount}/${nonEmptyLines.length} non-empty lines)`,
                  });
                }

              }
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

  const roles: RoleRecord[] = [];
  const roleIds = new Set<string>();
  if (await directoryExists(rolesDir)) {
    for (const file of await listYamlFiles(rolesDir)) {
      const rel = path.relative(repoRoot, file);
      const parsed = RoleRecordSchema.safeParse(await loadYamlFile<unknown>(file));
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
      const role = parsed.data;
      const base = path.basename(file, '.yaml');
      if (base !== role.id)
        issues.push({
          file: rel,
          level: 'error',
          message: `filename slug "${base}" must match id "${role.id}"`,
        });
      if (roleIds.has(role.id))
        issues.push({ file: rel, level: 'error', message: `duplicate role id "${role.id}"` });
      roleIds.add(role.id);
      roles.push(role);
    }
    if (roles.length < 14) {
      issues.push({
        file: 'catalog/roles',
        level: 'error',
        message: `expected at least 14 roles, found ${roles.length}`,
      });
    }
  }

  const tasks: TaskRecord[] = [];
  const taskIds = new Set<string>();
  if (await directoryExists(tasksDir)) {
    for (const file of await listYamlFiles(tasksDir)) {
      const rel = path.relative(repoRoot, file);
      const parsed = TaskRecordSchema.safeParse(await loadYamlFile<unknown>(file));
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
      const task = parsed.data;
      const base = path.basename(file, '.yaml');
      if (base !== task.id)
        issues.push({
          file: rel,
          level: 'error',
          message: `filename slug "${base}" must match id "${task.id}"`,
        });
      if (taskIds.has(task.id))
        issues.push({ file: rel, level: 'error', message: `duplicate task id "${task.id}"` });
      taskIds.add(task.id);
      if (!roleIds.has(task.primary_role))
        issues.push({
          file: rel,
          level: 'error',
          message: `primary_role references unknown role "${task.primary_role}"`,
        });
      for (const role of task.supporting_roles) {
        if (!roleIds.has(role))
          issues.push({
            file: rel,
            level: 'error',
            message: `supporting_roles references unknown role "${role}"`,
          });
      }
      tasks.push(task);
    }
    if (tasks.length < 100) {
      issues.push({
        file: 'catalog/tasks',
        level: 'error',
        message: `expected at least 100 tasks, found ${tasks.length}`,
      });
    }
  }

  for (const { tool, file } of toolSources) {
    reportDuplicates(
      tool.task_fits.map((fit) => fit.task_id),
      'task_fits.task_id',
      file,
      issues,
    );
    for (const fit of tool.task_fits) {
      if (!taskIds.has(fit.task_id))
        issues.push({
          file,
          level: 'error',
          message: `task_fits references unknown task id "${fit.task_id}"`,
        });
      if (
        fit.automation_level === 'low-risk fully automated' &&
        /eligibility|identity-approval|legal-compliance|refund|physical-safety|emergency-access|financial-exception|member-dispute|employment-decision/.test(
          fit.task_id,
        )
      ) {
        issues.push({
          file,
          level: 'error',
          message: `task "${fit.task_id}" must not be labeled low-risk fully automated`,
        });
      }
    }
  }

  const packsRoot = path.join(repoRoot, 'implementation-packs');
  if (await directoryExists(packsRoot)) {
    const requiredPackFiles = [
      'README.md',
      'SKILL.md',
      'operator-profile.yaml',
      'coworking-use-cases.md',
      'data-map.md',
      'configuration-checklist.md',
      'pilot-plan.md',
      'security-review.md',
      'backup-restore.md',
      'upgrade-rollback.md',
      'exit-strategy.md',
    ];
    const packDirectories = (await readdir(packsRoot, { withFileTypes: true })).filter((entry) =>
      entry.isDirectory(),
    );
    for (const pack of packDirectories) {
      const packPath = path.join(packsRoot, pack.name);
      for (const requiredFile of requiredPackFiles) {
        try {
          await stat(path.join(packPath, requiredFile));
        } catch {
          issues.push({
            file: path.relative(repoRoot, packPath),
            level: 'error',
            message: `implementation pack missing ${requiredFile}`,
          });
        }
      }
      for (const requiredDirectory of ['recipes', 'templates', 'examples']) {
        if (!(await directoryExists(path.join(packPath, requiredDirectory)))) {
          issues.push({
            file: path.relative(repoRoot, packPath),
            level: 'error',
            message: `implementation pack missing ${requiredDirectory}/`,
          });
        }
      }
      try {
        const skill = await readFile(path.join(packPath, 'SKILL.md'), 'utf8');
        for (const heading of [
          'Coworking purpose',
          'Allowed automation',
          'Prohibited decisions',
          'Source verification',
          'Data boundaries',
          'Human approvals',
          'Required tests',
          'Backup and rollback',
          'Expert review',
        ]) {
          if (!skill.includes(`## ${heading}`))
            issues.push({
              file: path.relative(repoRoot, path.join(packPath, 'SKILL.md')),
              level: 'error',
              message: `SKILL.md missing heading "${heading}"`,
            });
        }
      } catch {
        // The missing file is reported above.
      }
    }
    if (packDirectories.length < 20)
      issues.push({
        file: 'implementation-packs',
        level: 'error',
        message: `expected at least 20 implementation packs, found ${packDirectories.length}`,
      });
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

  return { tools, stacks, workflows, tasks, roles, issues };
}

export interface ContentQualityIssue {
  file: string;
  message: string;
}

export async function contentQualityReport(repoRoot: string): Promise<ContentQualityIssue[]> {
  const report: ContentQualityIssue[] = [];
  const toolsDir = path.join(repoRoot, 'catalog', 'tools');

  for (const file of await listYamlFiles(toolsDir)) {
    const raw = await loadYamlFile<Record<string, unknown>>(file);
    if (!raw || typeof raw.id !== 'string' || raw.guide_status !== 'full' || typeof raw.guide_path !== 'string') {
      continue;
    }
    const guidePath: string = raw.guide_path;
    const toolId: string = raw.id;
    const guideFile = path.resolve(repoRoot, guidePath);
    try {
      const guide = await readFile(guideFile, 'utf8');

      const placeholderMatch = guide.match(/\b(TODO|FIXME|HACK|XXX|PLACEHOLDER|TO DO)\b/i);
      if (placeholderMatch) {
        const markers = [...new Set(placeholderMatch.map((m) => m.toUpperCase()))];
        report.push({ file: guidePath, message: `guide "${toolId}" has placeholder markers: ${markers.join(', ')}` });
      }

      const sourceAttributionCount = (guide.match(/\[(.+?)\]\(https?:\/\/.+?\)/g) || []).length;
      if (sourceAttributionCount === 0) {
        report.push({ file: guidePath, message: `guide "${toolId}" has no source URL attributions` });
      }

      const sectionRegex = /^##\s+(.+)/gm;
      const sections: Array<{ name: string; lineCount: number }> = [];
      let lastIndex = 0;
      let lastName = 'preamble';
      while (true) {
        const secMatch = sectionRegex.exec(guide);
        if (secMatch === null) break;
        const sectionName = secMatch[1]!.trim();
        sections.push({ name: lastName, lineCount: secMatch.index - lastIndex });
        lastIndex = secMatch.index;
        lastName = sectionName;
      }
      sections.push({ name: lastName, lineCount: guide.length - lastIndex });

      const shortSections = sections.filter((s) => s.lineCount < 80 && s.name !== 'preamble');
      if (shortSections.length > 0) {
        report.push({ file: guidePath, message: `guide "${toolId}" has ${shortSections.length} short section(s): ${shortSections.map((s) => `"${s.name}"`).join(', ')}` });
      }

      const lineCandidates = guide.match(/^.{40,}$/gm) || [];
      const seen = new Set<string>();
      let duplicateCount = 0;
      for (const line of lineCandidates) {
        if (seen.has(line)) duplicateCount++;
        seen.add(line);
      }
      if (duplicateCount > 3) {
        report.push({ file: guidePath, message: `guide "${toolId}" has ${duplicateCount} repeated lines` });
      }
    } catch {
      report.push({ file: guidePath, message: `guide "${toolId}" could not be read for quality analysis` });
    }
  }

  const comparisonsDir = path.join(repoRoot, 'apps', 'web', 'src', 'content', 'docs', 'comparisons');
  try {
    const comparisonFiles = (await readdir(comparisonsDir, { withFileTypes: true }))
      .filter((e) => e.isFile() && e.name.endsWith('.md'));
    for (const file of comparisonFiles) {
      const content = await readFile(path.join(comparisonsDir, file.name), 'utf8');
      if (!content.includes('page_classification:')) {
        report.push({
          file: `comparisons/${file.name}`,
          message: `comparison page "${file.name}" is missing page_classification frontmatter`,
        });
      }
    }
  } catch {
    // comparisons directory may not exist
  }

  return report;
}
