# Exit strategy

1. Inventory every hostname, upstream, header, timeout, limit, redirect, log rule, module, certificate path, DNS record, and firewall dependency.
2. Configure and test a replacement proxy in staging without changing production traffic.
3. Approve a DNS/routing change and preserve a return path.
4. Cut over, verify application login and critical flows, then reconcile monitoring.
5. Retain logs only under policy; revoke DNS/API credentials and remove obsolete certificate material safely.
6. Archive the final reviewed mapping and incident evidence.

Human owners decide the cutover and destruction timing. Portability is configuration-dependent; this pack does not claim automatic conversion to another proxy.
