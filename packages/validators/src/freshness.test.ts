import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { stringify } from 'yaml';
import { checkFreshness, freshnessShouldFail } from './freshness.js';

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true })),
  );
});

describe('freshness', () => {
  it('schema-parses tools and rejects invalid thresholds', async () => {
    const root = await mkdtemp(path.join(tmpdir(), 'ocs-freshness-'));
    temporaryDirectories.push(root);
    const toolsDirectory = path.join(root, 'catalog/tools');
    await mkdir(toolsDirectory, { recursive: true });
    await writeFile(
      path.join(toolsDirectory, 'invalid.yaml'),
      stringify({ id: 'invalid', verification: { last_reviewed: 'not-a-date' } }),
      'utf8',
    );

    await expect(checkFreshness(root)).rejects.toThrow();
    await expect(checkFreshness(root, -1)).rejects.toThrow('non-negative integer');
  });

  it('fails only when strictly more than half of tools are stale', () => {
    const base = { threshold_days: 180, stale: [], total: 2 };
    expect(
      freshnessShouldFail({
        ...base,
        stale: [{ id: 'one', last_reviewed: '2020-01-01', age_days: 1_000 }],
      }),
    ).toBe(false);
    expect(
      freshnessShouldFail({
        ...base,
        stale: [
          { id: 'one', last_reviewed: '2020-01-01', age_days: 1_000 },
          { id: 'two', last_reviewed: '2020-01-01', age_days: 1_000 },
        ],
      }),
    ).toBe(true);
  });
});
