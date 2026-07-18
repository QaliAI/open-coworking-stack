---
title: Caddy for coworking self-hosted services
tool_id: caddy
guide_status: full
verified_on: 2026-07-17
---

# Caddy for coworking self-hosted services

Caddy is a reverse proxy with automatic HTTPS. In a coworking stack, use it first in front of one staging application, with deliberate access-log handling and a tested route back to the prior proxy.

## Fit and non-fit

**Good fit:** a technically operated self-hosted service needing TLS termination and routing, with DNS control, configuration review, and monitoring.

**Poor fit:** a substitute for application authentication, a production cutover without DNS/certificate planning, or a deployment where access logs are retained without privacy review.

## License and cost boundary

Caddy is OSI-approved open source under `Apache-2.0`. Budget for the host, DNS/TLS and migration setup, configuration/security-header review, updates/log handling, any custom modules, and support. The catalog notes optional commercial support/licenses may exist historically and should be verified; no commercial feature or price is assumed.

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign proxy, application, DNS, security, and incident owners. Inventory the hostname, upstream, health behavior, certificate requirements, logging policy, firewall exposure, and prior route.

| Data                    | Source                   | Caddy use       | Exit/fallback             |
| ----------------------- | ------------------------ | --------------- | ------------------------- |
| Host/upstream config    | Service inventory        | Routing         | Versioned reviewed config |
| Certificates            | Automated/manual process | TLS             | Recovery/reissuance plan  |
| Access logs, if enabled | Requests                 | Troubleshooting | Rotation/deletion policy  |
| DNS records             | DNS provider             | Public route    | Prior record values       |

The catalog does not classify held data as personal, but access logs can become personal data depending on content.

## Smallest useful experiment

Using [official documentation](https://caddyserver.com/docs/), put Caddy in front of one staging app with automatic HTTPS. Disable access logs or configure approved rotation. Test valid traffic, an unavailable upstream, certificate handling, and rollback.

## Implementation sequence

1. Record current DNS, proxy, certificate, and firewall state.
2. Review the relevant official Caddy deployment and configuration docs.
3. Configure one staging hostname and upstream with reviewed minimal settings.
4. Apply required security headers only after application compatibility review.
5. Test HTTP-to-HTTPS, upstream failure, request limits as applicable, logs, and certificate renewal behavior.
6. Document change approval, updates, monitoring, and incident ownership.
7. Back up/rebuild configuration and rehearse route restoration before production.

## Security and privacy controls

- Restrict administration/configuration write access and protect DNS credentials.
- Expose only required ports and upstreams; use TLS according to official guidance.
- Disable or minimize access logs; rotate and restrict them if needed.
- Review headers and proxy trust settings with the application owner.
- Review custom modules for source, license, maintenance, and privilege.
- Monitor certificate and upstream health without exposing private endpoints.

## Backup, export, and restore test

Keep reviewed configuration and required state in a protected reproducible source. Back up officially required certificate/state data where appropriate, while ensuring certificates can also be safely reissued. Rebuild Caddy on clean staging, apply the config, and verify routing, TLS, logs, and failure behavior. Record all external DNS/firewall dependencies.

## Integrations and manual handoffs

No application, DNS, or monitoring integration is catalog-verified. Follow Caddy and provider/application official docs. App owners approve upstream behavior; DNS owners approve records; security reviews exposure/logging; incident owners decide rollback.

## Human oversight

People own configuration, header policy, DNS, exposure, incident diagnosis, and change timing. Caddy augments TLS and routing; it does not secure a vulnerable application or decide access rights.

## Operational checklist

- [ ] Proxy, app, DNS, security, and incident owners named
- [ ] Prior DNS/proxy state recorded
- [ ] Minimal staging config reviewed
- [ ] TLS, upstream failure, and log policy tested
- [ ] Security headers checked with the app
- [ ] Update/module review process documented
- [ ] Clean rebuild succeeds
- [ ] DNS/proxy rollback rehearsed

## Rollback and exit

Keep prior DNS and proxy configuration ready. Roll back by restoring the prior route, validating the application, and then revoking unused DNS credentials/certificates as appropriate. Exit requires the reviewed host/upstream map, log policy, and certificate/DNS dependencies so another proxy can reproduce behavior.

## Verification and unknowns

Snapshot verified **2026-07-17** from [Caddy](https://caddyserver.com/), its [repository](https://github.com/caddyserver/caddy), and [documentation](https://caddyserver.com/docs/).

Unknown until designed: current commercial offerings, application-specific headers, custom-module licenses, certificate/DNS behavior, production capacity, support, and exact backup state for the selected deployment.
