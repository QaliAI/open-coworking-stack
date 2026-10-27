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
  await expect(page.getByRole('link', { name: 'Zulip', exact: true })).toBeVisible();

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
  await page.getByRole('searchbox', { name: 'Search tools' }).focus();

  await page.keyboard.press('Tab');
  await expect(page.getByRole('combobox', { name: 'Category', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('License class')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Deployment')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Difficulty')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Review status')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Cost model')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByText('Advanced filters', { exact: true })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('.ocs-advanced-filters')).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Role assisted')).toBeFocused();
});

test('reaches the desktop results table with the keyboard', async ({ page }) => {
  await page.getByText('Compact comparison table', { exact: true }).focus();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('region', { name: 'Filtered tool results table' })).toBeFocused();
});

test('uses readable labels and keeps research signals separate', async ({ page }) => {
  await expect(
    page.getByLabel('License class').locator('option[value="oss-osi-approved"]'),
  ).toHaveText('Open Source — Free Software');
  await expect(page.getByLabel('Deployment').locator('option[value="managed-saas"]')).toHaveText(
    'Hosted service',
  );
  await expect(
    page.getByLabel('Review status').locator('option[value="research-backlog"]'),
  ).toHaveText('Not yet reviewed');

  await page.getByRole('searchbox', { name: 'Search tools' }).fill('activepieces');
  const result = page.locator('[data-tool-id="activepieces"]:visible');
  await expect(result).toContainText('Not yet reviewed');
  await expect(result).not.toContainText('Fully verified');
  await expect(result).toContainText('Planned, not published');
});

test('presents operator cards on mobile with honest task-fit gaps', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.reload();
  await page.getByRole('searchbox', { name: 'Search tools' }).fill('activepieces');

  const card = page.locator('.ocs-operator-card[data-tool-id="activepieces"]');
  await expect(card).toBeVisible();
  await expect(page.locator('.ocs-table-wrap')).toBeHidden();
  await card.getByText('Who it helps and what your team still does', { exact: true }).click();
  await expect(card).toContainText('Helps');
  await expect(card).toContainText('Not reviewed yet');
  await expect(card).toContainText('Manual work it cuts down');
  await expect(card).toContainText('Still done by your team');
  await expect(card).toContainText('Skill');
  await expect(card).toContainText('Maintenance');
  await expect(card).toContainText('Setup difficulty');
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

test('category shortcuts, review groups, empty state and reset share one URL state', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Marketing & SEO', exact: true }).click();
  await page.getByRole('button', { name: /^Not yet reviewed/ }).click();
  await expect(page).toHaveURL(/collection=marketing-seo.*tier=research-backlog/);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Marketing & SEO', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.getByRole('searchbox', { name: 'Search tools' }).fill('Postiz');
  await expect(page.locator('.ocs-operator-card:visible')).toHaveCount(1);
  await page.getByRole('searchbox', { name: 'Search tools' }).fill('no-such-software-zzzzz');
  await expect(page.locator('[data-no-results]')).toBeVisible();
  await expect(page.locator('[data-count]')).toHaveText('0');
  await page.getByRole('button', { name: 'Reset filters' }).click();
  await expect(page.locator('[data-no-results]')).toBeHidden();
  await expect(page).toHaveURL(/\/directory\/$/);
});

for (const [name, id, category] of [
  ['Hi.Events', 'hi-events', 'event-management'],
  ['Postiz', 'postiz', 'community-engagement'],
  ['Mixpost Lite', 'mixpost-lite', 'community-engagement'],
  ['Snipe-IT', 'snipe-it', 'facility-operations'],
  ['Xibo CMS', 'xibo', 'digital-signage'],
  ['Frappe HR', 'frappe-hr', 'hr-people'],
  ['pretix', 'pretix', 'event-management'],
  ['Roomer', 'roomer', 'booking-scheduling'],
  ['Cal.diy', 'cal-diy', 'booking-scheduling'],
]) {
  test(`October candidate ${name} survives generation, search and filters`, async ({ page }) => {
    await page.getByRole('searchbox', { name: 'Search tools' }).fill(name);
    await page.getByRole('combobox', { name: 'Category', exact: true }).selectOption(category);
    await page.getByLabel('Review status').selectOption('research-backlog');
    const card = page.locator(`.ocs-operator-card[data-tool-id="${id}"]`);
    await expect(card).toBeVisible();
    await expect(card).toContainText('Not yet reviewed');
    await expect(
      card.getByRole('link', { name: `Official site for ${name}`, exact: true }),
    ).toHaveAttribute('href', /^https:\/\//);
    await expect(
      card.getByRole('link', { name: `Source code for ${name}`, exact: true }),
    ).toHaveAttribute('href', /^https:\/\/github.com\//);
    await expect(
      card.getByRole('link', { name: `Setup guide for ${name}`, exact: true }),
    ).toHaveCount(0);
    await card.getByRole('link', { name: `Full listing for ${name}`, exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(name);
  });
}

test('global search retains tools, guides, workflows, comparisons, roles and tasks', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  const search = page.getByRole('dialog').getByRole('textbox', { name: 'Search', exact: true });
  for (const [query, href] of [
    ['LibreBooking', '/tools/generated/librebooking/'],
    ['Caddy', '/guides/tools/caddy/'],
    ['Room booking', '/workflows/room-booking/'],
    ['Vaultwarden vs Passbolt', '/comparisons/vaultwarden-vs-passbolt/'],
    ['Owner-operator', '/roles/generated/owner-operator/'],
    ['Manage room bookings', '/tasks/generated/manage-room-bookings/'],
  ]) {
    await search.fill(query);
    await expect(page.locator(`.pagefind-ui__result-link[href$="${href}"]`)).toBeVisible();
  }
});
