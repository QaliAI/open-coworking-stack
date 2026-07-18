# BookStack backup and restore

## Backup set

[Official guidance](https://www.bookstackapp.com/docs/admin/backup-restore/) identifies the database, `.env`, `public/uploads`, `storage/uploads`, and `themes` when used. Protect the old `APP_KEY`, exact release, web/proxy config references, and source/content register. Store database and file snapshots consistently and separately.

## Clean restore

1. Build a compatible isolated instance without prematurely migrating an empty database.
2. Restore database and files using the selected packaging's paths.
3. Preserve the old `APP_KEY`; merge environment values carefully.
4. If URL changes, set `APP_URL` and use the official system URL update process.
5. Verify five pages, images, attachments, search, revisions, roles, and unauthorized denial.
6. Record witness, elapsed time, defects, and restored-PII disposal.

This drill has not been executed.
