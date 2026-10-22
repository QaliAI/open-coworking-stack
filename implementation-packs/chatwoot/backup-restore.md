# Chatwoot backup and restore

## Backup set

[Official guidance](https://developers.chatwoot.com/self-hosted/deployment/backup) identifies PostgreSQL, file storage, configuration variables, and code customizations. Record exact version/image and storage mode; keep copies separate and tightly controlled because transcripts/attachments contain PII. For SaaS, verify supported exports and account recovery.

## Isolated restore

1. Provision a compatible non-production instance and safe mail/channel configuration.
2. Restore matching configuration, database, storage, and approved customizations.
3. Start web and worker services without contacting real channel users.
4. Verify representative contacts, conversations, labels, assignments, private notes, agent roles, and attachments.
5. Create a synthetic conversation/reply using a test channel only.
6. Record witness, elapsed time, defects, and restored-data disposal.

No restore or SaaS recovery has been run here.
