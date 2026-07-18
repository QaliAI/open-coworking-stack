# Backup and restore

For the repository's SQLite Compose staging reference:

1. Record the exact image reference and application state before backup.
2. Stop `uptime-kuma` for a consistent copy, back up the complete `uptime_kuma_data` volume with an approved encrypted tool, and restart promptly.
3. Copy the backup off-host and record checksum, date, operator, version, and retention.
4. Restore to an isolated host using the same compatible image reference.
5. Verify login, five monitor definitions, owners/labels, maintenance, required history, and notification configuration.
6. Send a test alert only to the designated test recipient.

For other deployment/storage choices, use current version-specific official guidance. Never overwrite the sole working copy to test restore.
