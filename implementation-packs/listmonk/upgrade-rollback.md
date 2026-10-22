# Upgrade and Rollback

1. Record current artifact, configuration checksum, PostgreSQL version, and enabled media path.
2. Read official release notes and identify database/configuration changes.
3. Take and restore a pre-change backup in isolated staging.
4. Upgrade staging and run login, roles, draft, unsubscribe, SMTP rejection, export, and restore tests.
5. Schedule production change with sends paused and a current audience reconciliation.

If acceptance fails, stop the changed service and restore the matched backup with the prior artifact. If campaigns/subscriber writes occurred after change, preserve both states and reconcile them; do not run an older artifact against possibly changed data by assumption. Reopen only when suppression evidence matches.
