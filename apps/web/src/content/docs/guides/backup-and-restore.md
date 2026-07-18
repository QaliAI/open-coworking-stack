---
title: Backup and restore
description: How to treat backups as a first-class part of a coworking technology stack.
---

## Rule

If you have not restored it, you do not have a backup.

## What to back up

| Data class   | Examples                             | Notes                                    |
| ------------ | ------------------------------------ | ---------------------------------------- |
| Databases    | Postgres/MySQL volumes               | Consistent dumps or filesystem snapshots |
| Object/files | Nextcloud data, Paperless media      | Large; plan retention                    |
| Config       | Compose files, Caddyfile, IdP realms | Keep in Git where safe                   |
| Secrets      | Vault exports, age/restic keys       | Offline + dual custody                   |
| SaaS exports | CRM CSV, membership exports          | Quarterly drills                         |

## Suggested tools

- [Restic](../../tools/generated/restic/) or [BorgBackup](../../tools/generated/borgbackup/)
- Offsite target: S3-compatible storage or a second site
- Monitor backup job success in Uptime Kuma (push monitors)

## Monthly drill (60–90 minutes)

1. Pick one critical app.
2. Restore to a clean staging host.
3. Log time-to-recover and gaps.
4. Fix automation before the next month.
