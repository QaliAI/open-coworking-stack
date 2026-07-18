---
title: Appwrite coworking evaluation stub
tool_id: appwrite
guide_status: stub
verified_on: 2026-07-17
---

# Appwrite coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Appwrite supplies authentication, databases, storage, and functions for custom apps. The catalog limits the coworking case to technical teams building small internal tools. It is OSI-approved `BSD-3-Clause`, available self-hosted or as freemium managed SaaS. It may hold users, documents, files, function logs, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://appwrite.io/), [repository](https://github.com/appwrite/appwrite), [documentation](https://appwrite.io/docs), and [pricing](https://appwrite.io/pricing).

## Evaluation questions

- Is a custom application justified over an existing form/workflow tool?
- Who owns application security, schema changes, and multi-service operations?
- Can users, documents, files, and auth data be exported and restored?
- Which cloud or self-host features and limits apply now?

## Smallest experiment

Following official docs, deploy locally and build a toy authenticated locker-request form with synthetic users. Test denied access and export/recovery before collecting member data.

## Risks

- Custom code and security configuration become long-term obligations
- Personal data and function logs may expose request details
- Platform/API dependence and cloud price limits are unverified

## TODO before a full guide

- [ ] Threat-model auth, storage, functions, and administrator access
- [ ] Verify backup/export/restore for every used service
- [ ] Define manual locker-request fallback and data retention
- [ ] Re-check current pricing, limits, and support
