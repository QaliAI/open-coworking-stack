# BorgBackup recovery procedure

## Before an incident

Retain the source manifest, Borg version/package, repository URL/ID, SSH recovery path, key export, passphrase custody instructions, archive naming, and rebuild runbook outside the source host.

## Restore drill

1. Obtain human approval for archive and destination.
2. Provision an empty isolated destination with enough space.
3. Recover access/key/passphrase without the source host.
4. List archives and contents; record selected archive ID.
5. Extract into an empty directory; never overwrite production directly.
6. Restore database/application state using its official process.
7. Verify records, files, permissions, service startup, and cleanup with the owner.

`borg check` and extraction complement one another; neither alone proves business correctness. This drill is unexecuted.
