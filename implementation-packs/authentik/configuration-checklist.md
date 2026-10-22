# Authentik configuration checklist

- [ ] Exact Authentik and outpost versions recorded and supported
- [ ] Edition/license requirements confirmed from official sources
- [ ] TLS hostname, reverse-proxy trust, and time sync reviewed
- [ ] Docker socket removed, proxied, or explicitly risk-accepted if relevant
- [ ] PostgreSQL, `/data`, and other applicable state locations recorded
- [ ] Admin accounts separated from routine accounts and protected by MFA
- [ ] Break-glass credential stored outside the primary identity path
- [ ] One provider/application, callback, claims, logout, and secret owner recorded
- [ ] Group/policy matches the approved app access matrix
- [ ] Email/recovery behavior tested without exposing secrets
- [ ] Events, retention, monitoring, and alert owners defined
- [ ] Previous app login retained through acceptance

Every unchecked item is a deployment blocker or an explicitly accepted exception. Configuration has not been applied by this pack.
