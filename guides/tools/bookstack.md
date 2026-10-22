---
title: BookStack for coworking SOPs
tool_id: bookstack
guide_status: full
verified_on: 2026-07-17
---

# BookStack for coworking SOPs

This guide scopes BookStack to five owned coworking procedures in a private pilot. It does not prove that content, permissions, exports, backups, or upgrades have been tested in this repository.

## 1. Coworking outcome

Make opening/closing, emergency, member-service, and multi-site procedures easier for authorized staff to find and review. BookStack augments publishing and onboarding; it does not validate a procedure or replace trained staff judgment.

## 2. Pilot scope

Create Ops, Community, and Sales shelves; migrate five current SOPs including opening and emergency pages; attach owners and review dates in page content; and test private access with a non-admin user. Keep contracts, payment records, HR cases, and uncontrolled public publishing out.

## 3. Fit

**Good fit:** a team replacing scattered living documents with searchable, permissioned pages and a real ownership/review cadence.

## 4. Non-fit and alternatives

**Poor fit:** a general file drive, contract repository, transactional workflow, or public knowledge base launched without content classification. Keep authoritative source documents during the pilot and compare an existing suite's knowledge feature if another service would reduce operations safely.

## 5. Coworking use cases

- Opening, closing, visitor, incident, and facilities runbooks.
- Approved member FAQs separated from staff-only procedures.
- Multi-site templates with local owner and variation notes.

Safety pages require qualified owner review and an offline/emergency fallback.

## 6. Tasks reduced or augmented

BookStack can reduce searching across scattered documents, duplicate onboarding explanations, and accidental use of old links. It cannot determine whether instructions are lawful, safe, current, accessible, or suitable for an incident.

## 7. Human decisions and approvals

Content owners draft and attest accuracy; a knowledge owner publishes/archives; technical staff administer access and recovery; qualified safety/privacy reviewers approve relevant pages. A person approves public visibility, emergency instructions, retention, and destructive archival.

## 8. Owners and RACI

Name an accountable knowledge owner, technical owner, one owner and backup per critical page, shelf-level access approvers, privacy reviewer, and recovery witness. Authors should not silently self-approve safety-critical changes.

## 9. Prerequisites

Inventory source documents and authoritative versions, content classes, shelf/book design, role matrix, attachment policy, review cadence, emergency fallback, canonical URL/TLS, email/auth choice, database/storage, and export/restore expectations.

## 10. Skills and effort boundary

The pilot needs information architecture, content governance, access-control testing, Linux/web/database administration, TLS, and restore skills. The catalog's `1-3 days` estimate is unverified and excludes content cleanup, review, migration reconciliation, and training.

## 11. Deployment choice

The catalog verifies self-hosting only. Follow the [official installation documentation](https://www.bookstackapp.com/docs/admin/installation/) for a supported environment or separately assess a container image/provider. This repository does not verify a Compose distribution, host size, or managed offering.

## 12. Architecture and dependencies

Map web server/PHP runtime, database, uploaded images in `public/uploads`, attachments in `storage/uploads`, `.env`, active themes, mail, authentication, reverse proxy/TLS, backups, and monitoring. Confirm paths for the actual installation instead of copying assumptions from another packaging method.

## 13. License and edition boundary

The catalog classifies BookStack as OSI-approved `MIT`. Re-check the [official source repository](https://github.com/BookStackApp/BookStack) and licenses/terms for images, themes, authentication providers, PDF tooling, storage, and support; upstream projects are not relicensed by this guide.

## 14. Total cost boundary

Record software, compute, database/storage, TLS/DNS/email, backup, monitoring, information architecture, migration, author/reviewer time, training, updates, recovery, customizations, and support. Do not assume a small server makes content governance or recovery free.

## 15. Data map

| Data                        | Source                  | BookStack use                        | Exit destination                         |
| --------------------------- | ----------------------- | ------------------------------------ | ---------------------------------------- |
| Approved SOP text           | Authoritative documents | Pages/chapters                       | Readable export plus source register     |
| Images and attachments      | Approved files          | Supporting material                  | Independent file archive with mapping    |
| Accounts and roles          | Staff roster            | Access control                       | Offboarding/access register              |
| Revisions/comments/activity | Staff actions           | Collaboration/audit context          | Retention decision and selected evidence |
| Configuration and APP_KEY   | Technical owner         | Instance behavior/encrypted features | Protected rebuild material               |

Payment data is excluded.

## 16. Privacy and retention

Keep member/employee personal data out unless necessary and approved, classify every shelf, minimize attachments, and define retention for accounts, drafts, revisions, comments, and logs. Public content must be reviewed for personal or security-sensitive details. Residency and legal requirements remain unverified.

## 17. Security baseline

Use TLS, individual accounts, least-privilege roles, restricted administration, supported updates, protected `.env`/`APP_KEY`, reviewed uploads, and tested private permissions. Restrict content scripting, external fetches, webhooks, iframe sources, and custom themes according to current official security guidance and actual need.

## 18. Compliance and expert review

Emergency, accessibility, building, employment, privacy, and contractual procedures may need qualified legal, safety, HR, facilities, or accessibility review. BookStack publication is not that review; record reviewer, scope, date, and next review on critical content.

## 19. Integration boundary

No authentication, webhook, email, storage, or publishing integration is catalog-verified. Review both upstreams, scopes/claims, failure behavior, data transferred, secret owner, and fallback. Test with a non-admin account; an admin view is not permission evidence.

## 20. Configuration baseline

Record exact version, canonical `APP_URL`, non-secret `.env` names, authentication mode, registration/public access state, role matrix, shelves/books, attachment limits/types, mail/webhook use, locale, revision/content policies, active theme, backup paths, and owner/review metadata convention.

## 21. Smallest useful experiment

Install BookStack from [official guidance](https://www.bookstackapp.com/docs/), create three shelves, and migrate five owned SOPs. Search for an opening task, open the emergency page, retrieve one attachment, and prove an unauthorized user cannot see the private shelf.

## 22. Implementation sequence

1. Approve owners, five source documents, classification, and shelf design.
2. Record authoritative versions and keep them available read-only.
3. Deploy private staging with TLS and restricted administration.
4. Create least-privilege roles and test before migration.
5. Migrate content with owner/reviewer/review-date blocks and attachment checks.
6. Run usability, permission, export, backup, and clean-restore tests.
7. Publish only after content and technical sign-off.

## 23. Migration and rollout

Use a page register mapping each source to destination, owner, revision, visibility, and acceptance. Freeze or reconcile edits during migration, redirect users only after acceptance, and roll out one shelf at a time. Never migrate stale content merely to increase page count.

## 24. Required test plan

Test admin/editor/reader/unauthorized access, inherited and custom permissions, search, page links, revision visibility, comments if enabled, image/attachment upload and download, public access disabled/enabled as intended, email/auth failure, representative exports, backup, clean restore, and emergency fallback.

## 25. Acceptance criteria

All five pages match approved sources, have owner/reviewer/review date, are findable by pilot staff, expose no unintended content to unauthorized users, preserve required attachments, export readably, and restore with roles and access intact. Critical inaccuracies or permission leaks block launch.

## 26. Success metrics

Track pilot task-find success, time to find the correct page, stale-page count, review completion, permission defects, broken links/attachments, staff correction reports, and restore time. Page views are not evidence that procedures are correct.

## 27. Monitoring and alerting

Monitor availability, TLS expiry, application/database errors, storage growth, failed mail/auth, backup status, unsupported version exposure, and critical-page review due dates. Route technical alerts and content-expiry reminders to different named owners where appropriate.

## 28. Operating cadence

Review critical pages on their approved cadence and after incidents/process changes; reconcile leavers and roles; triage correction reports; archive superseded pages; patch supported releases; inspect storage; and run export/restore drills. Preserve a readable emergency copy where system availability is not assured.

## 29. Failure modes and response

Plan for wrong permissions, stale/unsafe procedure, broken authentication, unavailable database, missing upload, changed URL, lost `APP_KEY`, malicious editor content, bad theme/webhook, and failed migration. Disable public access or freeze edits when classification is uncertain; use approved offline procedures during outages.

## 30. Backup procedure

[Official backup guidance](https://www.bookstackapp.com/docs/admin/backup-restore/) states there is no built-in backup and identifies the database plus `.env`, `public/uploads`, `storage/uploads`, and `themes` when used. Create consistent database and file copies, protect `APP_KEY` and credentials, store copies separately, and record versions and hashes/inventory.

## 31. Restore drill

Build a clean compatible instance, restore the database and files in the documented order, preserve the old `APP_KEY`, adjust `APP_URL` and run the official URL update command if the test address changes, then verify five pages, attachments, search, revisions, roles, and unauthorized denial. No runtime restore evidence exists here.

## 32. Upgrade, rollback, and exit

Read all applicable [version-specific update instructions](https://www.bookstackapp.com/docs/admin/updates/), back up database/uploads, stage the target release, run required migrations, and regression-test permissions, search, auth, mail, exports, themes, and critical pages. Rollback means restoring the previous code and pre-migration state, not guessing at database downgrade. Exit by freezing edits, exporting/reconciling changed pages and attachments, validating readability and permissions in the replacement, redirecting staff, and securely retiring accounts/backups.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-17**: [homepage](https://www.bookstackapp.com/), [repository](https://github.com/BookStackApp/BookStack), [documentation](https://www.bookstackapp.com/docs/), [backup/restore](https://www.bookstackapp.com/docs/admin/backup-restore/), [updates](https://www.bookstackapp.com/docs/admin/updates/), and [security](https://www.bookstackapp.com/docs/admin/security/).

Evidence is documentation review only. Untested: installation/package, permissions, auth connectors, content migration, search, attachment limits, exports/imports, PDF, email/webhooks, backup/restore, upgrade/rollback, sizing, themes, support, residency, and compliance. Keep each as an open acceptance gate.
