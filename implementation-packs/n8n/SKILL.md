# Safe n8n Coworking Workflow Work

## Coworking purpose

Reduce duplicate entry for one low-risk lead handoff while preserving a staffed exception queue and the existing manual route.

## Allowed automation

- Validate synthetic fixture fields and draft an inactive workflow.
- Transfer approved contact fields using a stable source ID.
- Send a minimal status notification after a confirmed destination result.
- Reconcile source, execution, and destination counts and prepare exception reports.

## Prohibited decisions

- Do not qualify or reject leads, approve members, change prices, issue refunds, allocate payments, grant access, or make safety decisions.
- Do not activate workflows, widen credentials, or replay uncertain writes without human approval.
- Do not send payment, access, identity-document, health, or dispute data through the pilot.

## Source verification

Verify n8n license/edition terms, deployed-version docs, exact node operations, and each provider's official API/auth/rate-limit documentation. A node name is not evidence that a production integration works.

## Data boundaries

Allow source ID, name, email, optional company, inquiry type, consent flag, and timestamps. Execution payloads and workflow exports may contain personal or credential-identifying data; inspect and retain them accordingly.

## Human approvals

Process owner approves behavior/fallback, data owner approves fields/retention, integration owner approves credentials/mappings/errors, and lead coordinator resolves every uncertain record. All activation and changes require approval.

## Required tests

Run valid, missing, malformed, duplicate, timeout, rate-limit, authentication, notification, uncertain-write, disable-switch, manual-fallback, export-inspection, and isolated-restore cases. Reconcile by source ID.

## Backup and rollback

Back up application state/database, configuration, encryption material, and sanitized workflow definitions for the chosen deployment. Roll back by disabling triggers, classifying in-flight records, restoring matching version/state/key material, reconnecting test credentials, and reconciling before activation.

## Expert review

Legal/procurement reviews the Sustainable Use License and edition. Privacy/security reviews payloads, execution retention, secrets, hosting, subprocessors, and incident response. Domain experts are mandatory before any finance, identity, access, safety, or employment workflow.
