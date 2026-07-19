import { expect, test } from '@playwright/test';

const routes = [
  ['homepage', '/', 'Choose coworking technology around the work'],
  ['directory', '/directory/', 'Operator tool directory'],
  ['tool', '/tools/generated/zulip/', 'Zulip'],
  ['guide', '/guides/security-baseline/', 'Security baseline for self-hosted stacks'],
  ['workflow', '/workflows/room-booking/', 'Workflow — Room booking'],
  ['stack', '/stacks/generated/bootstrap-near-zero/', 'Near-Zero Cash Technical Self-Host'],
  ['task', '/tasks/generated/manage-room-bookings/', 'Manage room bookings'],
  ['role', '/roles/generated/owner-operator/', 'Owner-operator'],
  ['stack builder', '/stack-builder/', 'Stack Builder'],
  ['ROI estimator', '/roi-calculator/', 'ROI/TCO Estimator'],
  ['lifecycle path', '/navigation/by-lifecycle/', 'Navigate by lifecycle'],
  ['business model path', '/navigation/by-business-model/', 'Navigate by business model'],
  ['technical ability path', '/navigation/by-technical-ability/', 'Navigate by technical ability'],
  ['budget path', '/navigation/by-budget/', 'Navigate by budget'],
  ['comparison index', '/comparisons/', 'Operator comparison library'],
  [
    'commercial benchmark',
    '/comparisons/commercial-platform-capability-benchmark/',
    'Commercial platform capability benchmark',
  ],
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

for (const width of [320, 375, 414, 768]) {
  test(`homepage has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasOverflow).toBe(false);
  });
}
