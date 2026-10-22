import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const trivyImage = 'aquasec/trivy:0.72.0';
const root = process.cwd();
const reportDirectory = path.resolve('release-artifacts/image-scan');
const cacheDirectory = path.resolve('.cache/trivy');
await mkdir(reportDirectory, { recursive: true });
await mkdir(cacheDirectory, { recursive: true });

const composeDirectory = path.resolve('compose');
const packs = (await readdir(composeDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();
const references = new Set();
for (const pack of packs) {
  const envFile = path.join(composeDirectory, pack, '.env.example');
  const content = await readFile(envFile, 'utf8');
  for (const line of content.split(/\r?\n/u)) {
    const match = line.match(/^[A-Z0-9_]+_IMAGE=(\S+)$/u);
    if (match) references.add(match[1]);
  }
}

async function scan(reference, output) {
  const stream = createWriteStream(output, { encoding: 'utf8' });
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
      `${cacheDirectory}:/root/.cache/trivy`,
      trivyImage,
      'image',
      '--scanners',
      'vuln',
      '--severity',
      'HIGH,CRITICAL',
      '--ignore-unfixed',
      '--format',
      'json',
      reference,
    ],
    { stdio: ['ignore', 'pipe', 'inherit'] },
  );
  child.stdout.pipe(stream);
  const status = await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('close', resolve);
  });
  await outputFinished;
  if (status !== 0) throw new Error(`Trivy exited with status ${status} for ${reference}.`);
}

const summary = [];
let failed = false;
for (const reference of [...references].sort()) {
  const id = createHash('sha256').update(reference).digest('hex').slice(0, 12);
  const output = path.join(reportDirectory, `${id}.json`);
  try {
    await scan(reference, output);
    const report = JSON.parse(await readFile(output, 'utf8'));
    const vulnerabilities = (report.Results ?? []).flatMap(
      (result) => result.Vulnerabilities ?? [],
    );
    const critical = vulnerabilities.filter((item) => item.Severity === 'CRITICAL').length;
    const high = vulnerabilities.filter((item) => item.Severity === 'HIGH').length;
    summary.push({ reference, report: `${id}.json`, critical, high, status: 'scanned' });
  } catch (error) {
    failed = true;
    summary.push({ reference, report: `${id}.json`, status: 'scan-error', error: error.message });
  }
}

const result = {
  status_label: 'advisory reference-image scan; Compose packs are untested templates',
  scanner: trivyImage,
  limitations:
    'Tags may be mutable. Findings cover known HIGH/CRITICAL fixed vulnerabilities at scan time and do not prove runtime safety.',
  images: summary,
};
await writeFile(path.join(reportDirectory, 'summary.json'), `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result, null, 2));
if (failed) process.exitCode = 1;
