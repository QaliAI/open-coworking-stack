export const stackPriorities = [
  'members-billing',
  'rooms-desks',
  'sales-tours',
  'community-comms',
  'knowledge-sops',
  'automation-reporting',
] as const;

export type StackPriority = (typeof stackPriorities)[number];
export type TechnicalCapacity = 'none' | 'vendor-supported' | 'in-house';
export type DeploymentPreference = 'easiest' | 'balanced' | 'control';
export type DataSensitivity = 'standard' | 'sensitive' | 'regulated';
export type ImplementationWindow = 'one-week' | 'one-month' | 'one-quarter';
export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';

export interface StackBuilderInput {
  operatorName: string;
  sites: number;
  activeMembers: number;
  staffUsers: number;
  priorities: StackPriority[];
  technicalCapacity: TechnicalCapacity;
  deploymentPreference: DeploymentPreference;
  dataSensitivity: DataSensitivity;
  implementationWindow: ImplementationWindow;
  currency: Currency;
  monthlyBudget: number;
  setupBudget: number;
  operatorHoursPerWeek: number;
  currentSystems: string;
  requiredIntegrations: string;
  constraints: string;
}

export type StackTrackId = 'hosted' | 'hybrid' | 'self-hosted';

export interface CatalogToolInfo {
  homepage?: string;
  license_class?: string;
  spdx?: string;
  guide_status?: string;
  verification_status?: string;
}

export interface StackTool {
  name: string;
  purpose: string;
  catalogId?: string;
  catalogEntry?: CatalogToolInfo;
}

export interface CostAssumptions {
  setupServices: number;
  subscriptions: number;
  hosting: number;
  messaging: number;
  paymentFees: number;
  hardware: number;
  setupLaborHours: number;
  monthlyLaborHours: number;
}

export interface StackTrack {
  id: StackTrackId;
  title: string;
  label: string;
  fit: 'recommended' | 'viable' | 'not-recommended';
  reasoning: string;
  tools: StackTool[];
  alternatives: string[];
  coveredTasks: string[];
  gaps: string[];
  systemsOfRecord: string[];
  costNotes: string[];
  costs: CostAssumptions;
  labor: string;
  expertise: string;
  order: string[];
  pilot: string;
  risks: string[];
  backup: string;
  fallback: string;
}

export interface StackRecommendation {
  generatedFor: string;
  summary: string;
  recommendedTrack: StackTrackId;
  doNotSelfHost: boolean;
  guardrail: string;
  input: StackBuilderInput;
  tracks: StackTrack[];
}

export const defaultStackBuilderInput: StackBuilderInput = {
  operatorName: 'Independent coworking operator',
  sites: 1,
  activeMembers: 80,
  staffUsers: 3,
  priorities: ['members-billing', 'rooms-desks', 'sales-tours'],
  technicalCapacity: 'none',
  deploymentPreference: 'easiest',
  dataSensitivity: 'standard',
  implementationWindow: 'one-month',
  currency: 'USD',
  monthlyBudget: 500,
  setupBudget: 1500,
  operatorHoursPerWeek: 4,
  currentSystems: '',
  requiredIntegrations: 'Calendar, accounting, and payment processor',
  constraints: '',
};

export type CatalogLookup = Record<string, CatalogToolInfo>;

const priorityLabels: Record<StackPriority, string> = {
  'members-billing': 'Membership, invoices, and payment follow-up',
  'rooms-desks': 'Room and desk availability and booking',
  'sales-tours': 'Lead capture, tours, and sales follow-up',
  'community-comms': 'Shared member and community communications',
  'knowledge-sops': 'Operating procedures and staff handoffs',
  'automation-reporting': 'Approved handoffs and management reporting',
};

interface ToolChoice {
  name: string;
  purpose: string;
  catalogId: string;
}

const toolChoices: Record<StackTrackId, Record<StackPriority, ToolChoice>> = {
  hosted: {
    'members-billing': { catalogId: 'cobot', name: 'Cobot', purpose: 'Membership, contracts, invoicing, and booking' },
    'rooms-desks': { catalogId: 'cobot', name: 'Cobot', purpose: 'Member-facing room and resource booking' },
    'sales-tours': { catalogId: 'cal-com', name: 'Cal.com Cloud', purpose: 'Tour scheduling with staff calendars' },
    'community-comms': { catalogId: 'brevo', name: 'Brevo', purpose: 'Permissioned operational email and segments' },
    'knowledge-sops': { catalogId: 'notion', name: 'Notion', purpose: 'Hosted procedures and handoff notes' },
    'automation-reporting': {
      catalogId: 'activepieces',
      name: 'Activepieces Cloud',
      purpose: 'Small, reviewed system handoffs',
    },
  },
  hybrid: {
    'members-billing': { catalogId: 'cobot', name: 'Cobot', purpose: 'Hosted financial and member system of record' },
    'rooms-desks': { catalogId: 'seatsurfing', name: 'Seatsurfing', purpose: 'Controlled desk and room booking layer' },
    'sales-tours': { catalogId: 'cal-com', name: 'Cal.com', purpose: 'Managed or supported tour scheduling' },
    'community-comms': { catalogId: 'chatwoot', name: 'Chatwoot', purpose: 'Shared inbox with a named human owner' },
    'knowledge-sops': { catalogId: 'bookstack', name: 'BookStack', purpose: 'Portable operating procedures' },
    'automation-reporting': {
      catalogId: 'activepieces',
      name: 'Activepieces',
      purpose: 'Operator-controlled approved handoffs',
    },
  },
  'self-hosted': {
    'members-billing': {
      catalogId: 'erpnext',
      name: 'ERPNext',
      purpose: 'Member and invoice records with qualified finance review',
    },
    'rooms-desks': { catalogId: 'seatsurfing', name: 'Seatsurfing', purpose: 'Self-hosted desk and room booking' },
    'sales-tours': { catalogId: 'cal-com', name: 'Cal.com', purpose: 'Self-hosted scheduling and calendar handoff' },
    'community-comms': { catalogId: 'chatwoot', name: 'Chatwoot', purpose: 'Self-hosted shared inbox' },
    'knowledge-sops': { catalogId: 'bookstack', name: 'BookStack', purpose: 'Self-hosted procedures and runbooks' },
    'automation-reporting': { catalogId: 'activepieces', name: 'Activepieces', purpose: 'Self-hosted, reviewed automation' },
  },
};

const alternatives: Record<StackTrackId, Record<StackPriority, string>> = {
  hosted: {
    'members-billing': 'Nexudus or Optix, after current pricing and export review',
    'rooms-desks': 'Optix or the booking module in the chosen coworking suite',
    'sales-tours': 'Google Workspace appointment schedules or the suite CRM',
    'community-comms': 'Mailchimp for marketing-only communication',
    'knowledge-sops': 'Google Workspace shared drives and reviewed documents',
    'automation-reporting': 'Manual CSV handoff before adopting automation',
  },
  hybrid: {
    'members-billing': 'Nexudus hosted while keeping approved exports',
    'rooms-desks': 'Cobot booking if a separate booking system adds duplication',
    'sales-tours': 'Easy!Appointments with implementation support',
    'community-comms': 'FreeScout with a supported hosting provider',
    'knowledge-sops': 'Nextcloud Files with a simple controlled folder structure',
    'automation-reporting': 'n8n after license and operational review',
  },
  'self-hosted': {
    'members-billing': 'Odoo Community or Invoice Ninja; neither removes accounting review',
    'rooms-desks': 'LibreBooking for a simpler resource-booking model',
    'sales-tours': 'Easy!Appointments for a smaller scheduling surface',
    'community-comms': 'FreeScout for email-first support',
    'knowledge-sops': 'Nextcloud or Wiki.js with tested export and restore',
    'automation-reporting': 'n8n after license review, or manual scheduled exports',
  },
};

function enrichTool(tool: ToolChoice, catalog: CatalogLookup | undefined): StackTool {
  const entry = catalog?.[tool.catalogId];
  return {
    name: tool.name,
    purpose: tool.purpose,
    catalogId: tool.catalogId,
    catalogEntry: entry,
  };
}

function uniqueTools(track: StackTrackId, priorities: StackPriority[], catalog: CatalogLookup | undefined): StackTool[] {
  const selected = priorities.map((priority) => enrichTool(toolChoices[track][priority], catalog));
  return selected.filter(
    (tool, index) => selected.findIndex(({ catalogId }) => catalogId === tool.catalogId) === index,
  );
}

function moneyScale(input: StackBuilderInput): number {
  return (
    Math.max(1, input.sites) *
    (input.activeMembers > 250 ? 1.5 : input.activeMembers > 100 ? 1.2 : 1)
  );
}

function costsFor(track: StackTrackId, input: StackBuilderInput): CostAssumptions {
  const scale = moneyScale(input);
  const defaults: Record<StackTrackId, CostAssumptions> = {
    hosted: {
      setupServices: 800,
      subscriptions: 280 * scale,
      hosting: 0,
      messaging: 25,
      paymentFees: 0,
      hardware: 0,
      setupLaborHours: 24,
      monthlyLaborHours: 5,
    },
    hybrid: {
      setupServices: 1800,
      subscriptions: 170 * scale,
      hosting: 80 * input.sites,
      messaging: 25,
      paymentFees: 0,
      hardware: 0,
      setupLaborHours: 52,
      monthlyLaborHours: 12,
    },
    'self-hosted': {
      setupServices: 4500,
      subscriptions: 25,
      hosting: 180 * input.sites,
      messaging: 25,
      paymentFees: 0,
      hardware: 600 * input.sites,
      setupLaborHours: 110,
      monthlyLaborHours: 25,
    },
  };
  return Object.fromEntries(
    Object.entries(defaults[track]).map(([key, value]) => [key, Math.round(value)]),
  ) as unknown as CostAssumptions;
}

function selectRecommendation(input: StackBuilderInput): StackTrackId {
  if (input.technicalCapacity === 'none') return 'hosted';
  if (input.deploymentPreference === 'easiest' || input.implementationWindow === 'one-week') {
    return 'hosted';
  }
  if (input.deploymentPreference === 'control' && input.technicalCapacity === 'in-house') {
    return 'self-hosted';
  }
  return 'hybrid';
}

function buildTrack(
  id: StackTrackId,
  input: StackBuilderInput,
  recommendedTrack: StackTrackId,
  catalog: CatalogLookup | undefined,
): StackTrack {
  const labels: Record<StackTrackId, [string, string]> = {
    hosted: ['Hosted', 'easiest'],
    hybrid: ['Hybrid', 'balanced'],
    'self-hosted': ['Self-hosted', 'controlled'],
  };
  const [title, label] = labels[id];
  const noTechnicalSelfHost = id === 'self-hosted' && input.technicalCapacity === 'none';
  const selectedAlternatives = input.priorities.map((priority) => alternatives[id][priority]);
  const commonGaps = [
    'Human approval for pricing, refunds, access exceptions, safety, disputes, and sensitive messages',
    'Configuration-specific privacy, tax, accounting, and legal review',
  ];
  const specific = {
    hosted: {
      reasoning:
        'Minimizes infrastructure ownership and concentrates support, updates, and availability with vendors. Export, contract, configuration, and outage procedures remain operator work.',
      expertise:
        'Product administration, workflow ownership, privacy review, and vendor management.',
      labor:
        'Lower infrastructure labor; allow staff time for configuration, reconciliation, exports, and vendor incidents.',
      gaps: [
        'Vendor pricing, feature, data-location, and export terms require current confirmation',
      ],
      systems: [
        'Chosen coworking suite: members, contracts, bookings, and invoices',
        'Payment processor: payment instruments and transaction status',
        'Accounting platform: approved statutory books',
      ],
      order: [
        'Name owners and document the current member-to-cash workflow',
        'Configure one site without automation',
        'Reconcile member, booking, invoice, and payment records',
        'Add communication and one approved handoff',
      ],
      pilot:
        'Run one membership plan, one room, two staff users, and synthetic payments for two weeks.',
      risks: [
        'Vendor lock-in or export limitations',
        'Configuration errors can affect many members',
      ],
      backup:
        'Schedule encrypted exports of members, future bookings, invoices, configuration, and procedures; test reading them.',
      fallback:
        'Keep a current staff contact list, availability sheet, manual check-in list, and invoice exception queue.',
      notes: [
        'Cash cost is usually subscription-led',
        'Confirm every quote and payment fee directly',
      ],
    },
    hybrid: {
      reasoning:
        'Keeps finance/member records in a supported service while placing selected booking, knowledge, inbox, or automation workloads under operator control.',
      expertise:
        'Application administration plus a named internal or contracted maintainer for hosted components.',
      labor:
        'Moderate setup and recurring patch, monitor, backup, restore-test, and integration-reconciliation labor.',
      gaps: [
        'Cross-system identity, duplicate records, and support boundaries need explicit owners',
      ],
      systems: [
        'Hosted coworking suite: members, contracts, invoices, and approved booking scope',
        'Payment processor: payment instruments and transaction status',
        'Each controlled app: only its declared operational records',
      ],
      order: [
        'Stabilize one hosted system of record',
        'Deploy monitoring and tested backup before controlled applications',
        'Add one bounded controlled application',
        'Reconcile manually before enabling one-way automation',
      ],
      pilot:
        'Use synthetic records and one noncritical workflow at one site for 30 days, including an outage drill.',
      risks: [
        'Integration drift and unclear support ownership',
        'Backups may succeed while restores fail',
      ],
      backup:
        'Export the hosted system and run application-consistent encrypted backups for controlled apps; perform a restore drill.',
      fallback:
        'Disable integrations independently, preserve queues, and operate the affected workflow from reviewed CSV/manual registers.',
      notes: [
        'Include both subscriptions and infrastructure',
        'Budget for contracted maintenance if no in-house owner',
      ],
    },
    'self-hosted': {
      reasoning: noTechnicalSelfHost
        ? 'Do not self-host this operating stack. No technical owner is available for security updates, monitoring, incidents, backups, restores, and upgrades; lower license spend does not remove that work.'
        : 'Provides the most infrastructure and data-path control, but the operator owns availability, security, upgrades, recovery, and integration behavior.',
      expertise: noTechnicalSelfHost
        ? 'Unavailable today. Requires a named experienced administrator and qualified security, privacy, and finance support.'
        : 'Experienced Linux/container, database, network, identity, observability, security, and recovery administration.',
      labor:
        'Highest setup and recurring labor; on-call incident coverage and independent restore verification are required.',
      gaps: [
        'Payment processing, banking, email delivery, tax conclusions, and life-safety access should remain with qualified services/owners',
      ],
      systems: [
        'ERP/member platform: member, contract, booking, and invoice operating records',
        'Payment processor: payment instruments and transaction status',
        'Accounting platform: approved statutory books after reconciliation',
      ],
      order: [
        'Hire/name the technical and business owners',
        'Build identity, monitoring, backup, restore, and patch procedures',
        'Pilot one nonfinancial application with synthetic data',
        'Migrate bounded records only after recovery and exit tests pass',
      ],
      pilot:
        'Restore a synthetic staging deployment onto clean infrastructure, then run one noncritical workflow for 30 days.',
      risks: [
        'Security or availability failure without staffed response',
        'Failed upgrades or incomplete restores',
        'Hidden labor can exceed subscription savings',
      ],
      backup:
        'Use encrypted off-site, application-consistent backups with separate key custody and scheduled clean-room restore tests.',
      fallback:
        'Maintain a warm documented manual workflow and a supported hosted-provider shortlist; export and reconcile before cutover.',
      notes: [
        'Software license cost is not total cost',
        'Include infrastructure, labor, specialist review, and incident coverage',
      ],
    },
  }[id];

  return {
    id,
    title,
    label,
    fit: noTechnicalSelfHost
      ? 'not-recommended'
      : id === recommendedTrack
        ? 'recommended'
        : 'viable',
    reasoning: specific.reasoning,
    tools: uniqueTools(id, input.priorities, catalog),
    alternatives: selectedAlternatives,
    coveredTasks: input.priorities.map((priority) => priorityLabels[priority]),
    gaps: [...specific.gaps, ...commonGaps],
    systemsOfRecord: specific.systems,
    costNotes: specific.notes,
    costs: costsFor(id, input),
    labor: specific.labor,
    expertise: specific.expertise,
    order: specific.order,
    pilot: specific.pilot,
    risks: specific.risks,
    backup: specific.backup,
    fallback: specific.fallback,
  };
}

function cleanNumber(value: number, fallback: number, minimum = 0): number {
  return Number.isFinite(value) ? Math.max(minimum, Math.round(value)) : fallback;
}

export function normalizeStackBuilderInput(input: StackBuilderInput): StackBuilderInput {
  const priorities = stackPriorities.filter((priority) => input.priorities.includes(priority));
  return {
    ...input,
    operatorName: input.operatorName.trim() || defaultStackBuilderInput.operatorName,
    sites: cleanNumber(input.sites, 1, 1),
    activeMembers: cleanNumber(input.activeMembers, 0),
    staffUsers: cleanNumber(input.staffUsers, 1, 1),
    monthlyBudget: cleanNumber(input.monthlyBudget, 0),
    setupBudget: cleanNumber(input.setupBudget, 0),
    operatorHoursPerWeek: cleanNumber(input.operatorHoursPerWeek, 0),
    priorities: priorities.length ? priorities : ['members-billing'],
    currentSystems: input.currentSystems.trim(),
    requiredIntegrations: input.requiredIntegrations.trim(),
    constraints: input.constraints.trim(),
  };
}

export function recommendStack(rawInput: StackBuilderInput, catalog?: CatalogLookup): StackRecommendation {
  const input = normalizeStackBuilderInput(rawInput);
  const recommendedTrack = selectRecommendation(input);
  const doNotSelfHost = input.technicalCapacity === 'none';
  return {
    generatedFor: input.operatorName,
    summary: `${input.sites} site${input.sites === 1 ? '' : 's'}, ${input.activeMembers} active members, ${input.staffUsers} staff users, and ${input.priorities.length} selected outcome areas.`,
    recommendedTrack,
    doNotSelfHost,
    guardrail: doNotSelfHost
      ? 'Strong result: do not self-host the operating stack without a named, experienced technical owner. Choose Hosted/easiest now; reconsider Hybrid only with contracted support and tested recovery.'
      : 'Treat this as a shortlist for a bounded pilot, not procurement or production approval. Verify current pricing, licensing, privacy, security, exports, and integrations.',
    input,
    tracks: (['hosted', 'hybrid', 'self-hosted'] as const).map((id) =>
      buildTrack(id, input, recommendedTrack, catalog),
    ),
  };
}

function list(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

function toolLine(tool: StackTool): string {
  let line = `${tool.name}: ${tool.purpose}`;
  if (tool.catalogEntry) {
    const entry = tool.catalogEntry;
    if (entry.homepage) line += ` (${entry.homepage})`;
    if (entry.license_class) line += ` [${entry.license_class}]`;
  } else if (tool.catalogId) {
    line += ` (catalog ID: ${tool.catalogId} — not found in generated catalog; verify tool metadata)`;
  }
  return line;
}

export function stackRecommendationToMarkdown(result: StackRecommendation): string {
  const input = result.input;
  const sections = result.tracks.map((track) => {
    const cost = track.costs;
    return `## ${track.title} / ${track.label}${track.fit === 'recommended' ? ' (recommended)' : track.fit === 'not-recommended' ? ' (not recommended)' : ''}

### Reasoning
${track.reasoning}

### Tools
${list(track.tools.map(toolLine))}

### Alternatives
${list(track.alternatives)}

### Covered tasks
${list(track.coveredTasks)}

### Gaps
${list(track.gaps)}

### Systems of record
${list(track.systemsOfRecord)}

### Editable cost assumptions (${input.currency}) (fabricated demonstration data)
- Setup services: ${cost.setupServices}
- Monthly subscriptions: ${cost.subscriptions}
- Monthly hosting: ${cost.hosting}
- Monthly messaging: ${cost.messaging}
- Monthly payment fees (enter quoted estimate): ${cost.paymentFees}
- Hardware: ${cost.hardware}
- Setup labor hours: ${cost.setupLaborHours}
- Monthly labor hours: ${cost.monthlyLaborHours}
${list(track.costNotes)}

### Labor and expertise
${track.labor}

${track.expertise}

### Implementation order
${track.order.map((item, index) => `${index + 1}. ${item}`).join('\n')}

### Pilot
${track.pilot}

### Risks
${list(track.risks)}

### Backup
${track.backup}

### Fallback
${track.fallback}`;
  });

  return `# Coworking stack builder result: ${result.generatedFor}

${result.summary}

**Recommendation:** ${result.recommendedTrack}

> ${result.guardrail}

## Inputs
- Sites: ${input.sites}
- Active members: ${input.activeMembers}
- Staff users: ${input.staffUsers}
- Priorities: ${input.priorities.map((priority) => priorityLabels[priority]).join('; ')}
- Technical capacity: ${input.technicalCapacity}
- Deployment preference: ${input.deploymentPreference}
- Data sensitivity: ${input.dataSensitivity}
- Implementation window: ${input.implementationWindow}
- Monthly cash budget (${input.currency}): ${input.monthlyBudget}
- Setup cash budget (${input.currency}): ${input.setupBudget}
- Operator hours available each week: ${input.operatorHoursPerWeek}
- Current systems: ${input.currentSystems || 'None entered'}
- Required integrations: ${input.requiredIntegrations || 'None entered'}
- Constraints: ${input.constraints || 'None entered'}

${sections.join('\n\n')}

## Boundary
This deterministic planning aid does not verify current prices, guarantee fit or savings, or replace security, privacy, legal, accounting, tax, accessibility, or procurement review. Staff remain responsible for approvals, exceptions, member care, safety, and recovery.
`;
}
