---
title: Deployment options
description: Confirmed GitHub Pages blocker plus safe local, Vercel, and Netlify preview settings.
---

## Documentation site (this project)

### Local preview (private by default)

```bash
pnpm build
pnpm --filter @ocs/web preview --host 127.0.0.1
```

Keep the loopback bind for a machine-local review. A provider preview is not private merely because
its URL is hard to guess; enable and verify provider access protection before sharing it.

### GitHub Pages (preserved, currently blocked)

Workflow: `.github/workflows/deploy-pages.yml`

The private `QaliAI/open-coworking-stack` repository exists with default branch `main`. Hosted CI passed
for the initial `main` commit. The Pages run for that commit failed before build at
`actions/configure-pages`: the Pages API returned `404` because no Pages site is enabled/configured for
the private repository. No deployment or public URL resulted.

After explicit repository-owner authorization:

1. Confirm the GitHub plan supports Pages for the private repository.
2. Enable GitHub Pages with **GitHub Actions** as the source without changing visibility incidentally.
3. Manually dispatch the workflow for the approved ref.
4. Read and verify the deployment URL from the completed workflow.

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

Use these reviewed project settings; this is a configuration example, not a deployment:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "installCommand": "corepack enable && corepack prepare pnpm@9.15.0 --activate && pnpm install --frozen-lockfile",
  "buildCommand": "PUBLIC_BASE_PATH=/ PUBLIC_SITE_URL=https://$VERCEL_URL pnpm validate && pnpm build",
  "outputDirectory": "apps/web/dist"
}
```

Set the project root to the repository root and Node.js to 22. Before an authorized preview deploy,
enable Vercel Deployment Protection for the preview environment and verify it with a user who lacks
access. Do not store a Vercel token in this repository or assume an unlisted URL is private.

### Netlify

Equivalent `netlify.toml` settings are:

```toml
[build]
command = "PUBLIC_BASE_PATH=/ PUBLIC_SITE_URL=$DEPLOY_PRIME_URL pnpm validate && pnpm build"
publish = "apps/web/dist"

[build.environment]
NODE_VERSION = "22"
```

Use the repository root as the base, the same frozen pnpm install command shown for Vercel, and verify
Netlify's current Corepack support. Before an authorized preview deploy, require the selected Netlify
access-control feature and test denial from an unauthenticated session. Do not put a Netlify token in
the repository. If the provider does not provide suitable protection on the selected plan, use the
local-only preview instead.

Neither provider configuration is committed as a root provider file, so connecting a project cannot
accidentally deploy from this change. Add provider files only in a separately reviewed, authorized
deployment change.

## Application workloads (catalog tools)

Prefer:

1. Managed SaaS when you lack ops capacity.
2. Single VPS + Docker Compose for small self-host stacks.
3. Separate backup target always.

See `compose/` starter packs—**templates**, not hardened production.
