---
title: Directus coworking evaluation stub
tool_id: directus
guide_status: stub
verified_on: 2026-07-17
---

# Directus coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Directus wraps SQL data with APIs and an admin application. It is **source-available** under Business Source License 1.1, not OSI open source while under BSL. The catalog suggests custom member portals or content APIs, with careful license review. It may expose connected business data, files, users, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://directus.io/), [repository](https://github.com/directus/directus), [documentation](https://docs.directus.io/), and [pricing](https://directus.io/pricing).

## Evaluation questions

- Do current BSL terms permit the exact deployment and service model?
- Can a read-only content need avoid exposing operational/member tables?
- How are API roles, fields, files, logs, and tokens restricted?
- Can schema, data, configuration, and assets exit cleanly?

## Smallest experiment

Prototype a read-only marketing-content API from a staging database with synthetic content. Deny access to excluded fields and test export/restore; do not connect production member data.

## Risks

- BSL compliance and feature/price changes
- API authorization mistakes exposing business data
- Platform configuration and file-export portability

## TODO before a full guide

- [ ] Obtain documented license review for intended use
- [ ] Threat-model API, admin, database, files, and tokens
- [ ] Test schema/data/config export and clean restore
- [ ] Re-check cloud pricing, conversion terms, and support
