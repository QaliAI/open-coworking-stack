# Integration Recipes

This library contains small, vendor-neutral handoff patterns for coworking operations.

Use it when a signed agreement needs a staff-owned welcome, a room booking needs approved access,
or a failed invoice needs respectful follow-up. Choose one handoff, name its owner, and test with
synthetic records first. The recipes below show the fields, checks and fallback queue needed to
keep that work accountable. Start with the controlled CSV/manual path; automate only after the
required evidence is recorded.

## Capability Boundary

These recipes are patterns, not claims of verified pairwise compatibility. Tool names appear only as
examples, and every example is an existing catalog tool ID. The catalog currently does not establish
the source and target endpoint support needed for any pair in these recipes, so the runnable baseline
is a controlled CSV transfer plus a staff-owned manual queue.

Do not infer that two listed tools have a native connector. Before replacing a baseline step with an
API or webhook, record official documentation for both endpoints, authentication, event semantics,
rate limits, retries, and deletion behavior in catalog metadata. `node-red` is cataloged for API and
webhook bridge work, and `n8n` for workflow automation, but that does not establish compatibility with
another example tool.

## Recipes

| Recipe                                                                        | Operational outcome                                                                    | Baseline transport    |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------- |
| [Member onboarding handoff](member-onboarding-handoff.md)                     | Signed agreement to usable access, billing, and a personal welcome                     | CSV plus manual queue |
| [Room booking to access provisioning](room-booking-to-access-provisioning.md) | Time-bounded room access reviewed against a valid booking                              | CSV plus manual queue |
| [Invoice failure to human follow-up](invoice-failure-to-human-follow-up.md)   | Failed invoice reaches an accountable staff member without automatic access suspension | CSV plus manual queue |

## Shared Operating Rules

1. Pilot with synthetic records, then a small approved cohort.
2. Export only the fields named in the recipe. Do not include contract files, card data, identity
   documents, door credentials, free-text notes, or unrelated member history.
3. Exchange CSV files through an access-controlled location. Encrypt transfers, restrict access by
   role, set a deletion deadline, and remove local copies after import and reconciliation.
4. Give each event an immutable `event_id`. Consumers record it and make repeated processing a no-op.
5. Keep an append-only audit record of timestamp, `event_id`, action, result, actor or service,
   source and target record references, and a non-sensitive error code. Do not log secrets or full
   payloads.
6. Keep secrets out of CSV files, source control, workflow definitions, tickets, and logs. Store them
   in an approved secret manager, grant least privilege, rotate them, and document emergency
   revocation.
7. Retry only transient failures with bounded exponential backoff. Move exhausted work to a
   dead-letter queue owned by a named staff role; a spreadsheet or help-desk queue is sufficient.
8. Never silently drop work. If automation is unavailable, freeze the automation and run the manual
   checklist from the same queue.
9. Require human approval where a decision changes contractual terms, billing, physical access, or
   member communications.
10. Define rollback before launch and rehearse it with synthetic records.

## Minimum Evidence For Automation

An operator may replace a CSV step only after the local implementation record contains:

- official source and target documentation;
- supported authentication and least-privilege scopes;
- stable event or API fields and an idempotency strategy;
- signature verification for inbound webhooks, if applicable;
- rate-limit, retry, replay, and ordering behavior;
- a sandbox test, rollback test, and named operational owner;
- catalog metadata that establishes the claimed capability.

Until all evidence exists, retain the CSV/manual path as the production fallback.
