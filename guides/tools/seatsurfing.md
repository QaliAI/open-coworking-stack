---
title: Seatsurfing for coworking desk booking
tool_id: seatsurfing
guide_status: full
verified_on: 2026-07-18
---

# Seatsurfing for coworking desk booking

This guide scopes Seatsurfing to 20 desks already included in an approved coworking group's entitlement. Official documentation says Seatsurfing has no accounting model and is intended for organizations providing free seats to employees; it is not a commercial desk-sales system. No runtime was tested.

## 1. Coworking outcome

Reduce hot-desk claim conflicts and produce a human-reviewed reservation signal for layout decisions. Seatsurfing augments reservations; it does not prove attendance, decide entitlement, bill members, or grant physical access.

## 2. Pilot scope

Model one floor with 20 labeled desks, one approved pilot group, two weeks of reservations, staff-managed exceptions, a manual register, and a clean database restore. Exclude paid inventory, doors, member contracts, and surveillance.

## 3. Fit

**Good fit:** desks are already included in membership; the operator is replacing a whiteboard/spreadsheet; and operations, facilities, community, privacy, roster, and technical owners are named.

## 4. Non-fit and alternatives

**Poor fit:** paid day passes/desks, credits/plans, invoicing/refunds, membership authority, door access, safety roll-call, inaccurate maps, or behavior/performance tracking. Use a coworking management platform when transactional inventory, billing, and access are required; retain the manual register during this pilot.

## 5. Coworking use cases

- Reserve already-entitled hot desks through a map/list.
- Apply approved duration/count limits and designated-space approval.
- Coordinate cancellations and front-desk exceptions.
- Review aggregate reservation patterns with member feedback.

Bookings must not be used as evidence that a member arrived, stayed, paid, or may enter a secured area.

## 6. Tasks reduced or augmented

Seatsurfing can reduce manual desk claims, collision checking, and reservation-list preparation. It cannot maintain floor accuracy, decide fair use/accommodations/eligibility, interpret utilization, resolve disputes, reconcile members, or operate outage fallback.

## 7. Human decisions and approvals

Membership staff approve eligible users; facilities approves map changes; operations approves rules; community staff resolve exceptions; privacy approves visibility/retention; technical operations approves deployment/recovery; and an independent reviewer signs access/restore tests.

## 8. Owners and RACI

Name accountable operations, facilities, community/support, privacy, membership-roster, technical/database, security, and recovery owners. No technical import should grant eligibility without the authoritative roster owner's approval.

## 9. Prerequisites

Define 20 desk IDs/floor image rights, opening hours/timezone, eligible pilot users/groups, booking/cancellation/no-show rules, accessibility route, visibility/retention, support, manual fallback, recovery objectives, TLS/secrets/monitoring, and isolated staging.

## 10. Skills and effort boundary

The self-hosted pilot needs container/Linux, PostgreSQL, DNS/TLS, reverse-proxy, secret, monitoring/backup, map, privacy, and support skills. Map validation, identity testing, restore drills, and member support can exceed software setup. No deployment-time or production-size claim is verified.

## 11. Deployment choice

Official sources describe managed SaaS and self-hosted container hosting. This guide's implementation pack targets a self-hosted evaluation, not a managed-plan commitment. Verify current image/repository, plan/feature terms, support, and deployment requirements before choosing either route.

## 12. Architecture and dependencies

Map TLS proxy, Seatsurfing backend/admin/booking UI, supported PostgreSQL service, persistent database, floor assets, identity path if used, monitoring, offsite backup, and manual register. Official repository examples identify `POSTGRES_URL` and `CRYPT_KEY`; store secrets outside version control and replace bootstrap credentials before exposure.

## 13. License and edition boundary

The catalog classifies the self-hosted backend as `GPL-3.0-only`; official sources also advertise SaaS plans. Re-check the active repository/license and every managed/self-hosted feature boundary. This guide does not establish entitlement, managed residency, support, or connector availability.

## 14. Total cost boundary

Annual true cost = compute + PostgreSQL/storage + TLS/DNS + monitoring/backups + map/account/identity setup + updates/restores + booking administration/support + privacy review + migration/exit. For SaaS add current plan/user/support charges. Compare loaded labor with manual and commercial alternatives; do not claim savings before measurement.

## 15. Data map

| Data                   | Source           | Purpose                 | Authority                | Exit/fallback           |
| ---------------------- | ---------------- | ----------------------- | ------------------------ | ----------------------- |
| Eligible users/groups  | Membership staff | Booking identity/limits | Membership system        | Roster crosswalk        |
| Areas/floor/spaces     | Facilities       | Navigation/inventory    | Desk register            | Image and register      |
| Reservations           | Member actions   | Coordinate claims       | Seatsurfing during pilot | Future-booking register |
| Utilization statistics | Reservations     | Layout experiment       | Human-reviewed analysis  | Aggregate report        |

Payment data, contracts, door credentials, identity documents, diagnoses, and member-case notes are excluded.

## 16. Privacy and retention

Treat identity, group, reservation time, and inferred location as personal data. Minimize who can view bookings, use aggregate reporting, suppress individual performance inference, define correction/deletion and a short purpose-bound history, and align backup expiry. Verify SaaS contractual location/deletion separately if selected.

## 17. Security baseline

Require TLS, named least-privilege accounts, changed bootstrap credentials, protected `CRYPT_KEY`/database secrets, restricted administration, pinned supported images, monitored auth/service/database health, and encrypted restricted backups. Test ordinary-user, ineligible-user, disabled-user, and admin boundaries.

## 18. Compliance and expert review

Obtain privacy advice before identifiable location-history retention, accessibility expertise where rules affect accommodations, identity/security review before OAuth2/internet exposure, PostgreSQL/operator help before production migration/recovery, and a commercial coworking systems expert when billing/credits/access are required.

## 19. Integration boundary

No membership, identity, payment, access-control, calendar, notification, or BI integration is catalog-verified. Official docs describe OAuth2 and CalDAV capabilities, but local scope/failure must be tested. Import only an approved roster; prohibit writes from booking state to billing or doors.

## 20. Configuration baseline

Record application/database/image versions, external URL/TLS, secret references, initial/admin accounts, areas/floor assets/20 spaces, hours/timezone, booking limits/cancellation/approvals, user/group visibility, identity settings, retention, monitoring/backup, support route, and manual fallback. Store no secret values here.

## 21. Smallest useful experiment

In isolated staging, map 20 desks, test with synthetic admin/eligible/ineligible/disabled users, restore the complete state to clean infrastructure, then run a two-week pilot for one approved group while preserving manual booking.

## 22. Implementation sequence

1. Approve fit, owners, rules, privacy notice, map, and fallback.
2. Verify current official self-hosting/release/license sources.
3. Deploy pinned staging; replace credentials and protect secrets.
4. Validate all desk labels onsite and run synthetic access/booking tests.
5. Back up and restore before importing pilot identities.
6. Run two weeks with daily exception/support review.
7. Review accessibility, privacy, cost, metrics, recovery, and exit evidence.

## 23. Migration and rollout

Keep membership authority and manual booking unchanged through pilot; import only approved users; communicate rules/privacy/fallback; and expand one floor/group at a time. Freeze map/rule changes during acceptance and reconcile future reservations during each cutover.

## 24. Required test plan

Test all 20 labels, map/list selection, conflict prevention, booking/cancellation, configured duration/count and approval, timezone/mobile behavior, admin and unauthorized denial, disabled user, identity outage if used, manual fallback, backup age, clean database restore, future reservations, permissions, and human-readable aggregate reporting.

## 25. Acceptance criteria

All 20 digital IDs match physical desks; configured rules/cancellation/approval work; unauthorized/ineligible/disabled users are denied as designed; no billing/door dependency exists; fallback resolves claims; clean restore recovers areas/spaces/users/rules/future bookings/permissions; and owners accept privacy/support load. Any map/access mismatch blocks rollout.

## 26. Success metrics

Track booking conflicts, cancellations/no-shows under the approved definition, manual exceptions, accessibility/support cases, map defects, denied-access defects, booking/fallback completion, restore time, aggregate utilization, member feedback, administration labor, and true cost. Do not treat reservation rate as attendance or productivity.

## 27. Monitoring and alerting

Monitor backend/database health, failed logins, admin changes, storage/capacity, backup age, certificate expiry, notification/job failures if used, and release/security notices. Route each alert to named technical/community owners with a manual-booking escalation.

## 28. Operating cadence

During pilot, review exceptions/support daily. Monthly, review admins, eligible roster, maps, rules, retention, storage, and backups. Before every expansion/upgrade, repeat representative booking/access/restore tests; periodically rehearse manual fallback and clean recovery.

## 29. Failure modes and response

Plan for service/database outage, wrong map, double/incorrect claim, timezone error, lost/disabled identity, permission leak, notification failure, backup failure, and privacy incident. Pause affected inventory, use the manual register, preserve future bookings/logs, restrict access on exposure, and require human conflict/accommodation decisions.

## 30. Backup procedure

Create a consistent PostgreSQL backup plus secret-free deployment configuration, exact image versions, floor assets, and independent area/desk register in a restricted offsite location. Keep a readable future-reservation register during pilot. Because a supported business-data export is unverified, test any UI/API export before relying on it.

## 31. Restore drill

Deploy matching pinned application/database versions on clean isolated infrastructure, restore PostgreSQL/configuration/maps, inject secrets from the approved store, and verify 20 spaces, areas, users/groups, rules, future bookings, login, permissions, and timezone. Record counts, timing, tester, and witness; container startup alone does not pass. No runtime evidence exists yet.

## 32. Upgrade, rollback, and exit

Pin releases, read release notes, back up, test migrations/acceptance in staging, and schedule staffed change windows without combining identity/map/app changes. Roll back with prior image and pre-upgrade database validated in isolation, then reconcile change-window bookings. Exit by freezing reservations, extracting/reconciling future bookings, moving to manual/replacement service, retaining approved aggregate history, revoking identity/secrets/admins, and expiring personal backups under policy.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-18**: [getting started](https://seatsurfing.io/docs/), [features and accounting limitation](https://seatsurfing.io/docs/features), [self-hosted configuration](https://seatsurfing.io/docs/self-hosted/config), and [backend repository](https://github.com/seatsurfing/backend), which currently redirects to the active project.

Evidence is documentation review only. Untested: runtime/image dependencies, PostgreSQL migration/restore, map/booking/rule behavior, mobile/timezone, identity/CalDAV, export/deletion, SaaS terms/location, peak load, notifications, support, cost, privacy compliance, and exit. Treat each as an open gate.
