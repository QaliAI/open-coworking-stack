import { describe, expect, it } from 'vitest';
import {
  emptyDirectoryFilters,
  licenseBadgeClass,
  matchesDirectoryTool,
  parseCatalogExport,
  parseDirectoryFilters,
  serializeDirectoryFilters,
  withBasePath,
  type CatalogTool,
} from './catalog';

const tool: CatalogTool = {
  id: 'example-tool',
  name: 'Example Tool',
  tagline: 'Books rooms and desks',
  categories: ['booking-scheduling'],
  roles: ['operations-manager'],
  workflows: ['room-booking'],
  problems: ['fill-meeting-rooms'],
  deployment: ['self-hosted'],
  license_class: 'oss-osi-approved',
  spdx: 'MIT',
  cost_model: 'free-self-hosted',
  difficulty: 'easy',
  guide_status: 'full',
  featured: false,
  rank_score: 1,
  homepage: 'https://example.com',
  verification_status: 'verified',
  last_reviewed: '2026-01-01',
};

describe('licenseBadgeClass', () => {
  it('maps known classes', () => {
    expect(licenseBadgeClass('oss-osi-approved')).toContain('license-oss');
    expect(licenseBadgeClass('proprietary')).toContain('license-prop');
  });
});

describe('directory filters', () => {
  it('parses and serializes supported query parameters deterministically', () => {
    const filters = parseDirectoryFilters('?workflow=room-booking&q=desk&ignored=value');

    expect(filters.q).toBe('desk');
    expect(filters.workflow).toBe('room-booking');
    expect(serializeDirectoryFilters(filters)).toBe('q=desk&workflow=room-booking');
  });

  it('matches broader searchable fields and exact filters', () => {
    const filters = emptyDirectoryFilters();
    filters.q = 'fill-meeting-rooms';
    filters.cost = 'free-self-hosted';
    filters.verification = 'verified';

    expect(matchesDirectoryTool(tool, filters)).toBe(true);
    filters.workflow = 'member-onboarding';
    expect(matchesDirectoryTool(tool, filters)).toBe(false);
  });
});

describe('generated catalog validation', () => {
  it('rejects empty generated data', () => {
    expect(() =>
      parseCatalogExport({
        schema_version: '1.0.0',
        generated_at: '2026-01-01T00:00:00.000Z',
        tool_count: 0,
        tools: [],
        stacks: [],
      }),
    ).toThrow('tools must be a non-empty array');
  });
});

describe('withBasePath', () => {
  it('builds links for root and project deployments', () => {
    expect(withBasePath('tools/generated/example-tool/', '/')).toBe(
      '/tools/generated/example-tool/',
    );
    expect(withBasePath('/tools/generated/example-tool/', '/open-stack/')).toBe(
      '/open-stack/tools/generated/example-tool/',
    );
  });
});
