# Security review

| Risk                             | Required control                                       | Evidence              |
| -------------------------------- | ------------------------------------------------------ | --------------------- |
| Source compromise deletes backup | Separate target account/control or provider protection | Failure-domain review |
| Password loss                    | Two approved custodians and recovery test              | Custody record        |
| Credential leakage               | Vault/file-command method; no code/log/history values  | Secret scan/review    |
| Repository tampering             | Scheduled `check` and restore validation               | Check/restore log     |
| Overbroad source capture         | Reviewed fixed paths and exclusions                    | Data map              |
| Retention destroys needed data   | Preview and second approval                            | Change record         |

Encryption does not make repository access, retention, location, or breach obligations disappear. If compromise or corruption is suspected, stop destructive commands and preserve another copy where possible before expert-guided repair.
