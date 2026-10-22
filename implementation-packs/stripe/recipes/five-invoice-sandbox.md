# Recipe: five synthetic invoices

1. Create five synthetic customers and invoices in the authoritative billing sandbox.
2. Record stable fixture, invoice, and expected payment-status mappings.
3. Use only the documented connector and Stripe-provided sandbox methods.
4. Execute success, decline, duplicate/replay, refund/dispute, and interrupted-webhook cases.
5. Verify raw-body signatures, reject an invalid signature, and prevent duplicate actions.
6. Retrieve authoritative object state after interruption rather than trusting event order.
7. Export supported reports and reconcile all five fixtures to fees/statuses and the finance worksheet.
8. Rotate sandbox credentials, restore clean staging configuration, and run one new payment.
9. Obtain finance/security/technical review; this recipe never enables live mode.
