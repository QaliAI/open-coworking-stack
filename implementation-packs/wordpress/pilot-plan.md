# Pilot plan

## Scope

Private staging, minimum coworking pages, one reviewed theme, one form plugin/solution, only strictly required supporting dependencies, synthetic leads, and no production DNS or real member data.

## Gates

1. Marketing approves content inventory, claims, and publishing workflow.
2. Privacy/security approve form and dependency data flows.
3. Accessibility reviewer completes automated and manual checks.
4. Lead owner passes delivery, failure, fallback, duplicate, and reconciliation tests.
5. Technical/recovery owners pass clean restore, update, and rollback tests.
6. Production cutover receives separate change approval.

## Stop conditions

Stop for critical accessibility barrier, unauthorized access, lost submission, unknown data destination, insecure/unsupported dependency, production indexing from staging, failed restore, missing DNS rollback, or unreconciled lead path.

No traffic, conversion, accessibility conformance, or recovery target is claimed by this repository.
