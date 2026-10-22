# Configuration checklist

- [ ] Operator country, currencies, methods, products, and official regional fees verified.
- [ ] Chosen coworking/invoicing connector has current official documentation.
- [ ] Sandbox and live accounts/keys/endpoints are visibly separated.
- [ ] Secret/restricted keys and webhook secrets are in a vault, not code/config/git.
- [ ] Roles use least privilege; bank/account/live actions require recorded approval.
- [ ] HTTPS endpoint verifies raw-body signatures and rejects invalid events.
- [ ] Required event types only; processing is idempotent and not order-dependent.
- [ ] Stable customer/invoice/payment ID crosswalk defined.
- [ ] Logs redact credentials and unnecessary customer/payload data.
- [ ] Refund, dispute, payout, reconciliation, incident, and alternate-payment runbooks assigned.
- [ ] PCI responsibility reviewed for the exact integration.
