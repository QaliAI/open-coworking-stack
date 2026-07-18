# Upgrade and rollback

## Before change

Read release and migration notes, capture configuration/health evidence, take a protected backup, restore it to isolated staging, and run monitor, login, notification, maintenance, restart, and history checks on the exact target version.

## Rollout

Approve a maintenance window, preserve the manual service/contact register and alternate alert route, change the pinned version, and immediately run a controlled test alert/recovery.

## Stop and rollback

Stop for startup/schema, login, monitor, notification, or persistence failure. Use only a tested compatible prior application/data state; a database migration may make image-only downgrade unsafe. Record any monitoring gap and manually review services during it.
