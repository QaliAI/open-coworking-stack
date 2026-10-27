import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
const discovery: typeof import('../public/data/discovery.json') = JSON.parse(
  readFileSync(new URL('../public/data/discovery.json', import.meta.url), 'utf8'),
);

for (const collection of discovery.collections) {
  test(`${collection.label} has the canonical count and real results`, async ({ page }) => {
    await page.goto(collection.href);
    await expect(page.locator('[data-count]')).toHaveText(String(collection.count));
    expect(collection.count).toBeGreaterThan(0);
    await expect(page.locator('.ocs-operator-card:visible')).toHaveCount(collection.count);
    await expect(page.locator(`[data-collection="${collection.id}"]`)).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
}

test('discrete filter changes and search restore with browser Back and Forward', async ({
  page,
}) => {
  await page.goto('/directory/');
  await page.getByRole('searchbox', { name: 'Search tools' }).fill('Espo CRM');
  await expect(page.locator('.ocs-operator-card[data-tool-id="espocrm"]')).toBeVisible();
  await page.getByLabel('License class').selectOption('open-core');
  await page.getByLabel('Deployment').selectOption('self-hosted');
  await page.goBack();
  await expect(page.getByLabel('Deployment')).toHaveValue('');
  await expect(page.getByLabel('License class')).toHaveValue('open-core');
  await page.goBack();
  await expect(page.getByLabel('License class')).toHaveValue('');
  await expect(page.getByRole('searchbox', { name: 'Search tools' })).toHaveValue('Espo CRM');
  await page.goForward();
  await expect(page.getByLabel('License class')).toHaveValue('open-core');
});

test('all resource libraries expose their full lists and preserve contextual navigation', async ({
  page,
}) => {
  await page.goto('/library/');
  await expect(page.locator('.ocs-library-card')).toHaveCount(discovery.resources.length);
  for (const [family, count] of [
    ['tasks', 105],
    ['roles', 14],
    ['workflows', 75],
    ['stacks', 14],
  ] as const) {
    const response = await page.goto(`/${family}/`);
    expect(response?.ok()).toBe(true);
    await expect(page.locator(`.ocs-library-list a[href*="/${family}/generated/"]`)).toHaveCount(
      count,
    );
    await page.locator('.ocs-library-list a').first().click();
    await expect(
      page
        .getByRole('navigation', { name: 'Resource navigation' })
        .getByRole('link', { name: `All ${family}`, exact: true }),
    ).toBeVisible();
    await expect(page.locator('a[rel="prev"], a[rel="next"]')).toHaveCount(0);
  }
  await page.goto('/guides/');
  await expect(page.locator('.ocs-library-list a[href*="/guides/tools/"]')).toHaveCount(25);
  await expect(page.getByText('26 guide outlines', { exact: true })).toBeVisible();
});

test('recipes retain the operational rules and tool pages provide related routes', async ({
  page,
}) => {
  await page.goto('/guides/integration-recipes/');
  await expect(page).toHaveURL(/\/integrations\/generated\/$/);
  await expect(page.getByRole('heading', { name: 'Shared Operating Rules' })).toBeVisible();
  await expect(page.getByText('Never silently drop work.', { exact: false })).toBeVisible();
  await expect(page.locator('a[rel="prev"], a[rel="next"]')).toHaveCount(0);
  await page.goto('/tools/generated/librebooking/');
  await expect(page.getByRole('link', { name: 'Back to all tools', exact: true })).toBeVisible();
  await expect(
    page
      .getByRole('navigation', { name: 'Related resources' })
      .getByRole('link', { name: /Explore Desks/ }),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Related guide: LibreBooking', exact: true }),
  ).toHaveCount(0);
  await expect(page.getByText('Review status: Not yet reviewed.', { exact: true })).toBeVisible();
  await page.goto('/tools/generated/seatsurfing/');
  await page.getByRole('link', { name: 'Related guide: Seatsurfing', exact: true }).click();
  await expect(page).toHaveURL(/\/guides\/tools\/seatsurfing\/$/);
});

for (const [query, id] of [
  ['CRM', 'espocrm'],
  ['meeting rooms', 'librebooking'],
  ['e-signatures', 'docuseal'],
  ['events', 'hi-events'],
]) {
  test(`operator search for ${query} reaches a relevant canonical tool`, async ({ page }) => {
    await page.goto('/directory/');
    await page.getByRole('searchbox', { name: 'Search tools' }).fill(query);
    const card = page.locator(`.ocs-operator-card[data-tool-id="${id}"]`);
    await expect(card).toBeVisible();
    await expect(card.getByRole('link', { name: /Official site/ })).toHaveAttribute(
      'href',
      /^https:\/\//,
    );
    await expect(card.getByRole('link', { name: /Full listing/ })).toHaveAttribute(
      'href',
      `/tools/generated/${id}/`,
    );
  });
}

for (const width of [375, 1280]) {
  test(`branded navigation is compact and theme choice survives at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/directory/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(
      page.getByRole('link', { name: 'CoworkingSpace.ai — Open Coworking Stack home' }),
    ).toBeVisible();
    if (width < 800) await page.getByRole('button', { name: 'Menu', exact: true }).click();
    const sidebar = page.getByRole('navigation', { name: 'Main' });
    for (const text of [
      'Browse all tools',
      'Tools by category',
      'Plan your stack',
      'Setup guides',
      'Compare and learn',
      'About',
    ])
      await expect(sidebar.getByText(text, { exact: true }).first()).toBeVisible();
    await expect(sidebar.locator('a[href*="/tasks/generated/"]')).toHaveCount(0);
    const theme = page.getByRole('combobox', { name: /theme/i }).filter({ visible: true });
    await theme.selectOption('dark');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      width,
    );
  });
}

const gateway = process.env.GATEWAY_URL;
if (gateway) {
  for (const width of [375, 1280]) {
    test(`gateway opens the actual catalog and libraries at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      const response = await page.goto(`${gateway}/tools/`);
      expect(response?.ok()).toBe(true);
      await expect(page.locator('.facts')).toContainText(`${discovery.tool_count} tools listed`);
      await expect(
        page.getByRole('link', { name: 'Browse all the tools', exact: true }),
      ).toHaveAttribute('href', 'https://open-coworking-stack.vercel.app/directory/');
      for (const collection of discovery.collections)
        await expect(page.locator(`a[data-collection="${collection.id}"]`)).toHaveAttribute(
          'href',
          `https://open-coworking-stack.vercel.app${collection.href}`,
        );
      for (const resource of discovery.resources)
        await expect(
          page
            .locator(`main a[href="https://open-coworking-stack.vercel.app${resource.href}"]`)
            .first(),
        ).toBeVisible();
      const results = await new AxeBuilder({ page }).analyze();
      expect(
        results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical'),
      ).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
        width,
      );
      expect(errors).toEqual([]);
      await page.getByRole('searchbox', { name: 'Search the full directory' }).fill('e-signatures');
      await page.getByRole('button', { name: 'Search tools', exact: true }).click();
      await expect(page).toHaveURL(
        /open-coworking-stack\.vercel\.app\/directory\/\?q=e-signatures/,
      );
      await expect(page.locator('.ocs-operator-card[data-tool-id="docuseal"]')).toBeVisible();
    });
  }
}
