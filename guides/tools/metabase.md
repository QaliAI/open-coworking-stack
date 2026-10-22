---
title: Metabase for coworking reporting
tool_id: metabase
guide_status: full
verified_on: 2026-07-18
---

# Metabase for coworking reporting

This guide scopes Metabase to one read-only occupancy dashboard. It is not runtime evidence, a verified booking connector, or proof that a metric is correct.

## 1. Coworking outcome

Reduce repeated report preparation and make one occupancy definition reviewable, while keeping the booking source authoritative and people responsible for interpretation and operational decisions.

## 2. Pilot scope

Use one sanitized reporting view/copy, one dedicated read-only source identity, one collection, one analyst, one viewer, one saved question, and at most three occupancy cards. Exclude writes, member identity, public links, embedding, actions, editable tables, uploads, and transforms.

## 3. Fit

**Good fit:** an operator with SQL/data ownership, a safe read-only reporting source, an approved metric contract, privacy review, and a need to standardize utilization reporting.

## 4. Non-fit and alternatives

**Poor fit:** production write access, unrestricted row-level member data, undefined KPIs, or a substitute for source quality. Keep the prior approved report/calculation; use source-system reports if they provide adequate definitions and access controls with less operating burden.

## 5. Coworking use cases

- Desk occupancy for one location and period.
- Meeting-room utilization by approved room/daypart aggregate.
- Low-risk operations trends from separately governed aggregate sources.

Member scoring, staff ranking, surveillance, dynamic pricing, and unreviewed finance reporting are out of scope.

## 6. Tasks reduced or augmented

Metabase can reduce repeated query execution, chart assembly, and approved report distribution. It does not eliminate metric definition, source repair, independent validation, privacy/access review, interpretation, anomaly investigation, or operational judgment.

## 7. Human decisions and approvals

People approve formula, source fields/view, native query, permissions, sharing, exports, publication, and changes. Metabase may refresh/display approved queries; it may not establish truth, change source data, expose member rows, or decide staffing, pricing, layout, or member action.

## 8. Owners and RACI

Metric owner approves definition/interpretation; source-data owner provides fields and resolves quality/schema/load issues; Metabase administrator operates app DB/access/upgrades/restores; privacy owner approves row/column exposure, sharing, exports, and retention. A DBA reviews source privileges and query plans.

## 9. Prerequisites

Create a versioned metric contract covering numerator, denominator, booking statuses, cancellations/no-shows, internal holds, closures, overnight/time-zone boundaries, deduplication, reporting delay, rounding, missing-data display, and owner. Prepare sanitized source fixtures, fallback report, and application-database backup storage.

## 10. Skills and effort boundary

The pilot needs SQL, database roles/network/TLS, query plans, Metabase permissions/content, application-DB backup/restore, data quality, metrics, and privacy skills. No build time, query performance, data volume, or production sizing is asserted.

## 11. Deployment choice

Choose current Metabase Open Source, paid self-hosted, or Cloud only after edition/pricing/support review. For durable self-hosting use the officially recommended production application database. Pin a specific artifact; this guide supplies no production container/JAR, host, database, proxy, or HA design.

## 12. Architecture and dependencies

Booking/space sources feed a sanitized reporting view or copy; a dedicated identity has narrow read privileges; Metabase queries it; the separate Metabase application database stores questions, dashboards, collections, users, and runtime configuration. Logs/caches/exports/backups need their own controls. Show source watermark on the dashboard.

## 13. License and edition boundary

Metabase is open core: the catalog records an `AGPL-3.0-only` core and paid Pro/Enterprise/Cloud features. Verify [pricing](https://www.metabase.com/pricing/) and current feature pages. Do not assume row/column security, SSO, serialization, embedding, drivers, or controls are in the chosen edition.

## 14. Total cost boundary

Record software/edition, compute, application DB, reporting replica/ETL, network/TLS, data preparation, dashboard design, query tuning, access reviews, monitoring, backups, updates, support, and exit rebuild separately. No current price or capacity claim is made.

## 15. Data map

| Data                        | Authority            | Metabase use            | Exit/recovery                         |
| --------------------------- | -------------------- | ----------------------- | ------------------------------------- |
| Resource/time/status        | Booking/space source | Occupancy calculation   | Neutral reporting view/query          |
| Source watermark            | Reporting load       | Freshness display       | Retain with result evidence           |
| Metric definition           | Metric owner         | Saved question/card     | Versioned contract and neutral SQL    |
| Questions/dashboards/groups | Metabase app DB      | Runtime content/access  | App-DB backup; document independently |
| Query results/cache/logs    | Metabase/deployment  | Display/troubleshooting | Restricted bounded retention          |

Member identity, payment, contracts, access events, and free text are excluded.

## 16. Privacy and retention

Aggregate before Metabase where possible. Approve every table/column/row, metadata scan, query result, cache, log, export, subscription, and backup retention. Disable broad/public sharing. Document hosting/location, processors, access requests, deletion, and incident handling. A dashboard URL is not a privacy boundary.

## 17. Security baseline

Use a dedicated source user with minimum `CONNECT`/`SELECT`, network restriction and supported TLS, separate app DB credentials, named admins, analyst/viewer groups, restricted collections/data/native SQL/export, no public link, supported updates, bounded queries, protected logs/backups, and denied user/source-write tests.

## 18. Compliance and expert review

Privacy reviews member-level exposure, sharing, subscriptions, exports, and embedding. A DBA reviews privileges/load. Qualified finance/accounting experts approve revenue metrics; workforce, accessibility, safety, and space-planning experts approve conclusions in their domains. Charts do not establish compliance.

## 19. Integration boundary

No booking, CRM, billing, or coworking connector is verified. Use a driver listed in current official Metabase docs and operator-created reporting source; driver availability does not prove schema compatibility. Any API/ETL supplying the view is a separate integration with secrets, retries, failure, reconciliation, and exit controls.

## 20. Configuration baseline

Record edition/version/artifact, app DB, source driver/user/role/network, reporting view fields, time zone, source watermark, metric version, collection/groups/data/native-query/export permissions, query/cache limits, sharing state, logs/retention, backups, and fallback. Record each feature's edition entitlement.

## 21. Smallest useful experiment

Following [official docs](https://www.metabase.com/docs/latest/), connect to a sanitized read-only reporting source and build one occupancy dashboard. Operations independently calculates all fixtures and at least two approved sample periods.

## 22. Implementation sequence

1. Approve metric contract, owners, exclusions, fallback, and fixtures.
2. Build sanitized source/view and narrow database role; prove write denial.
3. Select/pin deployment and edition from official docs/pricing.
4. Configure staging, one collection, analyst/viewer, and source watermark.
5. Build one question/dashboard; compare independent results.
6. Test access, sharing, query load, outage/staleness/schema failure, and exports.
7. Restore app DB and obtain metric/source/privacy/admin approval.

## 23. Migration and rollout

Keep the source and prior report authoritative. Introduce one metric/location at a time, publish its contract/version/freshness, and freeze source/query changes during acceptance. Do not widen to member rows or premium controls without a new review. Retain neutral query/fixture evidence so the report can be rebuilt elsewhere.

## 24. Required test plan

Use fixtures for normal booking, cancellation, no-show, internal hold, closure, overnight/time boundary, duplicate, and late update. Compare source totals, neutral SQL/manual result, question, and every card. Test unauthorized user, viewer export/native SQL denial, guessed URL, no public link, source write denial/outage/staleness/schema change, slow query/load, app-DB backup, and isolated restore.

## 25. Acceptance criteria

All expected calculations and rounding match; no member/unapproved field is exposed; source writes are impossible; viewer/collection boundaries hold; freshness is visible; stale/outage behavior cannot mislead; query load is accepted; fallback works; clean restore reproduces content/permissions; owners sign.

## 26. Success metrics

Track calculation mismatches, source freshness, query latency/error, dashboard availability, denied-access tests, data-quality exceptions, report-preparation effort, support incidents, backup age, and restore duration. Dashboard usage or metric movement does not prove business impact.

## 27. Monitoring and alerting

Monitor app/app-DB health and capacity, backup age/failure, source connectivity, query duration/timeouts/load, source watermark/dashboard refresh age, row-count drift, deliveries if later enabled, access/permission changes, logs, certificate expiry, and release/driver status. Availability is not freshness.

## 28. Operating cadence

On each refresh review watermark and exceptions. Regularly reconcile source samples, review metric contract/schema, query plans, accounts/groups/permissions/shares/exports, logs/retention, app DB backups/restores, releases/drivers, and edition assumptions. Require owner approval and full regression tests for changes.

## 29. Failure modes and response

Mismatch: mark dashboard untrusted, stop use, reconcile contract/filters/source/fixtures, reapprove. Stale source: display/announce, use fallback, repair load and prove watermark/counts. Schema/load issue: disable cards/connection, correct contract/plan, rerun tests. Unauthorized exposure: disable sharing/account/connection, preserve evidence, notify privacy, correct/test/rotate. App DB loss: stop instance and restore; source remains untouched.

## 30. Backup procedure

Back up the Metabase application database using its engine's supported method plus deployment configuration and exact artifact/driver inventory. Official docs state this app DB contains runtime application data such as questions/dashboards; it does not back up connected booking/reporting data. Protect credentials and backups separately.

## 31. Restore drill

Restore app DB to isolated staging and connect only a sanitized test source. Verify groups, permissions, collection, question, cards, filters, time zone, watermark, fixture results, viewer denial, and source-write denial. Record artifact/app-DB backup IDs, object counts, duration, failures, and approvers.

## 32. Upgrade, rollback, and exit

Pin artifact; review release/driver notes; back up and restore app DB to staging; upgrade there because major versions migrate app DB; rerun all tests. On failure prefer official recommendation to restore pre-upgrade app DB with prior artifact; use documented `migrate down` only after expert/version review. Exit by freezing changes, preserving contract/view/query/filters/fixtures/results, rebuilding and recalculating elsewhere, revoking source user, and deleting state by policy. Result exports do not preserve full configuration/lineage.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-18**: [homepage](https://www.metabase.com/), [repository](https://github.com/metabase/metabase), [documentation](https://www.metabase.com/docs/latest/), [database privileges](https://www.metabase.com/docs/latest/databases/users-roles-privileges), [app-data backup](https://www.metabase.com/docs/latest/installation-and-operation/backing-up-metabase-application-data), and [upgrade/rollback](https://www.metabase.com/docs/latest/installation-and-operation/upgrading-metabase).

Evidence is documentation review only. Untested: editions/pricing, runtime deployment, drivers/sources, permissions, row/column controls, queries/cache/export, app-DB backup/restore, upgrade/rollback, support, performance, sizing, and source quality.
