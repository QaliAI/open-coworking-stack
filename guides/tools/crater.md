---
title: Crater coworking evaluation stub
tool_id: crater
guide_status: stub
verified_on: 2026-07-17
---

# Crater coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Crater is a self-hosted invoicing app for small businesses, classified OSI-approved under the Attribution Assurance License (`AAL`). The catalog marks maturity as legacy and warns that project activity may be slow. It holds invoices, clients, expenses, personal data, and payment-related data.

Sources reviewed **2026-07-17**: [homepage](https://craterapp.com/), [repository](https://github.com/crater-invoice/crater), and [documentation](https://docs.craterapp.com/).

## Evaluation questions

- Is the project health acceptable for production financial records?
- Does the license and installed package fit the operator's use?
- Do invoices, clients, expenses, and PDFs export completely?
- Who provides security updates and recovery if upstream slows further?

## Smallest experiment

Generate five synthetic invoices and PDF exports on staging. Have finance review them and assess project maintenance before any member or production data.

## Risks

- Legacy/project-maintenance risk
- Sensitive invoice/client/payment data
- Accounting, export, and security-update fit are unverified

## TODO before a full guide

- [ ] Re-verify repository activity, releases, and license
- [ ] Validate accounting/localization requirements
- [ ] Test complete backup, export, and clean restore
- [ ] Document a replacement and financial-record retention plan
