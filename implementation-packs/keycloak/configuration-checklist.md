# Configuration checklist

- [ ] Record selected Keycloak/database/proxy/application versions and support sources.
- [ ] Isolate one staging realm and use test identities only.
- [ ] Preserve and independently test the application's prior login/fallback.
- [ ] Separate routine users, realm admins, host/database operators, and recovery access.
- [ ] Approve exact redirect URIs, client type, secrets, token/claim minimum, and session behavior.
- [ ] Approve MFA/recovery and protect break-glass credentials outside the primary identity path.
- [ ] Configure TLS, network restrictions, updates, monitoring, logs, and retention.
- [ ] Record authoritative roster/role matrix and approved disablement handoff.
- [ ] Inventory providers, extensions, themes, scripts, and outbound connections; exclude by default.
- [ ] Protect database/config/keys/secrets and rehearse clean restore.
- [ ] Obtain manager, identity, app, security/privacy, and recovery approvals.
