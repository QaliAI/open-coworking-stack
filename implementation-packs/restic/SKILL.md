# Restic coworking recovery skill

## Coworking purpose

Protect one approved self-hosted coworking service and demonstrate clean recovery of its database, files, configuration, and business workflow after loss of the source host.

## Allowed automation

Run an approved consistent export, back up fixed paths, list snapshots, run non-destructive checks, alert failures/staleness/capacity, and schedule a human restore drill.

## Prohibited decisions

Do not select retention, forget/prune/repair/migrate repositories, overwrite production, exclude unknown data, rotate/delete keys, or declare recovery successful without required human review.

## Source verification

Use current official Restic documentation and the protected application's official backup/restore documentation. Record versions, URLs, dates, backend assumptions, and unresolved claims.

## Data boundaries

Back up only approved prepared database exports, application files, and secret-free recovery configuration. Classify snapshots at the highest source sensitivity; never record credentials in evidence.

## Human approvals

The application owner approves consistency and usability; security approves target/key controls; operations approves retention and objectives; a second custodian proves password recovery; and an independent witness signs restore results.

## Required tests

Test one visible backup failure, snapshot/path inventory, repository check, credential recovery without the source host, clean restore, database integrity, application startup, representative records, permissions, and elapsed recovery.

## Backup and rollback

Keep the prior backup process, preserve previous snapshots, make no in-place restore during testing, and roll back binary/config changes to the previous pin followed by a check and sample restore.

## Expert review

Require database expertise for consistency/PITR, security expertise for immutability or compromise, records/legal review for retention, and experienced Restic/backend help before corruption repair or repository-format migration.
