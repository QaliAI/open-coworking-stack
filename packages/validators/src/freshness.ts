import path from 'node:path';
import { daysBetween, listYamlFiles, loadYamlFile } from '@ocs/shared';
import { ToolSchema } from '@ocs/schema';

export interface FreshnessReport {
  stale: Array<{ id: string; last_reviewed: string; age_days: number }>;
  total: number;
  threshold_days: number;
}

export async function checkFreshness(
  repoRoot: string,
  thresholdDays = 180,
): Promise<FreshnessReport> {
  if (!Number.isInteger(thresholdDays) || thresholdDays < 0) {
    throw new Error('Freshness threshold must be a non-negative integer number of days');
  }

  const toolsDir = path.join(repoRoot, 'catalog', 'tools');
  const stale: FreshnessReport['stale'] = [];
  let total = 0;

  for (const file of await listYamlFiles(toolsDir)) {
    const tool = ToolSchema.parse(await loadYamlFile<unknown>(file));
    total += 1;
    const age = daysBetween(tool.verification.last_reviewed);
    if (age > thresholdDays || tool.verification.status === 'stale') {
      stale.push({
        id: tool.id,
        last_reviewed: tool.verification.last_reviewed,
        age_days: age,
      });
    }
  }

  stale.sort((a, b) => b.age_days - a.age_days);
  return { stale, total, threshold_days: thresholdDays };
}

/** Freshness is advisory unless strictly more than half of catalog tools are stale. */
export function freshnessShouldFail(report: FreshnessReport): boolean {
  return report.total > 0 && report.stale.length > report.total * 0.5;
}
