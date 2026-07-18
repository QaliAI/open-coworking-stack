# Stripe coworking payments skill

## Coworking purpose

Evaluate reliable payment collection for approved coworking invoices while preserving finance reconciliation, member communication, alternate payment, and separation from membership/door authority.

## Allowed automation

Create payment requests for approved invoices, correlate stable IDs, validate and queue signed events idempotently, update provisional status, alert failures, and prepare reconciliation reports.

## Prohibited decisions

Do not set prices/terms, approve refunds/write-offs/disputes, change payout bank details, judge sanctions/fraud exceptions, grant physical access, activate live mode, or handle raw card data without required experts and approvals.

## Source verification

Use current official Stripe regional pricing, testing, security, key, webhook, API-version, and chosen connector documentation. Record URLs, dates, country, products, versions, and unknowns.

## Data boundaries

Use synthetic customers/invoices and Stripe-provided sandbox test methods only. Exclude real card/customer data, door codes, identity documents, contracts, member narratives, and all live credentials.

## Human approvals

Finance approves mappings/reconciliation/refunds; security approves PCI/key controls; technical operations approves integration; account owner approves recovery/bank/live changes; member support owns communication; a second approver handles exceptions.

## Required tests

Test success, decline, duplicate/out-of-order/replayed event, invalid signature, interruption/recovery, refund/dispute path, key rotation, sandbox/live separation, exports, reconciliation, and alternate payment instructions.

## Backup and rollback

Back up secret-free integration configuration, ID mappings, runbooks, ledger postings, and supported reports. Roll back by disabling new initiation, preserving open records, reverting the connector, rotating exposed keys, reconciling the window, and maintaining authorized access for refunds/disputes.

## Expert review

Require qualified payment-security/PCI advice when scope is unclear, accounting/tax advice for ledger design, legal/privacy review for terms/retention/mandates, and integration security expertise for complex webhooks, Connect, high volume, or compromised keys.
