# Upgrade and Rollback

Pin current core and node versions. Review official release notes, breaking changes, environment changes, database migrations, and node/provider deprecations. Restore pre-change state to staging, upgrade it, and run the full fixture suite with inactive triggers.

Before production change, disable triggers, drain/classify executions, take a current backup, and identify the prior artifact. If acceptance fails, keep triggers disabled and restore matching prior state/version/encryption material. Reconcile every source record in the change window before reactivation.

Never bulk-retry uncertain executions or assume workflow JSON restores credentials, execution state, or encryption access.
