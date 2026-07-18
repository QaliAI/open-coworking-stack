# Security and records review

| Risk                            | Required control                              | Evidence          |
| ------------------------------- | --------------------------------------------- | ----------------- |
| Superuser sees all objects      | Separate daily account and minimal superusers | Role test         |
| OCR/search leaks sensitive text | Object/group denial across UI/search/download | Denied-user test  |
| Intake/export exposure          | Restricted folders and prompt intake handling | Filesystem review |
| Secret/DB/Redis compromise      | Vault/file secrets and restricted network     | Config review     |
| Physical media theft            | Encrypted host/filesystem and backups         | Storage review    |
| Wrong OCR/automatic label       | Human quality check for all 20                | QC records        |

Official docs state application-level document encryption was removed; do not claim it. Review PDF/document processing exposure, patches, and any custom hook before production. Escalate member mail or legal-retention requests to experts.
