# Keycloak coworking operator skill

## Coworking purpose

Test centralized staff authentication and reversible joiner/leaver handling for one non-critical coworking application without making Keycloak a physical-access dependency.

## Allowed automation

Authenticate approved test identities, enforce reviewed flows, issue minimum required tokens/claims, expire sessions, and execute an approved administrator disablement.

## Prohibited decisions

Never decide employment/member status, identity proofing exceptions, role entitlement, disciplinary action, physical access, or emergency access. Never broaden authorization merely to recover from outage.

## Source verification

Use current selected-version Keycloak and application documentation. Treat HA, scale, federation, extension compatibility, support, migration, recovery objectives, and regulatory suitability as unverified until evidenced.

## Data boundaries

Use test staff identities and minimum claims. Protect credentials, MFA data, client secrets, keys, sessions, admin events, database backups, and logs; exclude payment and physical-access data.

## Human approvals

Manager approves entitlement; identity owner approves roster/group mapping and leavers; app owner approves client claims/fallback; security approves MFA, redirects, secrets, flows, federation, and break-glass; recovery owner approves restore/rollback.

## Required tests

Test login/logout, bad credentials, MFA/recovery if scoped, disabled user, session termination, minimum claims, invalid redirect, secret handling, Keycloak/DB outage, app fallback, admin lockout, break-glass audit, backup, clean restore, and prior-login rollback.

## Backup and rollback

Protect database, realm/client configuration, keys/secrets, deployment inventory, and external dependencies with separated recovery access. Return the app to preserved prior authentication and reconcile/invalidate emergency access after failure.

## Expert review

Require identity/security expertise for production exposure, federation, custom flows, key changes, HA, or critical clients; privacy/legal review for proofing, biometrics, monitoring, residency, or transfers; access-control/safety experts for any physical-access proposal.
