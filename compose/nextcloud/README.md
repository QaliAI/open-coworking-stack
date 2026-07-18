# Nextcloud starter pack

> **Non-production template:** this is a conservative staging baseline, not a supported or hardened
> production deployment. It does not provide HA, SMTP, antivirus, object storage, automatic updates,
> a reverse proxy, or off-host backups.

This follows the official Apache image convention with PostgreSQL, Redis, and the matching cron
container. Only the application is published, on loopback.

## Configure and test

1. Copy `.env.example` to `.env`, replace every `REPLACE_WITH_...` marker, and restrict file access.
2. Run `docker compose config` and review the rendered ports, images, networks, and mounts.
3. Run `docker compose pull`, then `docker compose up -d`. Do not automate upgrades.
4. Wait for `docker compose ps` to report healthy services and open `http://127.0.0.1:8080`.
5. For the smallest staging test, create a non-admin user, upload a harmless file, share it only with
   that user, download it, revoke the share, and confirm the cron container remains running.

Never start with the marker values. Keep the administrator account for administration, use separate
daily accounts, enable MFA, and review app permissions before adding optional Nextcloud apps.

## TLS and reverse proxy

Terminate TLS at a maintained reverse proxy and keep the loopback binding. Set
`NEXTCLOUD_TRUSTED_DOMAINS` to the exact public hostname and `NEXTCLOUD_OVERWRITE_PROTOCOL=https`.
Configure `trusted_proxies` only for the proxy's known address or CIDR and pass `Host`,
`X-Forwarded-For`, and `X-Forwarded-Proto`; never trust all networks. Follow Nextcloud's reverse
proxy documentation and test WebDAV, large uploads, redirects, and client sync over HTTPS.

## Backup and restore

Back up the PostgreSQL database and the complete `nextcloud_app` named volume as one recovery point.
Enable maintenance mode first with
`docker compose exec --user www-data app php occ maintenance:mode --on`, dump PostgreSQL with
`docker compose exec -T db pg_dump -U nextcloud -d nextcloud -Fc`, snapshot the application volume
with an approved encrypted backup tool, then disable maintenance mode. Store backups off-host.

For restore, deploy the same image pins, stop application writes, restore the application volume,
restore the database dump with `pg_restore`, preserve the database and Redis secrets, run the
documented Nextcloud repair/upgrade checks if versions changed, and disable maintenance mode. Prove
the procedure on an isolated host by opening and checksumming the staging test file.

## Pin and upgrade

The example tags were registry-verified on 2026-07-18 but tags are mutable. Replace all three image
values with verified `tag@sha256:digest` references before production. Read release notes and
Nextcloud's supported sequential upgrade path; restore a backup into staging before each upgrade.

## Official documentation

- [Nextcloud Docker image](https://github.com/nextcloud/docker)
- [Nextcloud administration manual](https://docs.nextcloud.com/server/stable/admin_manual/)
- [Backup](https://docs.nextcloud.com/server/stable/admin_manual/maintenance/backup.html)
- [Restore](https://docs.nextcloud.com/server/stable/admin_manual/maintenance/restore.html)
- [Reverse proxy](https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/reverse_proxy_configuration.html)
