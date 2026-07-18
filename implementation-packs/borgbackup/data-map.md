# BorgBackup data map

| Object                | Source                       | Archive handling                            | Recovery/exit                                      |
| --------------------- | ---------------------------- | ------------------------------------------- | -------------------------------------------------- |
| Database dump         | App-native consistent export | Include after successful preparation        | Integrity check and app-owner review               |
| Uploaded files        | Reviewed paths               | Include with needed metadata                | Representative file/hash review                    |
| Rebuild configuration | Config inventory             | Include non-secret files                    | Service startup; secrets supplied separately       |
| Borg repository       | Remote storage               | Encrypted chunks/metadata per selected mode | `check`, list, extraction, independent copy design |
| Key/passphrase        | Independent custody          | Never place in archive/job logs             | Witnessed recovery and controlled disposal         |
| Job evidence          | Scheduler/Borg               | Exit, archive ID, duration, warnings        | Retention-limited audit record                     |

Source PII remains PII in encrypted archives. Actual archive paths and deletion behavior are untested until inspected.
