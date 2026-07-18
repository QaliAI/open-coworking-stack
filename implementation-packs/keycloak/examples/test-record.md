# Synthetic example: Keycloak pilot evidence

This is not identity-security or deployment evidence.

- Date/versions: `YYYY-MM-DD`; selected versions pending official verification
- Realm/client/users: fictional staging realm, one fictional client, two fictional users
- Claims: hypothetical minimum `sub` plus approved app fields; actual token not stored
- Login/logout/bad credentials: hypothetical pass
- Disabled user/session termination: hypothetical pass; timing not measured
- Invalid redirect/secret handling: not yet reviewed
- Outage/app fallback: hypothetical app fallback pass; DB outage untested
- Backup/clean restore: not yet tested
- Federation/HA/scale/extensions/physical access: excluded and untested
- Decision: revise because security and recovery gates remain incomplete
