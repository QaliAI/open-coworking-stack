# Paperless-ngx starter pack

> **Non-production template:** this is a single-node staging baseline, not a document governance or
> records-management system. It does not provide HA, SMTP, automatic updates, a reverse proxy,
> malware scanning, document retention policy, or off-host backups.

This follows Paperless-ngx's official PostgreSQL and Redis Compose convention. All document,
application, import, export, database, and broker state uses named volumes. Only the web application
is published, on loopback.

## Configure and test

1. Copy `.env.example` to `.env`, replace every `REPLACE_WITH_...` marker, set the correct timezone
   and OCR language, and restrict file access. Generate the Redis password as URL-safe hexadecimal
   or encode reserved URI characters before placing it in `PAPERLESS_REDIS_PASSWORD`.
2. Run `docker compose config`, review it, then run `docker compose pull` and
   `docker compose up -d`. Wait for healthy services before opening `http://127.0.0.1:8000`.
3. Sign in with the generated administrator, create a separate daily user, and restrict document
   permissions before importing sensitive material.
4. For the smallest staging test, import one synthetic one-page PDF with no personal data, wait for
   OCR, search for a known phrase, export the document, compare its checksum, and delete the test.

Treat OCR text and metadata as sensitive as the source document. Define access segregation,
retention, deletion, scan-quality review, and malware controls before any member-mail workflow.

## TLS and reverse proxy

Terminate TLS at a maintained reverse proxy and keep the loopback binding. Set `PAPERLESS_URL` to
the exact canonical `https://` URL and configure trusted origins and proxy headers according to the
official configuration reference. Limit upload size intentionally and test login, upload, download,
OCR status updates, and exports over HTTPS. Never publish PostgreSQL or Redis.

## Backup and restore

Stop imports and background work, then create a document manifest with Paperless-ngx's document
exporter. Dump PostgreSQL with
`docker compose exec -T db pg_dump -U paperless -d paperless -Fc`, and back up `paperless_data`,
`paperless_media`, and `paperless_export` with an approved encrypted volume-backup tool. The consume
volume is an intake queue, not the sole copy of a document. Back up `.env` secrets separately and
keep versioned off-host copies.

For restore, use the same image pins and secret key, restore the application and media volumes,
restore PostgreSQL with `pg_restore`, then start on an isolated host. Run consistency checks and
prove search, permissions, download, and checksums for representative synthetic documents. The
official document exporter/importer is also the preferred migration and disaster-recovery path.

## Pin and upgrade

The example tags were registry-verified on 2026-07-18 but tags are mutable. Replace all three image
values with verified `tag@sha256:digest` references before production. Review release notes and
database requirements, back up, and test the new images against restored data before changing pins.

## Sample coworking document taxonomy

The `sample-taxonomy/` directory contains a **fabricated demonstration** document-type taxonomy
for coworking operations (16 document types with regex matching, plus suggested tags). This is
not an importable Paperless-ngx configuration; adapt the types, matching rules, tags, and
correspondents to your actual mailroom workflow before applying.

## Official documentation

- [Setup](https://docs.paperless-ngx.com/setup/)
- [Configuration](https://docs.paperless-ngx.com/configuration/)
- [Administration](https://docs.paperless-ngx.com/administration/)
- [Backups](https://docs.paperless-ngx.com/administration/#backing-up-paperless)
- [Official Compose files](https://github.com/paperless-ngx/paperless-ngx/tree/main/docker/compose)
