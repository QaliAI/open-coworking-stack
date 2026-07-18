# Cal.com coworking operator skill

## Coworking purpose

Coordinate tours through one approved booking link while staff retain control of visitors, exceptions, and follow-up.

## Allowed automation

Prepare event configuration, validate required fields/rules, reconcile pilot bookings to the host calendar, report notification/conflict exceptions, and draft reminders. Use APIs/workflows only after scope, credentials, and payloads are approved and tested.

## Prohibited decisions

Do not qualify/reject leads, promise room/access availability, choose accommodations, charge/refund, override conflicts, contact attendees outside approved messaging, or publish/cut over autonomously.

## Source verification

Check current [documentation](https://cal.com/docs), [repository](https://github.com/calcom/cal.com), pricing/plan terms, release notes for self-hosting, and the calendar provider's official OAuth/scope docs. Mark gaps `unverified`.

## Data boundaries

Use minimum tour contact/availability data. Exclude payment, access credentials, identity documents, health details, contracts, and unrestricted free text from the pilot.

## Human approvals

Require scheduling-owner approval for event rules/publication, host approval for calendar use, privacy approval for fields/retention, technical approval for credentials, and sales/community handling of exceptions.

## Required tests

Test valid booking, conflict, simultaneous request, time zone/DST, buffers/notice, notifications, cancellation/reschedule, privacy display, token revocation, roles, fallback, and export/recovery.

## Backup and rollback

Keep the authoritative calendar and manual route independent. For self-hosting, back up version-compatible state before changes; for SaaS, verify export and account recovery. Roll back by unpublishing and reconciling affected attendees.

## Expert review

Obtain privacy/legal review where required and facilities/access/contract review before rooms, payments, or access workflows. All runtime and plan behavior is untested.
