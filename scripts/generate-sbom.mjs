import { spawn } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir, rename, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const syftImage = 'anchore/syft:v1.48.0';
const output = path.resolve(process.argv[2] ?? 'release-artifacts/sbom.cyclonedx.json');
const temporaryOutput = path.join(tmpdir(), `ocs-sbom-${process.pid}.json`);
const root = process.cwd();
await mkdir(path.dirname(output), { recursive: true });

const stream = createWriteStream(temporaryOutput, { encoding: 'utf8' });
const outputFinished = new Promise((resolve, reject) => {
  stream.once('finish', resolve);
  stream.once('error', reject);
});
const child = spawn(
  'docker',
  [
    'run',
    '--rm',
    '--volume',
    `${root}:/src:ro`,
    syftImage,
    'dir:/src',
    '--output',
    'cyclonedx-json',
  ],
  { stdio: ['ignore', 'pipe', 'inherit'] },
);
child.stdout.pipe(stream);

const status = await new Promise((resolve, reject) => {
  child.once('error', reject);
  child.once('close', resolve);
});
await outputFinished;

if (status !== 0) {
  await rm(temporaryOutput, { force: true });
  throw new Error(
    `Syft exited with status ${status}. Docker must be running; the pinned scanner is ${syftImage}.`,
  );
}
await rm(output, { force: true });
await rename(temporaryOutput, output);
console.log(`Wrote CycloneDX SBOM to ${path.relative(root, output)} using ${syftImage}.`);
