import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// Release-readiness coverage beyond the homepage and directory: every operator-facing surface is
// checked for serious/critical axe violations and horizontal overflow at phone and desktop widths.
const operatorRoutes = [
  '/',
  '/start/start-here/',
  '/start/how-to-use/',
  '/stack-builder/',
  '/roi-calculator/',
  '/directory/',
  '/comparisons/',
  '/comparisons/commercial-platform-capability-benchmark/',
  '/comparisons/vaultwarden-vs-passbolt/',
  '/tools/generated/nextcloud/',
  '/guides/tools/caddy/',
  '/stacks/generated/bootstrap-near-zero/',
  '/ops/cost-model/',
];

const widths = [320, 375, 1280];

test.describe.configure({ timeout: 60_000 });

for (const width of widths) {
  for (const route of operatorRoutes) {
    test(`${route} has no serious a11y violations or overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(route);
      expect(response?.ok(), `${route} should respond 200`).toBe(true);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(scrollWidth, `${route} overflows horizontally`).toBeLessThanOrEqual(width);

      const results = await new AxeBuilder({ page }).analyze();
      const highImpact = results.violations
        .filter(({ impact }) => impact === 'serious' || impact === 'critical')
        .map(({ id, impact, nodes }) => ({
          id,
          impact,
          targets: nodes.slice(0, 3).map((node) => node.target.join(' ')),
        }));
      expect(highImpact).toEqual([]);
    });
  }
}

test.describe('operator journey', () => {
  test('home page leads with tools and preserves the Start Here pathway', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Browse the free tools', exact: true }).click();
    await expect(page.locator('[data-ocs-directory]')).toBeVisible();
    await page.goto('/start/start-here/');
    await expect(
      page.getByRole('heading', { level: 1, name: /Start here: a path for coworking operators/ }),
    ).toBeVisible();
    await expect(
      page.getByText('Reference installations are demonstrations, not production'),
    ).toBeVisible();
    for (const target of [
      '/directory/',
      '/comparisons/',
      '/stack-builder/',
      '/roi-calculator/',
      '/guides/security-baseline/',
    ]) {
      await expect(page.locator(`main a[href$="${target}"]`).first()).toBeVisible();
    }
  });

  test('comparison pages link to real tool records', async ({ page }) => {
    await page.goto('/comparisons/vaultwarden-vs-passbolt/');
    const link = page.locator('main a[href*="/tools/generated/vaultwarden/"]').first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/tools\/generated\/vaultwarden\/$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Vaultwarden');
  });

  test('stack builder results lead to tool records and install guides', async ({ page }) => {
    await page.goto('/stack-builder/');
    await expect(page.getByText('Fabricated demonstration data.').first()).toBeVisible();
    await page.getByRole('button', { name: 'Build and compare stacks' }).click();

    const selfHosted = page.locator('[data-track="self-hosted"]');
    await expect(selfHosted.locator('[data-tools] a', { hasText: 'Record' }).first()).toBeVisible();

    const guideLink = selfHosted.locator('[data-tools] a', { hasText: /^Install guide/ }).first();
    await expect(guideLink).toBeVisible();
    await guideLink.click();
    await expect(page).toHaveURL(/\/guides\/tools\/[a-z0-9-]+\/$/);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });
});
