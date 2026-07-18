---
title: NocoDB coworking evaluation stub
tool_id: nocodb
guide_status: stub
verified_on: 2026-07-17
---

# NocoDB coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

NocoDB presents SQL data through a spreadsheet-style UI and APIs. It is self-hosted OSI-approved `AGPL-3.0-only`; enterprise offerings may exist. The catalog warns about live database edits and permissions. It may expose connected database contents, view metadata, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://nocodb.com/), [repository](https://github.com/nocodb/nocodb), and [documentation](https://docs.nocodb.com/).

## Evaluation questions

- Why does staff need database access rather than a purpose-built workflow?
- Can the pilot use sanitized staging and read-only views?
- How are rows, fields, writes, API tokens, and exports restricted?
- Which metadata/configuration must be backed up beyond the source database?

## Smallest experiment

Connect NocoDB to staging Postgres with non-production data and grant one operations user filtered views. Test denied fields, attempted writes, export, and configuration recovery.

## Risks

- Accidental live database edits or overbroad row exposure
- Personal data export through a convenient UI/API
- Source/configuration coupling and unverified enterprise boundaries

## TODO before a full guide

- [ ] Threat-model database, network, API, roles, and exports
- [ ] Verify read-only and row/field controls for the chosen version
- [ ] Test metadata/config backup and clean restore
- [ ] Define the source of truth and manual workflow fallback
