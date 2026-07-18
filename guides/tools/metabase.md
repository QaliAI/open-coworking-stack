---
title: Metabase for coworking reporting
tool_id: metabase
guide_status: full
verified_on: 2026-07-17
---

# Metabase for coworking reporting

Metabase builds dashboards and questions over databases. A coworking operator should begin with a read-only replica or staging copy of booking data and one occupancy dashboard whose metric definition is independently approved.

## Fit and non-fit

**Good fit:** an operator with SQL/data ownership, a safe read-only source, and a need to reduce repeated ad-hoc reporting while standardizing utilization definitions.

**Poor fit:** direct write access to production, unrestricted row-level member data, a substitute for source-system data quality, or executive reporting with undefined metrics.

## License and cost boundary

Metabase is **open core**: the catalog records an `AGPL-3.0-only` core with paid Pro/Enterprise and cloud features. Budget for cloud or self-host compute/database/TLS, read replica/data preparation, dashboard design, maintenance and access review, paid features/connectors if required, and support. Verify [official pricing](https://www.metabase.com/pricing/).

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign metric, source-data, privacy, and technical owners. Define occupancy precisely, create a sanitized/read-only source, approve row/column exposure, and set cache/query retention.

| Data                  | Source                    | Metabase use          | Exit/handoff                   |
| --------------------- | ------------------------- | --------------------- | ------------------------------ |
| Booking records       | Read-only replica/staging | Occupancy calculation | Source remains authoritative   |
| Query result cache    | Metabase                  | Dashboard performance | Retention/minimization         |
| Dashboard definitions | Analysts                  | KPI presentation      | Documented metric/query/export |
| User accounts         | Staff roster              | Dashboard access      | Offboarding register           |

Query results and accounts can contain personal data. Payment data is excluded.

## Smallest useful experiment

Following [official documentation](https://www.metabase.com/docs/latest/), connect Metabase to a read-only replica or staging copy of booking data and build one occupancy dashboard. Have operations independently calculate a sample and compare results.

## Implementation sequence

1. Approve the occupancy definition, source fields, and exclusions.
2. Provision a read-only sanitized source; never begin with production write credentials.
3. Choose self-host/cloud and edition from official docs/pricing.
4. Configure staging with TLS, restricted roles, and one dashboard.
5. Test query limits, row exposure, caching, exports, and source outage behavior.
6. Obtain metric-owner and privacy approval; document refresh and change review.
7. Restore configuration/state and preserve the metric/query outside Metabase.

## Security and privacy controls

- Use dedicated read-only database credentials and network restrictions.
- Expose only required tables/columns/rows; aggregate where possible.
- Restrict dashboard, query, and export permissions.
- Protect caches, logs, backups, and shared links; define retention.
- Use TLS, supported updates, and reviewed paid drivers/features.
- Require review when metric definitions or source schemas change.

## Backup, export, and restore test

For self-hosting, back up the Metabase application database/configuration and required state according to official docs, not the source data itself. Restore to clean staging and verify users/roles, source connection, question, dashboard, and permissions. Export dashboard data and retain the metric definition/query so it can be reproduced in another BI tool.

## Integrations and manual handoffs

No booking, CRM, billing, or database integration is catalog-verified. The read-only connection is the controlled pilot and must follow database and Metabase official docs. Data owners approve fields; analysts build; metric owners validate; operations explain context and decisions.

## Human oversight

People define metrics, validate data, interpret anomalies, control access, and decide operational changes. Metabase augments self-service reporting; it does not establish truth or make staffing/layout decisions.

## Operational checklist

- [ ] Metric, data, privacy, and technical owners named
- [ ] Occupancy definition approved
- [ ] Read-only sanitized source used
- [ ] Row/column/export permissions tested
- [ ] Independent sample calculation matches
- [ ] Cache/log retention approved
- [ ] Metric/query documented outside the tool
- [ ] Clean configuration restore passed

## Rollback and exit

The source remains authoritative, so rollback disables the dashboard/connection, revokes database credentials, exports approved definitions/results, and returns to the prior report. Before adding KPIs, prove dashboard definitions and queries can be documented or recreated and avoid premium-only controls without an accepted exit plan.

## Verification and unknowns

Snapshot verified **2026-07-17** from [Metabase](https://www.metabase.com/), its [repository](https://github.com/metabase/metabase), and [documentation](https://www.metabase.com/docs/latest/).

Unknown until verified: current cloud/premium prices and feature boundaries, driver compatibility, row-level controls by edition, export fidelity, cache behavior, production sizing, support, and source-system data quality.
