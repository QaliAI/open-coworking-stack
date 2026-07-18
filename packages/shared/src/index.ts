import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

export function repoRootFrom(metaUrl: string, depth = 3): string {
  const here = path.dirname(new URL(metaUrl).pathname);
  // Windows: URL pathname may start with /C:/...
  const normalized = process.platform === 'win32' && here.startsWith('/') ? here.slice(1) : here;
  return path.resolve(normalized, ...Array(depth).fill('..'));
}

export async function loadYamlFile<T = unknown>(filePath: string): Promise<T> {
  const raw = await readFile(filePath, 'utf8');
  return parseYaml(raw) as T;
}

export async function listYamlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.yaml') && !e.name.startsWith('_'))
    .map((e) => path.join(dir, e.name))
    .sort();
}

export function daysBetween(isoDate: string, now = new Date()): number {
  const then = new Date(`${isoDate}T00:00:00Z`);
  const ms = now.getTime() - then.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${String(x)}`);
}
