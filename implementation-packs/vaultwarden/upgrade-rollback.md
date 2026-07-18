# Upgrade and rollback

## Before change

Read release, security, compatibility, and schema-migration notes for server and selected clients. Back up complete state, restore it in isolation, upgrade the copy, and test login, supported MFA, sync, collections, revocation, exports, optional features, and recovery.

## Rollout

Approve a maintenance window, preserve client/offline and old-store contingency, change the exact reviewed image/package reference, and run a fake-item round trip before normal use.

## Stop and rollback

Stop for schema/startup, login, sync, collection, client, export, or recovery failure. Do not assume image downgrade is safe after migration; restore the tested prior-version data copy. Rotate any secret exposed during failed handling and record the service gap.
