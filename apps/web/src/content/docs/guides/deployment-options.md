---
title: Deployment options
description: GitHub Pages default plus optional Vercel/Netlify notes for this documentation site.
---

## Documentation site (this project)

### GitHub Pages (default, no-cost)

Workflow: `.github/workflows/deploy-pages.yml`

This checkout currently has no commits or configured remote, so no Pages URL is asserted to be live.
After hosting the repository on GitHub:

1. Use `main` as the hosted default branch.
2. Enable GitHub Pages with **GitHub Actions** as the source.
3. Push to `main` or manually dispatch the workflow.
4. Read the deployment URL from the completed workflow.

The workflow validates the catalog and generates catalog artifacts before building the web workspace.
It automatically uses `/<repo>` as the base path for project Pages and an empty base for a repository
named `<owner>.github.io`. To override this, set the repository Actions variable `PUBLIC_BASE_PATH` to
a nonempty slash-prefixed value such as `/docs`, or use `/` for a root/custom-domain deployment:

```text
PUBLIC_BASE_PATH=/docs
```

This is configuration, not a secret. The same environment variable can be set locally when testing a
subpath build.

### Vercel

1. Import the Git repository.
2. Root directory: repository root.
3. Runtime: Node.js 22 and pnpm 9.15.0.
4. Install: `corepack enable && corepack prepare pnpm@9.15.0 --activate && pnpm install --frozen-lockfile`
5. Build: `pnpm validate && pnpm build` (`pnpm build` includes generation)
6. Output: `apps/web/dist`

### Netlify

Use the same install and build commands; set the publish directory to `apps/web/dist` and Node.js to 22. Confirm the provider's pnpm/Corepack settings rather than adding a package-manager token.

## Application workloads (catalog tools)

Prefer:

1. Managed SaaS when you lack ops capacity.
2. Single VPS + Docker Compose for small self-host stacks.
3. Separate backup target always.

See `compose/` starter packs—**templates**, not hardened production.
