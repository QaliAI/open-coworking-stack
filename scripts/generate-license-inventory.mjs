import { spawnSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const command =
  process.platform === 'win32'
    ? ['cmd.exe', ['/d', '/s', '/c', 'pnpm licenses list --json']]
    : ['pnpm', ['licenses', 'list', '--json']];
const result = spawnSync(command[0], command[1], {
  encoding: 'utf8',
  maxBuffer: 50 * 1024 * 1024,
});

if (result.error) throw result.error;
if (result.status !== 0) {
  throw new Error(result.stderr || `pnpm licenses exited with status ${result.status}.`);
}

const rawInventory = JSON.parse(result.stdout);
const packages = Object.entries(rawInventory)
  .flatMap(([license, entries]) =>
    entries.map(({ paths: _paths, ...entry }) => ({ ...entry, license: entry.license ?? license })),
  )
  .sort((left, right) => {
    const nameOrder = left.name.localeCompare(right.name);
    if (nameOrder !== 0) return nameOrder;
    return left.versions.join(',').localeCompare(right.versions.join(','));
  });

const inventory = {
  format_version: 1,
  scope: 'Installed pnpm workspace dependency graph',
  notice: 'Package-declared license metadata for review; this inventory is not a legal conclusion.',
  packages,
};
const output = path.resolve(process.argv[2] ?? 'release-artifacts/dependency-licenses.json');
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(inventory, null, 2)}\n`);
console.log(
  `Wrote ${packages.length} dependency records to ${path.relative(process.cwd(), output)}.`,
);
