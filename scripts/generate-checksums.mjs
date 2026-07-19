import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const inputs = process.argv.slice(2);
if (inputs.length === 0) throw new Error('Pass at least one file or directory to checksum.');

async function filesUnder(input) {
  const absolute = path.resolve(input);
  const details = await stat(absolute);
  if (details.isFile()) return [absolute];
  if (!details.isDirectory()) return [];

  const entries = await readdir(absolute, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => filesUnder(path.join(absolute, entry.name))),
  );
  return nested.flat();
}

async function hashFile(file) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}

const files = (await Promise.all(inputs.map(filesUnder)))
  .flat()
  .filter((file) => path.basename(file) !== 'SHA256SUMS')
  .sort((left, right) => left.localeCompare(right));
const lines = [];
for (const file of files) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  lines.push(`${await hashFile(file)}  ${relative}`);
}

const output = path.resolve('release-artifacts/SHA256SUMS');
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, `${lines.join('\n')}\n`);
console.log(`Wrote ${lines.length} SHA-256 checksums to ${path.relative(root, output)}.`);
