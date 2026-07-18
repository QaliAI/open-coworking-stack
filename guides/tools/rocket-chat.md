---
title: Rocket.Chat coworking evaluation stub
tool_id: rocket-chat
guide_status: stub
verified_on: 2026-07-17
---

# Rocket.Chat coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Rocket.Chat is an **open-core** messaging and omnichannel platform: the catalog records an `MIT` core with commercial editions. It can be self-hosted or managed and may hold messages, files, users, and personal data. Edition licensing and federation complexity require review.

Sources reviewed **2026-07-17**: [homepage](https://www.rocket.chat/), [repository](https://github.com/RocketChat/Rocket.Chat), [documentation](https://docs.rocket.chat/), and [pricing](https://www.rocket.chat/pricing).

## Evaluation questions

- Is the goal staff chat, member community, or omnichannel support?
- Which needed controls belong to community versus commercial editions?
- How are message/file retention, guests, federation, and exports governed?
- What channel remains available during outage?

## Smallest experiment

Deploy a small staff-only workspace and test messaging, file sharing, permissions, retention settings, export, and restore. Do not add members or federation.

## Risks

- Edition/license and cloud/marketplace cost boundaries
- Sensitive messages/files and permission sprawl
- Federation, retention, migration, and operational complexity

## TODO before a full guide

- [ ] Verify current edition, pricing, and feature boundaries
- [ ] Define audience, retention, guest, and moderation policy
- [ ] Test message/file export and clean restore
- [ ] Document outage fallback, offboarding, and incident response
