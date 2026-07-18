---
title: Pi-hole coworking evaluation stub
tool_id: pi-hole
guide_status: stub
verified_on: 2026-07-17
---

# Pi-hole coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Pi-hole provides self-hosted DNS-level blocking under OSI-approved `EUPL-1.2`. The catalog recommends a staff-VLAN experiment before any guest use because overblocking can break member workflows and DNS logs expose client behavior. It holds DNS queries, client IPs, blocklists, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://pi-hole.net/), [repository](https://github.com/pi-hole/pi-hole), and [documentation](https://docs.pi-hole.net/).

## Evaluation questions

- Is DNS blocking needed, and is staff-only scope sufficient?
- What transparency, retention, and access apply to DNS logs?
- How will false positives and critical SaaS failures be handled immediately?
- What resolver fallback avoids a site-wide DNS outage?

## Smallest experiment

Deploy on the staff VLAN only for 14 days. Measure false positives, support load, DNS availability, and rollback; do not route guest traffic through it.

## Risks

- Breaking member/staff services through overblocking
- Privacy exposure from DNS queries and client IPs
- Resolver outage affecting the whole venue

## TODO before a full guide

- [ ] Complete privacy/transparency review for DNS logs
- [ ] Verify current deployment, backup, and telemetry docs
- [ ] Test bypass, failover, rollback, and clean restore
- [ ] Define blocklist approval and false-positive response
