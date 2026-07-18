# Configuration checklist

- [ ] Domain registrar, DNS records, TLS/renewal, host, and emergency access owned
- [ ] Staging is access-controlled, uses synthetic data, and is not indexed
- [ ] Core/runtime/theme/plugin versions and official sources inventoried
- [ ] Individual least-privilege users and contractor expiry reviewed
- [ ] Unused themes/plugins removed; install/update permissions restricted
- [ ] Form fields, validation, storage, email/destination, spam, retention, and fallback approved
- [ ] No payment or unnecessary sensitive data accepted
- [ ] Redirects, canonical URLs, privacy/accessibility/contact content reviewed
- [ ] Backup, restore, update, rollback, form, TLS, and availability monitoring tested
- [ ] Production secrets differ from staging and are not in repository or evidence

Every dependency and data destination requires its own evidence; do not mark core verification as plugin verification.
