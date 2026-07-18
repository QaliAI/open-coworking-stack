---
title: Postal coworking evaluation stub
tool_id: postal
guide_status: stub
verified_on: 2026-07-17
---

# Postal coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Postal is an OSI-approved `MIT` self-hosted application-mail delivery platform. The catalog restricts it to expert teams because IP reputation, warm-up, bounce handling, legal sending requirements, and compliance dominate cost. It holds messages, server endpoints, webhooks, and personal data.

Sources reviewed **2026-07-17**: [documentation/homepage](https://docs.postalserver.io/) and [repository](https://github.com/postalserver/postal).

## Evaluation questions

- Why is a managed transactional email provider unsuitable?
- Who owns IP/domain reputation, SPF/DKIM/DMARC, bounces, abuse, and on-call response?
- How are message content, webhooks, logs, and retention protected?
- What fallback sends critical member messages during outage or blocking?

## Smallest experiment

Only after domain-authentication expertise is established, send transactional mail from one staging app to internal addresses. Test bounce/failure handling and never use a member list.

## Risks

- Severe sender reputation and deliverability failure
- Personal message content, webhook, and abuse exposure
- Expert maintenance and legal sending obligations

## TODO before a full guide

- [ ] Document the case against managed delivery
- [ ] Verify current DNS, reputation, webhook, and backup docs
- [ ] Test failures, queue recovery, export, and clean restore
- [ ] Define abuse, retention, incident, and fallback processes
