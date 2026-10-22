# Exit strategy

1. Inventory snapshots, protected applications, retention/legal duties, keys, backend, and required Restic versions.
2. Restore required records into business-portable application exports where possible.
3. If retaining Restic snapshots, preserve compatible binaries and documented credential custody.
4. If copying repositories, follow official `copy` guidance and model full read/write bandwidth, storage, and egress.
5. Validate the replacement repository/system with an independent clean restore.
6. Revoke old target credentials and stop jobs only after acceptance.
7. Dispose of the old repository and custody material under approved retention and record the action.

Never delete the only recoverable copy to reduce storage cost before replacement acceptance.
