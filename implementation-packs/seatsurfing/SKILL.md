# Seatsurfing coworking booking skill

## Coworking purpose

Coordinate reservations for one accurately mapped floor of desks already available to approved coworking members, reducing conflicts while preserving a front-desk fallback.

## Allowed automation

Enforce approved duration/count limits, send booking notifications, request human approval for designated spaces, disable users after an approved roster change, and prepare aggregate utilization reports.

## Prohibited decisions

Do not sell inventory, decide membership entitlement, bill/refund, grant door access, resolve disputes/accommodations, infer attendance/performance, or treat reservations as emergency presence.

## Source verification

Use current official Seatsurfing features, self-hosting configuration, repository/license, and release notes. Record versions, URLs, dates, and feature/plan boundaries; mark untested integrations and exports unknown.

## Data boundaries

Use approved pilot identities/groups, 20 desk records, a floor image, and reservations. Exclude payment details, contracts, door credentials, identity documents, diagnoses, and member notes.

## Human approvals

Membership staff approve eligibility; facilities approve map accuracy; operations approve rules; privacy approves visibility/retention; technical operations approve recovery; and community staff resolve exceptions.

## Required tests

Test all desk labels, booking/cancellation/conflicts, configured limits/approvals, denied admin/user access, disabled user, timezone/mobile use, fallback, backup, clean restore, and human interpretation of aggregate metrics.

## Backup and rollback

Back up consistent PostgreSQL data, secret-free configuration, and maps offsite; keep the manual register. Roll back application/database changes using the pre-change copy and reconcile bookings created during the window.

## Expert review

Require privacy review for identifiable location history, accessibility expertise for accommodations, identity/security expertise for OAuth2/exposure, PostgreSQL expertise for recovery, and a commercial coworking platform expert when billing or access control is required.
