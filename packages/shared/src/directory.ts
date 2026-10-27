export interface CatalogTool {
  id: string;
  name: string;
  tagline: string;
  categories: string[];
  roles: string[];
  workflows: string[];
  problems: string[];
  deployment: string[];
  license_class: string;
  spdx: string | null;
  cost_model: string;
  difficulty: string;
  guide_status: string;
  featured: boolean;
  rank_score: number;
  homepage: string;
  repository?: string;
  description?: string;
  tags?: string[];
  coworking_use_cases?: string[];
  verification_status: string;
  last_reviewed: string;
  verification_completeness?: string;
  verification_confidence?: string;
  verification_tier?: string;
  maintenance_burden?: string;
  skills_required?: string[];
  task_fits?: CatalogTaskFit[];
}

export interface CatalogTaskFit {
  task_id: string;
  relationship: string;
  automation_level: string;
  role_assisted: string;
  manual_process: string;
  human_work: string;
  failure_consequence: string;
  pilot_metric: string;
}

export interface CatalogExport {
  schema_version: string;
  generated_at: string;
  tool_count: number;
  stack_count: number;
  workflow_count: number;
  task_count: number;
  role_count: number;
  tools: CatalogTool[];
  stacks: Array<{
    id: string;
    name: string;
    tagline: string;
    budget: string;
    components: string[];
  }>;
  workflows: Array<{
    id: string;
    name: string;
    description: string;
    primary_roles: string[];
    stages: Array<{ id: string; name: string; suggested_tool_ids: string[] }>;
    last_reviewed: string;
  }>;
  tasks: unknown[];
  roles: unknown[];
}

export const directoryFilterKeys = [
  'q',
  'collection',
  'license',
  'category',
  'role',
  'problem',
  'workflow',
  'deployment',
  'cost',
  'verification',
  'tier',
  'completeness',
  'confidence',
  'difficulty',
  'guide',
] as const;

export type DirectoryFilterKey = (typeof directoryFilterKeys)[number];
export type DirectoryFilters = Record<DirectoryFilterKey, string>;

export function emptyDirectoryFilters(): DirectoryFilters {
  return Object.fromEntries(directoryFilterKeys.map((key) => [key, ''])) as DirectoryFilters;
}

export function parseDirectoryFilters(search: string | URLSearchParams): DirectoryFilters {
  const params = typeof search === 'string' ? new URLSearchParams(search) : search;
  const filters = emptyDirectoryFilters();
  for (const key of directoryFilterKeys) filters[key] = params.get(key)?.trim() ?? '';
  return filters;
}

export function serializeDirectoryFilters(filters: DirectoryFilters): string {
  const params = new URLSearchParams();
  for (const key of directoryFilterKeys) {
    const value = filters[key].trim();
    if (value) params.set(key, value);
  }
  return params.toString();
}

export function matchesDirectoryTool(tool: CatalogTool, filters: DirectoryFilters): boolean {
  const query = normalizeSearch(filters.q);
  const searchable = [
    tool.id,
    tool.name,
    tool.name.replace(/([a-z])([A-Z])/g, '$1 $2'),
    tool.id.replaceAll('-', ''),
    tool.tagline,
    tool.description ?? '',
    ...(tool.tags ?? []),
    ...(tool.coworking_use_cases ?? []),
    tool.license_class,
    tool.spdx ?? '',
    tool.cost_model,
    tool.difficulty,
    tool.guide_status,
    tool.verification_status,
    tool.verification_tier ?? '',
    tool.verification_completeness ?? '',
    tool.verification_confidence ?? '',
    tool.homepage,
    ...tool.categories,
    ...tool.roles,
    ...tool.workflows,
    ...tool.problems,
    ...tool.deployment,
    ...(tool.task_fits ?? []).flatMap((fit) => [
      fit.task_id,
      fit.relationship,
      fit.automation_level,
      fit.role_assisted,
      fit.manual_process,
      fit.human_work,
      fit.pilot_metric,
    ]),
  ].join(' ');
  const normalizedSearchable = normalizeSearch(searchable);
  const collection = categoryShortcuts.find((item) => item.id === filters.collection);

  return (
    (!query || query.split(' ').every((word) => normalizedSearchable.includes(word))) &&
    (!filters.collection ||
      Boolean(
        collection &&
        (collection.categories.some((category) => tool.categories.includes(category)) ||
          collection.tags?.some((tag) => tool.tags?.includes(tag))),
      )) &&
    (!filters.license || tool.license_class === filters.license) &&
    (!filters.category || tool.categories.includes(filters.category)) &&
    (!filters.role ||
      tool.roles.includes(filters.role) ||
      (tool.task_fits ?? []).some((fit) => fit.role_assisted === filters.role)) &&
    (!filters.problem || tool.problems.includes(filters.problem)) &&
    (!filters.workflow || tool.workflows.includes(filters.workflow)) &&
    (!filters.deployment || tool.deployment.includes(filters.deployment)) &&
    (!filters.cost || tool.cost_model === filters.cost) &&
    (!filters.verification || tool.verification_status === filters.verification) &&
    (!filters.tier || tool.verification_tier === filters.tier) &&
    (!filters.completeness || tool.verification_completeness === filters.completeness) &&
    (!filters.confidence || tool.verification_confidence === filters.confidence) &&
    (!filters.difficulty || tool.difficulty === filters.difficulty) &&
    (!filters.guide || tool.guide_status === filters.guide)
  );
}

// Presentation groups map to canonical categories; they never create additional tool records.
export const categoryShortcuts: ReadonlyArray<{
  id: string;
  label: string;
  categories: readonly string[];
  tags?: readonly string[];
}> = [
  { id: 'sales-crm', label: 'Sales & CRM', categories: ['membership-crm'] },
  { id: 'tours-scheduling', label: 'Tours & Scheduling', categories: ['booking-scheduling'] },
  {
    id: 'desks-rooms',
    label: 'Desks & Meeting Rooms',
    categories: ['booking-scheduling', 'maps-wayfinding'],
  },
  {
    id: 'documents-signatures',
    label: 'Documents & E-Signatures',
    categories: ['legal-contracts', 'file-storage', 'knowledge-base'],
  },
  {
    id: 'finance-billing',
    label: 'Finance & Billing',
    categories: ['billing-payments', 'accounting', 'pos-retail'],
  },
  {
    id: 'marketing-seo',
    label: 'Marketing & SEO',
    categories: ['email-marketing', 'website-cms', 'forms-surveys'],
    tags: ['marketing', 'social media'],
  },
  {
    id: 'events-community',
    label: 'Events & Community',
    categories: ['event-management', 'community-engagement', 'communication-chat'],
  },
  { id: 'automation-ai', label: 'Automation & AI', categories: ['automation-integration'] },
  {
    id: 'virtual-office-mailroom',
    label: 'Virtual Office & Mailroom',
    categories: ['mailroom-virtual-office'],
  },
  {
    id: 'facilities-assets',
    label: 'Facilities & Assets',
    categories: ['facility-operations', 'digital-signage', 'iot-sensors'],
  },
  {
    id: 'analytics-reporting',
    label: 'Analytics & Reporting',
    categories: ['analytics-bi', 'monitoring-observability'],
  },
  {
    id: 'it-security',
    label: 'IT & Security',
    categories: [
      'access-control',
      'network-wifi',
      'identity-sso',
      'password-secrets',
      'backup-recovery',
      'security-compliance',
    ],
  },
] as const;

function normalizeSearch(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/([a-z])\.(?=[a-z])/g, '$1')
    .replace(/e[\s-]?signatures?/g, 'signature')
    .replace(/\bcrm\b/g, 'customer relationship')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(
      /\b(rooms|tours|invoices|signatures|desks|bookings|agreements|events|assets)\b/g,
      (word) => word.slice(0, -1),
    )
    .trim();
}

export function withBasePath(pathname: string, base: string): string {
  const normalizedBase = base === '/' ? '/' : `/${base.replace(/^\/+|\/+$/g, '')}/`;
  return `${normalizedBase}${pathname.replace(/^\/+/, '')}`;
}

export function parseCatalogExport(value: unknown): CatalogExport {
  if (!isRecord(value)) throw new Error('catalog root must be an object');
  if (typeof value.schema_version !== 'string') throw new Error('schema_version must be a string');
  if (typeof value.generated_at !== 'string' || Number.isNaN(Date.parse(value.generated_at))) {
    throw new Error('generated_at must be a valid date');
  }
  if (!Array.isArray(value.tools) || value.tools.length === 0) {
    throw new Error('tools must be a non-empty array');
  }
  if (!Number.isInteger(value.tool_count) || value.tool_count !== value.tools.length) {
    throw new Error('tool_count must match tools.length');
  }
  if (!Array.isArray(value.stacks)) throw new Error('stacks must be an array');
  if (!Number.isInteger(value.stack_count) || value.stack_count !== value.stacks.length) {
    throw new Error('stack_count must match stacks.length');
  }
  if (!Array.isArray(value.workflows)) throw new Error('workflows must be an array');
  if (!Number.isInteger(value.workflow_count) || value.workflow_count !== value.workflows.length) {
    throw new Error('workflow_count must match workflows.length');
  }
  if (!Array.isArray(value.tasks)) throw new Error('tasks must be an array');
  if (!Number.isInteger(value.task_count) || value.task_count !== value.tasks.length) {
    throw new Error('task_count must match tasks.length');
  }
  if (!Array.isArray(value.roles)) throw new Error('roles must be an array');
  if (!Number.isInteger(value.role_count) || value.role_count !== value.roles.length) {
    throw new Error('role_count must match roles.length');
  }

  value.tools.forEach((tool, index) => validateTool(tool, index));
  value.stacks.forEach((stack, index) => {
    if (
      !isRecord(stack) ||
      !hasStrings(stack, ['id', 'name', 'tagline', 'budget']) ||
      !isStringArray(stack.components)
    ) {
      throw new Error(`stacks[${index}] has an invalid shape`);
    }
  });

  return value as unknown as CatalogExport;
}

function validateTool(value: unknown, index: number): asserts value is CatalogTool {
  if (!isRecord(value)) throw new Error(`tools[${index}] must be an object`);
  const stringFields = [
    'id',
    'name',
    'tagline',
    'license_class',
    'cost_model',
    'difficulty',
    'guide_status',
    'homepage',
    'verification_status',
    'last_reviewed',
  ];
  const arrayFields = ['categories', 'roles', 'workflows', 'problems', 'deployment'];
  if (
    !hasStrings(value, stringFields) ||
    !arrayFields.every((field) => isStringArray(value[field])) ||
    !(value.spdx === null || typeof value.spdx === 'string') ||
    typeof value.featured !== 'boolean' ||
    typeof value.rank_score !== 'number' ||
    !Number.isFinite(value.rank_score) ||
    !hasOptionalStrings(value, [
      'repository',
      'description',
      'verification_completeness',
      'verification_confidence',
      'verification_tier',
      'maintenance_burden',
    ]) ||
    !(value.skills_required === undefined || isStringArray(value.skills_required)) ||
    !(value.tags === undefined || isStringArray(value.tags)) ||
    !(value.coworking_use_cases === undefined || isStringArray(value.coworking_use_cases)) ||
    !(value.task_fits === undefined || isTaskFitArray(value.task_fits))
  ) {
    throw new Error(`tools[${index}] has an invalid shape`);
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function hasStrings(value: Record<string, unknown>, fields: string[]): boolean {
  return fields.every((field) => typeof value[field] === 'string');
}

function hasOptionalStrings(value: Record<string, unknown>, fields: string[]): boolean {
  return fields.every((field) => value[field] === undefined || typeof value[field] === 'string');
}

function isTaskFitArray(value: unknown): value is CatalogTaskFit[] {
  const fields = [
    'task_id',
    'relationship',
    'automation_level',
    'role_assisted',
    'manual_process',
    'human_work',
    'failure_consequence',
    'pilot_metric',
  ];
  return Array.isArray(value) && value.every((fit) => isRecord(fit) && hasStrings(fit, fields));
}

const readableLabelOverrides: Record<string, string> = {
  'membership-crm': 'Sales & Membership CRM',
  'booking-scheduling': 'Booking & Scheduling',
  'billing-payments': 'Billing & Payments',
  'community-engagement': 'Community & Social Publishing',
  'communication-chat': 'Communication & Chat',
  'website-cms': 'Websites & Content Management',
  'forms-surveys': 'Forms & Surveys',
  'helpdesk-support': 'Helpdesk & Support',
  'facility-operations': 'Facilities & Assets',
  'mailroom-virtual-office': 'Virtual Office & Mailroom',
  'network-wifi': 'Network & Wi-Fi',
  'identity-sso': 'Identity & Single Sign-On',
  'password-secrets': 'Passwords & Secrets',
  'automation-integration': 'Automation & AI',
  'analytics-bi': 'Analytics & Reporting',
  'monitoring-observability': 'Monitoring & Alerts',
  'backup-recovery': 'Backup & Recovery',
  'pos-retail': 'Point of Sale & Retail',
  'legal-contracts': 'Documents & E-Signatures',
  'hr-people': 'Staff & HR',
  'security-compliance': 'Security & Compliance',
  'maps-wayfinding': 'Maps & Wayfinding',
  'iot-sensors': 'Sensors & Building Devices',
  'self-hosted': 'Self-hosted',
  proprietary: 'Paid Software',
  'free-trial': 'Free Trial — Time-Limited',
  'oss-osi-approved': 'Open Source — Free Software',
  'open-core': 'Open Core — Some Paid Features',
  'source-available': 'Source Available — Check License',
  'fair-code': 'Source Available — Fair-Code Terms',
  'free-saas': 'Free Hosted Plan',
  'free-tier': 'Free Hosted Plan',
  'freemium-saas': 'Freemium',
  'managed-saas': 'Hosted service',
  'free-self-hosted': 'Free — you host it',
  'open-core-paid-features': 'Free core, paid extras',
  subscription: 'Paid Software — Subscription',
  'partially-verified': 'Partially verified',
  'verified-core': 'Fully verified',
  evaluated: 'Reviewed',
  freemium: 'Free plan, paid upgrades',
  'research-backlog': 'Not yet reviewed',
  'commercial-benchmark': 'Paid alternative',
  'historical-archived': 'Historical / archived',
  'avoid-new-deployment': 'Avoid for new deployments',
  oss: 'Open source',
  saas: 'SaaS',
};

export function readableLabel(value: string): string {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return 'Not recorded';
  if (readableLabelOverrides[normalized]) return readableLabelOverrides[normalized];
  return normalized
    .split(/[-_]/)
    .filter(Boolean)
    .map(
      (word) => readableLabelOverrides[word] ?? `${word[0]?.toUpperCase() ?? ''}${word.slice(1)}`,
    )
    .join(' ');
}

export function licenseBadgeClass(licenseClass: string): string {
  if (licenseClass === 'oss-osi-approved') return 'ocs-badge license-oss';
  if (
    licenseClass === 'source-available' ||
    licenseClass === 'fair-code' ||
    licenseClass === 'open-core'
  ) {
    return 'ocs-badge license-source';
  }
  if (
    licenseClass === 'freemium-saas' ||
    licenseClass === 'free-saas' ||
    licenseClass === 'free-trial'
  ) {
    return 'ocs-badge license-saas';
  }
  if (licenseClass === 'proprietary') return 'ocs-badge license-prop';
  return 'ocs-badge';
}
