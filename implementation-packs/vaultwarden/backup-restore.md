# Backup and restore

1. Record exact Vaultwarden/runtime/database/client versions and the current [official backup guide](https://github.com/dani-garcia/vaultwarden/wiki/Backing-up-your-vault) used.
2. For the local SQLite reference, run the documented application backup, then encrypt and copy the complete `vaultwarden_data` volume off-host.
3. Include version-required database, attachments, Sends, configuration, and signing material; protect the admin token and backup key through separately documented custody.
4. Restore a copy to an isolated host with a compatible pinned version and version-specific WAL/file handling.
5. Verify login, supported MFA, sync, organization/collection boundaries, fake item, and enabled attachments.
6. Record observed time and data window without claiming a general RTO/RPO.

A database file alone may be incomplete. Never expose restored real secrets or overwrite the sole working server during a drill.
