import { z } from 'zod';
import {
  CategorySchema,
  CostModelSchema,
  DeploymentModelSchema,
  GuideStatusSchema,
  ImplementationDifficultySchema,
  LicenseClassSchema,
  MaintenanceBurdenSchema,
  MaturitySchema,
  ProblemSchema,
  RoleSchema,
  VerificationStatusSchema,
  WorkflowSchema,
} from './enums.js';
import { IsoDateSchema } from './date.js';
import { OperatorRoleIdSchema } from './role.js';
import { TaskIdSchema } from './task.js';

const HttpUrl = z.string().url();

export const UnverifiedString = z.union([z.string().min(1), z.literal('unverified')]);

export const ToolLinkSchema = z.object({
  label: z.string().min(1),
  url: HttpUrl,
  kind: z
    .enum(['homepage', 'docs', 'repo', 'pricing', 'demo', 'security', 'status', 'other'])
    .default('other'),
});

export const LicenseInfoSchema = z.object({
  class: LicenseClassSchema,
  spdx: z.string().optional(),
  name: z.string().optional(),
  source_url: HttpUrl.optional(),
  notes: z.string().optional(),
  verified_on: IsoDateSchema.optional(),
});

export const CostInfoSchema = z.object({
  model: CostModelSchema,
  summary: z.string().min(1),
  free_tier_notes: z.string().optional(),
  self_host_cost_notes: z.string().optional(),
  currency_caveat: z
    .string()
    .default('Pricing changes frequently; re-check official pricing before budget decisions.'),
  pricing_url: HttpUrl.optional(),
  verified_on: IsoDateSchema.optional(),
  confidence: VerificationStatusSchema.default('partially-verified'),
});

export const ImplementationInfoSchema = z.object({
  difficulty: ImplementationDifficultySchema,
  maintenance_burden: MaintenanceBurdenSchema.default('unknown'),
  skills_required: z.array(z.string()).default([]),
  typical_time_to_first_value: z.string().optional(),
  smallest_useful_experiment: z.string().min(1),
});

export const DataPrivacySchema = z.object({
  data_held: z.array(z.string()).min(1),
  personal_data: z.boolean().default(true),
  payment_data: z.boolean().default(false),
  notes: z.string().optional(),
  privacy_url: HttpUrl.optional(),
});

export const RiskNotesSchema = z.object({
  vendor_lock_in: z.string().optional(),
  security: z.string().optional(),
  compliance: z.string().optional(),
  licensing: z.string().optional(),
  operational: z.string().optional(),
});

export const VerificationSchema = z.object({
  status: VerificationStatusSchema,
  last_reviewed: IsoDateSchema,
  sources: z.array(HttpUrl).min(1),
  notes: z.string().optional(),
  reviewer: z.string().optional(),
  completeness: z
    .enum([
      'unresearched',
      'partial',
      'metadata-verified',
      'editorially-reviewed',
      'implementation-tested',
      'production-evaluated',
    ])
    .default('partial'),
  confidence: z.enum(['high', 'medium', 'low', 'unknown']).default('low'),
  tier: z
    .enum([
      'verified-core',
      'evaluated',
      'research-backlog',
      'historical-archived',
      'commercial-benchmark',
      'avoid-new-deployment',
    ])
    .default('research-backlog'),
  evidence: z
    .array(
      z.object({
        kind: z.enum([
          'homepage',
          'repository',
          'license',
          'pricing',
          'free-limits',
          'maintenance',
          'release',
          'docs',
          'docker',
          'api',
          'webhooks',
          'backup-export',
          'security',
          'integrations',
          'runtime-tests',
          'operator-review',
        ]),
        source: HttpUrl,
        verified_on: IsoDateSchema,
        notes: z.string().optional(),
      }),
    )
    .default([]),
});

export const TaskRelationshipSchema = z.enum([
  'direct functional substitute',
  'partial automation',
  'assistant',
  'system of record',
  'integration layer',
  'reporting layer',
  'infrastructure',
  'unsuitable as replacement',
]);

export const AutomationLevelSchema = z.enum([
  'manual support',
  'assisted',
  'partially automated',
  'mostly automated with review',
  'low-risk fully automated',
]);

export const ToolTaskFitSchema = z.object({
  task_id: TaskIdSchema,
  relationship: TaskRelationshipSchema,
  automation_level: AutomationLevelSchema,
  what_manual_process_it_can_replace: z.string().min(1),
  what_it_takes_off_the_team: z.string().min(1),
  role_assisted: OperatorRoleIdSchema,
  what_remains_human: z.string().min(1),
  prerequisites: z.array(z.string().min(1)).min(1),
  failure_consequence: z.string().min(1),
  pilot_metric: z.string().min(1),
  evidence: z.array(HttpUrl).min(1),
  confidence: z.enum(['high', 'medium', 'low', 'unknown']),
});

export const IntegrationSchema = z.object({
  name: z.string(),
  direction: z.enum(['inbound', 'outbound', 'bidirectional', 'manual']).default('bidirectional'),
  method: z.enum(['api', 'webhook', 'zapier-like', 'csv', 'sso', 'plugin', 'other']).default('api'),
  notes: z.string().optional(),
  verified: z.boolean().default(false),
});

export const ToolSchema = z
  .object({
    schema_version: z.literal('1.0.0'),
    id: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'id must be kebab-case')
      .min(2)
      .max(64),
    name: z.string().min(1),
    tagline: z.string().min(1).max(200),
    description: z.string().min(40),
    status: z.enum(['active', 'deprecated', 'needs-review']).default('active'),
    categories: z.array(CategorySchema).min(1),
    secondary_categories: z.array(CategorySchema).default([]),
    roles: z.array(RoleSchema).min(1),
    workflows: z.array(WorkflowSchema).min(1),
    problems: z.array(ProblemSchema).min(1),
    deployment: z.array(DeploymentModelSchema).min(1),
    maturity: MaturitySchema.default('unknown'),
    license: LicenseInfoSchema,
    cost: CostInfoSchema,
    implementation: ImplementationInfoSchema,
    homepage: HttpUrl,
    repository: HttpUrl.optional(),
    documentation: HttpUrl.optional(),
    links: z.array(ToolLinkSchema).default([]),
    tasks_reduced_or_augmented: z.array(z.string()).min(1),
    human_oversight_still_needed: z.array(z.string()).min(1),
    task_fits: z.array(ToolTaskFitSchema).default([]),
    data_privacy: DataPrivacySchema,
    risks: RiskNotesSchema.default({}),
    integrations: z.array(IntegrationSchema).default([]),
    related_tools: z.array(z.string()).default([]),
    compose_pack: z.string().optional(),
    guide_status: GuideStatusSchema.default('stub'),
    guide_path: z.string().optional(),
    tags: z.array(z.string()).default([]),
    verification: VerificationSchema,
    featured: z.boolean().default(false),
    rank_score: z.number().min(0).max(100).default(50),
  })
  .strict();

export type Tool = z.infer<typeof ToolSchema>;
export type ToolInput = z.input<typeof ToolSchema>;
