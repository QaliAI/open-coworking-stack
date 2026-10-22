# Chatwoot coworking operator skill

## Coworking purpose

Coordinate website enquiries in a shared inbox while named staff own responses, privacy, escalation, and follow-up.

## Allowed automation

Report unassigned/stale conversations, apply pre-approved low-risk labels/assignments, draft approved acknowledgements for human review, and reconcile open handoffs. API or automation rules require scoped credentials and failure tests.

## Prohibited decisions

Do not resolve emergencies, determine member eligibility, promise price/availability, request payment secrets, expose private notes, close disputes, delete records, or send sensitive/high-impact replies autonomously.

## Source verification

Check [official docs](https://www.chatwoot.com/docs), [developer docs](https://developers.chatwoot.com/), repository/release notes, pricing/edition, and each channel provider's official permissions/features. Label unknowns `unverified`.

## Data boundaries

Use minimum contact and enquiry context. Exclude card/payment data, door credentials, identity documents, health details, HR issues, and unrestricted sensitive attachments from the pilot.

## Human approvals

Require inbox-owner approval for labels/rules, privacy approval for notice/retention, technical approval for credentials/channels, and named human ownership for sales, facilities, complaints, urgent, and after-hours cases.

## Required tests

Test widget/privacy wording, agent and unauthorized roles, assignment, labels, public reply/private note, attachments, after-hours, notifications, escalation, closure/reopen, fallback, revocation, export, and restore/account recovery.

## Backup and rollback

For self-hosting protect PostgreSQL, storage, configuration, and approved customizations. Keep the previous contact route; roll back by removing the widget/channel and manually reconciling every open case.

## Expert review

Obtain privacy/legal review where required and safety/security review before emergency, identity, access, or incident channels. All runtime/channel behavior is untested.
