# Umami coworking operator skill

## Coworking purpose

Measure aggregate visits and one approved tour-request CTA on a coworking marketing site so marketing staff can compare a documented question with booking or CRM outcomes. Do not use Umami to identify or score members or leads.

## Allowed automation

- Deploy an approved tracking script and fixed event schema to staging.
- Validate that prohibited property names and synthetic values are absent.
- Report aggregate counts, collection outages, backup failures, and access drift.
- Disable collection when a pre-approved privacy or site-performance stop condition is met.

## Prohibited decisions

- Do not add domains, events, properties, identifiers, integrations, or retention without approval.
- Do not join analytics to member, lead, employee, booking, or CRM identities.
- Do not infer lead quality, causation, eligibility, pricing, or campaign changes.
- Do not make consent, lawful-basis, deletion-exception, or breach decisions.

## Source verification

Record the selected cloud/service or self-hosted version and recheck [official docs](https://umami.is/docs), [repository](https://github.com/umami-software/umami), and [pricing](https://umami.is/pricing) as relevant. The 2026-07-17 snapshot is not proof of current metadata, cookies, limits, support, residency, export, or restore behavior; mark those `unverified` until inspected.

## Data boundaries

Allow approved page/referrer signals, one fixed CTA event, minimum request/device metadata produced by the selected configuration, site definitions, and named users. Prohibit names, email, phone, member/lead IDs, form values, free text, payment data, sensitive URL/query data, and cross-system identity joins.

## Human approvals

Marketing approves the question and interpretation; privacy approves fields, notice/consent, retention, and deletion; web approves script behavior and disable path; security approves production access; change management approves release. Any new event, property, domain, audience, or integration repeats approval.

## Required tests

Inspect actual requests and stored fields; test page/event counts, duplicates, sensitive query strings, excluded traffic, approved consent states, blocked/unavailable script, site performance, access roles, deletion, export, account recovery, and self-host backup restore if applicable. Record expected versus observed counts.

## Backup and rollback

For self-hosting, back up version-specific data/configuration and restore to isolated staging. For cloud, test supported export and account recovery without calling it provider DR evidence. Roll back unsafe collection by removing/disabling the script first, then use the tested application/data path and reconcile count gaps.

## Expert review

Escalate to privacy/legal experts for production tracking, cross-border data, identity joins, employees/members, sensitive events, or consent changes. Escalate to security/database specialists for internet exposure, custom auth, major migrations, high traffic, compromise, or recovery-objective commitments.
