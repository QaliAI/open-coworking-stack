---
title: BorgBackup for coworking systems
tool_id: borgbackup
guide_status: full
verified_on: 2026-07-17
---

# BorgBackup for coworking systems

This guide scopes BorgBackup to one Linux service with a documented consistency method and an isolated restore. It is not proof that any archive, schedule, repository, or restore has run in this repository.

## 1. Coworking outcome

Create encrypted, deduplicated recovery copies for approved coworking service data and make restore ability observable. Borg augments backup work; it does not understand application consistency, recovery priority, or business correctness.

## 2. Pilot scope

Back up one low-risk Linux service's database dump, configuration, and files to one remote repository. Restore one file and then the service state to clean staging. Exclude payment data and production overwrite operations.

## 3. Fit

**Good fit:** a Linux-skilled operator with a prepared-data method, restricted remote repository, monitored scheduler, separate key/passphrase custody, retention decision, and witnessed drills.

## 4. Non-fit and alternatives

**Poor fit:** copying a live database without preparation, keeping the only repository on the source host, confusing deduplication with independent redundancy, or having no recovery owner. Compare application-native backups and managed backup services where they provide safer consistency or operational ownership.

## 5. Coworking use cases

- Protect a coworking wiki's approved dump, uploads, and configuration.
- Retain server configuration needed to rebuild a non-critical internal service.
- Produce an isolated restore drill for disaster-recovery readiness.

Each source application needs its own official backup procedure.

## 6. Tasks reduced or augmented

Borg can reduce repeat transfer/storage through deduplication and automate archive creation, listing, checking, pruning, and extraction. It cannot choose source scope, create a transactionally consistent database by itself, judge restored records, or authorize deletion.

## 7. Human decisions and approvals

The application owner approves scope and preparation; the backup owner designs the job; a security owner approves key/repository access; the recovery owner witnesses restore usability. A person approves retention, prune changes, repairs, repository deletion, and production restore.

## 8. Owners and RACI

Name application, backup, repository, security/key-custody, and recovery owners plus an incident contact. Keep at least one recovery path independent of the source host and the unattended job credential.

## 9. Prerequisites

Inventory files, database engine, consistency procedure, excludes, ownership/ACL needs, change rate, repository path, network path, scheduler, retention, monitoring, recovery objectives, and key/passphrase custody. Confirm adequate repository and client-cache free space.

## 10. Skills and effort boundary

The pilot needs Linux filesystem, shell/scheduler, SSH, application/database dump, permission, capacity, and recovery skills. The catalog's `1-3 days` estimate is unverified; transfer volume, consistency engineering, and full restore time can dominate.

## 11. Deployment choice

Borg is self-hosted software. Select and document the supported Borg series on every client/server, package source, remote repository host, SSH transport, filesystem, and scheduler. This guide does not verify a storage provider, wrapper, GUI, or hosted Borg service.

## 12. Architecture and dependencies

Map source service, preparation output, Borg client/cache, SSH identity, remote `borg serve` or repository path, repository filesystem, monitoring destination, and separately stored key/passphrase. The official quick start notes that repositories can be local or remote over SSH and must have free space to operate.

## 13. License and edition boundary

The catalog classifies BorgBackup as OSI-approved `BSD-3-Clause`. Re-check the [repository](https://github.com/borgbackup/borg) license and licenses/terms for the operating system, scheduler, wrapper, transport, and storage provider; this guide verifies no commercial service.

## 14. Total cost boundary

Record software, source and target compute, storage capacity, transfer/egress, monitoring, setup, consistency scripts, checks, pruning, restore drills, upgrades, key custody, and support labor. Deduplication savings and future archive size are untested; budget from measured pilot data.

## 15. Data map

| Data                       | Source                     | Borg treatment                                   | Recovery proof                               |
| -------------------------- | -------------------------- | ------------------------------------------------ | -------------------------------------------- |
| Database dump/state        | Application-native process | Prepared archive input                           | Database integrity and owner check           |
| Uploaded/service files     | Approved source paths      | Archived file data/metadata                      | Representative file and service test         |
| Configuration              | Protected source           | Rebuild input                                    | Service starts with secrets re-supplied      |
| Repository metadata/chunks | Borg                       | Encrypted/authenticated according to chosen mode | `borg check` plus extraction                 |
| Key/passphrase             | Separate custody           | Unlocks repository                               | Witnessed recovery from independent location |
| Job logs                   | Scheduler/Borg             | Operational evidence                             | Exit codes, archive ID, duration, warnings   |

Archives can contain personal data even when encrypted. Payment data is excluded from the pilot.

## 16. Privacy and retention

Apply source-system retention to backups while accounting for immutable/retained copies, restrict restore access, and prevent sensitive values from leaking into logs or archive names. Document deletion constraints and legal holds with qualified reviewers; encryption does not remove privacy obligations.

## 17. Security baseline

Use an approved encryption mode, a nonempty protected passphrase, exported key backup where required, restricted SSH keys and repository path, least-privilege source access where feasible, secure logs, and separate recovery material. Never put real `BORG_PASSPHRASE` values in this repository.

## 18. Compliance and expert review

Backup retention, employee/member records, legal holds, breach response, and cross-border storage can need privacy/legal review. Obtain database/application expertise for consistency and security review before backing up payment, identity, door-access, video, health, or regulated records.

## 19. Integration boundary

No scheduler, wrapper, database command, remote host, or storage provider is catalog-verified. Treat the source preparation command and restore command as application integrations with explicit owners, versions, exit-code handling, timeouts, and cleanup.

## 20. Configuration baseline

Record Borg version, repository URL/ID (not credentials), encryption mode, key location, source paths, excludes, preparation command, archive naming, retention rule, prune archive filter, compact/check cadence, lock behavior, scheduler user, timeout, log path, and alert destination. Peer-review shell quoting and path patterns.

## 21. Smallest useful experiment

Using the [official quick start](https://borgbackup.readthedocs.io/en/stable/quickstart.html), initialize an encrypted remote repository, archive prepared data for one low-risk service, list the archive, restore one file, and restore service state to clean staging.

## 22. Implementation sequence

1. Approve source scope, consistency method, owners, retention, and recovery objective.
2. Pin a supported Borg version and review current security/upgrade notes.
3. Provision restricted remote storage and independent key/passphrase recovery.
4. Run preparation and a manual archive; inspect paths, excludes, logs, and statistics.
5. Restore a file, then the prepared service state in clean staging.
6. Add scheduling, alerts, pruning, compacting, and checks only after manual acceptance.
7. Run a witnessed recovery without source-host assumptions.

## 23. Migration and rollout

Run Borg alongside the existing backup system through at least one approved retention cycle and restore drill. Do not remove old recovery copies until coverage, age, consistency, and recovery objectives are reconciled by source and recovery owners.

## 24. Required test plan

Test preparation failure, source path absence, changed-file warning, archive success/warning/error exit handling, remote unavailability, low-capacity alert, archive listing, representative extraction, ownership/permissions, database integrity, service startup, key recovery, retention dry review, and clean-host restore. Never use `borg check --repair` as a routine test.

## 25. Acceptance criteria

The expected prepared inputs are present; excluded secrets/caches are absent as designed; failed preparation prevents a success signal; archive identity is recorded; a representative file and whole service restore pass; key recovery works independently; monitoring catches a forced failure; owners accept measured recovery time.

## 26. Success metrics

Track last successful prepared state and archive, bytes/unique data, duration, warnings/errors, repository free space, oldest/newest recovery point, check status, restore time, and drill defects. Deduplication ratio alone is not recovery evidence.

## 27. Monitoring and alerting

Alert on missing schedule, nonzero/unhandled exit, stale newest archive, preparation failure, repository reachability, free-space threshold, check failure, and key-recovery test expiry. Borg is quiet by default according to official docs, so the wrapper must deliberately capture useful status.

## 28. Operating cadence

Review daily job status as appropriate to the recovery objective, capacity and retention regularly, checks on a risk-based schedule, and representative/full restores on approved cadences. Re-test after source layout, database, Borg series, repository, key custody, or scheduler changes.

## 29. Failure modes and response

Plan for inconsistent source, omitted path, full repository, lost key/passphrase, compromised write credential, remote outage, stale cache/lock, corrupt archive, bad prune filter, and incompatible client/server. Stop pruning or repair on unexplained integrity errors; preserve evidence and involve an experienced Borg operator before `--repair`.

## 30. Backup procedure

Prepare the application first, verify preparation success, run `borg create` with reviewed sources/excludes, capture archive ID/statistics and exit code, then apply approved prune and compact operations with an archive filter scoped to this source. Keep repository access and key backups separate; a Borg repository itself may require an independent copy strategy.

## 31. Restore drill

On a clean isolated host, recover Borg tooling, SSH access, key, and passphrase independently; list archives; extract into an empty directory; verify hashes/records and ownership; rebuild the service with separately supplied secrets; and obtain application-owner sign-off. Record elapsed time and every undocumented dependency.

## 32. Upgrade, rollback, and exit

Read the exact [official upgrade notes](https://borgbackup.readthedocs.io/en/stable/changes.html#upgrade-notes), verify repository health with the currently supported process, preserve recovery material, and test scripts/exit codes in staging. Roll back the client package/job only if repository compatibility permits; never guess across major repository formats. Exit by restoring/copying retained data to the replacement, validating it independently, preserving Borg recovery capability while archives remain, then approving repository/key disposal.

## 33. Sources, evidence, and unknowns

Reviewed **2026-07-17**: [homepage](https://www.borgbackup.org/), [repository](https://github.com/borgbackup/borg), [documentation](https://borgbackup.readthedocs.io/), [quick start](https://borgbackup.readthedocs.io/en/stable/quickstart.html), and [upgrade/security notes](https://borgbackup.readthedocs.io/en/stable/changes.html).

Evidence is documentation review only. Untested: package/runtime, source consistency, encryption/key recovery, SSH restrictions, scheduler behavior, archive contents, checks, pruning/compaction, corruption response, restore fidelity, Borg-version compatibility, repository copy design, throughput, costs, support, and compliance. No command here is production-approved without target-specific review and evidence.
