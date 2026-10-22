# Caddy coworking operator skill

## Coworking purpose

Put one approved staging service behind HTTPS and reversible host-to-upstream routing. Do not infer application security from proxy success.

## Allowed automation

Automate certificate lifecycle and routing only from reviewed configuration. Report failures to the proxy and application owners.

## Prohibited decisions

Never decide user entitlement, expose a hostname, retain identifiable logs, trust forwarded client-IP headers, install a module, or alter DNS without the named human approval.

## Source verification

Use current official Caddy documentation and repository releases. Label commands, module compatibility, DNS-provider behavior, capacity, renewal, and recovery as untested until locally evidenced.

## Data boundaries

Handle hostname/upstream configuration, certificate state, and minimized operational logs. Do not place application secrets or member content in examples; restrict and expire DNS credentials.

## Human approvals

Application owner approves upstream behavior; DNS owner approves records; security/privacy approve exposure, headers, proxy trust, modules, and logs; incident lead approves cutover and rollback.

## Required tests

Test expected and unknown hosts, HTTP-to-HTTPS, intended upstream, unavailable upstream, certificate issuance/loading and monitoring, approved log behavior, clean rebuild, and restoration of the prior route.

## Backup and rollback

Protect reviewed configuration and required state. Preserve prior DNS/proxy values; restore them and verify application behavior before revoking temporary credentials.

## Expert review

Require network/security expertise for public administrative systems, layered proxies/CDNs, mutual TLS, modules, or HA; require privacy/legal review for identifiable log retention.
