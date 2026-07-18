# Nextcloud Security and Privacy Review

| Risk                          | Required control                                               | Evidence                        |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------- |
| Staff/member boundary failure | Folder register and named groups, no inherited broad share     | Active/denied user tests        |
| Stale leaver access           | Roster reconciliation and immediate closure runbook            | Leaver fixture on web/client    |
| Malicious or abandoned app    | Files-only pilot; version/license/data review for additions    | App inventory                   |
| Destructive sync/ransomware   | Endpoint controls, monitoring, isolated backups, restore drill | Incident exercise and hashes    |
| Backup inconsistency          | Coordinated config/database/data/app state                     | Clean restore report            |
| Public token leakage          | Sharing disabled or named expiring share with owner            | Share inventory/revocation test |

Server-side encryption, end-to-end encryption, antivirus, SSO, object storage, and office integration are not assumed. Each changes the threat and recovery model.
