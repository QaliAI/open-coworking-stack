---
title: Commercial platform capability benchmark
description: An evidence worksheet for comparing coworking SaaS capabilities without inventing plan entitlements.
page_classification: Due-diligence worksheet
---

This benchmark covers the complete operator capability surface used in this library. It is not a
claim that every platform provides every capability.

## Shared dimensions

| Marker            | Meaning                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `Partial`         | Official positioning or the local catalog makes the capability a valid evaluation lane; exact workflow and edition entitlement are unverified |
| `Not established` | No retained official evidence supports a claim; ask for documentation and demonstrate it                                                      |

Apply the same dimensions to each capability: operator outcome, source of truth, roles, exception
path, edition, geography, limits, data model, API/export, audit, security, support owner, and exit.

## Operator profiles

- Independent spaces should prioritize simple administration, local payments/accounting, support,
  and a complete export over maximum configurability.
- Multi-location operators should prioritize location scoping, shared policy, delegated roles,
  consolidated reporting, migration, integration operations, and change control.
- Hybrid operators should prioritize API/webhook evidence, identifiers, retries, reconciliation, and
  clean boundaries between the platform and operator-owned services.

## Task coverage

The cells below are evidence status, not feature checkmarks. Each platform is linked to its catalog
record and should be re-scored for the proposed edition and contract.

| Capability to demonstrate                                     | [OfficeRnD](../tools/generated/officerd-saas/) | [Nexudus](../tools/generated/nexudus/) | [Cobot](../tools/generated/cobot/) | [Optix](../tools/generated/optix-app/) |
| ------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------- | ---------------------------------- | -------------------------------------- |
| Lead capture and source                                       | Partial                                        | Not established                        | Not established                    | Not established                        |
| Lead qualification and pipeline                               | Partial                                        | Not established                        | Not established                    | Not established                        |
| Tour scheduling and follow-up                                 | Partial                                        | Not established                        | Not established                    | Not established                        |
| Company and contact CRM                                       | Partial                                        | Partial                                | Partial                            | Not established                        |
| Membership plans and entitlements                             | Partial                                        | Partial                                | Partial                            | Not established                        |
| Proposals, contracts, and renewals                            | Partial                                        | Partial                                | Not established                    | Not established                        |
| Member onboarding and offboarding                             | Partial                                        | Partial                                | Partial                            | Partial                                |
| Member portal                                                 | Partial                                        | Partial                                | Partial                            | Partial                                |
| Branded mobile experience                                     | Not established                                | Not established                        | Not established                    | Partial                                |
| Desk, room, and resource booking                              | Partial                                        | Partial                                | Partial                            | Partial                                |
| Availability, conflicts, approvals, and cancellations         | Partial                                        | Partial                                | Partial                            | Partial                                |
| Day pass and drop-in workflow                                 | Not established                                | Not established                        | Partial                            | Partial                                |
| Visitor registration and host notification                    | Not established                                | Not established                        | Not established                    | Not established                        |
| Check-in and occupancy evidence                               | Not established                                | Not established                        | Partial                            | Partial                                |
| Events and community engagement                               | Not established                                | Not established                        | Not established                    | Partial                                |
| Products, credits, and usage metering                         | Not established                                | Not established                        | Not established                    | Not established                        |
| Invoices, recurring charges, tax, and credits                 | Partial                                        | Partial                                | Partial                            | Not established                        |
| Payment collection, failures, refunds, and reconciliation     | Partial                                        | Partial                                | Partial                            | Not established                        |
| Accounting handoff and close controls                         | Not established                                | Not established                        | Not established                    | Not established                        |
| Deposits and liability handling                               | Not established                                | Not established                        | Not established                    | Not established                        |
| Access-control provisioning and revocation                    | Partial                                        | Partial                                | Not established                    | Partial                                |
| Wi-Fi/network credential lifecycle                            | Not established                                | Not established                        | Not established                    | Not established                        |
| Mail, package, and virtual-office workflow                    | Not established                                | Not established                        | Not established                    | Not established                        |
| Member requests, tickets, and service levels                  | Not established                                | Not established                        | Not established                    | Not established                        |
| Notifications, templates, consent, and preferences            | Not established                                | Not established                        | Not established                    | Not established                        |
| Staff roles, approvals, and segregation of duties             | Not established                                | Not established                        | Not established                    | Not established                        |
| Multi-location policy and delegated administration            | Partial                                        | Partial                                | Not established                    | Partial                                |
| Operational, occupancy, sales, and finance reporting          | Not established                                | Not established                        | Not established                    | Not established                        |
| API, webhooks, identifiers, retries, and sandbox              | Not established                                | Not established                        | Not established                    | Not established                        |
| SSO, provisioning, audit logs, and administrator recovery     | Not established                                | Not established                        | Not established                    | Not established                        |
| Full export, attachments, history, deletion, and exit support | Not established                                | Not established                        | Not established                    | Not established                        |
| Availability, incident communication, backups, and continuity | Not established                                | Not established                        | Not established                    | Not established                        |

For every `Partial` cell, record an official URL, edition, verified date, test script, observed result,
limitations, evidence owner, and recheck date. Do not promote a cell based on a sales statement alone.

## Human work remaining

No platform removes responsibility for sales judgment, contract approval, tax/accounting review,
refunds, identity checks, access exceptions, safety, member support, data quality, consent, or incident
response. Record the human owner and fallback beside each accepted capability.

## Technical difficulty

Base configuration is moderate. Data migration, accounting/payments, access/network, identity,
multi-location rules, APIs, custom reporting, and tested exit are moderate-to-high. Score both vendor
and operator implementation responsibilities.

## True-cost categories

Record subscription basis, mandatory add-ons, implementation, migration, sandbox, support, payment
and messaging services, accounting/access/network connectors, custom development, training,
administration, annual change, incident work, and exit assistance. Exact prices and free limits are
not established here; obtain current official quotes.

## Portability

Require a representative export covering every applicable row: stable IDs, relationships, members,
companies, contracts, plans, entitlements, bookings, check-ins, invoices, payments, credits, notes,
attachments, consent, access mappings, audit history, and deletion evidence. Test readability and
re-import, not merely file delivery.

## Integrations and verification caveat

Every integration is `partial` until official documentation and a sandbox establish the exact plan,
region, versions, data direction, fields, identifiers, authentication, limits, retries, idempotency,
error visibility, reconciliation, deletion, and support owner. Logos, marketplace listings, and API
availability do not establish a working operator workflow.

## Security

Evaluate role granularity, privileged access, SSO/MFA, provisioning/offboarding, audit evidence,
encryption, retention, deletion, subprocessors, incident notification, vulnerability handling,
business continuity, administrator recovery, and export monitoring. Request evidence through official
vendor channels; this benchmark makes no certification claim.

## Licensing

The compared platforms are proprietary managed SaaS. Review service, acceptable-use, API, data
processing, support, availability, renewal, termination, export, deletion, and transition terms. A
trial or free offer, if any, does not change the proprietary classification.

## Maintenance

Assign owners for configuration, roles, templates, data quality, release review, connector tests,
failed transaction queues, reconciliation, administrator recovery, vendor escalation, continuity
exercises, and annual exit tests.

## Scenario recommendations

Run the same scripted lifecycle in each sandbox: lead, tour, proposal, onboarding, booking conflict,
day pass, invoice, failed payment, refund, access failure, member request, plan change, multi-site move,
offboarding, full export, deletion, and vendor outage. Mark only observed outcomes and keep screenshots
or logs permitted by the vendor and your privacy policy.

## Do not use when

Do not total `Partial` cells as a product score, treat `Not established` as proof of absence, compare
different editions, or accept a happy-path demo. Do not choose a platform that lacks a workable human
exception path, reconciliation process, security fit, or tested exit.

## Verification

Verified on **2026-07-18**. All capability cells intentionally remain `Partial` or `Not established`.
No exact price, free limit, certification, integration, or edition entitlement is asserted.

## Official sources

- [OfficeRnD](https://www.officernd.com/) and [OfficeRnD help](https://help.officernd.com/)
- [Nexudus](https://www.nexudus.com/) and [Nexudus help](https://help.nexudus.com/)
- [Cobot](https://www.cobot.me/) and [Cobot support](https://www.cobot.me/support)
- [Optix](https://www.optixapp.com/) and [Optix support](https://support.optixapp.com/)
