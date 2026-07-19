---
title: Chatwoot vs FreeScout vs Zammad vs LibreDesk
description: Compare shared inbox and support-desk options for member service.
---

## Shared dimensions

| Tool                                       | Evaluation lane                       | Evidence status                   |
| ------------------------------------------ | ------------------------------------- | --------------------------------- |
| [Chatwoot](../tools/generated/chatwoot/)   | Multi-channel customer conversations  | Partial                           |
| [FreeScout](../tools/generated/freescout/) | Email-centered shared inbox           | Partial                           |
| [Zammad](../tools/generated/zammad/)       | Structured ticketing and service desk | Partial                           |
| LibreDesk                                  | Emerging self-hosted support desk     | Not established; no catalog entry |

## Operator profiles

Evaluate Chatwoot when channel breadth matters, FreeScout for a focused shared mailbox, Zammad for a
more formal queue, and LibreDesk only as a controlled maturity evaluation. The library does not
establish feature parity.

## Task coverage

Candidates can augment intake, assignment, internal notes, replies, status tracking, and trend review.
Identity verification, refunds, access changes, safety issues, and account decisions remain governed
workflows outside a generic inbox.

## Human work remaining

Staff interpret requests, verify identity, choose policy exceptions, write sensitive responses,
escalate incidents, and close the loop with members. Automation must not silently close high-impact
requests.

## Technical difficulty

Expect moderate self-hosting effort, plus substantial mail/domain, channel credential, routing,
identity, spam, and deliverability work. Emerging software carries additional upgrade risk.

## True-cost categories

Count hosting, storage, email/channel services, paid modules or support, migration, retention,
monitoring, backups, spam handling, staff configuration, and incident response. Exact prices and
free limits are not established.

## Portability

Export and re-import contacts, conversations, tickets, messages, attachments, tags, assignments,
timestamps, and audit context. Verify whether channel-provider history is independently portable.

## Integrations and verification caveat

Email and messaging channels, webhooks, SSO, CRM, and automation integrations are `partial` until the
exact edition, provider policy, direction, fields, retries, and deletion behavior are tested against
current official docs.

## Security

Support records contain member PII and sometimes access or payment context. Enforce least privilege,
redaction practices, retention, attachment controls, secure channel secrets, audit review, patching,
and tested restoration.

## Licensing

License and edition models differ and can change. Verify each current repository license, module or
enterprise boundaries, dependencies, and hosted terms; LibreDesk licensing is `not established` here.

## Maintenance

Maintain mail/channel connectivity, routing rules, templates, spam controls, agent accounts,
retention jobs, backups, upgrades, and an outage queue.

## Scenario recommendations

Pilot one shared queue with ordinary, urgent, private, misrouted, duplicate, and attachment-heavy
requests. Select the smallest system that preserves ownership, escalation, search, export, and human
review.

## Do not use when

Do not use a support desk as proof of member identity or as the authoritative ledger for payments,
access, or contracts. Do not add channels the team cannot staff within published expectations.

## Verification

Verified on **2026-07-18**. Channel, feature, price, free-limit, license, and integration details are
`partial` or `not established` where official evidence has not been retained.

## Official sources

- [Chatwoot](https://www.chatwoot.com/) and [Chatwoot docs](https://www.chatwoot.com/docs/)
- [FreeScout](https://freescout.net/) and [FreeScout repository](https://github.com/freescout-help-desk/freescout)
- [Zammad](https://zammad.com/) and [Zammad documentation](https://docs.zammad.org/)
- [LibreDesk repository](https://github.com/abhinavxd/libredesk)
