# Backup and restore

1. Record core/runtime/database versions, active theme/plugin versions, host method, URLs, and official sources.
2. Create a consistent protected backup of database, uploads, approved themes/plugins, and required configuration; copy it encrypted off-host with checksum and retention metadata.
3. Restore to clean isolated staging with outbound form/email/automation redirected to test sinks.
4. Replace environment-specific URLs and secrets safely without exposing production values.
5. Verify pages, media, redirects, users/roles, theme/plugins, forms, scheduled tasks, privacy settings, and admin recovery.
6. Run synthetic form and accessibility regression tests; record observed recovery time.

A WordPress content export helps portability but is not a complete site backup. Host snapshots alone are not off-host recovery evidence.
