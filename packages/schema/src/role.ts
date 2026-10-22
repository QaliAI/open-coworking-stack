import { z } from 'zod';

export const OperatorRoleIdSchema = z.enum([
  'owner-operator',
  'general-manager',
  'community-coordinator-front-desk',
  'community-manager',
  'sales-leasing-manager',
  'marketing-manager',
  'event-manager',
  'virtual-office-mailroom-manager',
  'operations-facilities-manager',
  'finance-billing-administrator',
  'it-security-administrator',
  'multi-location-operator',
  'consultant-implementer',
  'member',
]);

export const RoleRecordSchema = z
  .object({
    schema_version: z.literal('1.0.0'),
    id: OperatorRoleIdSchema,
    name: z.string().min(1),
    description: z.string().min(40),
    responsibilities: z.array(z.string().min(1)).min(1),
    daily_tasks: z.array(z.string().min(1)).min(1),
    weekly_tasks: z.array(z.string().min(1)).min(1),
    monthly_tasks: z.array(z.string().min(1)).min(1),
    revenue_impacting_work: z.array(z.string().min(1)).min(1),
    member_experience_work: z.array(z.string().min(1)).min(1),
    repetitive_administrative_work: z.array(z.string().min(1)).min(1),
    dangerous_to_automate_blindly: z.array(z.string().min(1)).min(1),
    recommended_task_ids: z.array(z.string().min(1)).min(1),
    easiest_hosted_stack: z.string().min(1),
    hybrid_stack: z.string().min(1),
    self_hosted_stack: z.string().min(1),
    suggested_workflows: z.array(z.string().min(1)).min(1),
    kpis: z.array(z.string().min(1)).min(1),
    improvement_plan_30_day: z.array(z.string().min(1)).min(1),
    implementation_owner: z.string().min(1),
    expert_help_triggers: z.array(z.string().min(1)).min(1),
  })
  .strict();

export type OperatorRoleId = z.infer<typeof OperatorRoleIdSchema>;
export type RoleRecord = z.infer<typeof RoleRecordSchema>;
