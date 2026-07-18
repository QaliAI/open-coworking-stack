# Upgrade and rollback

Inventory Keycloak, database, proxy, Java/container/runtime, providers/extensions/themes, realm/client config, keys, and connected app before change. Read selected-version official migration/release guidance and compatibility notes. Validate a backup, clone representative staging, upgrade it, and repeat protocol, claims, redirect, disablement, outage, admin recovery, and restore tests.

Identity, app, security, and recovery owners approve the window. Stop on migration errors, login/claim/session changes, extension failure, admin lockout, database issue, or fallback failure.

Rollback mechanics depend on supported database/schema and deployment paths. Control writes, restore the coordinated validated set when supported, or return the app to preserved prior authentication; reconcile and invalidate emergency sessions/credentials.
