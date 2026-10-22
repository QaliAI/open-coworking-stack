# Metabase Security and Privacy Review

| Risk                          | Control                                                 | Proof                                   |
| ----------------------------- | ------------------------------------------------------- | --------------------------------------- |
| Source modification           | Dedicated read-only role and no pilot write features    | Insert/update/delete/create/drop denial |
| Member-row exposure           | Aggregate reporting view without identity               | View definition and field inventory     |
| Unauthorized dashboard/export | Groups, collection/data permissions, no public links    | Denied user and guessed URL tests       |
| Source overload               | Bounded query plus DBA plan review                      | Plan/timing and source monitoring       |
| Application-state loss        | External application DB backup/restore                  | Clean restore evidence                  |
| Edition-dependent control     | Feature inventory checked against current official docs | Edition decision record                 |

Treat cached results, logs, exports, and application-database backups as sensitive. TLS and deployment hardening remain operator responsibilities.
