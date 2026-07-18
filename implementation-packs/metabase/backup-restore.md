# Backup and Restore

Back up the Metabase application database using its database engine's supported method. This captures Metabase runtime application data such as questions, dashboards, collections, and users; it does not back up connected booking/reporting data. Also retain deployment configuration and exact artifact/driver inventory without embedding secrets in this pack.

Restore to isolated staging, connect only a sanitized test source, and verify groups, permissions, collection, question, cards, dashboard filters, time zone, and source watermark. Compare fixture outputs and test denied viewer/source-write cases.

Record application DB backup ID, artifact version, restore duration, object counts, permission results, and approvers.
