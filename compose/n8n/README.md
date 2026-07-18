# n8n starter pack

> **Non-production template:** this is a single-node staging baseline for operators who understand
> n8n self-hosting. It does not provide queue workers, HA, SMTP, automatic updates, a reverse proxy,
> workflow governance, or off-host backups. Review n8n's license for your use.

PostgreSQL holds application state. The named `n8n_data` volume retains local settings and other
instance data. Only n8n is published, on loopback.

## Configure and test

1. Copy `.env.example` to `.env`, replace every `REPLACE_WITH_...` marker, and restrict file access.
   Generate the encryption key once, store it with backups, and never rotate it casually.
2. Run `docker compose config`, review it, then run `docker compose pull` and
   `docker compose up -d`.
3. Wait for healthy services, open `http://127.0.0.1:5678`, and create the owner account with a
   unique password. Enable MFA if available for the deployed edition.
4. For the smallest staging test, create a manual-trigger workflow that sets a harmless value, run
   it, inspect the successful execution, restart n8n, and confirm the workflow still exists.

Treat workflow credentials, execution payloads, and webhook URLs as sensitive. Restrict who can edit
or activate workflows and add error handling before connecting real member or payment data.

## TLS and reverse proxy

Terminate TLS at a maintained reverse proxy and retain the loopback binding. Set `N8N_HOST` to the
public hostname, `N8N_PROTOCOL=https`, both public URL variables to the canonical HTTPS URL,
`N8N_SECURE_COOKIE=true`, and `N8N_PROXY_HOPS` to the exact number of trusted proxies. The final
proxy must set `X-Forwarded-For`, `X-Forwarded-Host`, and `X-Forwarded-Proto`. Test editor sessions,
webhooks, OAuth callbacks, and large requests through the public URL.

## Backup and restore

Pause active workflows or stop n8n, then dump PostgreSQL with
`docker compose exec -T db pg_dump -U n8n -d n8n -Fc` and back up `n8n_data` with an approved
encrypted volume-backup tool. Back up `.env` secrets separately, especially `N8N_ENCRYPTION_KEY`;
without that exact key, stored credentials cannot be decrypted. Keep an off-host copy.

For restore, use the same image pins and encryption key, restore `n8n_data`, restore the database
with `pg_restore`, then start n8n without activating workflows. Verify credentials with test systems,
run the harmless workflow manually, and only then reactivate production workflows.

## Pin and upgrade

The example uses the stable version documented by n8n on 2026-07-18. Tags are mutable; replace both
image values with verified `tag@sha256:digest` references before production. Review n8n and database
release notes, back up, and test the upgrade against restored data before changing either pin.

## Official documentation

- [Docker Compose hosting](https://docs.n8n.io/deploy/host-n8n/install-options/use-a-cloud-provider/use-docker-compose/)
- [Environment variables](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/use-environment-variables/)
- [Encryption key](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/set-a-custom-encryption-key/)
- [Reverse-proxy webhook URLs](https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-webhook-urls-with-reverse-proxy/)
- [Update n8n](https://docs.n8n.io/deploy/host-n8n/keep-n8n-running/update-n8n/)
