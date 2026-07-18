---
title: Firefly III coworking evaluation stub
tool_id: firefly-iii
guide_status: stub
verified_on: 2026-07-17
---

# Firefly III coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Firefly III is an OSI-approved `AGPL-3.0-only` self-hosted double-entry finance manager. The catalog positions it for cashflow visibility while an accountant retains the official books; it may not replace statutory accounting software. It holds accounts, transactions, budgets, and personal financial data.

Sources reviewed **2026-07-17**: [homepage](https://www.firefly-iii.org/), [repository](https://github.com/firefly-iii/firefly-iii), and [documentation](https://docs.firefly-iii.org/).

## Evaluation questions

- Does finance accept it only as a cashflow/budget aid?
- How will imports reconcile to the authoritative accounting ledger?
- Are exports, backups, and retention suitable for sensitive transactions?
- Who controls administrator access and self-host updates?

## Smallest experiment

Import three months of safely copied business transactions and categorize membership versus facilities costs. Reconcile totals to official books and test deletion/export without changing the source.

## Risks

- Confusion with statutory accounting
- Highly sensitive transaction data
- Import, reconciliation, and export fidelity remain unverified

## TODO before a full guide

- [ ] Obtain qualified finance boundary and reconciliation approval
- [ ] Verify supported import/export and duplicate handling
- [ ] Test restricted access, backup, and clean restore
- [ ] Define retention, deletion, and incident response
