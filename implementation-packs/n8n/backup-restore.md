# Backup and Restore

Inventory the chosen deployment's application database/state, configuration/environment, encryption key or equivalent key material, binary-data storage if used, installed community nodes if any, and exact version. Back up those items through their official deployment procedures. Store key material separately but make recovery custody explicit.

Restore to an isolated URL with triggers blocked. Reconnect newly issued test credentials, import/inspect the workflow if needed, keep it inactive, and replay all fixtures. Verify credential references resolve, execution retention is correct, and source/destination counts reconcile.

An exported workflow is not a credential backup. Record RPO/RTO observations without claiming a target until the operator approves one.
