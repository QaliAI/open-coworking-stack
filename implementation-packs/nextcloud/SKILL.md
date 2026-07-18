# Safe Nextcloud Coworking Collaboration

## Coworking purpose

Coordinate non-sensitive staff SOPs and controlled document handoffs while maintaining clear owners, access boundaries, neutral exports, and tested recovery.

## Allowed automation

- Prepare folder/access inventories and compare groups with an approved staff roster.
- Remind human owners about expiring shares, stale access reviews, storage, or backup drills.
- Verify hashes and report missing/changed pilot fixtures.
- Draft, but never execute, account/share/app changes for approval.

## Prohibited decisions

- Do not grant/revoke access, classify files, approve external shares, install apps, delete records, or resolve privacy/legal holds autonomously.
- Do not import member archives, payment data, door credentials, identity documents, health data, or dispute notes.
- Do not treat Nextcloud as a coworking CRM, billing, or access-control authority.

## Source verification

Use the administration manual matching the deployed server version and official app/client docs matching exact versions. Verify database/storage/identity services separately. An app-store listing alone is insufficient.

## Data boundaries

Pilot only non-sensitive SOP fixtures. Map files, versions, shares, accounts/groups, calendars/contacts/forms if later enabled, logs, database, configuration, apps/themes, storage, and backups. The staff roster remains authoritative for access.

## Human approvals

Information owner approves classification/folders/shares/retention; access reviewer approves groups/leavers; privacy owner approves personal data and deletion; administrator approves apps, infrastructure, backup, restore, updates, and rollback.

## Required tests

Test create/edit/sync/rename, allowed and denied access, leaver closure, share expiry if used, storage and database outage, sync conflict, app disablement, neutral file export, coordinated backup, and isolated restore.

## Backup and rollback

Follow version-matched official guidance for consistent config, database, data, and applicable custom app/theme state. Restore as a matched set to isolation. Do not assume downgrade support; rollback a failed upgrade by restoring complete pre-change state with the prior supported version.

## Expert review

Privacy/legal and records owners review retention, legal hold, sharing, requests, and deletion. Security/storage specialists review identity, encryption/key custody, malware controls, backup isolation, capacity, and recovery architecture.
