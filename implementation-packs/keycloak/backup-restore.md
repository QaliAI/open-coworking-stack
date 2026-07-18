# Backup and restore

Use official selected-version methods appropriate to the deployment. Protect the database, realm/client configuration, deployment/proxy config, realm keys, client secrets or their recovery paths, extension/version inventory, and external provider/dependency notes. Separate backup credentials from primary identity.

Restore into an isolated environment. Verify both test users, roles/groups, exact claims, client redirects, login/logout, disabled-user denial, session handling, admin recovery, and break-glass. Rotate test secrets if evidence handling exposed them.

Realm export alone may not be a complete deployment recovery. Record every omitted key, secret, provider, database, and external dependency; do not claim recovery time until measured.
