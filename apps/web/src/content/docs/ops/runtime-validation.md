---
title: Compose runtime validation
description: Honest eleven-stage evidence status for all five reference Compose packs.
---

Evidence date: 2026-07-18. The five packs rendered successfully with their committed example
environment and `docker compose --env-file .env.example config --quiet`. No containers were started;
all runtime stages remain `pending-not-run`.

| Pack          | Config | Pull    | Start   | Ready   | Login   | Smoke   | Persist | Backup  | Restore | Upgrade | Rollback |
| ------------- | ------ | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- | -------- |
| Nextcloud     | passed | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending  |
| n8n           | passed | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending  |
| Uptime Kuma   | passed | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending  |
| Vaultwarden   | passed | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending  |
| Paperless-ngx | passed | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending  |

## What each stage must prove

1. **Config:** rendered model, exposure, images, volumes, networks, dependencies, and secret replacement.
2. **Pull:** target platform, resolved immutable digests, registry, and required scan/signature result.
3. **Start:** clean isolated volumes, expected containers, logs, and absence of restart loops.
4. **Ready:** dependency and application readiness from the intended network boundary.
5. **Login:** unique account bootstrap, replacement credentials, and observed authentication controls.
6. **Smoke:** smallest synthetic workflow plus a denied action, reviewed by its functional owner.
7. **Persist:** fixture and permissions survive a controlled stop/restart.
8. **Backup:** consistent database/files/configuration captured, encrypted, checked, and stored separately.
9. **Restore:** clean isolated restore reconciles records and repeats smoke/denial tests.
10. **Upgrade:** approved supported version step repeats readiness, workflow, persistence, and export tests.
11. **Rollback:** a stop condition returns to the accepted prior release/data boundary within measured
    time.

Current blockers are no allocated staging host, test DNS/TLS/mail boundary, evidence store, runtime
window, or named technical/functional reviewers. Upgrade/rollback also require an approved
prior/candidate version pair. Instructions and healthy containers are not restore or workflow evidence.
