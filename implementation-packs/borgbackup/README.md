# BorgBackup service-recovery implementation pack

Use this pack to design one encrypted remote Borg repository for one low-risk Linux service with a documented consistency step and witnessed restore. It does not include Borg or a production-ready job.

## Entry criteria

- Application, backup, repository, key-custody, and recovery owners named.
- Source inventory and application/database consistency command approved.
- Remote target, retention, recovery objective, monitoring, and recovery secrets designed.

## Exit criteria

- Forced preparation/job failures alert correctly.
- Representative file and clean-host service restore pass.
- Independent key/passphrase recovery and retention review pass.

## Untested limitations

No repository, archive, encryption mode, SSH restriction, scheduler, prune, compact, check, restore, repair, upgrade, storage provider, throughput, or cost has been tested here. Commands must be adapted to the selected Borg version and application.

Start with `operator-profile.yaml`, then complete the source manifest template.
