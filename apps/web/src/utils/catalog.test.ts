import { describe, expect, it } from 'vitest';
import {
  emptyDirectoryFilters,
  licenseBadgeClass,
  matchesDirectoryTool,
  parseCatalogExport,
  parseDirectoryFilters,
  readableLabel,
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
  verification_completeness: 'metadata-verified',
  verification_confidence: 'medium',
  verification_tier: 'evaluated',
  task_fits: [
    {
      task_id: 'manage-room-bookings',
      relationship: 'partial automation',
      automation_level: 'assisted',
      role_assisted: 'operations-manager',
      manual_process: 'Updating a shared booking sheet',
      human_work: 'Resolve exceptions and approve policies',
      failure_consequence: 'A room may be double booked',
      pilot_metric: 'Ten bookings reconcile without conflicts',
    },
  ],
};

describe('readableLabel', () => {
  it('turns catalog slugs into operator-readable labels', () => {
    expect(readableLabel('operations-manager')).toBe('Operations Manager');
    expect(readableLabel('oss-osi-approved')).toBe('Open Source — Free Software');
    expect(readableLabel('managed-saas')).toBe('Hosted service');
    expect(readableLabel('research-backlog')).toBe('Research backlog');
  });

  it('never relabels research backlog as Verified Core', () => {
    expect(readableLabel('research-backlog')).not.toBe('Verified Core');
  });
});

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
    filters.tier = 'evaluated';

    expect(matchesDirectoryTool(tool, filters)).toBe(true);
    filters.workflow = 'member-onboarding';
    expect(matchesDirectoryTool(tool, filters)).toBe(false);
  });

  it('searches reviewed task-fit language', () => {
    const filters = emptyDirectoryFilters();
    filters.q = 'shared booking sheet';

    expect(matchesDirectoryTool(tool, filters)).toBe(true);
  });

  it('normalizes case, punctuation, plurals and word order for operator searches', () => {
    const filters = emptyDirectoryFilters();
    filters.q = 'DESKS, ROOM';
    expect(matchesDirectoryTool(tool, filters)).toBe(true);
    filters.q = 'not-a-real-product';
    expect(matchesDirectoryTool(tool, filters)).toBe(false);
  });

  it('searches canonical description, tags and coworking uses with category groups', () => {
    const entry = {
      ...tool,
      tags: ['social media'],
      description: 'Prepare event announcements',
      coworking_use_cases: ['Schedule approved marketing posts'],
    };
    const filters = emptyDirectoryFilters();
    filters.q = 'marketing';
    filters.collection = 'marketing-seo';
    expect(matchesDirectoryTool(entry, filters)).toBe(true);
    filters.collection = 'it-security';
    expect(matchesDirectoryTool(entry, filters)).toBe(false);
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
