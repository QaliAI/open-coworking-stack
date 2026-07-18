# Security review

Review dashboard/setup exposure, TLS/proxy and WebSocket behavior, named admin access, target-creation permissions, network egress, internal-address reachability, DNS behavior, authenticated headers/credentials, notification tokens, public status routes, logs/history, backups, updates, and host hardening.

Treat monitor creation as a network-probing capability. Reject readiness if an unfinished setup screen is public, tokens are embedded in labels/URLs, broad credentials are used, internal details reach public status, or one host failure disables both service and monitoring without an accepted fallback.

Require security/network review for internal/authenticated probes, webhooks, internet exposure, or automated remediation. This agenda is not a penetration test or proof against SSRF, credential disclosure, or provider abuse.
