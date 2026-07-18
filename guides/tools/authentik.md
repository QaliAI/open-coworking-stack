---
title: Authentik for coworking staff SSO
tool_id: authentik
guide_status: full
verified_on: 2026-07-17
---

# Authentik for coworking staff SSO

Authentik is a self-hosted identity provider commonly used to protect internal applications. For a coworking stack, begin with two staff users and one non-critical internal app behind a proxy provider.

## Fit and non-fit

**Good fit:** a smaller technically managed stack that needs staff SSO, fewer shared passwords, and controlled deprovisioning.

**Poor fit:** a team without identity and recovery ownership, a direct physical-access replacement, or a rollout where an identity-provider outage would lock out every operational tool without fallback.

## License and cost boundary

The catalog classifies Authentik as OSI-approved open source under `GPL-3.0-only`, while noting that the current license for enterprise components must be confirmed. Budget for compute/database/TLS, deployment and app integration, updates and recovery, optional enterprise components, and internal or commercial support. Re-check [official pricing](https://goauthentik.io/pricing/) rather than inferring included features.

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Name identity, security, and recovery owners. Maintain a staff roster, app access matrix, MFA policy, break-glass process, and list of apps that can fall back safely.

| Data             | Source          | Authentik use             | Exit/fallback             |
| ---------------- | --------------- | ------------------------- | ------------------------- |
| Staff identities | Staff roster    | Authentication            | Roster reconciliation     |
| MFA factors      | User enrollment | Stronger authentication   | Approved recovery         |
| App policies     | Access matrix   | Authorization/proxy rules | Independent policy record |
| Logs             | Authentik       | Security/operations       | Retention-limited review  |

Personal identity data is held; payment data is excluded.

## Smallest useful experiment

Following the [official docs](https://docs.goauthentik.io/), deploy Authentik, protect one staging app through a proxy provider, and enroll two staff users with MFA. Disable one user and test the app's behavior when Authentik is unavailable.

## Implementation sequence

1. Confirm license/edition needs from the [official project](https://goauthentik.io/) and [repository](https://github.com/goauthentik/authentik).
2. Inventory the pilot app's login and emergency fallback.
3. Deploy isolated staging with TLS and restricted administration from official docs.
4. Configure one provider/application and least-privilege policy.
5. Test login, MFA, logout, disablement, recovery, and outage behavior.
6. Document joiner/leaver, app access review, updates, and break-glass use.
7. Complete state/configuration restore before production adoption.

## Security and privacy controls

- Require TLS and MFA; separate administrative and routine accounts.
- Minimize identity attributes released to applications.
- Restrict provider callbacks, secrets, and proxy trust according to official docs.
- Review application policies and logs on a defined schedule.
- Protect recovery credentials outside the primary identity path.
- Apply supported updates and review enterprise/component license boundaries.

## Backup, export, and restore test

Back up the database, configuration, keys/secrets, and officially required state. Restore to clean isolated staging and verify both users, MFA recovery, provider/application policy, login, and disablement. Keep an independent app access matrix and fallback instructions because exports alone may not restore external app configuration.

## Integrations and manual handoffs

No app integration is catalog-verified. Use Authentik's and the target app's official documentation. Managers approve access; identity admins implement/revoke it; app owners validate permissions; recovery owners witness break-glass tests.

## Human oversight

People decide access, MFA exceptions, flow design, offboarding timing, and incident response. Authentik augments SSO and deprovisioning; it does not decide who may access staff or member systems.

## Operational checklist

- [ ] Identity, security, and recovery owners named
- [ ] Staff roster and app matrix current
- [ ] License/component boundary reviewed
- [ ] TLS, MFA, admin separation, and fallback tested
- [ ] User disablement blocks the pilot app
- [ ] Policy changes require review
- [ ] Clean restore passed
- [ ] Break-glass route remains independent

## Rollback and exit

Retain the pilot app's previous authentication during testing. Roll back by restoring that configuration, disabling the Authentik route, revoking provider secrets, and reconciling accounts. Before expansion, document/export identities and policies and prove each dependent app can move to another identity path without operator lockout.

## Verification and unknowns

Snapshot verified **2026-07-17** from [Authentik](https://goauthentik.io/), its [repository](https://github.com/goauthentik/authentik), and [documentation](https://docs.goauthentik.io/).

Unknown until verified: current enterprise licensing and pricing, app compatibility, exact backup/export coverage, production sizing/HA, support, identity migration behavior, and regulatory requirements.
