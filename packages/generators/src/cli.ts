#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCatalog } from '@ocs/validators';
import { generateDerivedDocs } from './generate-docs.js';

async function main(): Promise<void> {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(here, '../../..');
  const catalog = await validateCatalog(repoRoot);
  const errors = catalog.issues.filter((i) => i.level === 'error');
  if (errors.length > 0) {
    for (const e of errors) {
      console.error(`[ERROR] ${e.file}: ${e.message}`);
    }
    throw new Error(`Cannot generate: ${errors.length} validation error(s)`);
  }

  await generateDerivedDocs(
    repoRoot,
    catalog.tools,
    catalog.stacks,
    catalog.workflows,
    catalog.tasks,
    catalog.roles,
  );
  console.log(
    `Generated docs for ${catalog.tools.length} tools, ${catalog.stacks.length} stacks, ${catalog.workflows.length} workflows, ${catalog.tasks.length} tasks, and ${catalog.roles.length} roles`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
