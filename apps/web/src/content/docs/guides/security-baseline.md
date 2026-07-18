---
title: Security baseline for self-hosted stacks
description: Minimum security practices before putting member data on self-hosted tools.
---

## Before production data

1. **TLS everywhere** public — Caddy or Traefik with automatic certificates.
2. **No admin UI on the public internet without SSO/2FA** — Authelia/Authentik/Keycloak/oauth2-proxy.
3. **Unique admin passwords in a vault** — Vaultwarden/Passbolt; no shared spreadsheet.
4. **Automatic security updates** for OS packages and a documented app update cadence.
5. **Offsite encrypted backups** with a successful restore test (Restic/Borg).
6. **Network segmentation** — guest Wi-Fi ≠ staff VLAN ≠ IoT VLAN.
7. **Least privilege** — separate accounts per person; no shared root SSH.
8. **Logging & alerts** — Uptime Kuma + basic host metrics at minimum.
9. **Secret hygiene** — env files not in git; rotate on staff departure.
10. **Incident basics** — who shuts down access, who talks to members, where logs live.

## Access control hardware caveat

DIY IoT door automation is not a drop-in replacement for commercial access control. Life-safety, fire egress, audit requirements, and liability differ by jurisdiction. Start with identity and network hygiene before wiring locks.
