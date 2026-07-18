# Upgrade and rollback

1. Read official release notes and pin the candidate versions.
2. Take a consistent pre-upgrade database/config/map backup.
3. Rehearse database/application migration in isolated staging.
4. Run booking, permission, mobile, timezone, fallback, and restore tests.
5. Schedule production with community and technical owners present.

Rollback triggers include failed migration, missing spaces/bookings, permission leakage, broken booking/cancellation, or failed fallback. Stop writes, preserve failure evidence, restore the prior image and pre-upgrade database to isolated validation, test, then cut back. Reconcile every reservation made during the change window; do not overwrite it silently.
