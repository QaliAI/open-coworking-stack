# Chatwoot upgrade and rollback

## Before

Review release notes and [official upgrade guidance](https://developers.chatwoot.com/self-hosted/deployment/upgrade), inventory current image/config/storage, back up, reconcile open cases, and stage the target. Old installations may require intermediate versions per official docs.

## Verify

For Docker, follow the documented image update and `db:chatwoot_prepare` process. Test web/worker health, login/roles, widget, messages/notes, labels/assignment, notifications, attachments, channels, exports, and open-case state.

## Rollback

Remove/disable the widget or affected channel, route users to the previous contact path, and manually own all open cases. Restore the previous compatible app/config/database/storage set; do not guess at schema downgrade.

No upgrade or rollback is tested by this pack.
