# Configuration checklist

- [ ] Official installation route and exact app/database/Redis versions recorded and pinned.
- [ ] Isolated staging, TLS, restricted network, and monitoring configured.
- [ ] Random application secret, database/Redis/backup credentials stored outside git.
- [ ] Daily users are not superusers; finance and denied-test permissions defined.
- [ ] Consume, media, data, export, and backup paths are access restricted.
- [ ] Host/filesystem and backups encrypted; application encryption is not claimed.
- [ ] OCR language, timezone, file-size/storage assumptions, and taxonomy approved.
- [ ] Original chain of custody and retention/destruction prohibition documented.
- [ ] Member mail, email intake, SSO, hooks, and auto-delete excluded.
- [ ] Exporter inventory, sanity checker, and empty matching-version import scheduled.
