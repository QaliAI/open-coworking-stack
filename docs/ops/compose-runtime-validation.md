# Compose Runtime-Validation Matrix

Evidence date: 2026-07-18  
Scope: the five reference packs under `compose/`  
Environment: local Windows checkout; Compose configuration rendering only

## Evidence labels

- `passed`: the named stage was run for this exact pack and retained evidence is identified.
- `failed`: the stage ran and did not meet its acceptance criteria.
- `pending-not-run`: no result exists. Instructions, documentation, or a plausible configuration do
  not count as runtime evidence.
- `blocked`: execution was attempted but an external prerequisite prevented the stage.

No container, application workflow, backup, restore, upgrade, or rollback is marked passed in this
matrix. A rendered Compose model proves neither image availability nor a working service.

## Eleven-stage matrix

| Pack          | 1. Config render | 2. Image pull   | 3. Start        | 4. Readiness    | 5. First login  | 6. Core smoke   | 7. Restart persistence | 8. Backup       | 9. Isolated restore | 10. Upgrade     | 11. Rollback    |
| ------------- | ---------------- | --------------- | --------------- | --------------- | --------------- | --------------- | ---------------------- | --------------- | ------------------- | --------------- | --------------- |
| Nextcloud     | passed           | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run        | pending-not-run | pending-not-run     | pending-not-run | pending-not-run |
| n8n           | passed           | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run        | pending-not-run | pending-not-run     | pending-not-run | pending-not-run |
| Uptime Kuma   | passed           | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run        | pending-not-run | pending-not-run     | pending-not-run | pending-not-run |
| Vaultwarden   | passed           | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run        | pending-not-run | pending-not-run     | pending-not-run | pending-not-run |
| Paperless-ngx | passed           | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run | pending-not-run        | pending-not-run | pending-not-run     | pending-not-run | pending-not-run |

## Retained evidence

Stage 1 passed on 2026-07-18 with exit code 0 for each pack using its committed example environment:

```bash
docker compose --env-file .env.example config --quiet
```

The command was run separately in `compose/nextcloud`, `compose/n8n`, `compose/uptime-kuma`,
`compose/vaultwarden`, and `compose/paperless-ngx`. Quiet success has no transcript payload; this
document records the command, scope, date, and result. The example values include replacement markers
and were used only to render configuration. They are not deployment secrets.

Stages 2 through 11 were not run during this content pass. There are no retained container IDs, image
digests, screenshots, health responses, application exports, backup archives, restore logs, upgrade
logs, or rollback timings to cite.

## Stage acceptance contract

| Stage                  | Required procedure                                                                                                                       | Evidence required to pass                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1. Config render       | Render with fresh non-production values; inspect ports, volumes, networks, images, health checks, dependencies, and secret interpolation | Exact command/version, rendered-config checksum or protected artifact, reviewer, zero errors, no unexpected exposure             |
| 2. Image pull          | Pull every pinned image for the target platform and record resolved digests                                                              | Registry, tag, immutable digest, platform, pull time, scan/signature result if required, zero use of `latest`                    |
| 3. Start               | Start on an isolated staging host with empty named volumes                                                                               | Compose version, host profile, start log, container IDs/digests, expected containers running, no restart loop                    |
| 4. Readiness           | Wait for dependency and application readiness, then test from the intended network boundary                                              | Health output and application response, elapsed time, expected localhost/TLS exposure, database/Redis not public                 |
| 5. First login         | Complete documented bootstrap with unique accounts and replacement secrets                                                               | Redacted setup record, individual admin login, authentication controls observed, default/replacement credentials absent          |
| 6. Core smoke          | Complete the smallest synthetic workflow in the pack README and test one denied action                                                   | Synthetic fixture, steps, expected/actual result, application version, functional-owner sign-off; no real personal data          |
| 7. Restart persistence | Stop cleanly, restart, and verify the fixture plus permissions                                                                           | Before/after IDs and hashes or screenshots, volume mapping, restart duration, no unexplained data loss                           |
| 8. Backup              | Run the pack-specific consistent backup procedure to a separate boundary                                                                 | Commands/tool versions, start/end time, included database/files/config, encrypted artifact reference/checksum, key-custody owner |
| 9. Isolated restore    | Restore to empty volumes or a clean host without touching the source, then repeat smoke and denial tests                                 | Restore log, artifact checksum, target isolation, record reconciliation, recovery time, functional and technical sign-off        |
| 10. Upgrade            | Clone/restore representative staging data, move one supported version step, and repeat stages 4-7 and export checks                      | From/to digests, release notes reviewed, migration log, duration, test results, unresolved warnings, approval                    |
| 11. Rollback           | Trigger the documented stop condition and return to the accepted prior release/data boundary                                             | Trigger, decision owner, exact prior digests/artifact, data-loss window, elapsed time, repeat acceptance results                 |

## Pack-specific smoke scope

| Pack          | Stage 6 minimum synthetic workflow                                                                                                                    | Stage 8/9 state boundary                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Nextcloud     | Create one test user, upload/download/edit one text file, deny another user, and export/open the file                                                 | PostgreSQL plus application/configuration/user files and the matching encryption-key boundary if enabled |
| n8n           | Create a disabled manual-trigger workflow that transforms synthetic JSON, run it, verify output, and confirm credentials are absent from exports/logs | PostgreSQL plus n8n data/config and encryption-key custody; no production credentials                    |
| Uptime Kuma   | Add a monitor for a local synthetic endpoint, observe up and controlled-down states, restart, and export/inspect backup data                          | Application data volume/configuration and notification-secret boundary                                   |
| Vaultwarden   | Create two test users and one synthetic login item, verify collection denial, export non-secret test data, and test emergency administration path     | SQLite/application data, attachments if used, configuration, and protected key/secret custody            |
| Paperless-ngx | Import one synthetic one-page PDF, wait for processing, search, download, restrict access, and export the document/metadata                           | PostgreSQL, media, consume/export data as applicable, application configuration, and matching versions   |

## Current blockers and next gate

- No isolated staging host, disposable DNS/TLS route, test mail service, or evidence store was allocated.
- No approved runtime window or named technical and functional reviewers were supplied.
- Pulling images and starting services would create network traffic, images, containers, and persistent
  volumes beyond a documentation-only change; that work was not implied by configuration validation.
- Upgrade and rollback need an explicitly selected prior/candidate pair and upstream support-path
  review. Testing arbitrary versions would produce misleading evidence.
- Backup passing is not enough: release readiness requires an isolated restore and reconciled workflow
  result for each pack.

The next honest state transition is to assign an isolated environment and reviewers, capture immutable
image digests, and execute stages 2 through 9 for one pack. Stages 10 and 11 follow only after supported
version pairs are approved.
