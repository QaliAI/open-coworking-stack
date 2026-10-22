# Conservative Docker Compose starter packs

These packs are **non-production templates** for staging evaluation by an experienced operator. They
are intentionally small, single-host deployments. They do not provide high availability, automatic
updates, an integrated public reverse proxy, off-host backups, monitoring, SMTP, or compliance.

## Included packs

| Pack                                     | Default endpoint        | Persistent state                      |
| ---------------------------------------- | ----------------------- | ------------------------------------- |
| [Nextcloud](nextcloud/README.md)         | `http://127.0.0.1:8080` | Application, PostgreSQL               |
| [n8n](n8n/README.md)                     | `http://127.0.0.1:5678` | Application, PostgreSQL               |
| [Uptime Kuma](uptime-kuma/README.md)     | `http://127.0.0.1:3001` | Application                           |
| [Vaultwarden](vaultwarden/README.md)     | `http://127.0.0.1:8082` | Application and SQLite                |
| [Paperless-ngx](paperless-ngx/README.md) | `http://127.0.0.1:8000` | Application, media, PostgreSQL, Redis |

## Safe use

1. Copy a pack's `.env.example` to `.env`.
2. Replace every `REPLACE_WITH_...` value. These markers are not usable secrets or defaults.
3. Protect `.env` from other users and never commit it. For production, adapt the pack to a secret
   manager or Docker secrets where the application supports file-based values.
4. Run `docker compose config` before pulling or starting anything.
5. Follow the pack README's staging, backup, restore, and reverse-proxy checks.

All published ports bind to `127.0.0.1` by default. Keep that binding when a host-level reverse
proxy terminates TLS. If a containerized proxy is used, remove `ports`, attach the application to a
dedicated external proxy network, and expose only the proxy. Never expose a database or Redis.

## Image pins

The examples use exact release tags verified against their official registries on 2026-07-18; none
uses `latest`. Tags can still be moved. Before production, inspect each image, record the multi-arch
or platform digest, and change its `.env` reference to this immutable form:

```text
registry.example/project/image:1.2.3@sha256:verified-digest
```

Re-verify release notes, supported upgrade paths, architecture, and signatures before changing a
pin. Test upgrades against a restored copy of production data, then update one version at a time.

## Multi-tool stack prototypes

Experimental multi-service compose files for flagship stacks live in `stacks/`. These are **not
production configurations** — they demonstrate how individual tools from this directory could be
combined around a shared reverse proxy (Caddy) with internal networking:

| Stack                                                              | Services included                                     |
| ------------------------------------------------------------------ | ----------------------------------------------------- |
| [Bootstrap Near-Zero](stacks/bootstrap-near-zero/README.md)        | Caddy, Vaultwarden, BookStack, Uptime Kuma            |
| [Privacy-First Self-Host](stacks/privacy-first-selfhost/README.md) | Caddy, Authentik, Nextcloud, Vaultwarden, Uptime Kuma |
| [Member Experience Lite](stacks/member-experience-lite/README.md)  | Caddy, Cal.com, LibreBooking, Chatwoot, Formbricks    |

Each stack compose file is **fabricated demonstration data** — secrets use placeholder markers,
image pins are internally consistent but not verified against multi-service upgrade paths, and
no testing has been done on combined resource requirements. Use them as a starting point for
your own stack composition, not as a turnkey deployment.

## Sample collateral

Additional fabricated demonstration artifacts are provided for review:

- **n8n workflow exports** — `n8n/workflows/` contains three JSON-format workflow exports
  (member onboarding, tour-to-close, invoice reminder) that reference coworking-specific
  API endpoints and environment variables. Import via n8n web UI or API after configuration.
- **Sample Caddyfile** — `sample-caddy/Caddyfile` demonstrates reverse-proxy routing for all
  tools across subdomains, with trusted-network restrictions and separate access logs.
- **Paperless-ngx document taxonomy** — `paperless-ngx/sample-taxonomy/coworking-document-types.yaml`
  provides a YAML-format starting taxonomy with regex matching rules for coworking documents
  (member agreements, invoices, forwarded mail, vendor bills, etc.).
- **Backup / restore scripts** — `scripts/backup.sh` and `scripts/restore.sh` demonstrate
  Docker volume and database dump/restore for a multi-service compose project. Not hardened
  for concurrent access, encryption, rotation, or alerting.

## Operator obligations

The operator owns host hardening, firewall rules, DNS, TLS, proxy-header trust, authentication and
MFA policy, least-privilege access, capacity planning, patch cadence, vulnerability response, log
review, data retention, privacy obligations, encrypted off-host backups, and recurring restore
drills. A healthy container is not proof that the application or its workflows are healthy.

Do not grant privileged mode, mount the Docker socket, or add broad host mounts to these packs.
Review upstream documentation and the complete rendered configuration before every deployment.
