import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'node:url';

const host = '127.0.0.1';
const port = 4321;
const baseURL = `http://${host}:${port}`;
const repositoryRoot = fileURLToPath(new URL('../..', import.meta.url));
const previewCommand = `pnpm --filter @ocs/web preview --host ${host} --port ${port}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'on-first-retry',
    ...devices['Desktop Chrome'],
  },
  webServer: {
    command: process.env.PLAYWRIGHT_SKIP_BUILD ? previewCommand : `pnpm build && ${previewCommand}`,
    cwd: repositoryRoot,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  projects: [
    {
      name: 'e2e',
      testIgnore: /a11y\.spec\.ts/,
    },
    {
      name: 'a11y',
      testMatch: /a11y\.spec\.ts/,
    },
  ],
});
