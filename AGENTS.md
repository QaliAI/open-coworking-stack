# AGENTS.md — Open Coworking Stack

Instructions for AI coding agents and human contributors working in this repository.

## Mission

Build and maintain a **verified, coworking-specific technology directory** — not a generic awesome list, not a SaaS product, not a code dump of upstream projects.

## Hard rules

1. **Do not vendor upstream projects.** Link to official repos; keep only metadata, guides, recipes, and examples here.
2. **Do not mislabel licenses.** Use the `license_class` enum. Prefer conservative classification.
3. **Do not invent facts.** Pricing, stars, certifications, free tiers, and integrations must come from official sources or be marked `unverified`.
4. **Do not publish private/franchise-specific data.** Stay brand-neutral.
5. **Do not claim software replaces staff.** Use `tasks_reduced_or_augmented` and keep human oversight explicit.
6. **Keep the content model Git-first.** YAML/Markdown are canonical. Future APIs must mirror this model.

## Repository map

| Path                  | Owns                                                   |
| --------------------- | ------------------------------------------------------ |
| `catalog/`            | Canonical tool, stack, workflow YAML + JSON Schema     |
| `packages/schema`     | Zod schemas + shared TypeScript types                  |
| `packages/validators` | CLI validation + freshness checks                      |
| `packages/generators` | Docs/JSON generation from catalog                      |
| `packages/shared`     | Shared utilities                                       |
| `apps/web`            | Astro + Starlight documentation site                   |
| `guides/`             | Human-written implementation guides                    |
| `stacks/`             | Reference stack definitions (also mirrored in catalog) |
| `compose/`            | Docker Compose starter packs                           |
| `docs/`               | Architecture, taxonomy, security, ops guidance         |
| `scripts/`            | Helper scripts                                         |

## Agent workflow

1. Read relevant `AGENTS.md` files in the package you touch.
2. Prefer smallest change that preserves schema validity.
3. After catalog edits: `pnpm validate && pnpm generate && pnpm test`.
4. After site edits: `pnpm --filter @ocs/web build` (or full `pnpm check`).
5. Do not commit secrets. Do not force-push `main`.

## Quality bar for tool entries

- Official homepage + repository/docs URLs
- License class + SPDX when applicable + verification date
- Coworking-relevant categories, roles, workflows
- Realistic cost model notes (even if qualitative)
- Explicit `tasks_reduced_or_augmented` (not “replaces CM”)
- Data held + privacy/security notes
- Smallest useful experiment

## Preferred stack

Node 20+, pnpm, TypeScript strict, Astro, Starlight, Zod, Vitest, GitHub Actions, GitHub Pages.
