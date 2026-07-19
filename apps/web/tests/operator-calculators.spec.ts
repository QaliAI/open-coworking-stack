import { expect, test } from '@playwright/test';

test('stack builder blocks self-hosting for a nontechnical operator and exports Markdown', async ({
  page,
}) => {
  await page.goto('/stack-builder/');

  await expect(page.getByRole('heading', { level: 1, name: 'Stack Builder' })).toBeVisible();
  await page.getByLabel('Deployment preference').selectOption('control');
  await page.getByRole('button', { name: 'Build and compare stacks' }).click();
  await expect(page.getByText('Do not self-host.', { exact: true })).toBeVisible();
  await expect(page.locator('[data-track="self-hosted"]')).toHaveAttribute(
    'data-fit',
    'not-recommended',
  );

  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export Markdown' }).click();
  expect((await download).suggestedFilename()).toBe('coworking-stack-plan.md');

  await page.evaluate(() => {
    window.print = () => {
      document.documentElement.dataset.printed = 'true';
    };
  });
  await page.getByRole('button', { name: 'Print' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-printed', 'true');
});

test('ROI calculator updates without presenting savings as guaranteed', async ({ page }) => {
  await page.goto('/roi-calculator/');

  await expect(page.getByRole('heading', { level: 1, name: 'ROI/TCO Estimator' })).toBeVisible();
  await page.getByLabel('Tasks per month').fill('600');
  await page.getByRole('button', { name: 'Recalculate estimate' }).click();
  await expect(page.locator('[data-base="hoursPotentiallyRedirected"]')).toHaveText('28');
  await expect(page.getByText('No savings promise.')).toBeVisible();
});

test('operator tools remain usable at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/stack-builder/');

  await expect(page.getByLabel('Plan name')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Build and compare stacks' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320);
});
