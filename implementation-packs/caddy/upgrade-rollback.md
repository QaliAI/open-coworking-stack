# Upgrade and rollback

Before upgrade, read current official release/upgrade notes, inventory Caddy and modules, back up and validate configuration, confirm capacity, and repeat staging routing/TLS/failure tests. Application, proxy, and security owners approve the window.

Stop on configuration adaptation, module incompatibility, certificate failure, changed headers, route mismatch, or error-rate increase. Roll back the binary/image and configuration through the operator's approved deployment method; if service remains at risk, restore the prior DNS/proxy route. Verify the app before cleanup.

Exact commands are deployment-specific and intentionally not asserted here.
