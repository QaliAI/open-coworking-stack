# Backup and restore

## Self-hosted

1. Record application version, data-store version/topology, configuration sources, and official guidance used.
2. Create a consistent encrypted backup of the data store and required configuration/secrets; copy it off-host.
3. Restore to clean isolated staging with compatible versions.
4. Verify login, roles, sites, event definition, sample aggregate records, retention, and one synthetic event.
5. Record observed recovery and data-loss window without generalizing an RTO/RPO.

## Managed cloud

Test supported data/config exports and account recovery. Record what cannot be exported or restored. Do not describe those tests as proof of the provider's backup or disaster-recovery process.
