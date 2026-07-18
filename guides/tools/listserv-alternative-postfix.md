---
title: Postfix coworking evaluation stub
tool_id: listserv-alternative-postfix
guide_status: stub
verified_on: 2026-07-17
---

# Postfix coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Postfix is a mail transfer agent, not a full mailbox or member-email product. The catalog lists `IPL-1.0` while warning that package licenses can vary and must be verified for the installed distribution package. It is a self-hosted building block holding mail queues, logs, and personal data.

Sources reviewed **2026-07-17**: [homepage](http://www.postfix.org/), [repository mirror](https://github.com/vdukhovni/postfix), and [documentation](http://www.postfix.org/documentation.html).

## Evaluation questions

- Why is a raw MTA needed instead of a maintained mail stack or managed provider?
- Which exact package/license will be installed?
- Who owns open-relay prevention, deliverability, queues, abuse, and on-call response?
- How will queued mail and logs be protected, retained, and recovered?

## Smallest experiment

Use Postfix only inside a maintained documented stack unless an experienced mail administrator owns it. In a lab, verify it cannot relay unauthorized mail and keep all messages internal.

## Risks

- Open-relay, spam, reputation, and abuse exposure
- Complex deliverability and personal data in queues/logs
- Package-specific license and operational scope uncertainty

## TODO before a full guide

- [ ] Verify exact package source and license
- [ ] Document mail architecture, DNS auth, abuse, and escalation
- [ ] Test relay restrictions, queue recovery, logs, and rollback
- [ ] Compare managed mail/maintained stack alternatives
