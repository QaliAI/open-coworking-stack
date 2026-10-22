# Data map

| Data                                 | Location/flow                   | Access                      | Retention/exit                                    |
| ------------------------------------ | ------------------------------- | --------------------------- | ------------------------------------------------- |
| Controller/site/device configuration | Devices and controller          | Named network admins        | Versioned protected backup plus readable topology |
| Client MAC/IP/connection metadata    | Devices to controller           | Troubleshooting staff only  | Minimum approved retention; deletion evidence     |
| Optional identification/fingerprints | Controller feature if enabled   | Privacy-approved users only | Disabled by default in this pack                  |
| Admin/change records                 | Controller and change system    | Network/security owners     | Retain under incident/change policy               |
| Backup and recovery credentials      | Off-controller protected stores | Separate recovery custody   | Retain/test/retire under recovery policy          |

Do not ingest payment, membership, CRM, or access-control records. Before production, the privacy reviewer must validate actual fields and controls on the selected version; this table is not a packet or database inspection.
