# BookStack coworking operator skill

## Coworking purpose

Publish owned coworking SOPs so authorized staff can find the current approved procedure and its owner.

## Allowed automation

Generate page registers, identify missing owner/review fields, report broken links/review dates, prepare staging imports through verified interfaces, and create review reminders. Automation may not publish or classify critical content without approval.

## Prohibited decisions

Do not declare an SOP safe/lawful, expose a shelf publicly, change access roles, archive authoritative content, resolve conflicting sources, or replace emergency training autonomously.

## Source verification

Check the exact [BookStack docs](https://www.bookstackapp.com/docs/), repository/release notes, installation package, authentication provider, and source-document owner. Mark unsupported import/export assumptions `unverified`.

## Data boundaries

Use five approved SOPs and sanitized attachments. Exclude contracts, payment records, HR cases, security secrets, member lists, and incident PII unless separately approved.

## Human approvals

Require content-owner accuracy, qualified safety/privacy review where relevant, knowledge-owner publication/archive approval, technical-owner role/change approval, and recovery-witness restore acceptance.

## Required tests

Test reader/editor/admin/unauthorized access, search, links, attachments, revision visibility, public boundary, representative export, backup, restore, and emergency fallback.

## Backup and rollback

Back up database, `.env`/`APP_KEY`, uploads/attachments, and themes when used. Preserve source documents during migration; roll back by freezing edits and reconciling changed pages to the prior store.

## Expert review

Use safety, facilities, accessibility, HR, privacy, or legal experts for relevant procedures and a BookStack/database operator for recovery. All runtime behavior is untested.
