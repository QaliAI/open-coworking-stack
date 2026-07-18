# Vaultwarden implementation pack

Security-sensitive operator pack for moving one low-impact coworking facilities credential from an insecure sharing method into one least-privilege collection with individual accounts, supported MFA, rotation, revocation, protected export, and isolated restore.

Start with `operator-profile.yaml`, use `templates/access-approval.yaml`, run `recipes/one-credential-pilot.md`, and retain evidence beside `examples/recovery-evidence.md`. Vaultwarden is unofficial; the local `compose/vaultwarden` is a loopback-bound single-node SQLite staging reference, not production, compatibility, or security evidence.
