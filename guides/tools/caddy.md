---
title: Caddy for coworking self-hosted services
tool_id: caddy
guide_status: full
verified_on: 2026-07-17
---

# Caddy for coworking self-hosted services

Caddy is a reverse proxy with automatic HTTPS. In a coworking stack, use it first in front of one staging application, with deliberate access-log handling and a tested route back to the prior proxy.

**Manual tasks reduced:** approved certificate renewal and repeatable routing configuration. A person still owns DNS changes, public exposure, application authorization, incident diagnosis, and rollback.

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

## Automation and approval boundaries

Caddy may automate certificate acquisition/renewal and apply approved routing configuration. It must not decide who is entitled to an application, silently add a public hostname, enable request logging without the privacy owner's approval, or replace application authorization. A named proxy owner proposes changes; the application owner approves upstream behavior; the DNS owner approves record changes; security approves public exposure, trust-proxy behavior, headers, modules, and log handling; the incident lead approves production rollback.

## Acceptance, operations, and failure handling

Required staging evidence is: valid HTTP redirects to HTTPS; the expected host reaches only the intended upstream; an unknown host is not routed to the app; an unavailable upstream fails without exposing internals; approved request-size and timeout behavior works where configured; logs match the approved minimization/rotation rule; certificate issuance or loading succeeds; renewal is monitored; and the previous route can be restored. Re-run routing, TLS, log, and rollback checks after a Caddy, module, DNS, firewall, or application proxy-setting change.

During an incident, freeze unrelated changes, preserve timestamps and the reviewed configuration, decide whether the fault is DNS, TLS, Caddy, network, or application, and use the pre-approved prior route if the recovery objective is at risk. Staff use the documented service-status and manual communication route while the app is unavailable; Caddy is not itself a business-process fallback.

## Professional help threshold

Obtain experienced network/security help before exposing member or administrative systems, accepting client IP headers through another proxy/CDN, adding third-party modules, handling mutual TLS, or designing high availability. Obtain privacy or legal review before retaining identifiable access logs beyond the approved operational need. These reviews are decisions by qualified people, not evidence supplied by this guide.

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

## Flagship requirement coverage (33 points)

1. **Coworking purpose:** protect and route one operator-run staging service.
2. **Outcome:** reliable HTTPS and reversible routing, not a claim of application security.
3. **Good fit:** DNS-controlled, technically operated self-hosting.
4. **Non-fit:** authentication replacement, unreviewed public cutover, or unmanaged logging.
5. **Named owners:** proxy, application, DNS, security, privacy, and incident owners.
6. **Prerequisites:** hostname, upstream, firewall, health behavior, and prior route inventory.
7. **Skills:** DNS, TLS, HTTP proxying, host operations, monitoring, and incident response.
8. **License:** `Apache-2.0`; custom modules require their own review.
9. **Cost model:** software, host, setup, maintenance, modules, and support tracked separately.
10. **Official sources:** homepage, repository, and documentation are linked and dated.
11. **Evidence limit:** no production capacity, integration, renewal, or recovery result is claimed.
12. **Data map:** config, certificates, logs, and DNS are mapped above.
13. **Privacy:** access logs are minimized and retained only under an approved rule.
14. **Security:** admin access, credentials, ports, headers, trust, and modules are reviewed.
15. **Compliance:** privacy/legal help is triggered by identifiable log retention.
16. **Allowed automation:** approved TLS lifecycle and routing configuration.
17. **Prohibited decisions:** entitlement, public exposure, and log-retention decisions stay human.
18. **Human approvals:** app, DNS, security/privacy, and incident approvals are explicit.
19. **Smallest experiment:** one staging hostname and application.
20. **Implementation:** capture state, configure, test, approve, and rehearse rollback.
21. **Configuration baseline:** minimal reviewed config with versioned ownership.
22. **Integrations:** no DNS, app, or monitoring integration is asserted as verified.
23. **Exceptions:** unknown hosts, upstream outage, and certificate failure are tested.
24. **Acceptance tests:** routing, TLS, failure, logs, and rollback must pass in staging.
25. **Monitoring:** certificate and upstream health have named alert recipients.
26. **Routine operations:** changes and modules follow review; tests repeat after material changes.
27. **Backup:** reviewed config and required state are protected and reproducible.
28. **Restore:** clean rebuild verifies routing, TLS, logs, and dependencies.
29. **Upgrade:** official release guidance and module compatibility are reviewed first.
30. **Rollback:** restore the prior route and verify the application before cleanup.
31. **Exit:** retain host/upstream mapping, DNS values, log policy, and certificate dependencies.
32. **Manual fallback:** staff communications continue outside the unavailable proxied service.
33. **Expert review and cadence:** re-review after exposure/module changes and at the operator's approved interval.
