# Pilot plan

## Scope

One non-critical service, seven nightly snapshots, one induced safe failure, one repository check, and one clean-host restore.

## Sequence

1. Baseline application version, data counts, and consistency method.
2. Approve target, secrets, objectives, retention, and exclusions.
3. Initialize repository and execute a manual prepared backup.
4. Inspect snapshot paths, then schedule seven runs and monitoring.
5. Safely cause a non-production/test job to fail and confirm escalation.
6. Run the approved integrity check plan.
7. Recover credentials and restore a named snapshot to a clean host.
8. Have the application owner and witness execute business acceptance.

Stop on unknown consistency, secret leakage, missing alert, repository error, or inability to recover credentials independently.
