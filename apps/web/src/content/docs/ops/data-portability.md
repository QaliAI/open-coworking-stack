---
title: Coworking data and portability
description: A vendor-neutral system-of-record, sensitivity, retention, integration, and CSV export model.
---

This is an operator portability model, not a production database design or universal retention policy.
Use it to inventory which application owns each fact, minimize integrations, compare exports, and test
an exit before committing sensitive data.

## Record families

| Family                         | Canonical entities                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| Organization and inventory     | operator, location, resource, product                                                             |
| People and authority           | person, customer account, account role, staff identity                                            |
| Commercial and money           | agreement, subscription, invoice, invoice line, payment                                           |
| Operations and experience      | booking, visitor visit, access grant, service case, mail item, event, event registration, consent |
| Interchange and accountability | external identifier, audit event                                                                  |

Every entity carries `schema_version`, stable `record_id`, `source_system`, `source_record_id`, created,
updated, and deletion timestamps, legal-hold state, retention class, and highest data classification.
Email addresses and names are attributes, not stable keys.

## Data classes

- `public`: approved published location, product, or event facts.
- `internal`: configuration and operating facts not intended for public indexing.
- `personal`: contact, attendance, visitor, and consent records.
- `confidential`: contracts, invoices, support cases, and access history.
- `restricted`: identity-check state, sensitive incidents, legal holds, and exceptional access.

The baseline excludes payment-card credentials, identity-document images, biometric templates,
passwords, API keys, door-controller secrets, and private message bodies. A reference is not permission
to copy the protected payload into every system.

## Retention and authority

Use event-based classes such as prospect-last-contact, relationship-ended, financial-period-closed,
visit-ended, case-closed, consent-withdrawn, and incident-closed. The values in an implementation must
be approved for its jurisdiction, contracts, and duties. Legal holds suspend routine deletion; they do
not justify collecting unnecessary data.

For every production field, record the authoritative application, owner, approved consumers,
direction, trigger, maximum delay, conflict behavior, retry/replay policy, reconciliation, disable
switch, fallback, retention, and approver. Money stays finance-owned; active access stays
access-control-owned. Membership and booking events can request bounded access but cannot silently
grant it.

## Portable CSV bundle

A complete operator export should be a UTF-8 ZIP with `manifest.json` and one CSV per entity. Require:

- stable IDs and tombstones across repeated exports;
- RFC 4180 CSV, explicit nulls, RFC 3339 datetimes, ISO dates, decimal strings plus currency, and JSON
  arrays for multi-value cells;
- file row counts and SHA-256 checksums in the manifest;
- explicit excluded payloads and lossy transformations;
- foreign-key, invoice/payment control-total, and access-grant reconciliation;
- import into an isolated target followed by functional-owner review.

The following is intentionally fabricated and demonstrates shape only:

```csv
schema_version,record_id,source_system,source_record_id,created_at,updated_at,deleted_at,legal_hold,retention_class,data_classification,display_name,primary_email,contact_status
1.0.0,per_example_001,fixture,person-1,2026-07-01T09:00:00Z,2026-07-01T09:00:00Z,,false,active-service,personal,Alex Example,alex@example.invalid,active
```

`example.invalid` cannot receive mail. Never interpret a fabricated row, an opened spreadsheet, or a
vendor export button as migration acceptance.

## Exit test

1. Export every required entity, attachment reference, and audit/control record.
2. Validate schema, checksums, counts, relationships, currencies, dates, and deletion state.
3. Import into a clean isolated target without vendor screen scraping.
4. Reconcile material money and active access independently.
5. Have representative functional owners complete normal and exception workflows.
6. Time the procedure, record gaps and lossy fields, test rollback, then price remediation into the
   decision.
