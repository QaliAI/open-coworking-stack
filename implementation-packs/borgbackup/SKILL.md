# BorgBackup coworking operator skill

## Coworking purpose

Protect prepared state for one approved coworking service and produce usable restore evidence.

## Allowed automation

Validate source manifests, run approved preparation and archive jobs, capture exit codes/archive IDs, report staleness/capacity, and execute pre-approved non-production extractions. Prune/compact may run only under a reviewed retention rule and scoped archive filter.

## Prohibited decisions

Do not choose retention, include new sensitive sources, expose passphrases, run `--repair`, delete a repository, overwrite production, or declare a restore correct without owner review.

## Source verification

Check the selected version's [documentation](https://borgbackup.readthedocs.io/), upgrade/security notes, package source, database/application backup docs, and storage-provider docs. Do not mix commands across Borg major versions.

## Data boundaries

Archive only approved paths and prepared outputs. Exclude payment data from the pilot and keep credentials, transient sockets, caches, and logs out unless explicitly reviewed.

## Human approvals

Require application-owner scope/consistency approval, security approval for key/SSH design, retention-owner approval for prune, and recovery-witness acceptance for restores and production recovery.

## Required tests

Test preparation failure, remote failure, missing path, warning/error handling, source/exclude manifest, key recovery, file extraction, database integrity, service startup, and retention selection.

## Backup and rollback

Preserve the prior backup system during the pilot. Before Borg upgrades or retention changes, verify current archives and preserve keys/repository recovery. Roll back the job/package only when repository compatibility is established.

## Expert review

Use application/database expertise for consistent state and an experienced Borg operator for integrity errors or any proposed repair. All runtime behavior is untested in this pack.
