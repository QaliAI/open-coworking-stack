# Recipe: Reconciled Lead Handoff

1. Create test source/destination credentials with only read/search/create operations required by their official docs.
2. Load one fixture at a time from `examples/lead-fixtures.json` into a test trigger.
3. Validate required fields and permitted `inquiry_type`; send invalid records to the exception queue.
4. Search destination by `source_id`. If exactly one exists, link it; if more than one exists, stop for human review.
5. Create only when none exists. On timeout or ambiguous response, search again before any human-approved retry.
6. Notify staff with `source_id` and status after confirmed create/link. A notification failure must not repeat the lead write.
7. Reconcile fixture ID, execution, destination record, notification, and expected outcome.

Adapt operations only after reading current official documentation for both providers and the exact n8n node.
