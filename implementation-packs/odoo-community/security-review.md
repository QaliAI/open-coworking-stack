# Odoo Community Security and Compliance Review

| Risk                                    | Control                                                        | Evidence                   |
| --------------------------------------- | -------------------------------------------------------------- | -------------------------- |
| Edition/module surprise                 | Versioned module/source inventory and allowlist                | Manifest/source references |
| Sales user changes finance/admin config | Separate roles and denied action tests                         | Test matrix                |
| Permanent bad import                    | Synthetic/disposable database, test step, backup, External IDs | Import/recovery evidence   |
| Database/filestore mismatch             | Coordinated backup and attachment verification                 | Matched restore report     |
| Unreviewed financial conclusion         | Qualified finance sign-off and explicit sample label           | Annotated output           |
| Third-party add-on exposure             | No add-on in pilot; source/license/data/support review later   | Module inventory           |

Review database manager exposure, master/admin credentials, TLS, sessions, logs, backups, host hardening, and update process against version-matched official guidance. No certification is claimed.
