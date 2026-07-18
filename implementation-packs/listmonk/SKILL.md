# Safe listmonk Coworking Operations

## Coworking purpose

Prepare internal tests and approved one-way member or event newsletters. Keep the member system and consent register authoritative.

## Allowed automation

- Validate a proposed subscriber file against approved required fields.
- Produce audience counts, duplicate reports, and source-versus-list differences.
- Create a draft campaign or execute a campaign only after a named human records final approval.
- Summarize delivery, bounce, error, and unsubscribe evidence for review.

## Prohibited decisions

- Never infer consent, lawful basis, or communication eligibility.
- Never remove suppression, select sensitive segments, write campaign copy as approved fact, or authorize a send.
- Never retry an uncertain or partially delivered campaign as a whole.

## Source verification

Check the current official listmonk documentation, repository release, SMTP provider documentation, and applicable marketing rules. Do not claim a coworking CRM connector or webhook behavior from this pack.

## Data boundaries

Use email, optional display name, source ID, consent reference, list status, and approved segment only. Exclude payment, access, identity-document, health, dispute, and free-text profile data. Treat exports and logs as personal data.

## Human approvals

Require communications approval for copy/audience/time, privacy approval for consent/tracking/retention, and technical approval for SMTP, DNS, credentials, backup, restore, and production change.

## Required tests

Test duplicate and suppressed fixtures, role denial, rendered links, unsubscribe, SMTP rejection, webhook authentication where used, count reconciliation, export, and isolated restore. Stop if any suppressed fixture can enter the audience.

## Backup and rollback

Back up PostgreSQL, configuration, and uploads if used. Restore to isolated staging and verify suppression/counts before production. Roll back by pausing sends, revoking SMTP/API access, and restoring the matched pre-change state; never assume the database alone is complete when media uploads are enabled.

## Expert review

Privacy/legal counsel reviews consent, tracking, retention, cross-border processing, and marketing law. A deliverability specialist reviews sender authentication, bounces, complaints, and reputation before member mail.
