# Pilot plan

1. App owner records current login, local fallback, required claims, and critical user journeys.
2. Identity/security owners approve one realm/client, test roster, redirects, flows, MFA scope, logs, and break-glass.
3. Technical owner deploys isolated Keycloak, Postgres, TLS/proxy, monitoring, and backup using current official docs.
4. Configure the minimum OIDC client and two test users; compare tokens/claims to the approved list.
5. Run all authentication, invalid redirect, disablement/session, outage, lockout, and fallback tests.
6. Back up and restore clean staging; repeat login, claims, disablement, and admin recovery.
7. Restore the application's prior login and revoke/rotate the pilot client credentials.
8. Owners decide reject, revise, or commission an expert-reviewed production phase.

Stop for lockout, excess claims, redirect weakness, secret/key exposure, unapproved access, failed fallback, or incomplete restore.
