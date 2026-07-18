import { z } from 'zod';
import { RoleSchema } from './enums.js';
import { IsoDateSchema } from './date.js';

export const WorkflowDefSchema = z
  .object({
    schema_version: z.literal('1.0.0'),
    id: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .min(2)
      .max(80),
    name: z.string().min(1),
    description: z.string().min(40),
    primary_roles: z.array(RoleSchema).min(1),
    stages: z
      .array(
        z.object({
          id: z.string(),
          name: z.string(),
          description: z.string(),
          manual_tasks: z.array(z.string()).default([]),
          automation_opportunities: z.array(z.string()).default([]),
          suggested_tool_ids: z.array(z.string()).default([]),
          risks: z.array(z.string()).default([]),
        }),
      )
      .min(1),
    success_metrics: z.array(z.string()).min(1),
    objective: z.string().default('Not yet documented.'),
    responsible_role: z.string().default('Not yet documented.'),
    trigger: z.string().default('Not yet documented.'),
    inputs: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    source_of_truth: z.string().default('Not yet documented.'),
    systems_involved: z.array(z.string()).default([]),
    automation_steps: z.array(z.string()).default([]),
    human_approval_points: z.array(z.string()).default([]),
    failure_exception_paths: z.array(z.string()).default([]),
    privacy_risks: z.array(z.string()).default([]),
    security_risks: z.array(z.string()).default([]),
    measurable_kpis: z.array(z.string()).default([]),
    test_cases: z.array(z.string()).default([]),
    manual_fallback: z.array(z.string()).default([]),
    rollback_disable_procedure: z.array(z.string()).default([]),
    verification: z.object({
      last_reviewed: IsoDateSchema,
      notes: z.string().optional(),
    }),
  })
  .strict();

export type WorkflowDef = z.infer<typeof WorkflowDefSchema>;
