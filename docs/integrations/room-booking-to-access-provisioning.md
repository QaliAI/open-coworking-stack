# Room Booking To Access Provisioning

Turn an approved coworking room reservation into narrowly bounded access while preserving staff
control over safety, exceptions, and physical operations.

This is an integration pattern, not a verified pairwise capability. Existing catalog IDs that can
illustrate roles are `librebooking` or `seatsurfing` for bookings, `keycloak` for application identity,
and `freescout` for a staff queue. `keycloak` is not presented here as a physical door controller.
The catalog does not establish compatible booking and physical-access endpoints, so use the
CSV/manual baseline. Do not infer a native connector from these examples.

## Trigger And Ownership

- Trigger: a booking reaches an approved state and falls within current room, member, capacity, and
  access policies.
- Owner: the operations manager owns booking policy; an authorized access administrator owns the
  grant; on-site staff own safety and override decisions.
- Completion: the authorized person can enter only the intended room or route during the approved
  window, and cancellation or expiry removes that grant.

## Minimum Handoff Record

| Field                         | Purpose                                            |
| ----------------------------- | -------------------------------------------------- |
| `event_id`                    | Immutable booking event ID used for deduplication  |
| `booking_ref`                 | Opaque source booking reference                    |
| `member_ref`                  | Opaque member or host reference                    |
| `room_ref`                    | Controlled room identifier                         |
| `location_ref`                | Coworking site identifier                          |
| `starts_at`, `ends_at`        | Booking bounds including explicit time zone        |
| `access_from`, `access_until` | Policy-approved entry window                       |
| `attendee_count`              | Capacity check without attendee identities         |
| `approver_ref`                | Staff reference when approval is required          |
| `status`                      | Controlled value such as `approved` or `cancelled` |

Do not transfer attendee lists, meeting titles, agendas, door PINs, credential material, access logs,
phone numbers, payment data, or free-text notes. A booking attendee should not receive access unless
policy separately authorizes that person.

## Baseline Procedure

1. Export approved or cancelled bookings to an encrypted, access-controlled CSV drop at a documented
   interval. Urgent same-day changes must also enter the staffed manual queue.
2. The queue owner validates the time zone, room mapping, member status, capacity, access window, and
   duplicate `event_id`. Ambiguous mappings stop; they never default to a broader access zone.
3. An access administrator approves and provisions the least access needed. Use an existing personal
   credential where policy permits; never put reusable PINs or secrets in the CSV.
4. Record the target grant reference and expiry against the event. Confirm that expiry is enforced,
   not merely scheduled as a staff reminder.
5. Process cancellation as a new event linked to `booking_ref`; revoke the grant and record the
   result. Staff reconcile late cancellations and changed rooms before the access window.
6. Delete transfer files on schedule and retain only the minimum audit record required by policy.

## Reliability And Audit Controls

- Deduplicate on `event_id`, and allow at most one active grant for the combination of `booking_ref`,
  person, room, and access window. Replays return the recorded result.
- Record timestamps, actor, booking reference, room, bounded window, target grant reference, result,
  and non-sensitive error code. Do not copy detailed door-entry logs into the integration ledger.
- Retry transient file or target availability failures at most three times with increasing delays.
  Never retry invalid identity, room mapping, capacity, or authorization decisions automatically.
- Send exhausted work to a restricted dead-letter/manual queue with a named on-site owner. If the
  provisioning path is unavailable, staff use the documented identity-check and supervised-entry
  procedure; they do not issue a shared credential.
- Keep any future automation credentials in an approved secret manager, scoped to specific locations
  and grant operations. Separate create and administrative privileges where possible, and rehearse
  emergency revocation.

## Human Approval Points

- Operations approves policy exceptions, after-hours access, external hosts, and room changes.
- An access administrator approves the person, zone, and window before creating the grant.
- On-site staff decide supervised entry during outages and retain physical override for life-safety
  events.
- A human reviews any mismatch between booking status and active access before either record changes.

## Rollback

Freeze new grants, mark affected events `rollback_pending`, and revoke grants created by the run using
their recorded target references. Do not delete the booking or audit history. Restore any prior grant
only after an access administrator confirms it was valid and unaffected. Notify on-site staff of
unresolved active windows, switch to supervised entry, reconcile every affected booking, and resume
only after synthetic create, expiry, cancellation, and replay tests pass.

## Test Cases

1. A synthetic approved booking creates one grant for the mapped room and exact approved window.
2. Replaying the same `event_id` creates no additional grant and does not extend the window.
3. A changed room creates no broad grant; the old grant is revoked before the newly approved one is
   activated.
4. Cancellation revokes access before the original window and leaves an audit trail.
5. Unknown room, invalid time zone, excessive attendee count, or missing approval enters the manual
   queue without provisioning.
6. A target outage exhausts bounded retries, assigns an on-site owner, and uses supervised entry
   without exposing a shared credential.
7. Access expires at `access_until`; an after-window attempt does not succeed in the test environment.

## Success Criteria

- 100% of pilot grants are limited to the approved person, room or route, location, and time window.
- Zero duplicate or broadened grants occur during replay and room-change tests.
- At least 99% of approved bookings are ready five minutes before `access_from`, excluding documented
  policy exceptions.
- 100% of cancellations received before `access_from` are reconciled before the access window opens.
- 100% of failures reach an owned manual queue within five minutes of detection.
- Monthly audit samples find zero credentials, meeting content, or attendee lists in CSV files and
  integration logs.
