# BookStack upgrade and rollback

## Before

Read every applicable [version-specific instruction](https://www.bookstackapp.com/docs/admin/updates/), verify runtime/database requirements, back up database/uploads/config, record current roles and critical pages, and stage the target release.

## Verify

Run the official update/migration process for the installation method, clear caches where instructed, then test login, all pilot roles, public denial, search, five pages, attachments, exports, mail/auth, and any theme.

## Rollback

Freeze edits, stop the failed release, and restore the previous application code plus its pre-migration database, `.env`/`APP_KEY`, uploads, and themes. Do not guess at reverse database migration. Keep source documents available during recovery.

No update or rollback is tested here.
