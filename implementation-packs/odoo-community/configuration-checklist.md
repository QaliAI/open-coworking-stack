# Configuration Checklist

- [ ] Record exact Community version, source/package, commit/tag, PostgreSQL, and OS/container method.
- [ ] Confirm required technical modules in that version's Community source; do not infer from Enterprise pages.
- [ ] Keep a strict module allowlist and no third-party add-on during the first evaluation.
- [ ] Build isolated staging with synthetic database, TLS, and restricted administrator access.
- [ ] Create separate sales, finance-review, and administrator test users.
- [ ] Configure at most four approved stages and deterministic required fields.
- [ ] Use three synthetic coworking products only; document that tax/pricing are fixtures.
- [ ] Set locale/time zone/currency only as explicit test assumptions.
- [ ] Disable real email, payment, bank, booking, and access integrations.
- [ ] Preserve unique External IDs; test imports before approval and back up before destructive import.
- [ ] Inventory config, database, filestore, modules, custom code, logs, and backup paths.
- [ ] Keep production and major-version upgrade out of scope.
