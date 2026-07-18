# Authentik upgrade and rollback

## Before

Read every applicable release note, confirm supported upgrade sequence, back up PostgreSQL/state, export a sanitized config inventory, verify app fallback, and rehearse in staging. Match outpost and server versions as official guidance requires.

## During and after

Freeze identity policy changes, upgrade one approved step, inspect migrations/logs, and test admin login, user login, MFA recovery, logout, disablement, app claims, and outposts.

## Rollback

Authentik states downgrade is unsupported. Stop the failed target, isolate it, restore the previous application version plus its pre-upgrade database/state, or return the app to its independent login. A human incident lead authorizes re-enable.

No upgrade or rollback has been tested by this pack.
