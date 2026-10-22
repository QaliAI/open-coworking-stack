# BorgBackup security review

| Review area       | Operator question                                                      | Evidence                               |
| ----------------- | ---------------------------------------------------------------------- | -------------------------------------- |
| Source privilege  | Can the job read only required data, or is root justified?             | Source permission review               |
| Consistency       | Does preparation produce a transactionally valid state?                | App/database restore                   |
| Encryption        | Is the selected mode understood and key exported where required?       | Key inventory and recovery             |
| Passphrase        | Is unattended retrieval protected from users/logs/process mistakes?    | Custody design review                  |
| SSH target        | Is the key/path/command restricted and target separately administered? | Authorized-key/architecture review     |
| Repository writes | Can source compromise erase all recovery points?                       | Independent copy/immutability decision |
| Destruction       | Are prune, compact, repair, and delete reviewed and monitored?         | Change and retention record            |

An encrypted single repository is not automatically resilient to malicious deletion. No threat test has been performed.
