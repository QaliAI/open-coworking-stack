# Restic pilot data map

| Source              | Preparation owner          | Snapshot input                  | Recovery proof                        |
| ------------------- | -------------------------- | ------------------------------- | ------------------------------------- |
| Database            | Database/application owner | Official dump or quiesced state | Integrity plus sample records         |
| Application files   | Application owner          | Approved fixed paths            | Expected files open                   |
| Configuration       | Technical operator         | Secret-free files               | Service starts after secret injection |
| Repository metadata | Restic                     | Snapshot/tree/pack data         | `snapshots`, `ls`, and `check`        |

## Exclusions register

Every exclusion needs owner, reason, regeneration method, and recovery impact. Credentials stay in the secret store; recovery documentation records references, not values. Logs and evidence must redact paths or output that expose member or secret information.
