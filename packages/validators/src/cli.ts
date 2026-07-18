#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCatalog } from './validate-catalog.js';
import { checkFreshness, freshnessShouldFail } from './freshness.js';

function resolveRepoRoot(): string {
  const here = path.dirname(fileURLToPath(import.meta.url));
  // packages/validators/src -> repo root
  return path.resolve(here, '../../..');
}

async function main(): Promise<void> {
  const [command = 'validate', thresholdArgument] = process.argv.slice(2);
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
      `\nTools: ${result.tools.length} | Stacks: ${result.stacks.length} | Workflows: ${result.workflows.length}`,
    );
    console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      process.exitCode = 1;
    }
    return;
  }

  if (command === 'freshness') {
    const thresholdDays = thresholdArgument === undefined ? 180 : Number(thresholdArgument);
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

  console.error(`Unknown command: ${command}. Use validate | freshness [threshold-days]`);
  process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
