# Recipe: clean-host service restore

1. Open a restore change naming archive, destination, data owner, and disposal time.
2. Provision an isolated empty host/directory; do not mount over production.
3. Recover Borg access and key material through the independent custody route.
4. List archive paths and extract only the approved service set.
5. Supply secrets from the secret store, then use the application's official database restore.
6. Check representative records/files, ownership, startup, and login with the app owner.
7. Record elapsed time and defects, then securely dispose of restored PII.

Do not treat successful extraction as a successful service restore.
