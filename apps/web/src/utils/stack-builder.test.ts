import { describe, expect, it } from 'vitest';
import {
  defaultStackBuilderInput,
  recommendStack,
  stackRecommendationToMarkdown,
  toolLinks,
  type StackBuilderInput,
} from './stack-builder';

function scenario(overrides: Partial<StackBuilderInput>): StackBuilderInput {
  return { ...defaultStackBuilderInput, ...overrides };
}

describe('stack recommendation scenarios', () => {
  it.each([
    [
      'Solo nontechnical startup',
      scenario({ activeMembers: 35, technicalCapacity: 'none', deploymentPreference: 'easiest' }),
      'hosted',
    ],
    [
      'Fast opening next week',
      scenario({ technicalCapacity: 'vendor-supported', implementationWindow: 'one-week' }),
      'hosted',
    ],
    [
      'Supported single-site operator',
      scenario({ technicalCapacity: 'vendor-supported', deploymentPreference: 'balanced' }),
      'hybrid',
    ],
    [
      'Privacy-first technical cooperative',
      scenario({
        technicalCapacity: 'in-house',
        deploymentPreference: 'control',
        dataSensitivity: 'sensitive',
      }),
      'self-hosted',
    ],
    [
      'Multi-site in-house platform team',
      scenario({
        sites: 8,
        activeMembers: 900,
        technicalCapacity: 'in-house',
        deploymentPreference: 'control',
      }),
      'self-hosted',
    ],
    [
      'Multi-site vendor-supported operator',
      scenario({
        sites: 5,
        activeMembers: 600,
        technicalCapacity: 'vendor-supported',
        deploymentPreference: 'balanced',
      }),
      'hybrid',
    ],
    [
      'Regulated nontechnical operator',
      scenario({
        technicalCapacity: 'none',
        deploymentPreference: 'control',
        dataSensitivity: 'regulated',
      }),
      'hosted',
    ],
    [
      'Technical rapid pilot',
      scenario({
        technicalCapacity: 'in-house',
        deploymentPreference: 'control',
        implementationWindow: 'one-week',
      }),
      'hosted',
    ],
  ] as const)('%s selects %s', (_name, input, expected) => {
    const result = recommendStack(input);
    expect(result.recommendedTrack).toBe(expected);
    expect(result.tracks.map(({ id }) => id)).toEqual(['hosted', 'hybrid', 'self-hosted']);
  });

  it('gives nontechnical operators a strong do-not-self-host outcome', () => {
    const result = recommendStack(
      scenario({ technicalCapacity: 'none', deploymentPreference: 'control' }),
    );
    const selfHosted = result.tracks.find(({ id }) => id === 'self-hosted');

    expect(result.doNotSelfHost).toBe(true);
    expect(result.guardrail).toContain('do not self-host');
    expect(selfHosted?.fit).toBe('not-recommended');
    expect(selfHosted?.reasoning).toContain('Do not self-host');
  });

  it('enriches tools with catalog lookup when provided', () => {
    const catalog = { cobot: { homepage: 'https://cobot.me', license_class: 'saas' } };
    const result = recommendStack(scenario({ priorities: ['members-billing'] }), catalog);
    const tools = result.tracks[0].tools;
    expect(tools[0].catalogId).toBe('cobot');
    expect(tools[0].catalogEntry?.homepage).toBe('https://cobot.me');
    expect(tools[0].catalogEntry?.license_class).toBe('saas');
  });

  it('falls back gracefully when catalog lookup is missing', () => {
    const result = recommendStack(scenario({ priorities: ['members-billing'] }), undefined);
    const tools = result.tracks[0].tools;
    expect(tools[0].catalogEntry).toBeUndefined();
    expect(tools[0].catalogId).toBe('cobot');
    expect(tools[0].name).toBe('Cobot');
  });

  it('normalizes an empty outcome selection and invalid numeric values deterministically', () => {
    const result = recommendStack(
      scenario({ priorities: [], sites: 0, activeMembers: Number.NaN, staffUsers: -2 }),
    );

    expect(result.input.priorities).toEqual(['members-billing']);
    expect(result.input.sites).toBe(1);
    expect(result.input.activeMembers).toBe(0);
    expect(result.input.staffUsers).toBe(1);
  });
});

describe('stack Markdown export', () => {
  it('exports inputs and every required decision section', () => {
    const markdown = stackRecommendationToMarkdown(recommendStack(defaultStackBuilderInput));

    expect(markdown).toContain('# Coworking stack builder result');
    expect(markdown).toContain('## Hosted / easiest (recommended)');
    expect(markdown).toContain('## Hybrid / balanced');
    expect(markdown).toContain('## Self-hosted / controlled (not recommended)');
    for (const heading of [
      'Tools',
      'Alternatives',
      'Covered tasks',
      'Gaps',
      'Systems of record',
      'Editable cost assumptions',
      'Labor and expertise',
      'Implementation order',
      'Pilot',
      'Risks',
      'Backup',
      'Fallback',
    ]) {
      expect(markdown).toContain(`### ${heading}`);
    }
  });
});

describe('toolLinks', () => {
  it('always links the in-site record and honors the base path', () => {
    expect(toolLinks('bookstack', undefined, '/').recordUrl).toBe('/tools/generated/bookstack/');
    expect(toolLinks('bookstack', undefined, '/open-coworking-stack').recordUrl).toBe(
      '/open-coworking-stack/tools/generated/bookstack/',
    );
  });

  it('links install guides only when a guide exists and labels stubs honestly', () => {
    expect(toolLinks('cobot', { guide_status: 'planned' }).guideUrl).toBeUndefined();
    expect(toolLinks('bookstack', { guide_status: 'full' })).toMatchObject({
      guideUrl: '/guides/tools/bookstack/',
      guideLabel: 'Install guide',
    });
    expect(toolLinks('caddy', { guide_status: 'stub' }).guideLabel).toBe('Install guide (stub)');
  });
});
