# Backup and restore runbook

## Backup

1. Complete the application's official consistency/export step.
2. Validate the prepared artifact and fixed path list.
3. Run the approved pinned Restic job without exposing secrets.
4. Capture exit status, snapshot ID, duration, and bytes.
5. Resume/clean prepared state only after success is known.
6. Alert a named operator on any failed stage or stale snapshot.

## Restore test

1. Provision clean isolated infrastructure without source-host credentials.
2. Recover repository/backend access through documented custody.
3. Run the approved repository check and select a specific snapshot ID.
4. Restore to a new target, never over production.
5. Restore database with its official tool; inject regenerated/recovered secrets separately.
6. Start the service and execute file, database, permission, and coworking workflow tests.
7. Record versions, snapshot, timing, logs, owner, witness, and result.
