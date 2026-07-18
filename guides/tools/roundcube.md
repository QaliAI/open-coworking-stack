---
title: Roundcube coworking evaluation stub
tool_id: roundcube
guide_status: stub
verified_on: 2026-07-17
---

# Roundcube coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Roundcube is an OSI-approved `GPL-3.0-or-later` self-hosted webmail client. It requires an existing IMAP backend and is not a complete mail service. It accesses mail over IMAP and stores user preferences; personal data is involved. Plugin security and session hardening remain operator responsibilities.

Sources reviewed **2026-07-17**: [homepage](https://roundcube.net/), [repository](https://github.com/roundcube/roundcubemail), and [wiki](https://github.com/roundcube/roundcubemail/wiki).

## Evaluation questions

- Why is webmail needed in addition to the existing mailbox provider/client?
- Which IMAP/SMTP backend and authentication controls are authoritative?
- Are required 2FA or other plugins maintained and licensed appropriately?
- What preferences/configuration need backup when mail remains on IMAP?

## Smallest experiment

Only after test IMAP mailboxes exist, deploy Roundcube for two staff test accounts and evaluate session security, logout, attachments, and any officially documented MFA option.

## Risks

- Session, plugin, attachment, and credential exposure
- Dependence on a separately operated mail backend
- False assumption that backing up Roundcube backs up mail

## TODO before a full guide

- [ ] Threat-model web, session, plugins, IMAP/SMTP, and admin access
- [ ] Verify current authentication/MFA and update guidance
- [ ] Test preference/config backup and clean restore
- [ ] Document mailbox backup, fallback client, and offboarding separately
