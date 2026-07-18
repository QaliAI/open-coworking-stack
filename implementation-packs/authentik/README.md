# Authentik staff SSO implementation pack

Use this pack to pilot Authentik for two staff users and one non-critical internal application. It provides operator records and review gates, not upstream software or a ready-to-run deployment.

## Entry criteria

- Approved identity owner, app owner, security reviewer, and recovery witness.
- Current staff roster, app access matrix, MFA policy, and independent app login.
- Exact release, provider protocol, callback/logout behavior, and edition checked in official docs.

## Exit criteria

- Login, denial, MFA recovery, logout, disablement, outage fallback, and clean restore evidenced.
- Provider secret ownership and revocation documented.
- App owner and recovery witness approve production consideration.

## Untested limitations

This repository has not run Authentik or tested any application, outpost, proxy, MFA, email, backup, restore, upgrade, downgrade, HA, capacity, enterprise feature, or migration. Use the linked official sources and retain target-environment evidence.

Start with `operator-profile.yaml`, then `configuration-checklist.md` and `pilot-plan.md`.
