# Safe Odoo Community Coworking Evaluation

## Coworking purpose

Evaluate whether a narrowly configured Community CRM/invoice sample can represent a coworking lead process without moving real member or accounting data.

## Allowed automation

- Validate synthetic import fixtures and External ID uniqueness.
- Draft deterministic stage/assignment rules for disabled testing.
- Create review tasks and reconcile synthetic lead/export counts.
- Summarize module, role, import, invoice-sample, and restore evidence.

## Prohibited decisions

- Do not approve membership, pricing exceptions, credit, refunds, tax, invoice confirmation, payment allocation, write-offs, access, identity, safety, disputes, or employment actions.
- Do not install modules, import data, alter roles, activate automation, or upgrade databases without approval.
- Do not use real CRM, financial, payment, identity, or access data in this evaluation.

## Source verification

Verify the chosen version's Community repository/source, version-matched documentation, technical module manifests/licenses, and Community/Enterprise boundaries. General marketing or a different version's docs are not proof.

## Data boundaries

Use synthetic contacts, opportunities, products, taxes, invoices, users, and attachments only. Inventory PostgreSQL, filestore, config, modules/custom code, logs, exports, and backups. Existing lead and finance systems remain authoritative.

## Human approvals

Executive approves scope/budget/production gate; sales owner approves stages/duplicates; qualified finance reviewer approves every invoice/localization conclusion; technical/data owner approves version, modules, roles, imports, backup, restore, update, and deletion.

## Required tests

Test ten leads, duplicates, missing fields, same names, External IDs, role denials, invoice lifecycle as available, export usability, permanent-import recovery, PostgreSQL/filestore failure, module failure, matched backup, and isolated restore.

## Backup and rollback

Back up database, filestore, configuration, and exact code/module set. Roll back same-version update by restoring that matched set. Treat major database upgrade as a separate, irreversible migration project; never run older code against upgraded data by assumption.

## Expert review

Qualified accounting/tax experts approve localization, invoice, payment, retention, and statutory conclusions. Privacy/security reviews personal data and hosting. Legal/procurement reviews Community, Enterprise, add-on, partner, and support terms.
