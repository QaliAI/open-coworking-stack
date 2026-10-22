# Privacy-First Self-Host stack compose

> **FABRICATED DEMONSTRATION — prototype for review, not production.**

Multi-service staging baseline combining Authentik (SSO/identity), Nextcloud (file sync),
Vaultwarden (secrets), Uptime Kuma (monitoring), and Caddy (reverse proxy). Adapted from
individual single-tool packs in `compose/`. Matches the `privacy-first-selfhost` stack
(`catalog/stacks/privacy-first-selfhost.yaml`).

## Services

| Service          | Internal hostname  | Default port | Notes                      |
| ---------------- | ------------------ | ------------ | -------------------------- |
| Caddy            | `caddy`            | 80 / 443     | Reverse proxy + TLS        |
| Authentik server | `authentik-server` | 8088         | SSO / identity provider    |
| Authentik worker | `authentik-worker` | —            | Background tasks (no port) |
| Nextcloud        | `nextcloud`        | 8080         | File sync and sharing      |
| Vaultwarden      | `vaultwarden`      | 8082         | Password/secret vault      |
| Uptime Kuma      | `uptime-kuma`      | 3001         | Uptime monitoring          |

## Configure

1. Copy this directory.
2. Replace every `?Set ...` environment variable with real values.
3. Provide a `Caddyfile` (see `compose/sample-caddy/`).
4. Run `docker compose config`, review, then `docker compose pull && docker compose up -d`.
5. Complete first-run setup: Authentik bootstrap login, Nextcloud admin creation,
   Vaultwarden admin login, Uptime Kuma first monitor.

## Authentik bootstrap

After starting, visit `http://127.0.0.1:8088` and complete the initial setup flow using
`AUTHENTIK_BOOTSTRAP_EMAIL` / `AUTHENTIK_BOOTSTRAP_PASSWORD`. Then create an OIDC
application for Nextcloud to enable SSO.

## Limitations

- Eight containers — requires a host with at least 4 GB RAM and 20 GB free disk.
- No SMTP — password resets, invitations, and notifications will not flow.
- No off-host backups — all volumes are local to this Docker node.
- TLS depends on Caddy + DNS challenge; loopback probes bypass TLS.
