# Update, Upgrade, and Rollback

A same-release bugfix update replaces code while preserving database contents; official guidance still calls for a full backup. A major release database upgrade permanently changes database structure/content and is described as irreversible. This pack covers evaluation of same-release updates only.

Restore matched state to staging, apply a pinned same-release revision/package, and run role, lead, import, invoice-sample, export, job, and attachment tests. On failure, stop writes and restore the pre-change database, filestore, config, and exact prior code/modules.

Any major upgrade requires a new migration plan, expert review, full reconciliation, and parallel fallback. Never start older code on upgraded data by assumption.
