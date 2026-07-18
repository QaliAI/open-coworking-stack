# Security review

Review selected-version support/update posture, TLS/proxy trust, network/admin exposure, administrator separation, MFA/recovery, brute-force/login behavior, redirect URIs, client type/secrets, token/claim scope, sessions/logout, realm keys, database/file permissions, logs/admin events, backup access, break-glass, extensions/themes, and application-side authorization.

The application owner confirms authorization does not rely on unapproved/default claims and that fallback fails safely. Security approves every realm/client change and break-glass use; two-person review is preferred for production where staffing permits.

Require specialist identity/security review before production, federation, custom flows/providers, key rotation design, HA, or critical apps. This pack supplies no threat model, penetration test, protocol certification, or regulatory evidence.
