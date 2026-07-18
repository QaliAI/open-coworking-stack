---
title: Kanidm coworking evaluation stub
tool_id: kanidm
guide_status: stub
verified_on: 2026-07-17
---

# Kanidm coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Kanidm is an emerging self-hosted identity platform, OSI-approved under `MPL-2.0`. The catalog positions it for advanced staff identity experiments and warns that a newer ecosystem means more DIY integration. It holds identities, credentials, groups, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://kanidm.com/), [repository](https://github.com/kanidm/kanidm), and [documentation](https://kanidm.github.io/kanidm/stable/).

## Evaluation questions

- Is ecosystem maturity acceptable for the selected staff application?
- Which identity protocols and app versions are officially supported now?
- How are recovery, backup, export, upgrades, and break-glass handled?
- Who has the expertise to operate credentials and groups safely?

## Smallest experiment

Deploy only in a lab, create two administrator/test users, and connect one non-critical app via documented OIDC. Test disablement, outage fallback, backup, and restore.

## Risks

- Emerging ecosystem and migration effort
- Central identity outage or configuration error
- Credential, backup, and integration maturity remain unverified

## TODO before a full guide

- [ ] Verify current stable-version and protocol documentation
- [ ] Threat-model administration, recovery, and app trust
- [ ] Test identity/group export and clean restore
- [ ] Define break-glass and rollback to local app login
