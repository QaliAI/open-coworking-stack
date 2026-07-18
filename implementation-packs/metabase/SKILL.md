# Safe Metabase Coworking Analytics

## Coworking purpose

Build and validate one read-only occupancy dashboard that reduces repeated reporting without treating a chart as operational truth.

## Allowed automation

- Generate queries against an approved sanitized reporting view.
- Refresh and display a metric under an approved contract.
- Compare source counts, expected fixture results, and dashboard results.
- Flag stale data, query failures, or unexplained differences for human review.

## Prohibited decisions

- Do not grant source writes, expose member rows, publish links, change metric definitions, or act on anomalies.
- Do not decide staffing, pricing, layout, member treatment, or safety actions.
- Do not assume row/column security, SSO, serialization, or other paid features are available.

## Source verification

Verify the current Metabase edition, version, official driver, permissions, backup, and upgrade docs plus the source database's official privilege guidance. Record untested driver/schema behavior.

## Data boundaries

Use resource/time aggregates, booking status, and source watermark. Omit member name, email, contract, payment, access events, and free text. Treat application DB, query results, caches, logs, exports, and accounts as potentially sensitive.

## Human approvals

Metric owner approves formula and interpretation; source owner approves fields/view; privacy owner approves exposure/export/sharing; administrator approves database role, users, deployment, backup, upgrade, and rollback.

## Required tests

Test booking-status/time fixtures, independent math, database write denial, user/group denial, guessed URL, no public link, source outage/staleness/schema change, slow query, app-database backup, and isolated restore.

## Backup and rollback

Back up the Metabase application database separately from connected data. Restore and upgrade in staging. For a failed major upgrade, prefer the official recommendation to restore the pre-upgrade application DB with the prior artifact rather than casually downgrading migrated state.

## Expert review

A DBA reviews source privileges/load; privacy reviews member-level exposure and sharing; finance validates revenue metrics; workplace, accessibility, safety, and workforce specialists validate decisions in their domains.
