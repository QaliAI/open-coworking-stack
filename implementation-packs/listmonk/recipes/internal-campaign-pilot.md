# Recipe: Approval-Gated Internal Campaign

1. Duplicate `examples/pilot-subscribers.csv` outside this repository and replace only the two active fixtures with consenting internal addresses.
2. Validate required fields, unique `source_id`, consent references, and the suppressed row exclusion.
3. Import only active approved rows into an internal list using the current official UI/import instructions.
4. Build a draft with a visible sender, reply route, and unsubscribe link; do not schedule it.
5. Export the audience count and sample, attach them to `templates/campaign-approval.md`, and obtain signatures.
6. Send once, record results, unsubscribe one fixture, and create an unsent second audience preview.
7. Stop if the fixture remains eligible, counts do not reconcile, or replies/bounces lack an owner.

This recipe names no API endpoint or provider-specific bounce flow. Add those only after official version/provider review.
