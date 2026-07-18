# Paperless-ngx coworking document skill

## Coworking purpose

Digitize and retrieve an approved low-risk set of coworking supplier documents while retaining originals, validating OCR/metadata, restricting access, and proving export/import recovery.

## Allowed automation

Ingest approved files, run OCR, create thumbnails/archive files, suggest or apply low-risk reviewed metadata, detect exact duplicates, run sanity checks, and alert failed tasks.

## Prohibited decisions

Do not destroy originals, decide legal importance/retention, process member mail unattended, approve payments, infer identity, grant permissions, delete uncertain duplicates, or treat OCR/automatic matching as authoritative.

## Source verification

Use current official Paperless-ngx setup, administration, exporter/importer, advanced usage, release notes, repository, and license. Record exact versions and unresolved environment behavior.

## Data boundaries

Use 20 approved historical supplier invoices and synthetic access users. Exclude member mail, contracts, identity/health data, credentials, door codes, and card/payment credentials; classify OCR, thumbnails, metadata, logs, exports, and backups like sources.

## Human approvals

Document/finance owners approve scope and metadata; privacy/records owners approve retention/access; intake staff quality-check every page; technical operations approve hosting/recovery; an independent reviewer validates denial and restore.

## Required tests

Test all 20 page/image counts, OCR samples, metadata, duplicate handling, search, correction, unauthorized denial/download, export inventory, sanity checker, and clean empty matching-version import with permissions revalidated.

## Backup and rollback

Pause intake, export documents/metadata, back up database/media/secret-free config and versions, retain originals, and roll back by restoring the prior pinned application plus pre-change state before reconciling held intake.

## Expert review

Require records/legal/privacy expertise for member mail, regulated retention, legal hold, or original destruction; security expertise for exposure/SSO/hooks; and database/storage/Paperless expertise for large migrations, corruption, or major upgrades.
