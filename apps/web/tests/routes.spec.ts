import { expect, test } from '@playwright/test';

const routes = [
  ['homepage', '/', 'Free & Open-Source Tools for Coworking Spaces'],
  ['directory', '/directory/', 'Browse Tools'],
  ['tool', '/tools/generated/zulip/', 'Zulip'],
  ['guide', '/guides/security-baseline/', 'Security baseline for self-hosted stacks'],
  ['workflow', '/workflows/room-booking/', 'Workflow — Room booking'],
  ['stack', '/stacks/generated/bootstrap-near-zero/', 'Near-Zero Cash Technical Self-Host'],
  ['task', '/tasks/generated/manage-room-bookings/', 'Manage room bookings'],
  ['role', '/roles/generated/owner-operator/', 'Owner-operator'],
  ['stack builder', '/stack-builder/', 'Stack Builder'],
  ['capacity estimator', '/roi-calculator/', 'Workflow Capacity and Payback Estimator'],
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

// Persona route assertions per operator-acceptance-testing.md
const personaRoutes: Record<string, [string, string, string][]> = {
  'owner-operator': [
    ['business model nav', '/navigation/by-business-model/', 'Navigate by business model'],
    ['budget nav', '/navigation/by-budget/', 'Navigate by budget'],
    ['stack builder', '/stack-builder/', 'Stack Builder'],
    ['buy/build path', '/ops/buy-build-self-host/', 'Buy vs build vs self-host'],
  ],
  'community-front-desk': [
    ['lifecycle nav', '/navigation/by-lifecycle/', 'Navigate by lifecycle'],
    ['member onboarding workflow', '/workflows/generated/member-onboarding/', 'Member onboarding'],
    ['professional help', '/ops/professional-help/', 'When to obtain professional help'],
  ],
  'sales-leasing': [
    ['tour-to-close workflow', '/workflows/generated/tour-to-close/', 'Tour to close'],
    ['directory', '/directory/', 'Browse Tools'],
  ],
  'operations-facilities': [
    ['room booking workflow', '/workflows/generated/room-booking/', 'Room booking'],
    ['runtime validation', '/ops/runtime-validation/', 'Compose runtime validation'],
  ],
  'finance-billing': [
    [
      'invoice collections workflow',
      '/workflows/generated/invoice-collections/',
      'Invoice collections',
    ],
    ['cost model', '/ops/cost-model/', 'Cost model thinking'],
    ['capacity estimator', '/roi-calculator/', 'Workflow Capacity and Payback Estimator'],
  ],
  'virtual-office': [
    [
      'virtual office stack',
      '/stacks/generated/virtual-office-mailroom/',
      'Virtual Office and Mailroom',
    ],
    ['data portability', '/ops/data-portability/', 'Coworking data and portability'],
  ],
  'it-security': [
    ['technical ability nav', '/navigation/by-technical-ability/', 'Navigate by technical ability'],
    ['backup guide', '/guides/backup-and-restore/', 'Backup and restore'],
    ['runtime validation', '/ops/runtime-validation/', 'Compose runtime validation'],
  ],
  'consultant-implementer': [
    ['evaluation criteria', '/start/evaluation-criteria/', 'Evaluation criteria'],
    ['comparison index', '/comparisons/', 'Operator comparison library'],
    ['acceptance testing', '/ops/acceptance-testing/', 'Operator acceptance status'],
    ['trust policy', '/ops/trust-policy/', 'Trust and monetization policy'],
  ],
};

for (const [name, persona] of Object.entries(personaRoutes)) {
  test.describe(`persona: ${name}`, () => {
    for (const [label, path, heading] of persona) {
      test(`${label} (${path}) renders`, async ({ page }) => {
        const response = await page.goto(path);
        expect(response?.ok()).toBe(true);
        await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
      });
    }
  });
}

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
