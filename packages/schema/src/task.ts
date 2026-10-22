import { z } from 'zod';
import { OperatorRoleIdSchema } from './role.js';

export const TaskIdSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'task id must be kebab-case')
  .min(2)
  .max(80);

export const BusinessAreaSchema = z.enum([
  'front-desk',
  'member-service',
  'sales-leasing',
  'community',
  'events',
  'space-inventory',
  'virtual-office-mailroom',
  'access-network-printing',
  'facilities',
  'finance',
  'marketing',
  'security-continuity',
  'staff-administration',
]);

export const TaskRecordSchema = z
  .object({
    schema_version: z.literal('1.0.0'),
    id: TaskIdSchema,
    name: z.string().min(1),
    description: z.string().min(40),
    business_area: BusinessAreaSchema,
    primary_role: OperatorRoleIdSchema,
    supporting_roles: z.array(OperatorRoleIdSchema).default([]),
    frequency: z.enum([
      'continuous',
      'per-interaction',
      'daily',
      'weekly',
      'monthly',
      'quarterly',
      'annual',
      'event-driven',
    ]),
    trigger: z.string().min(1),
    inputs: z.array(z.string().min(1)).min(1),
    outputs: z.array(z.string().min(1)).min(1),
    current_manual_methods: z.array(z.string().min(1)).min(1),
    common_failure_modes: z.array(z.string().min(1)).min(1),
    human_judgment_required: z.array(z.string().min(1)).min(1),
    approval_points: z.array(z.string().min(1)).min(1),
    privacy_sensitivity: z.enum(['low', 'medium', 'high']),
    security_sensitivity: z.enum(['low', 'medium', 'high']),
    compliance_review_needed: z.boolean(),
    success_metrics: z.array(z.string().min(1)).min(1),
    related_workflows: z.array(z.string().min(1)).min(1),
  })
  .strict();

export type TaskRecord = z.infer<typeof TaskRecordSchema>;
