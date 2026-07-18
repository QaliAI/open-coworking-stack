# Web app AGENTS

Astro + Starlight documentation site.

## Rules

1. Do not hand-edit `src/content/docs/tools/generated` or `stacks/generated` — run `pnpm generate`.
2. Editorial pages live under `src/content/docs/` outside `generated/`.
3. Prefer accessible HTML; test keyboard access on the directory filters.
4. Keep marketing claims out of copy; link to catalog verification notes.

## Commands

```bash
pnpm --filter @ocs/web dev
pnpm --filter @ocs/web build
```
