---
title: Authentik vs Keycloak vs Authelia
description: Compare identity provider and authentication-gateway approaches.
page_classification: Directional shortlist
---

## Shared dimensions

| Tool                                          | Evaluation lane                                         | Evidence status |
| --------------------------------------------- | ------------------------------------------------------- | --------------- |
| [Authentik](../../tools/generated/authentik/) | Identity provider and application access                | Partial         |
| [Keycloak](../../tools/generated/keycloak/)   | Broad identity and access management                    | Partial         |
| [Authelia](../../tools/generated/authelia/)   | Authentication/authorization gateway for protected apps | Partial         |

These are not interchangeable. Compare required protocols, application compatibility, lifecycle,
MFA, recovery, delegated administration, audit, high availability, and support.

## Operator profiles

Authentik may suit a technical team seeking an approachable self-hosted identity platform, Keycloak
an organization requiring broad IAM patterns and expertise, and Authelia a team protecting compatible
web applications behind a proxy. Validate architecture with every critical application.

## Task coverage

They can augment sign-in, MFA policy, application access, and account lifecycle. They do not decide
who should have access, prove a member's real-world identity, or replace application authorization.

## Human work remaining

People approve roles, verify recovery, review privileged access, remove users, handle lockouts,
investigate events, maintain application mappings, and operate an emergency path.

## Technical difficulty

High for production. Protocols, proxies, certificates, DNS, email, directory data, application
mapping, high availability, backups, monitoring, and safe upgrades require IAM expertise.

## True-cost categories

Count hosting, database/cache, email, support, implementation, application integration, migration,
MFA methods, monitoring, backups, training, recovery drills, and incident response. Exact prices and
free limits are not established.

## Portability

Retain users only where appropriate, identifiers, groups, roles, application/client definitions,
claims, policies, keys/certificates, MFA migration plan, audit requirements, and tested application
rollback. Password/MFA portability may be constrained.

## Integrations and verification caveat

OIDC, OAuth, SAML, LDAP, proxy, directory, MFA, and application claims are `partial` until exact
versions, flows, claims, logout, recovery, provisioning, and failure behavior are tested against
current official docs.

## Security

Identity is a critical control plane. Use hardened administration, separate privileged accounts,
phishing-resistant MFA where suitable, protected signing keys, short-lived credentials, monitoring,
patching, backups, high-availability design, and tested break-glass access.

## Licensing

All three publish open-source software, but verify current repository licenses, dependencies,
commercial support terms, and any connector or hosted-service conditions.

## Maintenance

Maintain keys and certificates, upstream directories, application clients, claims, MFA/recovery,
email, logs, patches, backups, restore/failover tests, and periodic access review.

## Scenario recommendations

Pilot one low-risk app and one representative difficult app. Test login, MFA, logout, role change,
offboarding, lost factor, expired certificate, identity outage, rollback, and audit reconstruction.

## Do not use when

Do not centralize authentication without high-availability and recovery ownership. Do not assume a
successful login enforces application permissions, and do not put an incompatible app behind a
gateway without testing session and logout behavior.

## Verification

Verified on **2026-07-18**. Protocol, connector, edition, price, free-limit, and security behavior is
`partial` or `not established` until deployment-specific testing.

## Official sources

- [Authentik](https://goauthentik.io/) and [Authentik docs](https://docs.goauthentik.io/)
- [Keycloak](https://www.keycloak.org/) and [Keycloak guides](https://www.keycloak.org/guides)
- [Authelia](https://www.authelia.com/) and [Authelia docs](https://www.authelia.com/overview/prologue/introduction/)
