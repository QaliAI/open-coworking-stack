import { expect, test } from '@playwright/test';

const routes = [
  ['homepage', '/', 'Open Coworking Stack'],
  ['directory', '/directory/', 'Interactive directory'],
  ['tool', '/tools/generated/zulip/', 'Zulip'],
  ['guide', '/guides/security-baseline/', 'Security baseline for self-hosted stacks'],
  ['workflow', '/workflows/room-booking/', 'Workflow — Room booking'],
  ['stack', '/stacks/generated/bootstrap-near-zero/', 'Bootstrap Near-Zero Cash Stack'],
  [
    'integration',
    '/integrations/generated/member-onboarding-handoff/',
    'Member Onboarding Handoff',
  ],
] as const;

for (const [name, path, heading] of routes) {
  test(`${name} route renders`, async ({ page }) => {
    const response = await page.goto(path);

    expect(response?.ok()).toBe(true);
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
  });
}
