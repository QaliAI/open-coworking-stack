# Invoice Failure To Human Follow-Up

Route a failed coworking invoice or collection attempt to an accountable person for respectful,
policy-based follow-up. This recipe does not automatically suspend membership or building access.

This is an integration pattern, not a verified pairwise capability. Existing catalog IDs that can
illustrate roles are `invoice-ninja` for invoicing, `stripe` for payment processing, `freescout` for a
staff queue, and `n8n` for workflow automation. Their appearance together does not establish a native
connector or verified API/webhook path. Because catalog metadata does not establish both endpoints
for these pairs, the baseline is a controlled CSV exception report plus manual queue.

## Trigger And Ownership

- Trigger: finance confirms an invoice or collection attempt is in a failed, overdue, or action-needed
  state under the operator's written policy.
- Owner: finance owns amount and payment status; a named staff member owns member contact; management
  approves service or access restrictions.
- Completion: the member receives an approved human-reviewed contact or the case is resolved without
  contact, and finance records the disposition.

## Minimum Handoff Record

| Field                    | Purpose                                           |
| ------------------------ | ------------------------------------------------- |
| `event_id`               | Immutable failure event ID used for deduplication |
| `invoice_ref`            | Opaque invoice reference                          |
| `member_ref`             | Opaque member or account reference                |
| `contact_channel_ref`    | Approved contact reference, not credentials       |
| `amount_due`, `currency` | Amount finance verifies before contact            |
| `due_date`               | Date used to apply collection policy              |
| `failure_category`       | Controlled category, not raw processor text       |
| `attempt_number`         | Prevents duplicate or excessive contact           |
| `policy_stage`           | Controlled reminder or escalation stage           |
| `owner_ref`              | Staff member responsible for the case             |

Do not transfer card or bank details, payment tokens, full processor responses, identity documents,
contract files, door-access status, sensitive hardship notes, or unrelated purchase history. Keep
free-text member circumstances in the approved case system only when necessary and access-controlled.

## Baseline Procedure

1. Finance exports a daily exception CSV to an encrypted, access-controlled drop after reconciling
   pending, reversed, disputed, and already-paid items.
2. The queue owner validates amount, currency, due date, policy stage, owner, and duplicate
   `event_id`. A payment-status ambiguity returns to finance; it does not generate member contact.
3. Finance checks for payment received after export, open disputes, approved payment plans, credits,
   duplicate invoices, and do-not-contact restrictions.
4. The assigned staff member reviews the approved template and context, then contacts the member.
   The message names a human reply route and avoids exposing payment details beyond what is necessary.
5. Staff record one controlled disposition such as `paid`, `payment_plan_review`, `billing_error`,
   `contacted`, `no_contact`, or `escalation_review` against the event.
6. Any service or physical-access change follows a separate policy and requires management approval;
   a failed invoice event alone never triggers it.

## Reliability And Audit Controls

- Deduplicate on `event_id` and also check `invoice_ref`, `policy_stage`, and `attempt_number` before
  creating a task or sending contact. A replay returns the existing task reference.
- Record timestamps, actor, invoice reference, amount and currency, policy stage, task reference,
  disposition, and non-sensitive error code. Do not log payment credentials or raw failure payloads.
- Retry only temporary file, queue, or notification failures, at most three times with increasing
  delays. Do not automatically retry a payment or resend a member message.
- Move exhausted work to a restricted dead-letter/manual queue owned by finance. During an outage,
  finance works from the reconciled exception report and records outcomes for later import.
- Store future connector credentials in an approved secret manager with read-only billing scope where
  possible. Separate billing read access from payment initiation, rotate credentials, and test
  revocation.

## Human Approval Points

- Finance confirms the invoice is still due and the amount, currency, and policy stage are correct.
- A staff member approves each outbound message and chooses the appropriate contact channel.
- Finance or management approves payment plans, credits, write-offs, disputes, and legal escalation.
- Management separately approves any service or access restriction after checking contract, local
  law, safety, and member circumstances.

## Rollback

Pause new tasks and messages, mark affected events `rollback_pending`, and close duplicate unsent
tasks using their recorded references. Cancel queued messages where possible. Do not delete audit or
accounting records. If incorrect contact was sent, finance verifies current status and a human
approves a correction or apology. Reverse credits, write-offs, or service decisions only through the
responsible approval process. Reconcile all affected invoices before resuming.

## Test Cases

1. A synthetic failed invoice creates one assigned task with the correct amount, currency, and policy
   stage, but sends no automatic message.
2. Replaying the same `event_id` creates no duplicate task or contact.
3. An invoice paid after export is suppressed during reconciliation and marked `paid`.
4. Missing currency, owner, or ambiguous payment status enters the manual finance queue without
   member contact.
5. A temporary queue outage is retried within the limit; exhaustion reaches the dead-letter queue
   without raw processor data.
6. An approved payment plan or dispute prevents the standard reminder and routes to human review.
7. No test path changes application or physical access solely because payment failed.

## Success Criteria

- 100% of pilot contacts have prior finance validation and a named human approver.
- Zero duplicate tasks or messages occur during replay and repeated-export tests.
- At least 95% of confirmed failure events receive an owner within one business hour.
- 100% of unresolved processing failures reach the finance manual queue within 15 minutes of
  detection.
- Zero paid, disputed, credited, or approved-payment-plan invoices receive the standard failure
  message in the pilot.
- Zero service or access restrictions are applied without a separate recorded management approval.
- Monthly audit samples find zero payment credentials, raw processor payloads, or sensitive hardship
  notes in transfer files and integration logs.
