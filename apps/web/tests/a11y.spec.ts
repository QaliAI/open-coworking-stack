import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const [name, path] of [
  ['homepage', '/'],
  ['directory', '/directory/'],
] as const) {
  test(`${name} has no serious or critical accessibility violations`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();
    const highImpactViolations = results.violations.filter(
      ({ impact }) => impact === 'serious' || impact === 'critical',
    );

    expect(highImpactViolations).toEqual([]);
  });
}

test('directory mobile cards have no serious or critical accessibility violations', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto('/directory/');

  const results = await new AxeBuilder({ page }).analyze();
  const highImpactViolations = results.violations.filter(
    ({ impact }) => impact === 'serious' || impact === 'critical',
  );

  expect(highImpactViolations).toEqual([]);
});
