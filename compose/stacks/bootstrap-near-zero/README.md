# Bootstrap Near-Zero stack compose

> **FABRICATED DEMONSTRATION — prototype for review, not production.**

Multi-service staging baseline combining Caddy (reverse proxy), Vaultwarden (secrets),
BookStack (SOP docs), and Uptime Kuma (monitoring). Adapted from individual single-tool
packs in `compose/`. Intended to show how the Near-Zero Cash stack (`catalog/stacks/`)
maps to running services.

## Services

| Service     | Internal hostname | Default port | Notes                 |
| ----------- | ----------------- | ------------ | --------------------- |
| Caddy       | `caddy`           | 80 / 443     | Reverse proxy + TLS   |
| Vaultwarden | `vaultwarden`     | 8082         | Password/secret vault |
| BookStack   | `bookstack`       | 8085         | SOP documentation     |
| Uptime Kuma | `uptime-kuma`     | 3001         | Uptime monitoring     |

## Configure

1. Copy this directory.
2. Replace every `?Set ...` environment variable with real values.
3. Provide a `Caddyfile` (see `compose/sample-caddy/`).
4. Run `docker compose config`, review, then `docker compose pull && docker compose up -d`.
5. Complete first-run setup for each service through its web UI.

## Limitations

- Single host, no cluster or failover.
- No SMTP configured — notification and invitation flows will not work.
- No off-host backups — volumes are local to this Docker node.
- TLS depends on Caddy + DNS challenge; loopback probes bypass TLS.
