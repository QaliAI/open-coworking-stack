---
title: Buy vs build vs self-host
description: Choose a sustainable operating model using evidence, total cost, recovery, and exit gates.
---

The decision is not simply open source versus SaaS. Choose the operating model that can meet the
service, control, recovery, and exit requirements with named people and sustainable total cost.

| Option                      | Prefer when                                                                                                             | Stop when                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Buy managed                 | Workflow is common, support/speed matter, configuration fits, and export is testable                                    | Critical data/workflows cannot exit or contract, security, accessibility, and support gaps remain |
| Self-host existing software | Control has a real requirement and a team can secure, monitor, patch, support, back up, restore, upgrade, and roll back | Nobody can restore it or labor/single-host/customization risk exceeds tolerance                   |
| Build custom                | Capability is genuinely differentiating, manual validation exists, and a funded product team owns the lifecycle         | Need is commodity, one person holds all knowledge, or maintenance/exit funding is absent          |
| Improve manual work         | Volume/risk are low, exceptions dominate, or learning matters more than automation                                      | Error, delay, workload, control failure, or member harm crosses an approved threshold             |

Self-hosting existing software is not the same as building. Managed open-source hosting is a practical
buy/self-host hybrid.

## Score with evidence

Suggested weights: workflow fit/usability 20%; data/privacy/security 15%; reliability/recovery/support
15%; five-year cash and labor 15%; portability 10%; integration/authority 10%; accessibility and
professional boundaries 5%; delivery/change risk 5%; roadmap/license/vendor or community health 5%.

A score cannot override hard gates: prohibited data exposure, unsafe physical access, unresolved
legal/accounting duties, no viable restore/manual fallback, inaccessible critical paths without an
alternative, unacceptable lock-in, or no accountable owner.

## Price all work

Include licenses/usage, hosting/storage/delivery, implementation/migration, staff administration and
support, maintenance/security/recovery, training/change, incidents/downtime, professional review, and
exit. Use low, expected, and high cases. Free software does not make skilled labor or recovery free.

## Pilot reversibly

Use synthetic data and one workflow at one location. Test normal work, denial, duplicates, correction,
outage fallback, export, backup, isolated restore, and rollback. Include people who perform and receive
the service. Reconcile every migrated record and material total, then adopt, revise, defer, or exit.
Never let an expired pilot become an unowned production dependency.
