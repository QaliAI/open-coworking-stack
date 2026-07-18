# Member Onboarding Handoff

Move an approved member from CRM or signed agreement through identity/access, billing setup, and a
human welcome without treating any system as a substitute for staff review.

This is an integration pattern, not a verified pairwise capability. Existing catalog IDs that can
illustrate system roles are `espocrm` for CRM, `documenso` for agreements, `keycloak` for application
identity, `invoice-ninja` for billing, `listmonk` for communications, and `freescout` for a manual
queue. Their appearance together does not mean they connect natively. Because the catalog does not
establish the required source and target endpoints, use the CSV/manual baseline below.

## Trigger And Ownership

- Trigger: a named staff member marks an agreement approved after checking signature status,
  company admin contact, move-in date, plan, and any special terms.
- Owner: the operations manager owns the overall case; finance approves billing; an authorized
  access administrator approves application and physical access; the community manager owns the
  welcome.
- Completion: access is usable for the approved term, billing is reviewed, and the welcome has a
  recorded human owner.

## Minimum Handoff Record

| Field                  | Purpose                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `event_id`             | Immutable onboarding event ID used for deduplication          |
| `member_ref`           | Internal opaque member reference, not a government ID         |
| `agreement_ref`        | Reference to the approved agreement; do not copy the document |
| `person_name`          | Name needed to identify and welcome the member                |
| `contact_email`        | Address needed for account activation and welcome             |
| `location_ref`         | Approved coworking location                                   |
| `service_tier`         | Controlled code used for access and billing review            |
| `starts_at`, `ends_at` | Approved service and access bounds                            |
| `billing_start_date`   | Date finance must verify                                      |
| `approver_ref`         | Staff reference for the approval, not free-text notes         |

Do not transfer identity documents, signatures, contract text, payment card data, bank details,
passwords, access tokens, health data, or sales notes. Keep the mapping from `member_ref` to detailed
records only in systems that need it and apply the shortest lawful retention period.

## Baseline Procedure

1. The operations manager exports one approved record to an encrypted, access-controlled CSV drop.
2. The queue owner validates required fields, dates, approval, and duplicate `event_id`. Invalid rows
   go to the manual queue without partial provisioning.
3. The access administrator creates or enables the minimum application identity and separately
   provisions only the location and dates approved. Physical keys, fobs, and emergency orientation
   remain staff tasks.
4. Finance reviews service tier, tax treatment, proration, deposit, and billing start before creating
   an invoice or recurring charge. No charge is initiated solely from an unchecked export.
5. The community manager reviews communication consent and sends the welcome. The welcome identifies
   a human contact, site norms, help route, and orientation time.
6. Each owner records success or a non-sensitive failure code against the same `event_id`. The queue
   owner reconciles all stages and deletes transfer files on schedule.

## Reliability And Audit Controls

- Use `event_id` as the idempotency key. Before creating anything, search the stage ledger for a
  successful action. A repeated row updates no access, billing, or communication state.
- Record timestamps, actor, approval, stage, result, source and target references, and error code in
  an append-only audit log. Exclude payloads, agreement contents, and secrets.
- Retry locked files or temporary system unavailability at most three times with increasing delays.
  Do not retry validation, approval, or policy failures automatically.
- After retries, place the event in a restricted dead-letter/manual queue assigned to operations.
  Preserve the original `event_id`, error code, attempt count, and next action.
- If any automated helper is later introduced, keep credentials in an approved secret manager with
  separate least-privilege identities per system. Rotate and revoke them without editing the recipe
  or queue.

## Human Approval Points

- Sales or operations approves the agreement and exceptional terms before export.
- An access administrator approves location, role, start, and expiry before activation.
- Finance approves tax, proration, deposit, amount, and collection date before billing starts.
- The community manager approves consent and message content and performs the personal welcome.

## Rollback

Stop processing the `event_id`, mark it `rollback_pending`, and notify every stage owner. Disable newly
created application access and revoke newly issued physical access without deleting audit history.
Void draft invoices or subscriptions according to finance policy; refunds and posted accounting
entries require finance approval. Suppress unsent welcome messages and send corrections only after a
human review. Restore prior state from recorded target references, reconcile every reversal, and move
unresolved work to the manual queue.

## Test Cases

1. A synthetic approved member produces one identity, one bounded access grant, one reviewed billing
   record, and one assigned welcome task.
2. Replaying the same `event_id` creates no duplicate identity, access, invoice, or message.
3. A missing agreement approval or billing date creates no downstream records and enters the manual
   queue.
4. A temporary target outage is retried within the limit and then succeeds without duplication.
5. An exhausted retry enters the dead-letter queue with an owner and no secret or sensitive payload.
6. Cancellation before start revokes staged access, stops billing setup, and records all reversals.
7. A CSV containing a forbidden field is rejected and the file is quarantined for secure deletion.

## Success Criteria

- At least 95% of approved pilot cases have usable, correctly bounded access by the agreed start time.
- 100% of access and billing actions have a named human approver and audit record.
- Zero duplicate identities, access grants, invoices, or welcome messages in replay tests and the
  pilot.
- 100% of failed events reach an owned manual queue within 15 minutes of detection.
- Transfer files are deleted within the documented retention window, with zero secrets or forbidden
  fields found in monthly samples.
- A community manager personally contacts 100% of pilot members by the end of their first working
  day.
