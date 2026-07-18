---
title: Chatwoot for coworking enquiries
tool_id: chatwoot
guide_status: full
verified_on: 2026-07-17
---

# Chatwoot for coworking enquiries

This guide scopes Chatwoot to one website inbox, two agents, and one week of limited coworking enquiries. It does not prove that a channel, export, backup, upgrade, or cloud feature has been tested in this repository.

## 1. Coworking outcome

Make website enquiries visible to a shared community/sales team and make ownership/handoffs explicit. Chatwoot augments shared handling and classification; it does not replace community, sales, facilities, safety, or emergency judgment.

## 2. Pilot scope

Connect one website widget on a staging or limited page, add two individual agents, and test assignment, labels, notes, after-hours behavior, closure, and one open-case handoff. Exclude email/social channels, bots, payments, and emergency response.

## 3. Fit

**Good fit:** a team losing enquiries in personal inboxes and willing to own inbox coverage, labels, response wording, privacy, attachments, retention, escalation, and outages.

## 4. Non-fit and alternatives

**Poor fit:** an automated substitute for member support, a store for unrestricted sensitive documents, an emergency channel, or a multi-channel launch before credential/retention behavior is understood. Keep the existing contact form/email and compare simpler shared-inbox options where channel breadth is unnecessary.

## 5. Coworking use cases

- Classify website enquiries as tour, membership, event, facilities, or other.
- Assign a sales handoff while retaining conversation context.
- Publish an honest after-hours message and manual urgent-contact route.

Additional channels require separate pilots because capabilities and credentials differ.

## 6. Tasks reduced or augmented

Chatwoot can reduce duplicate replies, lost ownership, and context scattered across personal inboxes. It cannot determine urgency, verify identity, promise pricing/availability, resolve safety issues, or decide whether sensitive data belongs in a transcript.

## 7. Human decisions and approvals

Agents interpret and respond; sales owns qualified-lead follow-up; facilities receives operational cases; a manager approves response/escalation rules; privacy approves wording and retention; technical staff control channels/recovery. A person approves automation, deletion, sensitive-data handling, and incident closure.

## 8. Owners and RACI

Name accountable inbox owner, daily queue owner and backup, privacy owner, technical/recovery owner, sales/facilities escalation owners, website owner, and after-hours manager. State who may add agents, channels, automation, and integrations.

## 9. Prerequisites

Define supported enquiry types, labels, assignment rules, response expectation, operating hours, after-hours text, urgent/non-emergency alternatives, sales/facilities handoff, attachment rule, prohibited data, privacy notice, retention, deletion/export route, agent roster, and fallback contact path.

## 10. Skills and effort boundary

The pilot needs inbox operations, customer communication, privacy review, website integration, role administration, and Linux/PostgreSQL/storage recovery if self-hosted. The catalog's `1-3 days` estimate is unverified and excludes channel approval, training, retention, recovery, and support design.

## 11. Deployment choice

The catalog records self-hosted and managed SaaS. Choose explicitly because editions, channel support, operations, export/recovery, support, residency, and cost can differ. Verify exact needs from [official pricing](https://www.chatwoot.com/pricing) and docs; this guide does not infer cloud or enterprise entitlement.

## 12. Architecture and dependencies

Map website/widget, Chatwoot web/worker services, PostgreSQL, Redis, file storage, email delivery, reverse proxy/TLS, agents, channel credential, backups, monitoring, and human handoff. Official Docker guidance uses web/worker services plus database/Redis and recommends a reverse proxy; actual topology must match the chosen release.

## 13. License and edition boundary

The catalog classifies Chatwoot as open core with `MIT` core and commercial cloud/enterprise features. Confirm current source license, image/edition tag, feature entitlement, channel availability, and provider terms before implementation. Audit logs, for example, are identified as enterprise-only in current official API docs.

## 14. Total cost boundary

Record subscription/edition or compute, PostgreSQL/Redis/storage, DNS/TLS/email, setup, website work, channel approval, agent training, moderation/privacy, monitoring, backups, upgrades, support, and exit labor. Do not infer seat/channel prices or savings.

## 15. Data map

| Data                              | Source         | Purpose                     | Handoff/exit                                |
| --------------------------------- | -------------- | --------------------------- | ------------------------------------------- |
| Contact name/details              | Visitor/member | Conversation identity       | Minimum approved CRM/case record            |
| Messages and timestamps           | Visitor/agent  | Shared handling             | Supported export/API or reviewed transcript |
| Private notes, labels, assignment | Agents         | Coordination                | Open-case handoff mapping                   |
| Attachments                       | Visitor/agent  | Support context             | Minimize, scan/review, delete by policy     |
| Agent accounts/activity           | Staff/system   | Access and operations       | Offboarding/access register                 |
| Channel/API credentials           | Providers      | Connect channel/integration | Revoke at source and Chatwoot               |

Payment credentials and card data are prohibited in the pilot.

## 16. Privacy and retention

Tell visitors which channel they are using, collect only needed contact/context, discourage sensitive or payment data, restrict notes/attachments, and set retention for contacts, messages, files, logs, and backups. Verify deletion/export behavior, cloud subprocessors/residency, and channel-provider copies separately.

## 17. Security baseline

Use TLS, individual agent accounts, least-privilege admin/inbox roles, MFA where available and approved, protected channel/API credentials, restricted storage/database access, supported updates, and attachment controls. Keep private notes factual and appropriate for subject-access/disclosure risk.

## 18. Compliance and expert review

Customer/member communications can involve privacy, marketing, employment, accessibility, consumer, safety, and record-retention obligations. Obtain local legal/privacy review as needed and qualified safety/security review before emergency, access-control, identity-verification, or incident channels.

## 19. Integration boundary

Only the limited website widget is in the pilot, and even it must follow official docs. No CRM, email, social, messaging, bot, webhook, or commerce integration is catalog-verified. For each later channel, document provider permissions, data copies, feature limits, retries, secret owner, revocation, and manual fallback.

## 20. Configuration baseline

Record exact cloud plan or self-host version/image tag, account/inbox, website/domain allow-list behavior, agents/roles, labels, assignment rules, canned text, hours/after-hours text, notification settings, attachment rule, retention, storage mode, email/channel credentials by reference, and escalation matrix.

## 21. Smallest useful experiment

Using [official docs](https://www.chatwoot.com/docs), add a website widget to a staging or limited page and handle enquiries for one week with two agents. Preserve the existing contact route and state that the widget is not for emergencies or payment data.

## 22. Implementation sequence

1. Approve owner, deployment/edition, channel, data boundary, and fallback.
2. Define labels, assignment, after-hours, escalation, retention, and prohibited content.
3. Configure isolated staging or a tightly limited account with two agents.
4. Add the widget only to an approved page with privacy/urgent-contact wording.
5. Test roles, assignment, notes, attachments, closure, deletion/export, and outage.
6. Run the week and reconcile every open conversation and handoff.
7. Review recovery evidence before adding channels or automation.

## 23. Migration and rollout

Do not import broad historical contacts for the pilot. Publish to a limited audience, keep the former route visible, train both agents, and use an open-case register at cutover. Add one channel at a time only after its provider-specific acceptance.

## 24. Required test plan

Test widget load/consent wording, new/returning contact behavior, two-agent access, unauthorized denial, assignment/reassignment, labels, public reply versus private note, attachment policy, after-hours message, notifications, closure/reopen, urgent escalation, open-case handoff, credential revocation, outage fallback, deletion/export, and self-host backup/restore where applicable.

## 25. Acceptance criteria

Every pilot conversation is owned or explicitly unassigned, no urgent case is silently queued, private notes are not exposed to visitors, unauthorized agents cannot access the inbox, prohibited data instructions are visible, open cases reconcile, fallback works, and export/recovery evidence is accepted by named owners.

## 26. Success metrics

Track new, unassigned, missed, duplicated, escalated, and open conversations; first human response and handoff completion; after-hours exceptions; notification failures; prohibited/sensitive-data incidents; attachment use; and staff handling effort. Metrics inform staffing; they do not justify automatic employment decisions.

## 27. Monitoring and alerting

Monitor website widget reachability, queue/open/unassigned age, notification/channel failures, web/worker/database/Redis/storage health if self-hosted, backup status, and credential expiry/revocation events where observable. A named human must check the queue when automation or alerts fail.

## 28. Operating cadence

Review queues and urgent handoffs each operating period, stale/unassigned cases daily during the pilot, agent access on staff changes, labels/canned text and retention regularly, and releases/backups for self-hosting. Re-test after channel, domain, role, automation, storage, or edition changes.

## 29. Failure modes and response

Plan for widget outage, missed notification, worker backlog, database/Redis/storage failure, exposed credential, wrong private/public message, unauthorized inbox access, sensitive attachment, lost assignment, provider channel suspension, and deletion/export gap. Remove the widget or disable the affected channel, preserve open-case details, revoke exposed secrets, and use the previous route.

## 30. Backup procedure

[Official self-host backup guidance](https://developers.chatwoot.com/self-hosted/deployment/backup) identifies PostgreSQL, file storage, configuration variables, and any code customizations. Create protected consistent copies in a separate location and record version/storage mode. For SaaS, verify exports/account recovery instead of assuming provider backup is operator-controlled recovery.

## 31. Restore drill

Build an isolated compatible Chatwoot instance, restore matching configuration, database, storage, and approved customizations according to official guidance, then verify contacts, conversations, notes, labels, assignments, agent roles, attachment access, and one test reply without contacting real users. No runtime restore evidence exists here.

## 32. Upgrade, rollback, and exit

Review release notes, back up first, stage the target, use intermediate versions for old installs where official guidance requires, run `db:chatwoot_prepare` as documented for Docker, and regression-test web/worker jobs, roles, widget, messages, files, channels, and open cases. Rollback requires a compatible pre-upgrade image/config/database/storage set. Exit by removing the widget, exporting/reconciling retained and open conversations, assigning unresolved cases manually, revoking channel/API credentials, removing webhooks, and validating deletion/retention across providers.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-17**: [homepage](https://www.chatwoot.com/), [repository](https://github.com/chatwoot/chatwoot), [documentation](https://www.chatwoot.com/docs), [developer docs](https://developers.chatwoot.com/), [Docker deployment](https://developers.chatwoot.com/self-hosted/deployment/docker), [backup](https://developers.chatwoot.com/self-hosted/deployment/backup), [upgrade](https://developers.chatwoot.com/self-hosted/deployment/upgrade), and [pricing](https://www.chatwoot.com/pricing).

Evidence is documentation review only. Untested: current editions/prices, deployment, widget behavior, channels, roles, MFA, notifications, retention/deletion, exports/APIs, backup/restore, upgrade/rollback, attachments, performance, cloud recovery, support, residency, subprocessors, and compliance. Keep all as explicit implementation gates.
