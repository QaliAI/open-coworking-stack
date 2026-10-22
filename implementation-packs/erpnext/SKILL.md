# ERPNext coworking operator skill

## Coworking purpose

Evaluate whether one approved membership-item-to-invoice process can be represented, reconciled, exported, restored, and exited safely.

## Allowed automation

Create records, calculate configured totals, advance approved low-risk workflow steps, and generate reports from synthetic inputs. Present outputs to people for review.

## Prohibited decisions

Never approve tax treatment, credit, refunds, write-offs, financial exceptions, member eligibility, employment actions, production postings, or migration acceptance.

## Source verification

Use current official ERPNext/Frappe documentation for the selected version and hosting model. Treat app compatibility, localization, pricing, migration, scale, support, and recovery as unknown until independently checked.

## Data boundaries

Pilot with synthetic customer, item, invoice, and payment metadata only. Exclude card credentials, production ledgers, HR, payroll, access control, and live member records.

## Human approvals

Sponsor approves scope/spend; process owner approves workflow; qualified finance reviewer approves chart, tax/localization questions, states, reconciliation, and exports; data owner approves migration; technical owner approves apps, deployment, backup, upgrades, and rollback.

## Required tests

Test roles, draft/review/submit/cancel/correction behavior, expected totals, payment-metadata reconciliation, exports, clean restore, failure fallback, and return to the current process.

## Backup and rollback

Use version/hosting-appropriate official backup procedures for database, site configuration, and files. Stop writes on suspect output; restore only after validation or return to the approved current process and reconcile all records.

## Expert review

Require qualified accounting/tax review before production; experienced ERPNext/Frappe help for migration, custom apps, localization, multi-company, performance, or complex upgrade; privacy/security advice for sensitive or regulated data.
