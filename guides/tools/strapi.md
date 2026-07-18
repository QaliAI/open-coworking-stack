---
title: Strapi coworking evaluation stub
tool_id: strapi
guide_status: stub
verified_on: 2026-07-17
---

# Strapi coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Strapi is an **open-core** headless CMS: the catalog records an `MIT` core with enterprise features. It is available self-hosted and managed. The coworking case is structured marketing or resource-library content. It holds content entries, media, users, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://strapi.io/), [repository](https://github.com/strapi/strapi), [documentation](https://docs.strapi.io/), and [pricing](https://strapi.io/pricing-self-hosted).

## Evaluation questions

- Does the site require a headless CMS rather than simpler static content?
- Which roles, APIs, fields, and media are public versus private?
- Which needed features are enterprise or plugin-dependent?
- Can content types, entries, media, configuration, and code be restored and migrated?

## Smallest experiment

Model Room, Event, and Blog content types with synthetic content and deliver JSON to a staging static site. Test denied API fields and content/media export.

## Risks

- Public API or role misconfiguration exposing data
- Plugin/enterprise feature and upgrade dependency
- Custom frontend and schema migration burden

## TODO before a full guide

- [ ] Threat-model admin, API, roles, tokens, media, and frontend
- [ ] Verify current feature/pricing and plugin licenses
- [ ] Test schema/content/media backup, export, and clean restore
- [ ] Define editorial workflow and static/manual fallback
