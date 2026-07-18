# Upgrade and Rollback

Inventory server, clients, database, storage, and enabled apps. Read the version-matched upgrade manual and app compatibility information. Take a coordinated backup, restore it to staging, upgrade staging through only supported paths, and run file, sync, permission, share, background-job, app, export, and restore tests.

Schedule a write freeze/maintenance window as required. If acceptance fails, keep clients disconnected and restore the complete pre-upgrade matched set into the prior supported version. Preserve any post-change writes for owner-led reconciliation. Do not attempt an unsupported in-place downgrade.
