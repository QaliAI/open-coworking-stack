import { z } from 'zod';

/** Licensing posture — never equate “source visible” with OSI open source. */
export const LicenseClassSchema = z.enum([
  'oss-osi-approved',
  'open-core',
  'source-available',
  'fair-code',
  'freemium-saas',
  'free-saas',
  'free-trial',
  'proprietary',
  'unknown-needs-review',
]);
export type LicenseClass = z.infer<typeof LicenseClassSchema>;

export const MaturitySchema = z.enum([
  'experimental',
  'emerging',
  'stable',
  'mature',
  'legacy',
  'unknown',
]);
export type Maturity = z.infer<typeof MaturitySchema>;

export const DeploymentModelSchema = z.enum([
  'self-hosted',
  'managed-saas',
  'hybrid',
  'desktop',
  'mobile',
  'hardware-appliance',
  'browser-extension',
]);
export type DeploymentModel = z.infer<typeof DeploymentModelSchema>;

export const CostModelSchema = z.enum([
  'free-self-hosted',
  'free-tier',
  'freemium',
  'one-time',
  'subscription',
  'usage-based',
  'open-core-paid-features',
  'hardware-plus-software',
  'unknown',
]);
export type CostModel = z.infer<typeof CostModelSchema>;

export const ImplementationDifficultySchema = z.enum([
  'trivial',
  'easy',
  'moderate',
  'hard',
  'expert',
]);
export type ImplementationDifficulty = z.infer<typeof ImplementationDifficultySchema>;

export const MaintenanceBurdenSchema = z.enum(['low', 'medium', 'high', 'unknown']);
export type MaintenanceBurden = z.infer<typeof MaintenanceBurdenSchema>;

export const GuideStatusSchema = z.enum(['full', 'stub', 'planned', 'none']);
export type GuideStatus = z.infer<typeof GuideStatusSchema>;

export const VerificationStatusSchema = z.enum([
  'verified',
  'partially-verified',
  'unverified',
  'stale',
]);
export type VerificationStatus = z.infer<typeof VerificationStatusSchema>;

/** Primary coworking technology taxonomy categories. */
export const CategorySchema = z.enum([
  'access-control',
  'membership-crm',
  'booking-scheduling',
  'billing-payments',
  'accounting',
  'community-engagement',
  'communication-chat',
  'email-marketing',
  'website-cms',
  'forms-surveys',
  'helpdesk-support',
  'knowledge-base',
  'event-management',
  'mailroom-virtual-office',
  'facility-operations',
  'network-wifi',
  'identity-sso',
  'file-storage',
  'password-secrets',
  'automation-integration',
  'analytics-bi',
  'monitoring-observability',
  'backup-recovery',
  'video-conferencing',
  'digital-signage',
  'pos-retail',
  'project-work-management',
  'legal-contracts',
  'hr-people',
  'security-compliance',
  'developer-platform',
  'maps-wayfinding',
  'iot-sensors',
  'other',
]);
export type Category = z.infer<typeof CategorySchema>;

export const RoleSchema = z.enum([
  'owner-operator',
  'community-manager',
  'sales-manager',
  'operations-manager',
  'marketing',
  'virtual-office-mailroom',
  'event-coordinator',
  'multi-location-operator',
  'franchisee',
  'consultant-implementer',
  'technical-operator',
  'finance',
  'facilities',
  'member-end-user',
]);
export type Role = z.infer<typeof RoleSchema>;

export const WorkflowSchema = z.enum([
  'member-onboarding',
  'member-offboarding',
  'day-pass-checkin',
  'tour-to-close',
  'room-booking',
  'desk-hot-desk',
  'invoice-collections',
  'access-provisioning',
  'visitor-management',
  'event-lifecycle',
  'mail-package-handling',
  'community-programming',
  'incident-response',
  'facility-maintenance',
  'marketing-campaigns',
  'reporting-kpis',
  'multi-site-rollout',
  'backup-restore-drill',
  'vendor-offboarding',
  'compliance-review',
]);
export type Workflow = z.infer<typeof WorkflowSchema>;

export const ProblemSchema = z.enum([
  'reduce-software-cost',
  'replace-spreadsheets',
  'self-host-for-data-control',
  'improve-member-experience',
  'automate-billing',
  'secure-door-access',
  'fill-meeting-rooms',
  'grow-pipeline',
  'run-events',
  'operate-virtual-office',
  'multi-location-consistency',
  'reduce-manual-admin',
  'improve-wifi-reliability',
  'centralize-knowledge',
  'measure-utilization',
  'privacy-compliance',
  'disaster-recovery',
  'integrate-stack',
]);
export type Problem = z.infer<typeof ProblemSchema>;
