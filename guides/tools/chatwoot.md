---
title: Chatwoot for coworking enquiries
tool_id: chatwoot
guide_status: full
verified_on: 2026-07-17
---

# Chatwoot for coworking enquiries

Chatwoot provides shared inboxes across chat, email, and social channels. A coworking pilot should use a website widget on a staging or limited page with two agents, then evaluate whether enquiries are assigned and handed off reliably.

## Fit and non-fit

**Good fit:** a community/sales team losing website or shared-inbox enquiries in personal inboxes and willing to define ownership, labels, response expectations, and after-hours handoff.

**Poor fit:** an automated substitute for member support, a store for unrestricted sensitive documents, or a multi-channel rollout before transcript retention and channel permissions are understood.

## License and cost boundary

Chatwoot is **open core**: the catalog records an `MIT` core with paid cloud and enterprise features. Budget for self-host compute/database/storage or cloud seats/channels, setup and channel connection, updates/transcript retention, optional commercial features, and support. Confirm current terms on [official pricing](https://www.chatwoot.com/pricing).

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign inbox, privacy, and technical owners. Define agent roles, labels, sales/support handoff, response expectations, after-hours message, attachment policy, and retention.

| Data               | Source         | Chatwoot use          | Handoff/exit                   |
| ------------------ | -------------- | --------------------- | ------------------------------ |
| Contact details    | Visitor/member | Conversation identity | CRM/support record if approved |
| Conversations      | Website widget | Shared handling       | Export/retention process       |
| Agent notes/labels | Staff          | Coordination          | Human review                   |
| Attachments        | Visitor/member | Support context       | Minimize and delete by policy  |

Personal data is held. Payment data is outside the pilot and should not be requested in chat.

## Smallest useful experiment

Using [official docs](https://www.chatwoot.com/docs), connect a website widget on a staging or limited page and handle enquiries for one week with two agents. Measure assignment, missed conversations, handoff quality, transcript content, and after-hours behavior.

## Implementation sequence

1. Select one website channel and define response/handoff rules.
2. Compare self-host/cloud and edition needs using the [official site](https://www.chatwoot.com/) and docs.
3. Configure staging, TLS, restricted admin roles, and two agents.
4. Publish the widget to a limited audience with appropriate privacy wording.
5. Test assignment, labels, notes, attachments, closure, after-hours, and deletion/export.
6. Review the week with sales, community, privacy, and technical owners.
7. Complete restore/account recovery before adding email or social channels.

## Security and privacy controls

- Restrict admin and inbox access; use individual agent accounts.
- Use TLS, supported updates, and limited channel credentials.
- Tell users what channel they are using and avoid soliciting payment or unnecessary sensitive data.
- Set transcript, attachment, note, and contact retention.
- Audit after-hours and escalation behavior so urgent issues are not silently queued.
- Review every channel/integration and enterprise feature separately.

## Backup, export, and restore test

For self-hosting, back up the database, attachments, configuration, and required application state using official guidance. Restore to clean staging and verify pilot contacts, conversations, labels, notes, roles, and attachment access. For cloud, test supported exports and account recovery. Retain an independent list of open cases before migration.

## Integrations and manual handoffs

No CRM, email, or social integration is catalog-verified. The website widget must follow official docs. Agents classify and respond; sales owns lead follow-up; facilities receives operational escalations; a manager owns after-hours and privacy exceptions.

## Human oversight

People interpret enquiries, protect PII, set service expectations, and decide escalation. Chatwoot augments shared handling and classification; it does not replace community or support judgment.

## Operational checklist

- [ ] Inbox, privacy, and technical owners named
- [ ] Two-agent permissions tested
- [ ] Response, after-hours, and escalation rules published
- [ ] Transcript/attachment retention approved
- [ ] Limited widget pilot reviewed
- [ ] Open-case handoff documented
- [ ] Export/restore or SaaS recovery tested
- [ ] Existing contact route retained during pilot

## Rollback and exit

Keep the previous website contact route. Roll back by removing the widget, exporting open and retained conversations, assigning unresolved cases manually, revoking channel credentials, and returning to the prior inbox. Before adding channels, verify contact/conversation export and document how labels and notes map to a replacement.

## Verification and unknowns

Snapshot verified **2026-07-17** from [Chatwoot](https://www.chatwoot.com/), its [repository](https://github.com/chatwoot/chatwoot), and [documentation](https://www.chatwoot.com/docs).

Unknown until verified: current cloud/enterprise prices and feature boundaries, channel availability, transcript export fidelity, retention controls, support, production sizing, and data residency/certifications.
