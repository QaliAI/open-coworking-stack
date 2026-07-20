---
title: Paperless-ngx vs Docspell
description: Compare self-hosted document ingestion, filing, and retrieval.
page_classification: Due-diligence worksheet
---

## Shared dimensions

| Tool                                               | Evaluation lane                             | Evidence status           |
| -------------------------------------------------- | ------------------------------------------- | ------------------------- |
| [Paperless-ngx](../tools/generated/paperless-ngx/) | Self-hosted document archive and processing | Partial                   |
| Docspell                                           | Self-hosted document organizer              | Partial; no catalog entry |

Compare ingestion, OCR, metadata, correspondence, tagging, search, permissions, retention, bulk
export, backup, and recovery with representative documents.

## Operator profiles

Both suit operators with technical ownership and a clear paper/document archive problem. Evaluate
separately from transactional file storage, contract execution, and statutory accounting systems.

## Task coverage

They can augment scanning, OCR, classification, filing, and retrieval of approved document classes.
They do not decide legal retention, authenticity, authorization, or whether a document can be
destroyed.

## Human work remaining

People inspect OCR and classifications, correct metadata, restrict sensitive records, manage legal
holds, approve destruction, answer access requests, and verify backup completeness.

## Technical difficulty

Moderate-to-high: storage, database, OCR workers, email/scanner ingestion, permissions, monitoring,
backups, upgrades, and capacity planning all matter.

## True-cost categories

Count compute, database, primary and backup storage, OCR, scanning devices, migration, metadata
cleanup, identity, monitoring, support, retention review, and recovery drills. There are no exact
price or free-limit claims here.

## Portability

Require originals plus metadata, text/OCR, relationships, correspondents, tags, custom fields,
checksums, permissions context, and a documented reconstruction process. Test bulk export and import.

## Integrations and verification caveat

Email, scanner, filesystem, office, API, webhook, and identity integrations are `partial` until
current format support, direction, authentication, duplicate handling, retries, and edition are
verified against official docs.

## Security

Documents may contain identity, financial, contract, access, or employee data. Segment access,
encrypt transport and backups, restrict ingestion, scan untrusted files, log administration, patch,
and test both restore and permanent deletion.

## Licensing

Both are self-hosted open-source projects under their current repository licenses. Verify current
license files, dependencies, OCR components, and any third-party service terms.

## Maintenance

Maintain ingestion queues, OCR quality, duplicate handling, metadata rules, storage growth,
permissions, upgrades, backups, restore tests, retention jobs, and scanner/email credentials.

## Scenario recommendations

Pilot several real document classes, poor scans, duplicates, multi-page files, restricted records,
search, correction, export, restore, and deletion. Select on retrieval and recovery quality.

## Do not use when

Do not treat OCR as authoritative, store documents without retention owners, or use the archive as a
contract-signing, accounting, or records-compliance system without separate controls.

## Verification

Verified on **2026-07-18**. Format, integration, scale, and current license details remain `partial`
or `not established` until validated for the proposed deployment.

## Official sources

- [Paperless-ngx](https://docs.paperless-ngx.com/) and [repository](https://github.com/paperless-ngx/paperless-ngx)
- [Docspell](https://docspell.org/) and [Docspell documentation](https://docspell.org/docs/)
