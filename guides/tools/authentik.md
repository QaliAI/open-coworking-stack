---
title: Authentik for coworking staff SSO
tool_id: authentik
guide_status: full
verified_on: 2026-07-17
---

# Authentik for coworking staff SSO

This guide scopes Authentik to staff single sign-on for one non-critical internal application. It is an operator plan, not evidence that Authentik has been run in this repository or is suitable for a particular production environment.

## 1. Coworking outcome

Reduce shared passwords and make staff access removal more consistent. Authentik augments authentication and deprovisioning; it does not decide who should see member, finance, access-control, or employee systems.

## 2. Pilot scope

Protect one staging application through one provider, enroll two individually named staff users with MFA, and test one disablement. Keep physical access, member identity, payroll, and production-critical applications out of the pilot.

## 3. Fit

**Good fit:** a technically managed stack with an identity owner, a current staff roster, app owners, and an independent recovery route.

## 4. Non-fit and alternatives

**Poor fit:** a team without identity/recovery ownership, a direct physical-access replacement, or a rollout that can lock every operator out. Retain the application's existing login or another tested identity path until the pilot passes; compare managed identity services if self-hosting duty is unacceptable.

## 5. Coworking use cases

- Staff SSO to internal knowledge, monitoring, or administration tools.
- Joiner, mover, and leaver access changes based on an approved roster.
- MFA enrollment and recovery for staff accounts.

Do not infer compatibility with any named application; no integration is catalog-verified.

## 6. Tasks reduced or augmented

Authentik can reduce repeated logins, shared credential handling, and manual per-app disablement where an app integration is proven. It does not eliminate roster reconciliation, permission review, exception handling, or incident response.

## 7. Human decisions and approvals

Managers approve access and offboarding timing. The identity administrator implements policy; the app owner confirms effective permissions; the recovery owner witnesses break-glass tests. A person must approve MFA exceptions, privileged roles, policy changes, and production cutover.

## 8. Owners and RACI

Name an accountable identity owner, a responsible technical operator, each app owner, a security reviewer, and a recovery witness. No person should approve and silently verify their own privileged access change.

## 9. Prerequisites

Maintain a staff roster, application access matrix, MFA policy, supported domain/TLS path, outbound email decision, time synchronization, break-glass procedure, and app-specific fallback. Inventory callback URLs and current login behavior before configuration.

## 10. Skills and effort boundary

The pilot needs Linux/container, DNS/TLS, application-authentication, PostgreSQL recovery, and identity-policy skills. The catalog's `1-3 days` is an unverified estimate, not a commitment; app troubleshooting, review, and restore testing may take longer.

## 11. Deployment choice

The catalog verifies self-hosting only. Official Docker Compose documentation describes that method for test and small-scale production setups; use the upstream requirements for the selected release. High availability, Kubernetes, external PostgreSQL, and production sizing remain separate designs.

## 12. Architecture and dependencies

Map the reverse proxy, Authentik server and worker, PostgreSQL, any Redis requirement in the selected release, email path, provider/application, and any outpost. Official Compose currently mounts the Docker socket for automatic outpost management; either review that privilege, use the documented socket-proxy approach, or manage outposts manually.

## 13. License and edition boundary

The catalog classifies the core as OSI-approved `GPL-3.0-only` and flags enterprise-component licensing for confirmation. Re-check the repository license and [official pricing](https://goauthentik.io/pricing/) for every required feature; this guide does not establish enterprise entitlement.

## 14. Total cost boundary

Record software/edition, compute, PostgreSQL, storage, TLS/DNS, email, monitoring, setup labor, app integration, upgrades, recovery drills, support, and exit labor separately. Do not treat open-source software as zero operating cost or use unverified price figures.

## 15. Data map

| Data                                     | Source                 | Purpose                          | Minimum exit record                                             |
| ---------------------------------------- | ---------------------- | -------------------------------- | --------------------------------------------------------------- |
| Staff identities and attributes          | Approved staff roster  | Authentication                   | Roster and account reconciliation                               |
| MFA factors                              | Staff enrollment       | Stronger authentication          | Recovery/offboarding record; never copy factor secrets casually |
| Providers, applications, flows, policies | Approved access matrix | Authentication and authorization | Reviewed configuration inventory                                |
| Events and logs                          | Authentik              | Security and operations          | Retention-limited incident evidence                             |
| Uploaded branding/reports                | Operator               | User interface/operations        | File inventory if used                                          |

Payment data is excluded.

## 16. Privacy and retention

Collect only attributes the pilot app needs, document the lawful/organizational basis for staff identity processing, restrict event access, and set review/deletion rules for departed staff and logs. Data residency, subprocessor, and regulatory conclusions are unverified and require local review.

## 17. Security baseline

Require TLS, individual admin accounts, MFA, least-privilege policies, restricted administration, protected provider secrets, and an independent break-glass credential. Minimize attributes released to the app. Review proxy trust and callback URLs against both upstreams.

## 18. Compliance and expert review

Identity policy can affect employment records, privacy obligations, audit evidence, and access to regulated systems. Obtain security/privacy or legal review when required locally, and specialist IAM review before privileged, financial, physical-access, or safety-critical integrations.

## 19. Integration boundary

No app integration is catalog-verified. Use Authentik's provider documentation and the target application's official authentication documentation; record protocol, identifiers, scopes/claims, callbacks, logout behavior, secret owner, and fallback. Do not use a generic proxy pattern to claim app-level authorization.

## 20. Configuration baseline

Record the exact Authentik and outpost versions, deployment manifests, non-secret environment variable names, external URLs, provider type, flow/policy names, group-to-app rule, MFA enrollment/recovery path, admin roles, email behavior, and log retention. Keep secrets in an approved secret store, never in this repository.

## 21. Smallest useful experiment

Following the [official docs](https://docs.goauthentik.io/), deploy isolated staging, protect one non-critical app, and enroll two staff users with MFA. Disable one user and test the app when Authentik is unavailable.

## 22. Implementation sequence

1. Approve owners, scope, data boundary, and fallback.
2. Verify edition, release, app protocol, callback, and logout support from official sources.
3. Deploy isolated staging with TLS and restricted administration.
4. Configure one provider/application and a least-privilege group policy.
5. Enroll two users and MFA without removing the old login.
6. Run functional, security, outage, recovery, and restore tests.
7. Obtain app-owner and recovery-witness sign-off before any cutover.

## 23. Migration and rollout

Reconcile pilot identities to the authoritative roster, communicate login/recovery changes, and add apps one at a time. Never bulk-enable access from an unreviewed directory attribute. Freeze policy changes during cutover and retain the previous login until acceptance.

## 24. Required test plan

Test correct login, denied login, MFA enrollment, MFA recovery, logout, session behavior after disablement, least-privilege access, callback rejection, admin separation, event visibility, email failure, Authentik outage, app fallback, and clean restore. Record actor, time, expected result, actual result, and evidence location without exposing secrets.

## 25. Acceptance criteria

Both pilot users can authenticate; an unapproved user cannot; disablement blocks new access and behaves as documented for existing sessions; no excess claims are released; app fallback works; break-glass and clean restore pass; all owners sign off. Any unexplained authorization result blocks production.

## 26. Success metrics

Track successful and failed pilot logins, disablement completion time, recovery completion, access-review exceptions, support effort, and IdP-caused app unavailability. Do not convert these into staffing-replacement claims.

## 27. Monitoring and alerting

Monitor service health, failed/background tasks, authentication anomalies, certificate expiry, database/storage capacity, email failures, backup results, and outpost/server version match where used. Route alerts to a named human with an escalation and manual app-access path.

## 28. Operating cadence

Reconcile roster and app access on an approved cadence and after each leaver; review privileged access and break-glass use; patch supported releases; rotate exposed secrets; test backup results; and schedule witnessed recovery drills. Record exceptions and closure owners.

## 29. Failure modes and response

Plan for IdP outage, database loss, bad policy, expired certificate, broken callback, email/recovery failure, compromised admin, and version mismatch. Stop rollout on unexpected grants; use the app fallback for availability; preserve logs; and require a human incident lead for containment and re-enable decisions.

## 30. Backup procedure

Official guidance identifies PostgreSQL as the critical persistent store and lists `/data`, `/certs`, `/custom-templates`, and `/blueprints` conditionally by use. Back up applicable state, deployment configuration, and secret references to a separate protected location. Do not assume a data export is a full backup.

## 31. Restore drill

Restore PostgreSQL before reconnecting Authentik, restore applicable static directories, and start an isolated instance at a non-production address. Verify two users, provider/application policy, MFA recovery rather than copied factors, login, denial, disablement, and version. The repository contains no retained runtime restore evidence.

## 32. Upgrade, rollback, and exit

Read release notes, back up PostgreSQL, follow major releases in sequence, and keep server/outpost versions matched as required by [official upgrade guidance](https://docs.goauthentik.io/docs/install-config/upgrade/). Authentik documents that downgrade is unsupported, so rollback means restoring the pre-upgrade version and database/state in isolation, not running new code against an old schema. Exit by restoring each app's alternative login, revoking provider secrets, reconciling accounts, and retaining an independent policy/access record.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-17**: [homepage](https://goauthentik.io/), [repository](https://github.com/goauthentik/authentik), [documentation](https://docs.goauthentik.io/), [Compose installation](https://docs.goauthentik.io/docs/install-config/install/docker-compose/), [backup/restore](https://docs.goauthentik.io/docs/sys-mgmt/ops/backup-restore/), and [upgrade guidance](https://docs.goauthentik.io/docs/install-config/upgrade/).

Evidence is documentation review only. Untested: runtime installation, app compatibility, policy behavior, MFA recovery, proxy/outpost design, email, backup/restore, upgrade/rollback, HA, sizing, performance, support, enterprise licensing/pricing, export fidelity, residency, and compliance. Treat all as open gates until evidenced in the target environment.
