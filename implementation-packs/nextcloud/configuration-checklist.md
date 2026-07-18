# Configuration Checklist

- [ ] Record server, client, database, storage, and app versions.
- [ ] Follow supported prerequisites and hardening from the matching admin manual.
- [ ] Use TLS, named admin accounts, appropriate authentication, and protected sessions.
- [ ] Create only `Operations/Shared` for the pilot; no broad member folder.
- [ ] Create `ops-pilot` group with two active users and verify leaver fixture has no access.
- [ ] Disable public/external sharing unless the pilot explicitly tests an expiring share.
- [ ] Define file, version, deleted-item, log, share, and backup retention.
- [ ] Configure and monitor background jobs plus host/database/storage capacity.
- [ ] Keep app allowlist to core Files; review every proposed app separately.
- [ ] Keep original pilot files in the prior store during evaluation.
- [ ] Back up config, database, data, and applicable apps/themes consistently.
- [ ] Restore to an isolated hostname and verify users, files, permissions, and hashes.
