# Recipe: Validate an Occupancy Dashboard

1. Obtain a signed metric contract; do not choose status treatment in SQL ad hoc.
2. Adapt `examples/occupancy-reporting-view.sql` to an approved sanitized source and have the DBA review it.
3. Grant Metabase's dedicated identity only the minimum read privileges to that view.
4. Create a question that sums approved booked and available minutes by reporting date.
5. Add the source watermark and metric version to the dashboard description/card.
6. Compare each fixture's manual, neutral-query, and Metabase result.
7. Test viewer denial, guessed URL, no public link, source outage, stale watermark, and source write denial.
8. Mark the dashboard untrusted if any result differs; the metric owner resolves before publication.

Exact SQL syntax and time functions vary by database. This recipe intentionally claims no universal query.
