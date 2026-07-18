---
title: mailcow coworking evaluation stub
tool_id: mailcow
guide_status: stub
verified_on: 2026-07-17
---

# mailcow coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

mailcow packages a self-hosted mail stack under OSI-approved `GPL-3.0-only`. The catalog advises most coworking operators to prefer managed email because IP reputation, backups, monitoring, spam, and abuse handling make self-hosting expensive. It holds email, contacts, DKIM keys, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://mailcow.email/), [repository](https://github.com/mailcow/mailcow-dockerized), and [documentation](https://docs.mailcow.email/).

## Evaluation questions

- What requirement rules out managed staff email?
- Who owns round-the-clock deliverability, abuse, security updates, and recovery?
- Can mailboxes, contacts, keys, and configuration migrate cleanly?
- What domain/IP/DNS and backup dependencies create lock-in?

## Smallest experiment

Prefer a managed mailbox first. If self-hosting remains justified, operate a lab domain for staff-only test mail, never member mail, and test delivery, abuse handling, export, and restore.

## Risks

- Deliverability and IP/domain reputation failure
- Sensitive mail, contacts, keys, spam, and abuse handling
- Expert operations and recovery burden

## TODO before a full guide

- [ ] Record why managed email is unsuitable
- [ ] Verify current DNS, deliverability, update, and backup docs
- [ ] Test mailbox migration/export and clean disaster restore
- [ ] Define abuse, incident, retention, and on-call ownership
