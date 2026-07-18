---
title: Umami for coworking website analytics
tool_id: umami
guide_status: full
verified_on: 2026-07-17
---

# Umami for coworking website analytics

Umami is privacy-focused web analytics available self-hosted or as managed cloud. A coworking marketing pilot should measure pageviews and tour call-to-action events on staging before collecting production traffic.

## Fit and non-fit

**Good fit:** a team needing simple landing-page and tour-funnel signals with a data-minimization and dashboard-access policy.

**Poor fit:** a CRM attribution source of truth, individual member surveillance, a legal/compliance shortcut, or tracking installed without consent/cookie-policy review for the operator's jurisdiction and configuration.

## License and cost boundary

Umami is OSI-approved open source under `MIT`; self-hosting is free software and Umami Cloud has paid plans. Budget for cloud subscription or compute/database/TLS, tracking and event design setup, updates/retention/backup work, any CMS/tag-manager integration, and support. Verify [official pricing](https://umami.is/pricing); no plan limits are asserted.

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign marketing, privacy, web, and technical owners. Define the business question, approved events, site environments, retention, dashboard roles, and consent/cookie decision.

| Data                     | Source           | Umami use                 | Exit/handoff            |
| ------------------------ | ---------------- | ------------------------- | ----------------------- |
| Pageviews                | Marketing site   | Traffic trend             | Aggregate report/export |
| Tour CTA events          | Site interaction | Funnel signal             | Marketing review        |
| Device/browser metadata  | Request          | Aggregate analysis        | Minimized retention     |
| Website definition/users | Admin            | Tracking/dashboard access | Config/access register  |

The catalog marks personal data as false, but the actual configuration, metadata, and local law still require privacy review. Payment data is excluded.

## Smallest useful experiment

Following [official docs](https://umami.is/docs), deploy/provision Umami, add its tracking script only to the marketing site's staging environment, and validate pageviews plus one tour CTA event. Confirm no production data is collected and document expected versus observed counts.

## Implementation sequence

1. Approve one business question and one CTA event.
2. Decide cloud/self-host and review setup, tracking, privacy, and export guidance in official docs.
3. Configure staging with restricted dashboard access and approved retention.
4. Add the documented script to staging only.
5. Test pageview/event counts, excluded traffic, consent behavior, and script failure impact.
6. Review metric meaning and privacy position before production.
7. Complete config/data export and restore/recovery test.

## Security and privacy controls

- Restrict dashboard/admin access and use TLS/supported updates.
- Collect only approved pageview/event metadata; never put member or lead PII in event values.
- Review cookie/consent requirements for actual configuration and jurisdiction.
- Set retention and remove test data before production.
- Protect database/backups and tracking/configuration credentials.
- Review CMS or tag-manager integration separately.

## Backup, export, and restore test

For self-hosting, back up the database and required configuration according to official docs, restore to clean staging, and verify site definition, users/roles, and sample metrics. For cloud, test supported data/config exports and account recovery. Export an aggregate pilot report and verify it remains understandable outside Umami.

## Integrations and manual handoffs

No CMS, CRM, or tag-manager integration is catalog-verified. Web staff implement the documented script; privacy approves collection; marketing interprets aggregate signals; sales separately validates whether tour leads and bookings changed.

## Human oversight

People define metrics, assess consent, interpret noise, and decide marketing changes. Umami augments aggregate measurement; it does not identify lead quality or make customer decisions.

## Operational checklist

- [ ] Marketing, privacy, web, and technical owners named
- [ ] One approved question/event documented
- [ ] Staging-only script and counts validated
- [ ] No PII in event values
- [ ] Consent/cookie position reviewed
- [ ] Dashboard roles and retention approved
- [ ] Aggregate export readable
- [ ] Self-host restore or cloud recovery tested

## Rollback and exit

The script must not block the site. Roll back by removing it, verifying page performance, exporting/deleting pilot data under policy, and revoking access. Before production adoption, prove data/config export and retain metric definitions so trend reporting can move to another platform.

## Verification and unknowns

Snapshot verified **2026-07-17** from [Umami](https://umami.is/), its [repository](https://github.com/umami-software/umami), and [documentation](https://umami.is/docs).

Unknown until verified: current cloud prices/limits, exact metadata and cookie behavior, export fidelity, retention controls, production sizing, support, residency/certifications, and CMS/tag-manager behavior.
