# Catalog AGENTS

Canonical data lives here as YAML.

## Rules

1. One tool per file: `tools/<id>.yaml` where filename matches `id`.
2. Never invent pricing, stars, certifications, or free-tier numbers.
3. Prefer official URLs in `verification.sources`.
4. Use conservative `license.class` values.
5. After edits: `pnpm validate && pnpm generate`.

## Schemas

- JSON Schema mirrors: `schema/*.schema.json` (generated or hand-maintained alongside Zod in `@ocs/schema`)
- Runtime validation: `@ocs/validators`
