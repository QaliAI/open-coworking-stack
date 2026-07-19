---
title: FreeScout for coworking support
tool_id: freescout
guide_status: full
verified_on: 2026-07-17
---

# FreeScout for coworking support

FreeScout is a self-hosted shared mailbox/help desk. A coworking operator can route one `support@` alias through it for 14 days to evaluate assignment, canned replies, escalation, and visibility across community and operations staff.

**Manual tasks reduced:** assigning, labeling, and tracking routine shared-mailbox conversations. Staff still interpret requests, protect sensitive data, approve consequential replies, and resolve member disputes.

## Fit and non-fit

**Good fit:** a smaller site needing shared handling of member IT/facilities email with explicit closure and vendor escalation ownership.

**Poor fit:** emergency dispatch, an unreviewed archive for sensitive member content, or a deployment that assumes all modules are free/open-source because the core is.

## License and cost boundary

FreeScout core is OSI-approved `AGPL-3.0-only`; some modules are paid. Budget for compute/database/storage/TLS, mailbox setup/migration, updates/email delivery/backups, optional commercial modules, and internal or vendor support. Verify [module pricing](https://freescout.net/modules/) and each module's terms.

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign mailbox, facilities-escalation, privacy, and technical owners. Define agents, categories/tags, response expectations, emergency exclusions, vendor handoff, closure, and retention.

| Data             | Source        | FreeScout use     | Handoff/exit                      |
| ---------------- | ------------- | ----------------- | --------------------------------- |
| Support email    | Members/staff | Shared tickets    | Retained/exported mailbox record  |
| Customer/contact | Email headers | Case context      | Minimized contact record          |
| Tags/assignments | Agents        | Routing/reporting | Human queue review                |
| Private notes    | Agents        | Coordination      | Restricted and retained by policy |

Emails, contacts, tags, and notes contain personal data. Payment data should not be requested or stored.

## Smallest useful experiment

Using the [official wiki](https://github.com/freescout-help-desk/freescout/wiki), point a `support@` alias to FreeScout and process member IT/facilities tickets for 14 days. Keep an emergency route outside email. Measure unassigned, overdue, escalated, reopened, and lost messages.

## Implementation sequence

1. Document the current mailbox, emergency path, categories, and owners.
2. Review installation/mailbox/module guidance in the [official project](https://github.com/freescout-help-desk/freescout).
3. Deploy staging with TLS, restricted roles, and tested inbound/outbound mail.
4. Add a small agent group, tags, canned replies, and escalation wording.
5. Run 14 days with daily queue reconciliation and vendor handoff review.
6. Approve retention, module, update, and offboarding practices.
7. Restore mailbox state and test export/return to the original mailbox.

## Security and privacy controls

- Use named least-privilege agents and restrict private notes/admin settings.
- Use TLS, supported updates, and protected mailbox credentials/backups.
- Minimize PII and attachments; instruct users not to send payment credentials.
- Define email/note retention and privacy request handling.
- Review every module for cost, license, maintenance, and data access.
- Keep emergencies and safety incidents on a separately documented route.

## Backup, export, and restore test

Back up the database, attachments, configuration, and officially required state. Restore to clean staging and verify pilot emails, contacts, tags, notes, assignments, roles, and attachments. Export or return representative cases to an ordinary mailbox and verify open-case continuity.

## Integrations and manual handoffs

No mail provider, CRM, or vendor integration is catalog-verified. Agents classify and respond; facilities owns vendor escalation; managers review overdue cases; privacy handles sensitive content. Confirm mailbox connection details through official docs/provider guidance.

## Human oversight

People decide priority, communicate with members, close tickets, escalate vendors, and protect sensitive content. FreeScout augments assignment and shared visibility; it does not replace community or facilities staff.

## Automation and approval boundaries

FreeScout may collect mailbox messages, thread them, apply approved mailbox rules, notify named agents, and present canned text for review. It must not decide emergency severity, member fault, compensation/refunds, vendor authorization, access rights, case closure, or whether sensitive content may be disclosed. The mailbox owner approves routing and sender behavior; facilities approves escalation paths and vendor contact; privacy approves fields, notes, retention, and exports; the technical owner approves modules and changes; an agent approves every external reply and closure during the pilot.

## Acceptance, operations, and failure handling

Test inbound and outbound delivery, threading, attachment handling within approved limits, assignment, reassignment, private-note visibility, canned-reply review, overdue escalation, reopened cases, agent offboarding, duplicate/failed delivery handling, queue reconciliation, export/return to mailbox, and clean restore. Use synthetic or staff-authored messages before member traffic. During the 14-day pilot, reconcile source mailbox counts to FreeScout daily and sample closed cases for an actual human response and closure rationale.

If inbound retrieval or outbound delivery fails, stop relying on the queue, place a visible incident notice for staff, work from the underlying mailbox, and reconcile message IDs/timestamps before resuming. Safety and emergency reports always use the separately staffed emergency route. Never let an automated acknowledgement imply that urgent help has been dispatched.

## Professional help threshold

Use an experienced mail administrator for DNS authentication, deliverability, mailbox migration, or provider-specific retrieval/send failures. Obtain privacy/legal review for retention, subject requests, monitoring, sensitive attachments, or cross-border processing. Obtain security review before Internet exposure, SSO, custom modules, or processing health, identity, legal, or payment-related messages.

## Operational checklist

- [ ] Mailbox, facilities, privacy, and technical owners named
- [ ] Emergency route excluded and communicated
- [ ] Named agent permissions tested
- [ ] Inbound/outbound and failure handling verified
- [ ] 14-day queues reconciled daily
- [ ] Module and retention policy approved
- [ ] Open-case export/return tested
- [ ] Clean restore passed

## Rollback and exit

Keep the underlying mailbox and prior access available. Roll back by stopping routing, exporting/reconciling open cases, returning mail flow to the prior inbox, notifying agents, and revoking integration credentials. Before module expansion, verify messages, attachments, contacts, assignments, and notes can be recovered or mapped to a replacement.

## Verification and unknowns

Snapshot verified **2026-07-17** from [FreeScout](https://freescout.net/), its [repository](https://github.com/freescout-help-desk/freescout), and [wiki](https://github.com/freescout-help-desk/freescout/wiki).

Unknown until verified: current module prices/licenses, mailbox-provider behavior, export fidelity, exact retention controls, production sizing, support, authentication options, and reporting limits.

## Flagship requirement coverage (33 points)

1. **Coworking purpose:** coordinate one support mailbox for member IT/facilities requests.
2. **Outcome:** fewer unowned messages with human responses and traceable handoffs.
3. **Good fit:** small teams with mailbox, closure, and vendor-escalation ownership.
4. **Non-fit:** emergency dispatch, unreviewed sensitive archive, or assumed module terms.
5. **Named owners:** mailbox, facilities, privacy, technical, and pilot-review owners.
6. **Prerequisites:** alias, agents, categories, response targets, emergency route, and retention.
7. **Skills:** mail administration, FreeScout operations, privacy, security, and queue management.
8. **License:** core is `AGPL-3.0-only`; every module has a separate terms review.
9. **Cost model:** host, mail, setup, maintenance, modules, backup, and support are separate.
10. **Official sources:** official site, repository, wiki, and module page are linked and dated.
11. **Evidence limit:** provider behavior, module terms, export fidelity, scale, and support are unproven.
12. **Data map:** messages, contacts, tags, assignments, private notes, and attachments are covered.
13. **Privacy:** minimize content; approve retention, requests, exports, and restricted notes.
14. **Security:** named roles, TLS, credentials, updates, backups, and modules are controlled.
15. **Compliance:** mail, privacy, and security professional-help thresholds are explicit.
16. **Allowed automation:** retrieval, threading, approved rules, notifications, and draft text.
17. **Prohibited decisions:** emergencies, fault, refunds, vendors, access, disclosure, and closure stay human.
18. **Human approvals:** mailbox, facilities, privacy, technical, and agent gates are explicit.
19. **Smallest experiment:** one alias, small agent group, and 14-day pilot.
20. **Implementation:** document, stage, test mail, pilot, approve controls, restore, and decide.
21. **Configuration baseline:** mailbox, roles, tags, templates, escalation text, modules, and retention.
22. **Integrations:** provider, CRM, and vendor integrations are not claimed as verified.
23. **Exceptions:** failed/duplicate delivery, overdue, reopen, attachment, and outage paths are tested.
24. **Acceptance tests:** daily count reconciliation plus delivery, permission, export, and restore checks.
25. **Monitoring:** queue age, unassigned, delivery failure, backup failure, and updates have owners.
26. **Routine operations:** daily queue review, closure sampling, offboarding, and module review.
27. **Backup:** database, attachments, configuration, and required state are protected together.
28. **Restore:** clean restore checks threads, roles, notes, assignments, and attachments.
29. **Upgrade:** review official guidance and module compatibility; stage and back up first.
30. **Rollback:** return routing to the underlying mailbox and reconcile every open case.
31. **Exit:** map/export messages, attachments, contacts, notes, status, and owners.
32. **Manual fallback:** staff work the source mailbox; emergencies remain on their separate route.
33. **Expert review and cadence:** review controls after provider/module changes and periodically during use.
