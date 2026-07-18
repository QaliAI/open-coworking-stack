---
title: Uptime Kuma for coworking service monitoring
tool_id: uptime-kuma
guide_status: full
verified_on: 2026-07-17
---

# Uptime Kuma for coworking service monitoring

This guide scopes Uptime Kuma to five operator-owned service checks. It is not proof that an HTTP response means a booking, payment, Wi-Fi, CRM, or member workflow works.

## 1. Coworking outcome

Detect likely outages or certificate problems early enough for a named person to validate impact and use a runbook. Uptime Kuma augments detection; humans diagnose, prioritize, communicate, recover, and close incidents.

## 2. Pilot scope

Configure five authorized non-sensitive checks, one test notification route, one independent monitoring host, no public status page, and no automated remediation. Trigger failure only on a controlled test endpoint and manually validate real workflows.

## 3. Fit

**Good fit:** a small self-hosted estate with an independent always-on host, ranked services, explicit expected responses, named owners/runbooks, approved alert routes, maintenance rules, backups, and escalation coverage.

## 4. Non-fit and alternatives

**Poor fit:** monitoring on the same failure domain as every target, broad credentials, absent responders, or a need for transaction/SLA proof. Compare provider-native monitoring, external synthetic transaction services, or managed incident tooling where independence, end-to-end testing, or staffing is required; keep manual checks.

## 5. Coworking use cases

- Watch the public site, booking route, Wi-Fi portal, CRM login, and payment-link landing page where authorized.
- Warn about certificate expiry for operator-controlled domains.
- Provide private incident context to service owners.

Public provider scoring and autonomous remediation are excluded.

## 6. Tasks reduced or augmented

Uptime Kuma can schedule approved probes, record heartbeats, suppress maintenance alerts, and route notifications. It cannot verify transactions, determine member impact/severity/root cause, satisfy an SLA, write public messages, or recover a service.

## 7. Human decisions and approvals

Service owners approve targets/expected behavior; security/network approves probing, egress, and credentials; operations approves delay/escalation/maintenance; communications approves public status/messages; change management approves production and remediation. No alert autonomously changes a service.

## 8. Owners and RACI

Name an accountable incident owner, responsible monitoring operator, each service owner/responder, security reviewer, communications approver, escalation contact, and recovery witness. Every monitor must map to a human runbook; ownerless alerts cannot enter production.

## 9. Prerequisites

List five URLs/ports, authorization, business impact, dependencies, expected response, check type/frequency/timeout/delay, maintenance windows, runbook, credentials if unavoidable, notification/fallback, and manual validation. Confirm third-party terms before probing.

## 10. Skills and effort boundary

The pilot needs runtime/container, DNS/TLS/proxy, networking, storage, backup/restore, notification-provider, and incident-response skills. The catalog's `1-3 days` is unverified and excludes runbook design, responder coverage, false-signal tuning, and recovery drills.

## 11. Deployment choice

Use a documented method on infrastructure separate from primary app/network/power failure domains where practical. The repository's `compose/uptime-kuma` is a loopback-bound single-node SQLite staging reference with no HA, external database, proxy, public-status policy, automatic updates, or off-host backups.

## 12. Architecture and dependencies

Map Uptime Kuma, storage, proxy/TLS, DNS, outbound probes, targets, notification provider/recipients, backups, and an independent monitor-of-monitor. Document shared ISP, DNS, power, region, and provider dependencies so one green dashboard is not mistaken for independence.

## 13. License and edition boundary

The official repository identifies Uptime Kuma as MIT-licensed open-source software. Recheck the [repository](https://github.com/louislam/uptime-kuma) for the selected release; hosting, notification providers, and any surrounding service have separate terms and support.

## 14. Total cost boundary

Record independent host/storage, DNS/TLS/proxy, notification-provider usage, setup, checks/runbooks, on-call coverage, updates, monitoring-of-monitoring, backups, drills, support, and exit labor. No provider price, scale, or support entitlement is asserted.

## 15. Data map

| Data                        | Purpose             | Minimum handling                | Exit record                 |
| --------------------------- | ------------------- | ------------------------------- | --------------------------- |
| Target URL/port/label       | Monitor definition  | Authorized, neutral, no secrets | Service inventory           |
| Heartbeat/incident history  | Operational context | Minimum approved retention      | Dated summary if required   |
| Notification endpoint/token | Alert delivery      | Protected, narrow scope         | Channel/revocation register |
| Optional check credentials  | Authenticated probe | Avoid; least privilege          | Rotation/revocation record  |

Labels, contacts, and public status can expose internal or personal details. Member data and secret query strings are prohibited.

## 16. Privacy and retention

Use neutral labels, minimize history, protect recipient details, and review public status separately. Do not embed member identifiers, credentials, sensitive queries, or internal topology. Third-party monitoring does not authorize collection or publication about that provider.

## 17. Security baseline

Keep setup/admin private or behind a maintained TLS proxy, use individual strong accounts and supported authentication, restrict egress/target creation, protect tokens, apply supported updates, and isolate public status. Treat monitor creation as network-probing capability.

## 18. Compliance and expert review

The operator owns probing authorization, provider terms, privacy, incident records, public claims, and on-call obligations; heartbeat data is not SLA evidence. Require security/network review for internal/authenticated checks, webhooks, exposure/status/remediation and reliability expertise for HA, large scale, multi-region, or strict recovery claims.

## 19. Integration boundary

No email, chat, webhook, provider, or status integration is catalog-verified. Record official setup source/version, token scope, recipient, test cadence, limits, outage behavior, owner, disable switch, and fallback. Keep public messaging under human approval.

## 20. Configuration baseline

Record exact version/deployment, host/proxy/TLS, admin roles/recovery, target authorization, monitor type/expected response/interval/timeout/retries/delay, maintenance, credentials, notifications/fallback, retention, public-status decision, backup, and each service runbook.

## 21. Smallest useful experiment

Following the [official wiki](https://github.com/louislam/uptime-kuma/wiki), add five non-sensitive checks and one approved test notification. Fail and recover a controlled endpoint, confirm the correct human receives actionable context, and avoid production disruption.

## 22. Implementation sequence

1. Rank five services and assign owners/runbooks.
2. Recheck current install, monitor, notification, proxy, backup, and update docs.
3. Deploy privately on a separate failure domain where practical.
4. Create least-invasive checks with neutral labels and no secrets.
5. Test failure, delay, escalation, maintenance, notification fallback, and recovery.
6. Restore state in isolation and send a post-restore test alert.
7. Approve reversible production and review false signals frequently at first.

## 23. Migration and rollout

Run monitoring additively without replacing existing alerts, add one bounded service group at a time, and compare controlled-test delivery. Preserve the manual service/contact register and old route until new checks, ownership, maintenance, escalation, and recovery are accepted.

## 24. Required test plan

Test expected up, DNS failure, timeout, down/recovery, certificate warning, wrong content where supported, alert delay, duplicate behavior, maintenance, notification failure/fallback, roles, restart persistence, backup restore, and post-restore alert. A human separately completes each real member workflow.

## 25. Acceptance criteria

All five authorized monitors have owners/runbooks; controlled failure/recovery reaches the correct recipient within operator-set thresholds; maintenance/fallback work; secrets/internal details are absent; manual workflows pass; isolated restore and post-restore alert pass; operations/security/recovery owners sign.

## 26. Success metrics

Track controlled detection, notification, acknowledgement, runbook start, recovery notice, false positives, missed maintenance, responder coverage, stale monitors, and drill defects. Do not infer reduced downtime or member impact without incident and baseline evidence.

## 27. Monitoring and alerting

Independently monitor Uptime Kuma reachability, host/storage, TLS, backup result, and notification route where possible. A dead monitor must create a separate signal. Define alert budgets and tune noisy checks rather than training responders to ignore them.

## 28. Operating cadence

Review owners, stale targets, expected content, certificates, notification tests, false signals, maintenance, users, release notes, backups, storage, retention, and public status on defined cadences. Reauthorize/retest after service or provider changes.

## 29. Failure modes and response

Plan for false positive/negative, DNS/target/provider failure, alert storm, monitor-host/storage loss, TLS/proxy/login failure, leaked token, public-detail exposure, and bad upgrade/restore. Responders manually validate from an independent path, assign severity, follow service runbooks, escalate, and approve messages/recovery.

## 30. Backup procedure

For the local SQLite Compose reference, stop the service for a consistent encrypted copy of the complete data volume, restart/verify monitoring, and retain versioned off-host copies with checksums. For other deployments follow version-specific guidance and protect notification/check secrets.

## 31. Restore drill

Restore a copied backup to an isolated host with a compatible pinned version. Verify login, five monitor definitions, owners/labels, maintenance, required history, and notification configuration, then alert only the designated test recipient. Never overwrite the sole working instance.

## 32. Upgrade, rollback, and exit

Read migration notes, back up/restore a copy, test target version, and approve a window with alternate alerts. Stop for startup/schema/login/monitor/notification failure; use only tested compatible app/data rollback because downgrade may be unsafe. Exit by recreating checks in parallel, controlled-testing both, revoking tokens/status routes, and retaining a plain service register.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-17**: [homepage](https://uptime.kuma.pet/), [repository](https://github.com/louislam/uptime-kuma), and [wiki](https://github.com/louislam/uptime-kuma/wiki). The local Compose reference was documented 2026-07-18; evidence remains documentation/configuration review only.

Untested: notifications/limits, target authorization, backup/export completeness, migrations, scale, authenticated checks, public status, retention, support, availability, restore/rollback times, and production operation.
