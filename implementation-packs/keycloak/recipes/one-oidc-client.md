# Recipe: one staging OIDC client

1. Application owner documents its exact current login, supported OIDC behavior from official app docs, callback URI, minimum claims, and local fallback.
2. Identity owner creates one isolated realm and two fictional staff users using current Keycloak docs.
3. Security/app owners approve exact redirect URIs, client type, credential handling, flow, scopes/claims, and session settings before entry.
4. Store any client secret only in the approved secret path; never in this repository or evidence record.
5. Test login/logout, wrong credentials, invalid redirect, minimum claims, disablement, session termination, Keycloak/DB outage, fallback, and admin recovery.
6. Back up/restore, repeat critical tests, return to prior login, and revoke/rotate pilot credentials.

Exact screens, defaults, and commands are version/application-specific and intentionally not asserted.
