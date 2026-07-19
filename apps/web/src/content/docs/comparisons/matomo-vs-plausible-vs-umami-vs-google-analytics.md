---
title: Matomo vs Plausible vs Umami vs Google Analytics
description: Compare web analytics choices for coworking marketing sites.
---

## Shared dimensions

| Tool                                                     | Evaluation lane                                  | Evidence status |
| -------------------------------------------------------- | ------------------------------------------------ | --------------- |
| [Matomo](../tools/generated/matomo/)                     | Broad self-hostable/open-core web analytics      | Partial         |
| [Plausible](../tools/generated/plausible-ce/)            | Focused web analytics with cloud/self-host paths | Partial         |
| [Umami](../tools/generated/umami/)                       | Focused self-hostable web analytics              | Partial         |
| [Google Analytics](../tools/generated/google-analytics/) | Managed marketing analytics ecosystem            | Partial         |

## Operator profiles

Plausible or Umami merit evaluation for simpler site measurement, Matomo for broader analytics needs
with operational capacity, and Google Analytics where its ecosystem and governance fit are required.
Privacy outcome depends on configuration, law, and data flows, not branding.

## Task coverage

Candidates can augment acquisition, content, campaign, and conversion analysis. They do not establish
marketing consent, explain visitor intent, or reconcile tours and memberships without governed data.

## Human work remaining

People define measurement purpose, configure consent, validate events, investigate attribution,
exclude internal traffic, interpret uncertainty, and approve campaign changes.

## Technical difficulty

Managed services are low-to-moderate configuration. Self-hosted options add moderate infrastructure,
database, scaling, patching, and backup work. Reliable event design is moderate for every option.

## True-cost categories

Count hosting or subscription, traffic/data growth, implementation, consent tooling, tag governance,
custom events, reporting, retention, privacy/legal review, support, monitoring, and migration. Exact
prices and free limits are not established.

## Portability

Retain event definitions, tag configuration, campaign conventions, custom dimensions, reports, raw
or aggregate exports where available, consent records, and historical limitations. Test an exit
before relying on long-term trend continuity.

## Integrations and verification caveat

CMS, consent, advertising, tag-manager, API, ecommerce, and dashboard integrations are `partial`
until edition, data direction, identifiers, retention, limits, and current official docs are verified.

## Security

Minimize identifiers and event payloads, avoid secrets or form contents in URLs/events, restrict
exports, define retention, review cross-border/processors, secure tags and admin accounts, and patch
self-hosted services.

## Licensing

Matomo is open-core, Plausible and Umami provide self-hostable source under current project terms,
and Google Analytics is proprietary SaaS. Verify current licenses and cloud terms.

## Maintenance

Maintain event specifications, consent behavior, domain filters, campaign naming, bot/internal
traffic handling, retention, dashboards, upgrades, backups, and periodic data-quality checks.

## Scenario recommendations

Pilot the minimum events needed for one decision, compare counts with server or booking evidence,
test consent states and deletion, and choose the least data-intensive option that answers the question.

## Do not use when

Do not collect data without a defined decision, send personal or sensitive member data in events, or
compare tools on dashboard count while ignoring consent, retention, and data quality.

## Verification

Verified on **2026-07-18**. Privacy configuration, editions, prices, free limits, and integrations are
`partial` or `not established`; obtain jurisdiction-specific advice where needed.

## Official sources

- [Matomo](https://matomo.org/) and [Matomo guide](https://matomo.org/guide/)
- [Plausible](https://plausible.io/) and [Plausible docs](https://plausible.io/docs)
- [Umami](https://umami.is/) and [Umami docs](https://umami.is/docs)
- [Google Analytics](https://marketingplatform.google.com/about/analytics/) and [Analytics help](https://support.google.com/analytics/)
