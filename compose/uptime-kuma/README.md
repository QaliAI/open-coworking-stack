# Uptime Kuma starter pack

> **Non-production template:** this is a single-node staging baseline, not a complete monitoring or
> incident-response system. It provides no HA, external database, automatic updates, public status
> page policy, reverse proxy, or off-host backups.

Uptime Kuma does not provide a supported environment variable for seeding the first administrator,
so this pack does not invent a default credential. The setup UI is reachable only on loopback.

## Configure and test

1. Copy `.env.example` to `.env` and run `docker compose config`; review the rendered image, port,
   network, and volume.
2. Run `docker compose pull` and `docker compose up -d`, wait for the service to become healthy, then
   open `http://127.0.0.1:3001` locally.
3. Immediately create the administrator with a unique password and enable MFA if supported by the
   pinned release. Do not expose an unfinished setup screen through a proxy.
4. For the smallest staging test, add one non-sensitive HTTPS endpoint, use a short temporary
   interval, confirm an `UP` heartbeat, pause the monitor, and verify the pause survives a restart.

Place monitoring on infrastructure independent of the services it watches. A monitor can expose
URLs, headers, credentials, and incident history; limit administrator access and notification data.

## TLS and reverse proxy

Terminate TLS at a maintained reverse proxy and keep the loopback binding. Follow Uptime Kuma's
proxy-specific WebSocket guidance, pass the original host and scheme, and restrict administrative
routes if publishing a status page. Test login, live updates, notifications, and the status page over
HTTPS. Do not publish port 3001 directly.

## Backup and restore

Stop the service for a consistent SQLite backup with `docker compose stop uptime-kuma`, then back up
the complete `uptime_kuma_data` named volume using an approved encrypted tool and restart it. Keep
versioned off-host copies; filesystem snapshots alone are not a backup policy.

To restore, stop the service, restore the complete volume onto an isolated host, use the same image
pin, start it, and verify login, monitor configuration, heartbeat history, and a test notification.
Never test a restore by overwriting the only working copy.

## Pin and upgrade

The example release tag was registry-verified on 2026-07-18 but tags are mutable. Replace it with a
verified `tag@sha256:digest` reference before production. Read release and migration notes, back up,
and test the new image against a restored volume before changing the pin.

## Official documentation

- [Repository and install instructions](https://github.com/louislam/uptime-kuma)
- [Wiki](https://github.com/louislam/uptime-kuma/wiki)
- [Docker tags](https://github.com/louislam/uptime-kuma/wiki/Docker-Tags)
- [Reverse proxy](https://github.com/louislam/uptime-kuma/wiki/Reverse-Proxy)
- [Updates](https://github.com/louislam/uptime-kuma/wiki/%F0%9F%86%99-How-to-Update)
