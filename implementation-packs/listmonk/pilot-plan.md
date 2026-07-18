# Internal Newsletter Pilot

## Scope

One sender, one internal list, one approved template, one campaign, and no automated member-system writes.

## Sequence

1. Populate the synthetic example with consenting internal test addresses.
2. Add a suppressed fixture and prove preprocessing excludes it.
3. Render plain-text and HTML previews; inspect every link and identity.
4. Approve the exact audience snapshot and message using the template.
5. Send once; reconcile intended, accepted, failed, bounced, and unsubscribed counts.
6. Unsubscribe a fixture and prove it is absent from a second unsent audience preview.
7. Export evidence and restore state to isolated staging.

## Pass gate

No unauthorized recipient, count reconciliation has no unexplained row, replies have an owner, suppression survives restore, and all three owners sign. Otherwise pause and use the prior approved sender.
