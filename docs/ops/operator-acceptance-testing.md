# Operator Acceptance Test Plan and Results

Test date: 2026-07-18  
Release surface: operator navigation and public operations content  
Automated walkthrough status: `passed-structural-only`  
Human representative review status: `not-completed`

## Evidence boundary

The automated walkthrough is a structural release check only: build the static site, assert every
persona route in the table exists, and assert an expected page-specific phrase is rendered. It does
not prove that a recommendation is correct, a tool works, a person can complete a workflow, a mobile or
assistive-technology experience is usable, or a representative operator accepts the content.

Human review has not been completed for any persona. No interview, observation, usability session,
survey, sign-off, testimonial, or implied operator endorsement is claimed.

## Shared acceptance procedure

1. Recruit a representative participant for the persona, disclose recording/data use, and obtain
   informed consent. Do not substitute a maintainer who wrote the content.
2. Give the outcome prompt without directing the participant to a page.
3. Observe desktop and mobile navigation, keyboard use, comprehension, decision confidence, and dead
   ends. For member-facing and accessibility-critical paths, include relevant assistive technology and
   affected users.
4. Ask the participant to identify cost/labor, evidence limits, data/professional boundaries, human
   owners, smallest experiment, fallback, and exit where applicable.
5. Record task completion, time, wrong turns, severity, quotes only with consent, and proposed fixes.
6. Have the participant review the notes. A maintainer triages findings; a different reviewer confirms
   severe fixes.
7. Mark human acceptance passed only when all critical tasks pass, no severe unresolved harm or
   deception risk remains, and the representative participant signs the scoped result.

## Persona plans and current results

| Persona                            | Outcome prompt and critical path                                                                                                         | Automated structural result | Human result  | Human acceptance criteria                                                                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Owner-operator                  | Choose an operating model for one location; use business model and budget navigation, Stack Builder, then buy/build/self-host boundaries | passed-structural-only      | not-completed | Finds a plausible path; identifies labor, owner, hard gates, pilot, fallback, and exit without reading price guidance as a quote                 |
| 2. Community/front-desk operator   | Prepare one new member's first day; use lifecycle/role navigation, member onboarding, and professional-help boundaries                   | passed-structural-only      | not-completed | Finds normal and exception work; preserves a personal welcome; identifies access, billing, privacy, and escalation owners                        |
| 3. Sales/leasing manager           | Improve tour-to-close without losing consent or nonstandard-deal approvals; use role, workflow, and filtered directory paths             | passed-structural-only      | not-completed | Identifies source of truth, follow-up owner, duplicate/no-show handling, consent, terms approval, and useful measures                            |
| 4. Operations/facilities manager   | Evaluate a room-booking/access change and its outage path; use role, workflow, runtime, and professional-help pages                      | passed-structural-only      | not-completed | Rejects unsafe automatic access; names manual fallback, facilities/access/safety owners, denial tests, and recovery evidence                     |
| 5. Finance/billing administrator   | Evaluate invoice collection and ROI claims; use role, workflow, cost, and ROI pages                                                      | passed-structural-only      | not-completed | Keeps ledger authority and consequential decisions human; separates cash/labor; requires reconciliation and qualified finance review             |
| 6. Virtual-office/mailroom manager | Assess whether a mailroom service is ready; use business-model, role, stack, data, and professional-help paths                           | passed-structural-only      | not-completed | Identifies postal/identity review, custody, release, privacy, retention, billing, unclaimed-item, and continuity gates                           |
| 7. IT/security administrator       | Decide whether a Compose pack can move beyond staging; use technical-ability, runtime, backup, and portability pages                     | passed-structural-only      | not-completed | Does not mistake config or healthy containers for acceptance; identifies all 11 stages, secrets, restore, upgrade, rollback, and evidence owners |
| 8. Consultant-implementer          | Explain an independent tool recommendation and correction path; use role, evaluation, trust, comparison, and acceptance pages            | passed-structural-only      | not-completed | Discloses conflicts/revenue/evidence, labels unknowns, avoids vendor endorsement, and proposes a reversible operator-specific pilot              |

## Automated route assertions

The release check must verify a generated `index.html` and a page-specific phrase for each route below:

| Persona                 | Routes sampled                                                                                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner-operator          | `navigation/by-business-model`, `navigation/by-budget`, `stack-builder`, `ops/buy-build-self-host`                                                    |
| Community/front desk    | `navigation/by-lifecycle`, `roles/generated/community-coordinator-front-desk`, `workflows/generated/member-onboarding`, `ops/professional-help`       |
| Sales/leasing           | `roles/generated/sales-leasing-manager`, `workflows/generated/tour-to-close`, `directory`                                                             |
| Operations/facilities   | `roles/generated/operations-facilities-manager`, `workflows/generated/room-booking`, `ops/runtime-validation`                                         |
| Finance/billing         | `roles/generated/finance-billing-administrator`, `workflows/generated/invoice-collections`, `roi-calculator`, `ops/cost-model`                        |
| Virtual office/mailroom | `navigation/by-business-model`, `roles/generated/virtual-office-mailroom-manager`, `stacks/generated/virtual-office-mailroom`, `ops/data-portability` |
| IT/security             | `navigation/by-technical-ability`, `roles/generated/it-security-administrator`, `ops/runtime-validation`, `guides/backup-and-restore`                 |
| Consultant/implementer  | `roles/generated/consultant-implementer`, `ops/trust-policy`, `start/evaluation-criteria`, `comparisons`, `ops/acceptance-testing`                    |

## Human-review blockers

- No representative participants were recruited, screened, scheduled, or consented for this content
  pass.
- No authorized public deployment exists. The private repository's Pages configuration previously
  blocked deployment, so there is no stable external preview URL for remote participants.
- No session protocol owner, research data store, recording/retention decision, incentive budget, or
  accessibility accommodations were assigned.
- Runtime-dependent tasks need isolated staging systems and synthetic fixtures; only Compose config
  rendering has evidence.
- Existing browser automation is not a substitute for Firefox, WebKit, mobile-device, screen-reader,
  low-vision, cognitive-accessibility, or human comprehension review.
- Professional participation may be needed for finance, postal/virtual-office, privacy, accessibility,
  security, physical-access, and life-safety acceptance; none was engaged here.

## Automated result evidence

`pnpm --filter @ocs/web build` completed on 2026-07-18 and produced 418 static pages. A Node read-only
assertion then checked that each listed generated `index.html` existed and contained its expected
page-specific title or phrase. The final run passed all 31 assertions across the eight persona groups.
The first assertion run found three incorrect expected phrases in the test invocation; after the
expectations were corrected to the source titles, the full assertion set passed. No application
runtime, browser interaction, responsive layout, keyboard behavior, or human task was exercised by
this check.

## Release interpretation

Automated structural success may clear broken/missing route risk only. It must remain displayed beside
`human review: not-completed`. Release decision-makers should treat operator fit, comprehension,
accessibility, and real-workflow acceptance as open gates until representative evidence is retained.
