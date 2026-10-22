---
title: Operator acceptance status
description: Eight-persona acceptance plan separating automated route evidence from uncompleted human review.
---

Test date: 2026-07-18. Automated structural walkthrough: **passed, static routes only**. Human
representative review: **not completed for all eight personas**.

The automated check will prove only that the site builds and sampled persona routes render expected
page-specific text. It cannot prove correctness, usability, accessibility, tool runtime, comprehension,
or operator acceptance.

| Persona                 | Critical outcome                                                                                       | Automated     | Human review  |
| ----------------------- | ------------------------------------------------------------------------------------------------------ | ------------- | ------------- |
| Owner-operator          | Select an operating model while identifying labor, owners, hard gates, pilot, fallback, and exit       | passed-static | not-completed |
| Community/front desk    | Prepare onboarding with personal welcome plus access, billing, privacy, and exception owners           | passed-static | not-completed |
| Sales/leasing           | Improve tour-to-close with consent, duplicate/no-show, source-of-truth, and deal-approval controls     | passed-static | not-completed |
| Operations/facilities   | Evaluate booking/access without unsafe automation and with outage/recovery ownership                   | passed-static | not-completed |
| Finance/billing         | Keep ledger authority and consequential decisions human; reconcile money and challenge ROI assumptions | passed-static | not-completed |
| Virtual office/mailroom | Identify postal/identity, custody, privacy, retention, billing, and continuity gates                   | passed-static | not-completed |
| IT/security             | Distinguish Compose config from 11-stage runtime, recovery, upgrade, and rollback evidence             | passed-static | not-completed |
| Consultant/implementer  | Explain evidence, conflicts, corrections, unknowns, and a reversible operator-specific pilot           | passed-static | not-completed |

The site build produced 418 pages. A read-only Node assertion passed 31 generated-route and expected
page-phrase checks across these personas. It did not run a browser, application runtime, mobile layout,
keyboard journey, or human task.

## Human acceptance method

Recruit representative, consented participants who did not author the pages. Give an outcome prompt,
observe desktop/mobile and relevant assistive technology without directing navigation, record task
completion and severe wrong turns, verify notes with participants, and independently review fixes. An
administrator demo or automated browser test is not human acceptance.

## Open blockers

No participants, external preview, session owner, research-data store, consent/recording retention
decision, incentive budget, or accessibility accommodations were assigned. Runtime tasks lack staging
systems. Professional reviewers for finance, postal, privacy, accessibility, security, access, and
safety were not engaged. Existing Chromium automation does not cover human comprehension, mobile
devices, Firefox/WebKit, or assistive-technology journeys.
