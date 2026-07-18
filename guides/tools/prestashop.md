---
title: PrestaShop coworking evaluation stub
tool_id: prestashop
guide_status: stub
verified_on: 2026-07-17
---

# PrestaShop coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

PrestaShop is an e-commerce platform under OSI-approved `OSL-3.0`, available self-hosted and through managed offerings. The coworking case is a small catalog for merchandise, event tickets, or day passes. Software is free; payment fees, themes, modules, hosting, and maintenance may cost money. It holds customers, orders, products, personal data, and payment-related data.

Sources reviewed **2026-07-17**: [homepage](https://www.prestashop.com/), [repository](https://github.com/PrestaShop/PrestaShop), and [developer docs](https://devdocs.prestashop-project.org/).

## Evaluation questions

- Is a full commerce platform justified for day passes?
- Which payment-provider integration keeps card data out of the store?
- How are orders reconciled to door/front-desk check-ins and refunds?
- Which themes/modules are maintained, licensed, and exportable?

## Smallest experiment

Create a minimal staging catalog for one synthetic day-pass product and manually reconcile test orders to check-ins. Use only a test payment path and export the orders.

## Risks

- Payment, refund, inventory, and check-in mismatch
- Theme/module supply-chain and maintenance burden
- Personal/payment data and export portability

## TODO before a full guide

- [ ] Threat-model checkout, admin, provider, plugins, and webhooks
- [ ] Verify theme/module licenses and current maintenance
- [ ] Test products/customers/orders export and clean restore
- [ ] Define manual sales, refund, and check-in fallback
