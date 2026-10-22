# BorgBackup upgrade and rollback

## Before

Read upgrade/security notes for current and target versions, inventory all clients/server-side Borg, run the supported health check, complete a recent restore, preserve keys, and back up the repository if the migration risk warrants it.

## Stage

Use a copy/test repository where safe, run the job with reviewed path patterns, inspect exit-code changes, create/list/extract an archive, and test the scheduler wrapper. Apply any documented repository procedure exactly.

## Rollback

Stop jobs before version mixing. Restore the prior client/server package and wrapper only if official compatibility confirms it can safely access the repository. Otherwise keep the target tooling for recovery and escalate.

Never use `borg check --repair` to make an upgrade appear successful. No version transition is tested here.
