import { z } from 'zod';
import { ProblemSchema, RoleSchema, WorkflowSchema } from './enums.js';
import { IsoDateSchema } from './date.js';

export const StackComponentSchema = z.object({
  tool_id: z.string().min(1),
  role_in_stack: z.string().min(1),
  required: z.boolean().default(true),
  notes: z.string().optional(),
});

export const StackSchema = z
  .object({
    schema_version: z.literal('1.0.0'),
    id: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .min(2)
      .max(64),
    name: z.string().min(1),
    tagline: z.string().min(1),
    description: z.string().min(40),
    audience_roles: z.array(RoleSchema).min(1),
    problems_solved: z.array(ProblemSchema).min(1),
    workflows: z.array(WorkflowSchema).min(1),
    monthly_cash_budget_band: z.enum([
      'near-zero',
      'under-50',
      'under-200',
      'under-500',
      'flexible',
    ]),
    self_host_heavy: z.boolean().default(false),
    components: z.array(StackComponentSchema).min(2),
    assumptions: z.array(z.string()).min(1),
    risks: z.array(z.string()).min(1),
    getting_started: z.array(z.string()).min(1),
    operator_profile: z.string().default('Not yet documented.'),
    number_of_locations: z.string().default('Not yet documented.'),
    team_size: z.string().default('Not yet documented.'),
    products_offered: z.array(z.string()).default([]),
    technical_skill_required: z.string().default('Not yet documented.'),
    tasks_covered: z.array(z.string()).default([]),
    tasks_not_covered: z.array(z.string()).default([]),
    systems_of_record: z.array(z.string()).default([]),
    data_flow: z.array(z.string()).default([]),
    implementation_order: z.array(z.string()).default([]),
    cost_assumptions: z
      .object({
        monthly_cash: z.string(),
        setup_labor: z.string(),
        maintenance_labor: z.string(),
        messaging_email_sms: z.string(),
        hosting_storage: z.string(),
        notes: z.array(z.string()).default([]),
        pricing_sources: z.array(z.string().url()).default([]),
      })
      .optional(),
    human_owners: z.array(z.string()).default([]),
    security_boundaries: z.array(z.string()).default([]),
    backup_and_recovery: z.array(z.string()).default([]),
    pilot_plan: z.array(z.string()).default([]),
    rollout_30_day: z.array(z.string()).default([]),
    maturity_90_day: z.array(z.string()).default([]),
    exit_strategy: z.array(z.string()).default([]),
    commercial_fallback: z.array(z.string()).default([]),
    verification: z.object({
      last_reviewed: IsoDateSchema,
      notes: z.string().optional(),
    }),
  })
  .strict();

export type Stack = z.infer<typeof StackSchema>;
