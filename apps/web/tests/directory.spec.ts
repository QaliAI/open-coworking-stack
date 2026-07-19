import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/directory/');
});

test('searches, filters, and resets the directory', async ({ page }) => {
  const search = page.getByRole('searchbox', { name: 'Search' });
  const count = page.locator('.ocs-count');
  const initialCount = await count.textContent();

  await search.fill('zulip');
  await expect(page.locator('[data-tool-id]:visible')).toHaveCount(1);
  await expect(page.getByRole('link', { name: 'Zulip' })).toBeVisible();

  await page.getByText('Advanced filters', { exact: true }).click();
  await page.getByLabel('License class').selectOption('oss-osi-approved');
  await expect(count).toContainText('Showing 1 of');

  await page.getByRole('button', { name: 'Reset filters' }).click();
  await expect(search).toBeFocused();
  await expect(search).toHaveValue('');
  await expect(page.getByLabel('License class')).toHaveValue('');
  await expect(page).toHaveURL(/\/directory\/$/);
  await expect(count).toHaveText(initialCount ?? '');
});

test('persists filters in the query string across reloads', async ({ page }) => {
  const search = page.getByRole('searchbox', { name: 'Search' });
  const license = page.getByLabel('License class');

  await search.fill('zulip');
  await page.getByText('Advanced filters', { exact: true }).click();
  await license.selectOption('oss-osi-approved');
  await expect(page).toHaveURL(/\/directory\/\?q=zulip&license=oss-osi-approved$/);

  await page.reload();
  await expect(search).toHaveValue('zulip');
  await expect(license).toHaveValue('oss-osi-approved');
  await expect(page.locator('[data-tool-id]:visible')).toHaveCount(1);
});

test('makes the results region reachable by keyboard', async ({ page }) => {
  await page.getByRole('searchbox', { name: 'Search the work, not just the product' }).focus();

  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Role assisted')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Research tier')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByText('Advanced filters', { exact: true })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('.ocs-advanced-filters')).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('License class')).toBeFocused();
});

test('reaches the desktop results table with the keyboard', async ({ page }) => {
  await page.getByRole('searchbox', { name: 'Search the work, not just the product' }).focus();

  for (let index = 0; index < 5; index += 1) await page.keyboard.press('Tab');

  await expect(page.getByRole('region', { name: 'Filtered tool results table' })).toBeFocused();
});

test('uses readable labels and keeps research signals separate', async ({ page }) => {
  await expect(
    page.getByLabel('License class').locator('option[value="oss-osi-approved"]'),
  ).toHaveText('Open source (OSI-approved)');
  await expect(page.getByLabel('Deployment').locator('option[value="managed-saas"]')).toHaveText(
    'Managed SaaS',
  );
  await expect(
    page.getByLabel('Research tier').locator('option[value="research-backlog"]'),
  ).toHaveText('Research backlog');

  await page
    .getByRole('searchbox', { name: 'Search the work, not just the product' })
    .fill('activepieces');
  const result = page.locator('[data-tool-id="activepieces"]:visible');
  await expect(result).toContainText('Research backlog');
  await expect(result).not.toContainText('Verified Core');
  await expect(result).toContainText('Planned, not published');
});

test('presents operator cards on mobile with honest task-fit gaps', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.reload();
  await page
    .getByRole('searchbox', { name: 'Search the work, not just the product' })
    .fill('activepieces');

  const card = page.locator('.ocs-operator-card[data-tool-id="activepieces"]');
  await expect(card).toBeVisible();
  await expect(page.locator('.ocs-table-wrap')).toBeHidden();
  await expect(card).toContainText('Role assisted');
  await expect(card).toContainText('Task fit not reviewed');
  await expect(card).toContainText('Manual task replaced');
  await expect(card).toContainText('No reviewed manual-task replacement claim');
  await expect(card).toContainText('Human work');
  await expect(card).toContainText('Skill');
  await expect(card).toContainText('Maintenance');
  await expect(card).toContainText('Pilot difficulty');
});

for (const width of [320, 375, 414, 768]) {
  test(`has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.reload();

    const hasOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );
    expect(hasOverflow).toBe(false);
  });
}
