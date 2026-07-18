---
title: BorgBackup for coworking systems
tool_id: borgbackup
guide_status: full
verified_on: 2026-07-17
---

# BorgBackup for coworking systems

BorgBackup provides deduplicated encrypted archives. A practical coworking pilot backs up one Linux service's approved data and restores a single file plus service state in an isolated environment.

## Fit and non-fit

**Good fit:** a Linux-skilled operator with a known consistency method, remote repository, passphrase custody, monitoring, and restore drills.

**Poor fit:** copying live databases without preparation, storing the only repository on the source host, confusing deduplication with independent redundancy, or operating without remote-repository availability planning.

## License and cost boundary

BorgBackup is OSI-approved open source under `BSD-3-Clause`. Budget for storage targets and transfer, setup of consistent jobs, maintenance/check/prune/restore work, any scheduler or remote service, and operator/support time. Free software does not remove storage or recovery costs.

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign application, backup, and recovery owners. Inventory one service's files/database/configuration, preparation method, retention, recovery objective, repository location, and passphrase/key custody.

| Data               | Source                        | Borg treatment         | Restore check              |
| ------------------ | ----------------------------- | ---------------------- | -------------------------- |
| Service data       | Pilot application             | Prepared archive input | Representative file/record |
| Database state     | Official app/database process | Consistent dump/state  | Integrity check            |
| Configuration      | Protected source              | Archive/rebuild input  | Service starts             |
| Encrypted archives | Borg repository               | Remote retained copies | Repository check/extract   |

Archives may contain personal data even when encrypted. Payment-data scope depends on the source and is excluded from the pilot.

## Smallest useful experiment

Using [official Borg documentation](https://borgbackup.readthedocs.io/), initialize a repository, back up one service's approved data, and restore a single file successfully. Extend acceptance to a clean-host service check before relying on the job.

## Implementation sequence

1. Select one low-risk service and document its consistency procedure.
2. Review repository, encryption, archive, check, prune, and restore guidance in official docs.
3. Provision a remote target with restricted access and separate recovery material.
4. Run and monitor archives through an agreed retention cycle.
5. Check repository/archive integrity and restore a file.
6. Restore required service state to clean staging and validate with the owner.
7. Record recovery time, gaps, and next drill.

## Security and privacy controls

- Separate repository access and encryption/recovery secrets.
- Restrict source, target, logs, and backup operator privileges.
- Use secure transport supported by the selected remote design.
- Monitor failures, capacity, repository availability, and retention.
- Protect archives according to the sensitivity of source data.
- Test recovery without relying on the primary host.

## Backup, export, and restore test

Record archive identity, repository check, restored paths, service verification, elapsed time, and witness. Validate content rather than filenames alone. Borg archives are not a substitute for portable business-data exports; retain supported application/database exports where exit portability matters.

## Integrations and manual handoffs

No scheduler, remote host, or storage provider is catalog-verified. Follow Borg and provider official guidance. Application owners prepare consistent data, backup operators run/monitor jobs, and recovery owners independently validate restores.

## Human oversight

People determine scope, retention, key custody, recovery priority, and restored-data usability. Borg augments encrypted deduplicated backup; it does not understand application consistency or business correctness.

## Operational checklist

- [ ] Application, backup, and recovery owners named
- [ ] Source consistency documented
- [ ] Remote repository and restricted access ready
- [ ] Recovery secrets held separately
- [ ] Failures, capacity, and availability monitored
- [ ] Repository/archive check passed
- [ ] File restore passed
- [ ] Clean service restore validated

## Rollback and exit

Rollback disables the pilot job, preserves required archives through retention, revokes target access, and returns to the prior backup system. For exit, restore/copy retained data to the replacement, verify independently, document repository disposal, and keep Borg recovery capability while any archive remains under retention.

## Verification and unknowns

Snapshot verified **2026-07-17** from [BorgBackup](https://www.borgbackup.org/), its [repository](https://github.com/borgbackup/borg), and [documentation](https://borgbackup.readthedocs.io/).

Unknown until designed: remote storage cost/availability, source consistency, archive size/change rate, retention, recovery objectives, scheduler behavior, support, and compliance obligations.
