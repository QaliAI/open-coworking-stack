import { createHash } from 'node:crypto';
import { chmod, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { arch, platform } from 'node:process';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const version = '0.24.2';
const releaseBase = `https://github.com/lycheeverse/lychee/releases/download/lychee-v${version}`;
const targets = {
  'darwin-arm64': {
    asset: 'lychee-aarch64-apple-darwin.tar.gz',
    sha256: 'c9d3740ea2d891854d37116c9fba840f37b6e7c89d330e7db84ac333631c4977',
  },
  'darwin-x64': {
    asset: 'lychee-x86_64-apple-darwin.tar.gz',
    sha256: '887503a9cff667d322b8d0892b40bf49976eb9507af8483220a3706cdad55978',
  },
  'linux-arm64': {
    asset: 'lychee-aarch64-unknown-linux-gnu.tar.gz',
    sha256: '91a7bd65685da41b90ccb9bc867a3d649a7818042dae04ff405e55a25bddee4c',
  },
  'linux-x64': {
    asset: 'lychee-x86_64-unknown-linux-gnu.tar.gz',
    sha256: '1f4e0ef7f6554a6ed33dd7ac144fb2e1bbed98598e7af973042fc5cd43951c9a',
  },
  'win32-x64': {
    asset: 'lychee-x86_64-pc-windows-msvc.zip',
    sha256: '32975d1493ee1a975d6bb41e4fb56fe419cb442ded628bb772ba2e614acfacad',
  },
};

const target = targets[`${platform}-${arch}`];
if (!target) {
  throw new Error(`Lychee ${version} wrapper does not support ${platform}-${arch}.`);
}

const cacheDirectory = path.resolve('.lychee', version, `${platform}-${arch}`);
const extractedDirectory = target.asset.replace(/\.(?:tar\.gz|zip)$/u, '');
const executable = path.join(
  cacheDirectory,
  extractedDirectory,
  platform === 'win32' ? 'lychee.exe' : 'lychee',
);

async function install() {
  const archive = path.join(cacheDirectory, target.asset);
  await mkdir(cacheDirectory, { recursive: true });

  const response = await fetch(`${releaseBase}/${target.asset}`);
  if (!response.ok) {
    throw new Error(`Unable to download Lychee ${version}: HTTP ${response.status}.`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  const actualHash = createHash('sha256').update(bytes).digest('hex');
  if (actualHash !== target.sha256) {
    throw new Error(
      `Lychee archive checksum mismatch: expected ${target.sha256}, got ${actualHash}.`,
    );
  }

  await writeFile(archive, bytes);
  const extraction = spawnSync(
    'tar',
    [target.asset.endsWith('.zip') ? '-xf' : '-xzf', archive, '-C', cacheDirectory],
    { stdio: 'inherit' },
  );

  await rm(archive, { force: true });
  if (extraction.error || extraction.status !== 0) {
    throw extraction.error ?? new Error(`Unable to extract ${target.asset}.`);
  }
  if (platform !== 'win32') await chmod(executable, 0o755);
}

try {
  await readFile(executable);
} catch {
  await install();
}

const args = process.argv.slice(2);
const lycheeArgs = [
  '--config',
  '.lychee.toml',
  ...(args.length ? args : ['./**/*.md', './**/*.mdx', './**/*.yml', './**/*.yaml']),
];
const result = spawnSync(executable, lycheeArgs, { stdio: 'inherit' });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
