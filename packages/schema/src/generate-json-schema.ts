#!/usr/bin/env node
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { StackSchema } from './stack.js';
import { ToolSchema } from './tool.js';
import { WorkflowDefSchema } from './workflow.js';

const MIRRORS = [
  ['stack.schema.json', 'Stack', StackSchema],
  ['tool.schema.json', 'Tool', ToolSchema],
  ['workflow.schema.json', 'Workflow', WorkflowDefSchema],
] as const;

export async function generateJsonSchemaMirrors(repoRoot: string): Promise<void> {
  const outputDirectory = path.join(repoRoot, 'catalog', 'schema');
  await mkdir(outputDirectory, { recursive: true });

  for (const entry of await readdir(outputDirectory, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.schema.json')) {
      await rm(path.join(outputDirectory, entry.name));
    }
  }

  for (const [fileName, name, schema] of MIRRORS) {
    const jsonSchema = zodToJsonSchema(schema, {
      name,
      target: 'jsonSchema7',
      $refStrategy: 'root',
    });
    await writeFile(
      path.join(outputDirectory, fileName),
      `${JSON.stringify(jsonSchema, null, 2)}\n`,
      'utf8',
    );
  }
}

async function main(): Promise<void> {
  const here = path.dirname(fileURLToPath(import.meta.url));
  await generateJsonSchemaMirrors(path.resolve(here, '../../..'));
  console.log(`Generated ${MIRRORS.length} JSON Schema mirrors`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}
