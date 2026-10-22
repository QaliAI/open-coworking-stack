# Pilot plan

## Scope

Five synthetic invoices in a Stripe sandbox using the chosen product's officially documented connector. No live data or money.

## Cases

1. Successful payment and complete invoice-to-report reconciliation.
2. Decline with no false paid status and a human communication task.
3. Duplicate/out-of-order/replayed webhook without duplicate finance action.
4. Refund and dispute simulation reaching the required approver queue.
5. Webhook interruption followed by safe state retrieval/reconciliation.

Also reject an invalid signature, rotate a sandbox key/secret, inspect exports, and rehearse alternate payment. Stop on raw card handling, key leakage, reconciliation mismatch, unclear PCI scope, or undocumented connector behavior.
