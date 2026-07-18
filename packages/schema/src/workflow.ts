import { z } from 'zod';
import { RoleSchema, WorkflowSchema } from './enums.js';
import { IsoDateSchema } from './date.js';

export const WorkflowDefSchema = z
  .object({
    schema_version: z.literal('1.0.0'),
    id: WorkflowSchema,
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
    verification: z.object({
      last_reviewed: IsoDateSchema,
      notes: z.string().optional(),
    }),
  })
  .strict();

export type WorkflowDef = z.infer<typeof WorkflowDefSchema>;
