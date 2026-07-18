import { describe, expect, it } from 'vitest';
import { RoleRecordSchema } from './role.js';
import { TaskRecordSchema } from './task.js';

const task = {
  schema_version: '1.0.0' as const,
  id: 'capture-website-lead',
  name: 'Capture website lead',
  description:
    'Record a prospect enquiry without losing its source, consent, or requested product.',
  business_area: 'sales-leasing' as const,
  primary_role: 'sales-leasing-manager' as const,
  supporting_roles: ['community-coordinator-front-desk' as const],
  frequency: 'per-interaction' as const,
  trigger: 'A prospect submits the website enquiry form.',
  inputs: ['Contact details and requested product'],
  outputs: ['A traceable lead record'],
  current_manual_methods: ['Copying an email into a spreadsheet'],
  common_failure_modes: ['Duplicate or unassigned leads'],
  human_judgment_required: ['Determine whether the request fits the space'],
  approval_points: ['Consent wording is approved before publication'],
  privacy_sensitivity: 'high' as const,
  security_sensitivity: 'medium' as const,
  compliance_review_needed: true,
  success_metrics: ['Share of valid enquiries recorded once'],
  related_workflows: ['website-lead-capture'],
};

describe('operator task and role schemas', () => {
  it('accepts a complete task and rejects open-ended role IDs', () => {
    expect(TaskRecordSchema.parse(task).id).toBe('capture-website-lead');
    expect(() => TaskRecordSchema.parse({ ...task, primary_role: 'robot-manager' })).toThrow();
  });

  it('requires the modernization playbook sections on role records', () => {
    const base = {
      schema_version: '1.0.0' as const,
      id: 'owner-operator' as const,
      name: 'Owner-operator',
      description:
        'Accountable operator balancing commercial, member, financial, and safety outcomes.',
      responsibilities: ['Set priorities'],
      daily_tasks: ['Review exceptions'],
      weekly_tasks: ['Review pipeline'],
      monthly_tasks: ['Review performance'],
      revenue_impacting_work: ['Approve pricing policy'],
      member_experience_work: ['Review escalations'],
      repetitive_administrative_work: ['Compile reports'],
      dangerous_to_automate_blindly: ['Refund and dispute decisions'],
      recommended_task_ids: ['capture-website-lead'],
      easiest_hosted_stack: 'solo-operator-hosted-simple',
      hybrid_stack: 'under-250-hybrid',
      self_hosted_stack: 'bootstrap-near-zero',
      suggested_workflows: ['website-lead-capture'],
      kpis: ['Cash runway'],
      improvement_plan_30_day: ['Baseline one process'],
      implementation_owner: 'Owner-operator',
      expert_help_triggers: ['Regulated or safety-critical decisions'],
    };
    expect(RoleRecordSchema.parse(base).id).toBe('owner-operator');
    expect(() => RoleRecordSchema.parse({ ...base, kpis: [] })).toThrow();
  });
});
