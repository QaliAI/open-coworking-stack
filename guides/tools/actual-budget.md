---
title: Actual Budget coworking evaluation stub
tool_id: actual-budget
guide_status: stub
verified_on: 2026-07-17
---

# Actual Budget coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Actual Budget is a local-first budgeting app with desktop and self-hosted sync options. The catalog positions it for a solo operator's envelope budgeting, not full multi-entity or statutory accounting. It is OSI-approved `MIT`; software is free, while hosting and maintenance remain operator costs. It may hold accounts, transactions, and budgets as personal data.

Sources reviewed **2026-07-17**: [homepage](https://actualbudget.org/), [repository](https://github.com/actualbudget/actual), and [documentation](https://actualbudget.org/docs).

## Evaluation questions

- Can the accountant accept its role as a budget aid rather than the official ledger?
- Do exports preserve the categories and transaction detail needed for exit?
- Who protects financial data, sync access, backups, and retention?
- Is desktop-only or self-hosted sync the smaller operational burden?

## Smallest experiment

Track one month of coworking-space expenses with envelope budgets using non-production or safely copied data. Compare totals to the official accounting source and test an export; do not change the authoritative books.

## Risks

- Scope confusion with accounting or tax systems
- Sensitive transaction data and self-host maintenance
- Export/API completeness and restore quality remain unverified

## TODO before a full guide

- [ ] Verify current sync, export, backup, and restore documentation
- [ ] Document accountant-approved boundaries and reconciliation
- [ ] Test access controls and a clean restore
- [ ] Re-check hosted options and current costs without inferring prices
