# BorgBackup exit strategy

1. Freeze retention changes and inventory repositories, archives, keys, clients, and legal/retention holds.
2. Establish replacement backups and complete an independent restore from them.
3. For retained Borg-only recovery points, preserve compatible Borg binaries/packages, key/passphrase, repository access, and runbook.
4. Extract/export approved data when portability requires ordinary files or application-native dumps.
5. Reconcile recovery dates and coverage with application owners.
6. Revoke SSH/job credentials after final acceptance.
7. Destroy repositories, keys, caches, and restored test data only with retention/security approval and recorded evidence.

Bulk migration speed and metadata fidelity are untested.
