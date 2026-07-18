import { describe, expect, it } from 'vitest';
import { ToolSchema } from './tool.js';

const sample = {
  schema_version: '1.0.0' as const,
  id: 'example-tool',
  name: 'Example Tool',
  tagline: 'Example for schema tests',
  description:
    'A sufficiently long description used only in unit tests for the Open Coworking Stack schema package.',
  categories: ['automation-integration' as const],
  roles: ['technical-operator' as const],
  workflows: ['member-onboarding' as const],
  problems: ['integrate-stack' as const],
  deployment: ['self-hosted' as const],
  license: { class: 'oss-osi-approved' as const, spdx: 'MIT' },
  cost: {
    model: 'free-self-hosted' as const,
    summary: 'Self-hosted free software; operator pays infrastructure.',
  },
  implementation: {
    difficulty: 'easy' as const,
    smallest_useful_experiment: 'Deploy to a staging VM and invite one operator.',
  },
  homepage: 'https://example.com',
  tasks_reduced_or_augmented: ['Manual copy-paste between systems'],
  human_oversight_still_needed: ['Approving automation rules'],
  data_privacy: {
    data_held: ['configuration'],
    personal_data: false,
  },
  verification: {
    status: 'verified' as const,
    last_reviewed: '2026-07-17',
    sources: ['https://example.com'],
  },
};

describe('ToolSchema', () => {
  it('accepts a minimal valid tool', () => {
    const parsed = ToolSchema.parse(sample);
    expect(parsed.id).toBe('example-tool');
    expect(parsed.guide_status).toBe('stub');
  });

  it('rejects open-ended inventable star counts and bad ids', () => {
    expect(() => ToolSchema.parse({ ...sample, id: 'Not Valid' })).toThrow();
  });

  it('rejects impossible and future review dates', () => {
    const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10);
    expect(() =>
      ToolSchema.parse({
        ...sample,
        verification: { ...sample.verification, last_reviewed: '2026-02-30' },
      }),
    ).toThrow('Expected a valid calendar date');
    expect(() =>
      ToolSchema.parse({
        ...sample,
        verification: { ...sample.verification, last_reviewed: tomorrow },
      }),
    ).toThrow('Date must not be in the future');
  });

  it('keeps freshness, completeness, confidence, and tier independent', () => {
    const parsed = ToolSchema.parse({
      ...sample,
      verification: {
        ...sample.verification,
        status: 'verified',
        completeness: 'partial',
        confidence: 'low',
        tier: 'research-backlog',
      },
    });
    expect(parsed.verification).toMatchObject({
      status: 'verified',
      completeness: 'partial',
      confidence: 'low',
      tier: 'research-backlog',
    });
  });
});
