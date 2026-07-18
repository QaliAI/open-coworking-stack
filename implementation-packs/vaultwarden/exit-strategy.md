# Exit strategy

Maintain a current inventory of users, organization owners, collections, item owners, optional attachments/Sends, clients, email dependency, source systems, recovery custody, and credential-rotation status without copying secret values.

Before exit, test an approved protected export/import against the replacement using fake items, then a bounded approved set. Recreate and independently approve access mappings; exports do not necessarily preserve server policy or membership.

At exit, reconcile/import required items, rotate every migrated credential at its source, revoke sessions/accounts/tokens, retire DNS/service, destroy temporary decrypted exports, and delete obsolete server state/backups under policy with two-person evidence. Keep only retention-required encrypted backups.
