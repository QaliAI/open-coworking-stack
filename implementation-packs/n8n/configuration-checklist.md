# Configuration Checklist

- [ ] Record license/edition decision and pin n8n plus node versions.
- [ ] Use separate staging URL, state, encryption material, and provider credentials.
- [ ] Put TLS at the edge and restrict editor/admin access.
- [ ] Define source ID uniqueness and destination lookup before create.
- [ ] Set workflow and node timeouts; do not leave uncertainty to unlimited retries.
- [ ] Route all errors and uncertain writes to a staffed exception destination.
- [ ] Configure execution success/error payload retention and pruning deliberately.
- [ ] Exclude binary/payment/access/identity/sensitive free text from payloads.
- [ ] Use least-privilege source read and destination create/search credentials.
- [ ] Make notification failure independent from destination lead creation.
- [ ] Document the trigger disable switch and manual intake procedure.
- [ ] Inspect workflow exports before storage or sharing.
- [ ] Back up and test state plus encryption material; JSON export alone is insufficient.
