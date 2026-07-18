---
title: Medusa coworking evaluation stub
tool_id: medusa
guide_status: stub
verified_on: 2026-07-17
---

# Medusa coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Medusa is an emerging API-first commerce platform under OSI-approved `MIT`, available self-hosted with possible commercial cloud offerings. The catalog suggests custom day-pass or storefront experiments for technical teams. It holds products, carts, orders, customers, personal data, and payment-related data.

Sources reviewed **2026-07-17**: [homepage](https://medusajs.com/), [repository](https://github.com/medusajs/medusa), [documentation](https://docs.medusajs.com/), and [pricing](https://medusajs.com/pricing/).

## Evaluation questions

- Is custom commerce justified over a simpler hosted checkout?
- Which payment boundary keeps card data out of the custom stack?
- How do orders become valid day-pass/check-in entitlements?
- Can products, customers, orders, configuration, and code exit cleanly?

## Smallest experiment

Use official docs to create a staging storefront with one synthetic day-pass SKU. Use only a test payment path, then manually reconcile the order to a mock check-in.

## Risks

- Significant engineering and long-term custom-code burden
- Payment, order, refund, and entitlement consistency
- Emerging maturity, cloud pricing, and export behavior

## TODO before a full guide

- [ ] Threat-model storefront, admin, API, payment, and webhooks
- [ ] Define manual refund/check-in and failure handling
- [ ] Test complete data/config backup, export, and restore
- [ ] Re-check current cloud terms, support, and maturity
