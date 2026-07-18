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
  await license.selectOption('oss-osi-approved');
  await expect(page).toHaveURL(/\/directory\/\?q=zulip&license=oss-osi-approved$/);

  await page.reload();
  await expect(search).toHaveValue('zulip');
  await expect(license).toHaveValue('oss-osi-approved');
  await expect(page.locator('[data-tool-id]:visible')).toHaveCount(1);
});

test('makes the results region reachable by keyboard', async ({ page }) => {
  await page.getByRole('searchbox', { name: 'Search' }).focus();

  for (let index = 0; index < 11; index += 1) await page.keyboard.press('Tab');

  await expect(
    page.getByRole('region', {
      name: 'Filtered tool results. Scroll horizontally to view every column.',
    }),
  ).toBeFocused();
});
