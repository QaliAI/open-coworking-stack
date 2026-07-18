# Backup and Restore

Use the administration manual matching the installed version. Official guidance identifies configuration, custom apps when present, data, theme, and database as backup scope and uses maintenance mode to prevent inconsistent writes. Adapt the exact procedure to the deployment and database engine.

Restore to isolation. Official restore guidance requires database, data directory, and configuration together. Verify fixture hashes, owner/group permissions, share inventory, account denial, app status, background jobs, and a client sync. If restoring older data, study the version-matched client recovery guidance before using any data-fingerprint or scan command.

Record matched artifact IDs, timestamps, versions, recovery duration, hash/access results, and approvers.
