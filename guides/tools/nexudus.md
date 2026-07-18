---
title: Nexudus coworking evaluation stub
tool_id: nexudus
guide_status: stub
verified_on: 2026-07-17
---

# Nexudus coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Nexudus is proprietary managed coworking SaaS spanning membership, booking, billing, and access workflows. It is included as a commercial comparison, not open-source software. Pricing requires current vendor confirmation. It may hold members, contracts, bookings, invoices, personal data, and payment-related data.

Sources reviewed **2026-07-17**: [homepage](https://www.nexudus.com/), [documentation](https://help.nexudus.com/), and [pricing](https://www.nexudus.com/pricing).

## Evaluation questions

- Which exact coworking workflows and locations are in scope?
- What are current contract, implementation, integration, support, and exit terms?
- Can members, contracts, bookings, invoices, and audit context be exported completely?
- How are payment/access integrations separated and recovered?

## Smallest experiment

Request a vendor sandbox, import only a synthetic or approved subset of members, and test a complete export. Do not sign or migrate production data before contractual exit review.

## Risks

- Vendor and contract lock-in across core operations
- Broad personal, contract, billing, and access data
- Unverified API, integration, export, and pricing terms

## TODO before a full guide

- [ ] Obtain current official proposal, contract, DPA, and support terms
- [ ] Test workflow/API/export completeness in a sandbox
- [ ] Map manual fallback for booking, billing, membership, and access
- [ ] Document migration, rollback, retention, and account recovery
