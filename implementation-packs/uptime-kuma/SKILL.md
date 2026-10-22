# Uptime Kuma coworking operator skill

## Coworking purpose

Detect likely outages or certificate problems for five member-facing services and route each signal to a named human with a service-specific runbook. Monitoring is an early warning, not proof that booking, payment, Wi-Fi, CRM, or member workflows succeed.

## Allowed automation

- Run approved, least-invasive checks at approved intervals.
- Suppress notifications during an approved maintenance window.
- Send predefined alerts and draft an incident timeline.
- Report stale monitors, failed notification tests, backup failures, and certificate warnings.

## Prohibited decisions

- Do not add targets, credentials, recipients, public status content, or remediation without approval.
- Do not declare business impact, incident severity, SLA breach, root cause, or recovery.
- Do not restart services, change DNS, publish messages, or close incidents autonomously.
- Do not probe unauthorized targets or expose internal names and secrets.

## Source verification

Record the selected version/deployment and recheck the [official repository](https://github.com/louislam/uptime-kuma), [wiki](https://github.com/louislam/uptime-kuma/wiki), and notification-provider documentation. The 2026-07-17 source snapshot and local staging Compose notes are not runtime, compatibility, scale, support, export, or notification evidence.

## Data boundaries

Handle approved target URLs/ports, neutral labels, heartbeat history, maintenance records, notification destinations/tokens, and narrowly scoped check credentials only when unavoidable. Prohibit member data, secret query strings, broad production credentials, and unreviewed internal topology on public status pages.

## Human approvals

Service owners approve target and expected behavior; security/network owners approve probing, egress, and credentials; operations approves alert delay/escalation; communications approves public messages/status; change management approves production rollout and remediation.

## Required tests

Test expected up, timeout/DNS/down/recovery, certificate warning, wrong content where selected checks support it, alert delay, maintenance, notification failure/fallback, role access, restart persistence, backup restore, and post-restore alert. A human must separately complete each critical member workflow.

## Backup and rollback

For the local SQLite Compose reference, stop the service for a consistent encrypted copy of the complete data volume, then restore to an isolated compatible instance and send a test notification. Keep a plain service/contact register and alternate alert route. Roll back a failed upgrade only through a tested migration-compatible state.

## Expert review

Escalate to security/network experts for internal or authenticated probes, broad egress, webhooks, internet exposure, public status, or automated remediation. Escalate to reliability experts for HA, multi-region independence, large scale, strict recovery objectives, or contractual availability claims.
