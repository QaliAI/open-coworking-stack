# Vaultwarden coworking operator skill

## Coworking purpose

Replace insecure sharing of one low-impact facilities credential with individual staff access to one organization collection, then rotate the underlying password and prove revocation and recovery. Vaultwarden organizes secrets; humans authorize every user and credential.

## Allowed automation

- Report service, TLS, storage, update, backup, and approved membership-drift signals.
- Draft periodic collection-access reviews for collection owners.
- Execute a pre-approved encrypted backup procedure without reading vault items.
- Disable service exposure under a pre-approved incident stop condition while alerting security owners.

## Prohibited decisions

- Do not approve/invite users, change collection membership, reveal/export items, or disable MFA.
- Do not rotate production credentials, create emergency access, or choose recovery recipients.
- Do not inspect secrets for monitoring, employment, eligibility, or vendor decisions.
- Do not destroy vaults, exports, backups, accounts, sessions, or DNS without authorized humans.

## Source verification

Record server and client versions and recheck the [official repository](https://github.com/dani-garcia/vaultwarden), [wiki](https://github.com/dani-garcia/vaultwarden/wiki), backup guide, hardening guide, and client compatibility guidance. The 2026-07-17 snapshot and local Compose notes are not support, security, client, migration, export, or restore proof.

## Data boundaries

The pilot permits synthetic items, two test users, one Facilities collection, and then one approved low-impact Wi-Fi admin credential. Payment data, root/cloud recovery keys, life-safety/door emergency credentials, personal vault migration, and bulk production secrets are prohibited. Protect server state, admin tokens, recovery codes, exports, and backups as secrets.

## Human approvals

Security approves architecture and policy; organization/collection owners approve every member; credential owners approve migration and rotation; the recovery custodian approves backup access; change management approves upgrade/restore. Decrypted bulk export and destructive retirement require two-person approval.

## Required tests

Use fake secrets to test enrollment, supported MFA, recovery codes, client login/sync/lock, collection allow/deny, removed-user access, server outage, email if used, encrypted backup, isolated restore, optional attachment, protected export/import, and export destruction. For the one real credential, prove rotation and old-password rejection.

## Backup and rollback

Follow version-specific official backup guidance; for the local reference, create the documented SQLite backup then protect the complete data volume, configuration, and applicable attachments/Sends/signing material. Restore only in isolation. Keep the prior approved store until the credential is rotated/recovered; migrations may require restoring prior data rather than downgrading an image.

## Expert review

Require security review before production, internet exposure, identity integration, broad collections, automation, or high-impact secrets. Require legal/compliance review for regulated secrets or assurance claims and database/recovery expertise for external databases, corruption, major migrations, or strict recovery objectives.
