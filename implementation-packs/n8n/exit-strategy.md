# Exit Strategy

Disable all triggers and webhooks, then drain and classify running/queued executions. Reconcile source to destination for the final interval. Export workflow JSON, inspect and sanitize it, and preserve the plain-language contract, field map, fixtures, expressions, node/version inventory, and exception rules.

Revoke provider credentials and remove callback/webhook configuration. Retain or delete execution evidence under policy, then delete n8n state/backups when approved. Run manual intake until the replacement passes the same fixtures.

No cross-platform conversion of n8n workflow JSON is claimed. Reimplementation must start from behavior and tests, not blind import.
