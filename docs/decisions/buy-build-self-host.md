# Buy vs Build vs Self-Host

Last reviewed: 2026-07-18

The useful decision is not "open source or SaaS." It is which operating model can meet the service,
control, recovery, and exit requirements with named people and sustainable total cost.

## First define the job

Write down the operator outcome, affected roles, data classes, systems of record, daily volume,
availability window, human approvals, integrations, legal/professional boundaries, success measures,
budget, deadline, and exit test. If the team cannot describe the manual fallback and accountable owner,
it is not ready to automate the workflow.

## Options

| Option                             | Prefer when                                                                                                                              | Hidden obligations                                                                                                                              | Walk away when                                                                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Buy managed software               | The workflow is common, time-to-value and support matter, exports are testable, and configuration meets requirements                     | Subscription changes, implementation, admin, data cleanup, integration, vendor risk, support escalation, migration                              | Critical data or workflows cannot be exported; contract, security, accessibility, or support gaps remain unacceptable                            |
| Self-host existing software        | Control or extensibility has a real requirement and a named team can secure, monitor, patch, back up, restore, upgrade, and support it   | Skilled on-call labor, hosting, delivery services, observability, incident response, dependency and license review, recovery drills             | Nobody can restore it; unsupported customizations accumulate; single-host risk exceeds tolerance; labor exceeds managed alternatives             |
| Build custom software              | The capability is genuinely differentiating or unavailable, requirements are stable enough, and a funded product team owns its lifecycle | Discovery, UX/accessibility, security, testing, hosting, support, documentation, migrations, staff turnover, compliance, indefinite maintenance | The need is commodity; a spreadsheet/manual pilot has not proved it; one contractor holds all knowledge; there is no maintenance and exit budget |
| Keep or improve the manual process | Volume and risk are low, exceptions dominate, or learning is more valuable than automation                                               | Staff time, training, quality checks, continuity, privacy in files, version control                                                             | Errors, delay, workload, control failure, or member harm exceed an approved threshold                                                            |

Self-hosting is an operating model, not the same thing as building. Managed hosting of open-source
software is a fifth practical arrangement and should be scored as a buy/self-host hybrid.

## Weighted decision record

Score each candidate from 1 (unacceptable) to 5 (strong) using evidence. Multiply by the suggested
weight, then run sensitivity with the top two weights changed. A high total does not override a failed
hard gate.

| Criterion                                     | Suggested weight | Evidence question                                                                          |
| --------------------------------------------- | ---------------: | ------------------------------------------------------------------------------------------ |
| Workflow fit and member/staff usability       |               20 | Can representative users complete normal and exception cases?                              |
| Data, privacy, security, and access control   |               15 | Are boundaries, roles, retention, incidents, and exports acceptable?                       |
| Reliability, backup, restore, and support     |               15 | Has the target arrangement proved recovery and escalation?                                 |
| Five-year total cost and labor capacity       |               15 | Are cash, implementation, maintenance, training, incidents, and exit included?             |
| Portability and reversibility                 |               10 | Can an isolated target import a reconciled export on a tested timeline?                    |
| Integration and system-of-record clarity      |               10 | Are authorities, mappings, conflicts, retries, reconciliation, and disable paths explicit? |
| Accessibility and professional boundaries     |                5 | Have qualified reviewers and affected users cleared applicable gates?                      |
| Delivery time and change risk                 |                5 | Can a reversible pilot reach evidence before the decision expires?                         |
| Roadmap, license, and vendor/community health |                5 | Are terms, maintenance, upgrade path, and dependency risks understood?                     |

Hard gates: prohibited data exposure, unsafe physical-access behavior, unreviewed legal/accounting
requirements, no viable restore/manual fallback, inaccessible critical path without an alternative,
unacceptable lock-in, or no accountable owner.

## Total-cost worksheet

Calculate cash and labor separately for setup, each operating year, and exit:

```text
five_year_cost = licenses_and_usage
               + hosting_storage_delivery
               + implementation_migration
               + staff_admin_and_support_hours * loaded_hourly_cost
               + maintenance_security_recovery_hours * loaded_hourly_cost
               + training_and_change
               + expected_incident_and_downtime_cost
               + professional_review
               + exit_export_and_migration
```

Use low, expected, and high cases. Free licenses do not make hosting, email/SMS, backups, upgrades,
support, or staff attention free. Do not claim savings until the baseline labor and quality outcome have
been measured over an agreed period.

## Smallest reversible experiment

1. Use synthetic data and one bounded workflow at one location.
2. Test normal work, permission denial, duplicates, correction, outage/manual fallback, export, backup,
   isolated restore, and disable/rollback.
3. Include the people who perform and receive the service; an administrator demo is not acceptance.
4. Record time, errors, unresolved exceptions, member/staff friction, cash, labor, and support response.
5. Reconcile every migrated record and material total before introducing personal or financial data.
6. Decide to adopt, revise, defer, or exit. Do not let an expired pilot become an unowned production
   dependency.

## Decision outcomes

- **Buy** when managed accountability and speed justify cost and lock-in controls pass.
- **Self-host** when control is required and demonstrated operating capacity is sustainable.
- **Build** only when the differentiated outcome survives manual validation and lifecycle funding.
- **Hybrid** when authorities remain clear, integrations are bounded, and the combination scores better
  than accidental tool sprawl.
- **Defer** when evidence, owners, professional review, or recovery are missing. Deferral is safer than
  pretending readiness.

Review the decision at pilot close, before renewal, after material pricing/terms/security changes, and
when ownership or technical capacity changes.
