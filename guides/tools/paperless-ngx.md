---
title: Paperless-ngx for coworking documents
tool_id: paperless-ngx
guide_status: full
verified_on: 2026-07-18
---

# Paperless-ngx for coworking documents

This guide scopes Paperless-ngx to 20 historical supplier invoices in isolated staging with retained originals, human quality checks, restricted access, and a clean matching-version export/import. It does not approve member mail, contracts, original destruction, or legal-record claims. No runtime was tested.

## 1. Coworking outcome

Make approved back-office documents faster to retrieve with complete images and reviewed metadata. Paperless-ngx augments ingestion, OCR, organization, and search; it does not interpret legal mail, approve payment, or replace records/finance judgment.

## 2. Pilot scope

Ingest 20 non-current approved supplier invoices, retain every original, quality-check every page/OCR sample/metadata record, test allowed and denied users, export and run the sanity checker, then import into a completely empty instance at the matching version.

## 3. Fit

**Good fit:** a technically operated internal document archive with approved scope/taxonomy, access segregation, controlled intake, retention ownership, encrypted storage/backups, quality review, and restore drills.

## 4. Non-fit and alternatives

**Poor fit:** unattended virtual mail, regulated/legal archive assumptions, member scans without review, original destruction before proof/advice, payment processing, or no Linux/container/database/storage ownership. Retain the controlled paper/file process or use a professionally managed records/mailroom service where chain of custody requires it.

## 5. Coworking use cases

- Search historical supplier invoices and operations documents.
- Preserve originals plus generated searchable archive/OCR representations.
- Apply finance-owned correspondents, document types, tags, and dates.
- Export documents/metadata for backup and eventual migration.

Member mail, contracts, identity/health records, card credentials, and unattended email/scanner intake are excluded.

## 6. Tasks reduced or augmented

Paperless-ngx can reduce manual OCR, thumbnail/archive creation, document searching, and some metadata matching. It cannot choose admissible scope, validate every scan/OCR/label, decide retention/destruction, resolve uncertain duplicates, grant access, or interpret records.

## 7. Human decisions and approvals

Document/finance owners approve scope/taxonomy and all 20 metadata records; intake staff quality-check pages; privacy/records owners approve access/retention; technical operations owns hosting/recovery; and an independent reviewer verifies denied access and restored retrieval. Automatic matching remains reviewable.

## 8. Owners and RACI

Name accountable document and privacy/records owners plus responsible finance quality, intake/chain-of-custody, application, database/Redis/storage, security, backup/recovery, and independent test owners. Daily users should not operate as the all-access superuser.

## 9. Prerequisites

Select/retain 20 originals, record document/page counts, define chain of custody, taxonomy, access matrix, retention/destruction prohibition, OCR language/timezone, pinned deployment/database, storage growth, TLS/secrets/monitoring, export/backup target, clean staging, recovery objective, and fallback index.

## 10. Skills and effort boundary

The pilot needs container/Linux, PostgreSQL or chosen database, Redis, storage/filesystem, TLS/proxy, secrets, OCR, permissions/privacy/records, scanner/intake, backup/import, and quality-control skills. Scanning/review and storage growth can dominate setup; no time or sizing claim is verified.

## 11. Deployment choice

Official docs describe Docker, an installation script, and advanced bare-metal routes; Docker is recommended there for most users. Use a pinned official route in isolated staging. This guide does not validate the repository's separate Compose starter as production or any hosted provider.

## 12. Architecture and dependencies

Map TLS proxy, Paperless webserver/consumer/workers/scheduler, supported database, Redis, persistent data/media/consume/export paths, OCR tooling/language, users/groups/object permissions, monitoring, encrypted host/filesystem, offsite backup, and retained originals. Restrict consume/export paths from ordinary users.

## 13. License and edition boundary

Paperless-ngx is OSI-approved open source under `GPL-3.0-only`. Re-check the repository license and licenses/terms for database, Redis, OCR/document processors, container runtime, scanner tools, host, storage, and support. The project does not certify the operator's legal archive.

## 14. Total cost boundary

Annual true cost = compute/database/Redis + media/export/backup storage + OCR CPU + TLS/monitoring + scanner/intake + setup/migration + tagging/quality labor + privacy/records review + updates/restores/incidents + original storage/disposal + exit. Model pages, copies, retention, review minutes, and re-OCR/reindex; free software is not a free archive.

## 15. Data map

| Data                            | Source              | Purpose                | Authority                      | Exit artifact                      |
| ------------------------------- | ------------------- | ---------------------- | ------------------------------ | ---------------------------------- |
| Original invoice                | Retained paper/file | Preservation/retrieval | Original plus approved archive | Exported original                  |
| Archive/OCR text                | Generated           | Search/readability     | Derived, human-reviewed        | Archive and metadata               |
| Tags/correspondents/types/dates | Finance taxonomy    | Filing                 | Taxonomy owner                 | Manifest/JSON and dictionary       |
| Users/groups/object permissions | Admin process       | Access                 | Access register                | Role/object mapping                |
| Database/index/thumbnails/logs  | Application         | Operation              | Technical state                | Backup/export or regeneration plan |

Invoices can contain personal/financial identifiers; apply source classification to every derived copy.

## 16. Privacy and retention

Define retention by document class with qualified records/privacy/legal review; separate paper-original, application, export, and backup expiry; minimize users and searchable OCR exposure; and provide correction/deletion handling. Do not destroy originals because search works or presume deletion immediately removes retained backups.

## 17. Security baseline

Use TLS, named least-privilege accounts, a separate daily account from superuser, random protected application secret, secured database/Redis, restricted consume/media/export paths, supported updates, encrypted host/filesystem/backups, and monitored admin/auth/task activity. Official docs state application-level document encryption was removed; do not claim it.

## 18. Compliance and expert review

Obtain records/legal/privacy expertise before member mail, contracts, identity data, regulated retention, legal hold, evidentiary claims, or original destruction; security review before internet exposure, SSO, email intake, or consume hooks; and database/storage/Paperless expertise for corruption, major upgrades, or archives too large for manual reconciliation.

## 19. Integration boundary

No scanner, email, accounting, SSO, consume hook, or mailroom integration is catalog-verified. Pre/post-consume scripts can expose paths/logs and require code/security review. Keep member-mail/email intake prohibited in pilot; manually select documents and reconcile finance metadata.

## 20. Configuration baseline

Record exact app/database/Redis/container versions, URL/TLS, secret references, database/Redis endpoints, data/media/consume/export paths, OCR language/timezone/mode, taxonomy, users/groups/object permissions, superusers, filename/storage rules, intake exclusions, task monitoring, retention, exporter options, backup target, and fallback. Store no secret values.

## 21. Smallest useful experiment

Ingest 20 historical supplier invoices, retain originals, human-review images/OCR/metadata, test a synthetic duplicate and access denial, export/reconcile, run the sanity checker, and import into an empty matching-version instance.

## 22. Implementation sequence

1. Approve 20 documents, owners, taxonomy, access, retention, and exclusions.
2. Deploy pinned isolated staging with protected storage/secrets.
3. Create setup superuser plus separate daily finance and denied-test users.
4. Ingest one document and validate, then process 19 with human QC.
5. Test search, correction, duplicate handling, permissions, download denial, and synthetic deletion.
6. Pause intake; export, back up, run sanity checker, and import cleanly.
7. Obtain finance/privacy-records/document/technical approval.

## 23. Migration and rollout

Copy approved documents and keep originals/prior archive authoritative through pilot. Import one class/batch at a time; reconcile counts/pages/metadata/access; hold intake during cutovers; and never expand to member mail or destroy originals without a separately approved expert-reviewed workflow.

## 24. Required test plan

Test 20 document/page counts, visual completeness, agreed OCR searches, metadata, correction, exact/synthetic duplicate handling, ordinary/superuser separation, denied UI/search/download, consume failure, storage/capacity alert, export file/manifest counts, sanity checker, empty matching-version import, regenerated tokens/secrets, permissions, search, and elapsed recovery.

## 25. Acceptance criteria

All 20 originals/pages are present and quality-approved; sample OCR/search and metadata match; uncertain duplicates remain safe; unauthorized user cannot view/search/download; exporter inventory reconciles; sanity findings are resolved/explained; empty matching-version import restores documents/metadata/search/access; and owners sign. Any missing file or permission leak blocks expansion.

## 26. Success metrics

Track pages/documents processed, QC defects and correction time, OCR search sample success, duplicate exceptions, unauthorized-access defects, failed tasks, storage growth per document, retrieval time, export/import completeness, restore time, staff labor, and true cost. OCR confidence alone is not archive quality.

## 27. Monitoring and alerting

Monitor web/database/Redis/worker/scheduler health, failed consumption tasks, consume exceptions, disk/inodes, backup/export age, certificate expiry, authentication/admin changes, sanity-check findings, and release/security notices. Route document exceptions to intake and service/recovery alerts to technical owners.

## 28. Operating cadence

Review intake exceptions/QC promptly; storage/tasks/backups frequently enough for the recovery objective; permissions, users, taxonomy, and retention monthly; releases and recovery artifacts before upgrades; and witnessed exporter/importer plus sanity drills on an approved cadence and after storage/database/version changes.

## 29. Failure modes and response

Plan for partial scan, wrong OCR/tag, duplicate ambiguity, unauthorized access, consume-folder exposure, malicious document processing, worker/Redis/database/storage outage, full disk, corrupt/missing media, failed exporter/importer, version mismatch, and lost secret. Stop intake/destructive cleanup, retain originals, restrict access on exposure, preserve evidence, and escalate to named experts.

## 30. Backup procedure

Pause/control consumption; run the official document exporter to a restricted target; record exact version/options and reconcile documents, originals, selected archive/thumbnails, manifest/metadata; back up database, media/data, secret-free configuration, and version pins offsite; then run the sanity checker. Official docs say API tokens are not exported; protect any export passphrase separately.

## 31. Restore drill

Create a completely empty matching-version instance, import the exporter artifact, recreate excluded tokens/secrets separately, and verify all 20 originals/pages, archive/OCR, thumbnails, metadata, search, users/object permissions, denied download, and sanity checker. Official docs warn cross-version import must not be assumed safe. No runtime evidence exists yet.

## 32. Upgrade, rollback, and exit

Pin releases, read notes/dependency requirements, pause intake, export/back up, test migrations and full acceptance in staging, and avoid combining app/database/storage/identity changes. Roll back by restoring prior pinned app plus pre-change database/media/configuration, then reconcile held intake. Exit by freezing intake, exporting/reconciling originals/archive/metadata, mapping taxonomy/access, validating destination retrieval/denial/retention, revoking accounts/tokens, and deleting old copies only after approved expiry.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-18**: [documentation](https://docs.paperless-ngx.com/), official repository copies of [setup](https://docs.paperless-ngx.com/setup/), [administration/exporter/importer/backups/updates](https://docs.paperless-ngx.com/administration/), [advanced usage/matching](https://docs.paperless-ngx.com/advanced_usage/), and the [repository/license](https://github.com/paperless-ngx/paperless-ngx).

Evidence is documentation review only. Untested: installation/runtime, document processing security, OCR/metadata accuracy, permissions, intake/scanners/email/hooks/SSO, storage growth, exporter/importer/sanity results, backup/restore, version/database upgrades, legal retention/destruction, support, performance, true cost, and exit fidelity. Treat each as an open gate.
