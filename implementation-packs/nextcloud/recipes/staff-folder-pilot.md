# Recipe: Staff Operations Folder

1. Copy neutral files from `examples/` into the prior store and record hashes.
2. Create `ops-pilot` with two named test staff; keep the leaver fixture outside the group.
3. Upload to `Operations/Shared`, sync both clients, edit one file, and test a simultaneous conflict.
4. Verify the leaver fixture cannot browse, search, open a guessed URL, or sync the folder.
5. Remove one active user and repeat web/client denial after the expected session controls apply.
6. Download all files and compare content/hashes with accepted versions.
7. Back up coordinated state, restore to an isolated hostname, and repeat allow/deny and hash tests.
8. Stop if a user sees unapproved data, a conflict loses both copies, or matched restore cannot be proven.
