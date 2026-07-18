# Configuration checklist

- [ ] Record old DNS TTL/value, proxy config, certificates, firewall, and owner.
- [ ] Pin the selected Caddy distribution/version through the operator's normal process.
- [ ] Use one exact staging hostname and one intended upstream.
- [ ] Restrict configuration and secret write access.
- [ ] Expose only approved ports; keep admin interfaces non-public.
- [ ] Review proxy trust and application base URL/HTTPS behavior together.
- [ ] Approve request limits, timeouts, headers, and log fields explicitly.
- [ ] Inventory every non-standard module and its source/license.
- [ ] Route certificate/upstream alerts to named people.
- [ ] Store a reviewed prior-route procedure outside the proxied app.
- [ ] Obtain application, DNS, security/privacy, and change-window approvals.
