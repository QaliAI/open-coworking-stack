# Security review

Review host hardening and updates, network exposure, admin endpoint reachability, file/secret permissions, DNS credential scope, TLS settings against current official guidance, forwarded-header trust, redirect behavior, request limits, error disclosure, log content, monitoring, and module provenance.

The security owner must approve the exact configuration diff before cutover. The application owner must confirm its own authentication, authorization, secure-cookie, and base-URL settings; Caddy cannot supply those controls automatically.

Get specialist review for Internet-facing admin apps, another proxy/CDN in front, mutual TLS, client-certificate identity, custom modules, or HA. Record findings and unresolved risks; this pack contains no penetration-test or production-security evidence.
