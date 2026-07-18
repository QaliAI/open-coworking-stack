# Vaultwarden starter pack

> **Non-production template:** this is a single-node SQLite staging baseline, not a complete password
> management program. Vaultwarden is an unofficial Bitwarden-compatible server. This pack provides
> no HA, SMTP, automatic updates, reverse proxy, or off-host backups.

Registration is disabled by default and the admin page requires an Argon2-hashed token.

## Configure and test

1. Copy `.env.example` to `.env`. Generate the admin token with the pinned image's documented
   `/vaultwarden hash` command, paste the PHC string inside single quotes, replace the marker, and
   restrict access to `.env`.
2. Run `docker compose config`, review it, then run `docker compose pull` and
   `docker compose up -d`. Confirm the service is healthy before opening the loopback URL.
3. On an isolated staging host only, temporarily set `VAULTWARDEN_SIGNUPS_ALLOWED=true`, create the
   first owner through `http://127.0.0.1:8082`, immediately restore `false`, and recreate the service.
4. For the smallest staging test, create a test organization and collection, add a non-sensitive
   item, sync a client, lock it, sync again, and confirm the item can be decrypted.

Use unique master passwords and MFA, restrict organization owners, protect recovery codes, and
define emergency access and staff-offboarding procedures. Do not use real credentials in staging.

## TLS and reverse proxy

HTTPS is required for production and for reliable client cryptography features. Terminate TLS at a
maintained reverse proxy, keep the loopback binding, and set `VAULTWARDEN_DOMAIN` to the exact
canonical `https://` URL. Follow the official proxy examples, pass the real client address and
scheme, and test web, desktop, mobile, attachments, Sends, and WebSocket notifications. Never expose
the admin page or port 80 directly to the internet.

## Backup and restore

Run `docker compose exec vaultwarden /vaultwarden backup` to create an online SQLite backup in the
data volume, then back up the entire `vaultwarden_data` volume with an approved encrypted tool. The
volume also contains attachments, Sends, configuration, and signing keys. Protect the admin token
separately and keep versioned off-host copies.

For restore, stop Vaultwarden, restore the complete volume, remove stale SQLite WAL files only as
directed by the official backup guide, use the same image pin, and start on an isolated host. Verify
login, client sync, an attachment, organization access, and the staging item before declaring the
restore valid.

## Pin and upgrade

The example release tag was registry-verified on 2026-07-18 but tags are mutable. Replace it with a
verified `tag@sha256:digest` reference before production. Review releases and schema migrations,
back up, and test the new image against a restored volume before changing the pin.

## Official documentation

- [Repository](https://github.com/dani-garcia/vaultwarden)
- [Docker Compose](https://github.com/dani-garcia/vaultwarden/wiki/Using-Docker-Compose)
- [Admin token](https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page)
- [Proxy examples](https://github.com/dani-garcia/vaultwarden/wiki/Proxy-examples)
- [Backing up your vault](https://github.com/dani-garcia/vaultwarden/wiki/Backing-up-your-vault)
- [Hardening guide](https://github.com/dani-garcia/vaultwarden/wiki/Hardening-Guide)
