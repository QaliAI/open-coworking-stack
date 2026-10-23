# Member Experience Lite stack compose

> **FABRICATED DEMONSTRATION — prototype for review, not production.**
>
> **October 2026 edition warning:** the historical Cal.com service block is retained for reference.
> Hosted Cal.com is a separate commercial service; the MIT community repository is now Cal.diy,
> whose maintainers recommend personal, non-production use. Do not deploy that service block as a
> supported coworking booking system. Use hosted Cal.com for tours or evaluate Easy!Appointments.
> LibreBooking must be 7.1.0 or later because of a critical account-takeover advisory.

Multi-service staging baseline combining Cal.com (scheduling), LibreBooking (room/desk booking),
Chatwoot (support inbox), Formbricks (surveys), and Caddy (reverse proxy). Matches the
`member-experience-lite` stack (`catalog/stacks/member-experience-lite.yaml`).

## Services

| Service      | Internal hostname | Default port | Notes                      |
| ------------ | ----------------- | ------------ | -------------------------- |
| Caddy        | `caddy`           | 80 / 443     | Reverse proxy + TLS        |
| Cal.com      | `calcom`          | 8086         | Scheduling (tours, events) |
| LibreBooking | `librebooking`    | 8084         | Room and desk booking      |
| Chatwoot     | `chatwoot`        | 8087         | Shared support inbox       |
| Formbricks   | `formbricks`      | 8083         | Member feedback surveys    |

## Configure

1. Copy this directory.
2. Replace every `?Set ...` environment variable with real values.
3. Provide a `Caddyfile` (see `compose/sample-caddy/`).
4. Run `docker compose config`, review, then `docker compose pull && docker compose up -d`.
5. Complete first-run setup for each service.

## Limitations

- Nine containers — requires a host with at least 4 GB RAM.
- No SMTP configured — invitations, confirmations, and survey notifications will not work.
- LibreBooking uses MariaDB, Cal.com and Chatwoot use PostgreSQL — three database instances.
- No off-host backup integration.
