# Upgrade and Rollback

Read release/changelog and driver notes, pin a specific artifact, and back up the application database. Restore it to staging and upgrade there because major versions can migrate application DB schema. Run startup, source connection, calculation, permissions, export, outage, and query-load tests.

For production, stop or quiesce the instance as the current official procedure requires. If acceptance fails, prefer restoring the pre-upgrade application DB and prior artifact. Metabase documents `migrate down`, but use it only with expert and version-specific review; do not point an older artifact at migrated state by assumption.
