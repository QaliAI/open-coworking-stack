# Upgrade and rollback

Inventory ERPNext, Frappe, apps, customizations, database, and hosting before change. Review current official upgrade guidance and each app's compatibility. Take a validated backup, clone representative staging, run migration, then repeat roles, invoice lifecycle, totals, reports, exports, and restore tests.

Finance, process, and technical owners approve production consideration. Stop on migration errors, changed totals/statuses, missing records, permission drift, app failure, or performance outside the approved tolerance.

Rollback may require stopping writes and restoring the validated pre-upgrade site as a coordinated unit; exact mechanics are deployment-specific. Reconcile any records created around the change before reopening.
