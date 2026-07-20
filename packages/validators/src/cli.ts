#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCatalog, contentQualityReport } from './validate-catalog.js';
import { checkFreshness, freshnessShouldFail } from './freshness.js';

function resolveRepoRoot(): string {
  const here = path.dirname(fileURLToPath(import.meta.url));
  // packages/validators/src -> repo root
  return path.resolve(here, '../../..');
}

async function main(): Promise<void> {
  const [command = 'validate', ...commandArgs] = process.argv.slice(2);
  const repoRoot = resolveRepoRoot();

  if (command === 'validate') {
    const result = await validateCatalog(repoRoot);
    const errors = result.issues.filter((i) => i.level === 'error');
    const warnings = result.issues.filter((i) => i.level === 'warning');

    for (const issue of result.issues) {
      const tag = issue.level.toUpperCase();
      console.log(`[${tag}] ${issue.file}: ${issue.message}`);
    }

    console.log(
      `\nTools: ${result.tools.length} | Stacks: ${result.stacks.length} | Workflows: ${result.workflows.length} | Tasks: ${result.tasks.length} | Roles: ${result.roles.length}`,
    );
    console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      process.exitCode = 1;
    }
    return;
  }

  if (command === 'freshness') {
    const thresholdDays = commandArgs[0] === undefined ? 180 : Number(commandArgs[0]);
    if (!Number.isInteger(thresholdDays) || thresholdDays < 0) {
      throw new Error('Usage: ocs-validate freshness [non-negative-threshold-days]');
    }
    const report = await checkFreshness(repoRoot, thresholdDays);
    console.log(
      `Freshness check: ${report.stale.length}/${report.total} tools older than ${report.threshold_days} days or marked stale`,
    );
    for (const item of report.stale) {
      console.log(`- ${item.id}: last_reviewed=${item.last_reviewed} age_days=${item.age_days}`);
    }
    console.log('Exit policy: fail only when strictly more than 50% of tools are stale.');
    if (freshnessShouldFail(report)) {
      process.exitCode = 1;
    }
    return;
  }

  if (command === 'quality-report') {
    const issues = await contentQualityReport(repoRoot);
    if (issues.length === 0) {
      console.log('Content quality report: 0 issues found.');
      return;
    }
    console.log(`Content quality report: ${issues.length} issue(s) found.\n`);
    for (const issue of issues) {
      console.log(`- ${issue.file}: ${issue.message}`);
    }
    return;
  }

  console.error(`Unknown command: ${command}. Use validate | freshness [threshold-days] | quality-report`);
  process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
