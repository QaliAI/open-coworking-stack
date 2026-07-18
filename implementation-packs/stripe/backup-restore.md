# Recovery and export

Stripe is managed SaaS; this runbook restores operator-owned integration and finance continuity, not Stripe's service.

## Preserve

- Secret-free connector configuration, API/event version, endpoint/event inventory, and ID mappings.
- Finance ledger postings, reconciliation worksheets, alternate-payment procedure, and role/recovery register.
- Supported customer/payment metadata, balance/payout, fee, refund, and dispute reports where available.

## Test

Restore configuration to clean staging, inject new sandbox keys from the vault, register/test the sandbox webhook secret, reject an invalid signature, process/replay safe events, create a new synthetic payment, and reconcile five invoice/payment/report relationships without dashboard-only knowledge. Never export or back up raw card credentials.
