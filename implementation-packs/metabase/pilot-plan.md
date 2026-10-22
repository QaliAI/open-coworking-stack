# Occupancy Dashboard Pilot

## Prepare

Sign the metric contract and create expected results for all fixture cases. Build a sanitized reporting view or copy; do not connect with production write credentials.

## Build

Create one saved question and at most three cards: occupancy percent, booked hours, and available hours. Display reporting period and source watermark. Give one analyst and one viewer access.

## Validate

Compare source rows, neutral SQL result, Metabase result, and manual calculation. Run denied access/write tests and source outage/stale tests. Restore the application database to isolated staging.

## Pass gate

Exact agreed fixture results, approved rounding, no member fields, source writes impossible, viewer boundaries hold, freshness is visible, outage is not misleading, and restore reproduces content/permissions.
