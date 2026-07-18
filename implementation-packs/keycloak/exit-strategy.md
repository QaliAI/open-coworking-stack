# Exit strategy

1. Inventory realms, clients, redirects, scopes/claims, groups/roles, users/sources, credentials/MFA implications, sessions, keys, providers, extensions, and every connected app.
2. Keep an independent approved roster/role matrix and map each app to a replacement/local login.
3. Pilot the replacement with test identities; compare claims, disablement, logout, recovery, and authorization.
4. Approve per-app cutover with tested fallback and protected break-glass.
5. Reconcile identities/roles, revoke clients/secrets, terminate sessions, and retain events/backups only under policy.
6. Decommission only after every app owner verifies access and recovery.

Credential hashes/MFA state and custom flows may not be portable. Expert identity and privacy review is required; this pack makes no seamless-migration claim.
