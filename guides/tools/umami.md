---
title: Umami for coworking website analytics
tool_id: umami
guide_status: full
verified_on: 2026-07-17
---

# Umami for coworking website analytics

This guide scopes Umami to one aggregate marketing question and one tour CTA event. It is not evidence that a deployment is anonymous, consent-exempt, correctly sized, supported, or recoverable.

## 1. Coworking outcome

Measure whether marketing-site visitors reach an approved tour-request CTA and compare the aggregate signal with separately governed booking/CRM outcomes. Umami informs human analysis; it does not identify lead quality, intent, or causation.

## 2. Pilot scope

Use one staging domain, one landing page, one fixed synthetic tour CTA event, and named dashboard users. Keep production, real lead/member data, identity joins, free text, and campaign automation out of scope.

## 3. Fit

**Good fit:** a team with marketing, web, privacy, dashboard, and recovery owners; a fixed event dictionary; restricted access; approved retention; and either managed-service governance or self-hosting capability.

## 4. Non-fit and alternatives

**Poor fit:** CRM attribution, individual surveillance, personal data in events, or tracking without notice/consent review and an owner. Use server logs, privacy-reviewed aggregate host analytics, or no tracking when they answer the question with less data; keep booking/CRM as the conversion source of truth.

## 5. Coworking use cases

- Compare aggregate visits with a tour landing-page CTA.
- Measure approved traffic to location, event, or amenity pages.
- Detect that approved website analytics collection stopped.

Member tracking, employee monitoring, lead scoring, and identity attribution are excluded.

## 6. Tasks reduced or augmented

Umami can collect approved page/event signals and prepare aggregate reports. It cannot define meaningful metrics, validate bookings, explain count variance, determine consent, identify lead quality, or choose marketing actions.

## 7. Human decisions and approvals

Marketing approves the question and interpretation; privacy approves data, notice/consent, retention, and deletion; web approves script behavior/disablement; security approves access/exposure; change management approves production. Every new domain, event, property, audience, or integration repeats approval.

## 8. Owners and RACI

Name an accountable marketing owner, responsible web deployer, dashboard administrator, privacy/security reviewers, and recovery owner. Sales/community staff independently validate real tour outcomes; analysts must not approve their own scope expansion.

## 9. Prerequisites

Record exact environments/domains, one question, event trigger/name/properties, prohibited values, expected synthetic counts, baseline source, consent/notice decision, retention/deletion, roles, deployment choice, script disable switch, and recovery/exit path.

## 10. Skills and effort boundary

The pilot needs web deployment, browser/network inspection, event design, privacy review, and access governance; self-hosting also needs DNS/TLS, application/database updates, backup, and restore skills. The catalog's `1-3 days` estimate is unverified and excludes legal review and production operations.

## 11. Deployment choice

Compare cloud and self-hosting for terms, data location/subprocessors, retention, export, account recovery, support, maintenance, and exit. For self-hosting use a selected-version architecture from [official documentation](https://umami.is/docs); no image, database topology, or size is prescribed here.

## 12. Architecture and dependencies

Map browser, marketing site, tracking script endpoint, Umami app/service, data store, dashboard users, DNS/TLS/proxy, backups, and any tag manager. Prove the site and form remain usable when analytics is blocked or unavailable.

## 13. License and edition boundary

The repository identifies Umami as MIT-licensed open-source software. Recheck the [official repository](https://github.com/umami-software/umami) for the selected release and review separate cloud terms/features; the software license does not establish managed-service entitlement.

## 14. Total cost boundary

Record cloud subscription or self-host compute/database/storage/TLS, setup, event design, CMS deployment, privacy review, access administration, updates, monitoring, backups, recovery drills, support, and exit. Verify [current pricing](https://umami.is/pricing); no price or plan limit is asserted.

## 15. Data map

| Data                    | Purpose            | Minimum handling              | Exit record                   |
| ----------------------- | ------------------ | ----------------------------- | ----------------------------- |
| Page/referrer signals   | Aggregate traffic  | Approved sites/retention      | Dated aggregate report/export |
| Fixed event/properties  | CTA measurement    | Allowlist; no PII/free text   | Event dictionary              |
| Request/device metadata | Aggregate analysis | Inspect actual version/config | Field and deletion record     |
| Site definitions/users  | Administration     | Named least privilege         | Config/access register        |

Names, email, phone, form contents, IDs, payment data, and sensitive URL/query values are prohibited.

## 16. Privacy and retention

Treat privacy-friendly, cookie-free, or anonymous claims as hypotheses requiring configuration- and jurisdiction-specific review. Inspect actual requests/stored fields, approve notice/consent, minimize retention, support access/deletion, and prevent personal data in URLs/events.

## 17. Security baseline

Use TLS, named least-privilege accounts, supported authentication, supported updates, protected database/backups, restricted administration, managed secrets, and environment separation. Review proxy exposure and never put administrative secrets in client-side code.

## 18. Compliance and expert review

The operator owns privacy, cookie/electronic-communications, employment-monitoring, and contract obligations; Umami cannot determine lawful basis. Require privacy/legal review for production, cross-border, identity joins, employees/members, sensitive events, or consent changes and security/database review for custom exposure or major migrations.

## 19. Integration boundary

No CMS, tag manager, CRM, booking, or form connector is catalog-verified. Record official source/version, fields, destination, credentials, failure behavior, owner, disable method, and manual fallback. Keep lead handoff and validation separate during the pilot.

## 20. Configuration baseline

Record service/application version, deployment method, domains, script source/config, event allowlist, prohibited fields, dashboard users/roles, retention/deletion, notice/consent behavior, proxy/TLS, backups/exports, monitoring, and disable path. Keep secrets outside client code and this repository.

## 21. Smallest useful experiment

Deploy/provision Umami but install its documented script only on staging. Generate a known synthetic pageview sequence and one tour CTA event, inspect requests/stored fields, compare expected/observed counts, and remove pilot data.

## 22. Implementation sequence

1. Approve one question, event, and prohibited-field list.
2. Recheck setup, tracking, privacy, export, and selected-service documentation.
3. Configure staging, TLS, named users, and minimum retention.
4. Deploy the script through one approved mechanism.
5. Run field, count, duplication, consent, failure, and performance tests.
6. Test export plus self-host restore or cloud account/data recovery.
7. Obtain approvals before a reversible production pilot.

## 23. Migration and rollout

Deploy to one production domain only after staging acceptance, with a single disable switch and baseline period. Freeze event-schema changes, monitor site/form and prohibited fields, and reconcile with booking/CRM totals. Expand sites/events only through new approval.

## 24. Required test plan

Test page/event counts, duplicate navigation, synthetic sensitive query values, excluded traffic, approved consent states, blocked/unavailable script, site/form performance, roles, unauthorized access, deletion, aggregate export, account recovery, and self-host restore if used. Record expected versus observed counts and unexplained variance.

## 25. Acceptance criteria

Observed synthetic counts meet the pre-approved tolerance; prohibited fields are absent from inspected requests/storage; the site/form works without Umami; roles, deletion, export, disablement, and applicable recovery pass; marketing/privacy/web/security owners sign. Unexplained collection blocks production.

## 26. Success metrics

Track synthetic count accuracy, prohibited-field findings, analytics-caused site regressions, collection gaps, access exceptions, deletion/export completion, and operator effort. Production marketing outcomes require separate booking/CRM evidence; no causation or staffing savings are inferred.

## 27. Monitoring and alerting

Monitor app/service health, self-host database/storage, TLS, backups, access drift, and a synthetic staging event. Alerts must avoid personal URLs/payloads, distinguish site from analytics-only failure, and route to a named human with a disable runbook.

## 28. Operating cadence

Review users, domains, event dictionary, prohibited fields, retention/deletion, script version, release notes, backups, unexpected count changes, and integrations on defined cadences. Reapprove metrics whenever site journeys, audiences, fields, or service terms change.

## 29. Failure modes and response

Plan for script/site regression, overcollection, duplicate/missing events, dashboard compromise, database/storage loss, TLS/DNS failure, provider outage, and failed deletion/export. Stop collection first when unsafe; privacy/security owners determine evidence, notification, and deletion, while marketing uses separate business records.

## 30. Backup procedure

For self-hosting, create an encrypted off-host backup of version-specific data store and required configuration/secrets with application/schema versions. For cloud, document supported exports and account recovery rather than claiming possession of provider backups or disaster recovery.

## 31. Restore drill

Restore self-hosted copies to clean isolation and verify login, roles, sites, event definition, sample aggregate records, retention, and one synthetic event. For cloud, test account recovery and supported exports. Record gaps; neither exercise proves provider recovery objectives.

## 32. Upgrade, rollback, and exit

Read migration notes, back up, test target version and privacy behavior in staging, and approve rollout. Stop for collection/schema/access/site failures; disable the script first and use only a tested compatible data rollback, reconciling gaps/duplicates. Exit by exporting required aggregates/dictionaries, removing every script, verifying no requests, revoking access, and deleting data under policy.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-17**: [homepage](https://umami.is/), [repository](https://github.com/umami-software/umami), [documentation](https://umami.is/docs), and [pricing](https://umami.is/pricing). Evidence is documentation review only.

Untested: current prices/limits, request/cookie/metadata behavior, retention/deletion, export fidelity, cloud residency/subprocessors, support/certifications, sizing, integrations, backup/restore, upgrade/rollback, and recovery times. Treat all as open gates until observed.
