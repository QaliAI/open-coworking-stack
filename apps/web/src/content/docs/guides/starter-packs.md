---
title: Docker Compose starter packs
description: Security-conscious staging templates for selected self-hosted tools.
---

The repository includes five Docker Compose starter packs:

- `compose/n8n`
- `compose/nextcloud`
- `compose/paperless-ngx`
- `compose/uptime-kuma`
- `compose/vaultwarden`

Each pack contains `compose.yaml`, `.env.example`, and an operator README. The templates bind web
ports to localhost by default, require explicit credentials, use persistent volumes, avoid privileged
containers, and avoid `latest` image tags.

They are staging foundations, not unattended production deployments. Before production use:

1. Read the pack README and current upstream deployment documentation.
2. Replace every example credential with an independently generated secret.
3. Pin container images by digest after testing the selected release.
4. Put a maintained TLS reverse proxy in front of the localhost-bound service.
5. Restrict administrative access and document update ownership.
6. Back up every named volume and database, then restore into a clean staging environment.
7. Run the pack's smallest useful test with synthetic data.

The catalog only advertises a `compose_pack` where the referenced directory and `compose.yaml` exist.
See `compose/README.md` in the repository for support boundaries shared by every pack.
