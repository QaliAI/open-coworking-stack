# Roadmap

Checked items mean that the named artifact exists in the current working tree. They do not imply a
successful hosted CI run, a live deployment, or independent verification of every catalog claim.

## v0.1 — Foundation (current)

- [x] Monorepo with pnpm workspaces, TypeScript, Vitest
- [x] Runtime tool / stack / workflow schemas with Zod
- [x] JSON Schema mirrors for the catalog schemas
- [x] Seed catalog of 100+ tools with explicit verification metadata
- [x] 25 full implementation guides, 26 evaluation stubs, and honest planned-guide metadata
- [x] Complete role-based and category-based navigation coverage across the taxonomies
- [x] Initial problem-based navigation
- [x] Initial comparison page and four catalog-backed reference stacks
- [x] Five validated Docker Compose starter packs with security and restore guidance
- [x] Astro + Starlight documentation site source with Pagefind provided by Starlight
- [ ] Reproducible clean-checkout install and full site build verified in hosted CI
- [x] GitHub Actions definitions for CI, Pages deployment, link checking, and freshness
- [x] Issue forms, pull request template, Dependabot, and community policy documents
- [x] ADR index, template, and Git-first content-model decision
- [x] Definitions for all 20 workflow taxonomy values and three integration recipes

## v0.2 — Operator depth

- [ ] Add and verify implementation guides, starting with the highest-priority tools
- [ ] Add more multi-tool integration recipes (billing ↔ access ↔ CRM)
- [ ] Operator interview notes / anonymized case studies
- [ ] Accessibility audit of the docs site
- [ ] Localized landing page summaries (ES, FR, DE, PT)

## v0.3 — Data platform (optional)

- [ ] Supabase-backed read API mirroring Git catalog (no rewrite of content model)
- [ ] Public JSON export endpoints versioned by schema
- [ ] Optional community “verification vote” signals (non-authoritative)

## Explicit non-goals (near term)

- Building a SaaS competitor to coworking management platforms
- Vendoring upstream application source code
- Accepting paid placement in rankings
- Storing member PII or private franchise playbooks
