# Open Coworking Stack — Free Tools for Coworking

Open Coworking Stack is a free, Git-first directory of technology for coworking and flexible-workspace
operators. It catalogs free, open-source, and freemium software for **sales, marketing, operations,
member experience, finance and administration, and technology and security**, with structured catalog
records, coworking-specific evaluation guidance, reference stacks, and a generated Astro/Starlight
documentation site.

This repository is a directory and implementation resource, not a hosted SaaS product and not a copy
of the projects it describes. Upstream software remains in its official repositories and under its own
license.

> **Release status (2026-10-22):** v0.1.0 is released. The repository is public on GitHub at
> [`QaliAI/open-coworking-stack`](https://github.com/QaliAI/open-coworking-stack) and the generated
> documentation site is live at <https://open-coworking-stack.vercel.app>. Listings are not
> endorsements; re-check official pricing, licensing, privacy, and security sources before any
> production decision.

## Start here — browse without installing anything

This is a **directory**, not a hosted coworking application. You do **not** need Node.js, Docker, a
database, or paid software to use the reference material.

- **[Open the documentation site](https://open-coworking-stack.vercel.app):** the generated directory,
  comparisons, role pages, and the Stack Builder.
- **[Browse the tool catalog](catalog/tools/):** 116 categorized tool records, including conservative
  licensing and verification notes. A listing is not an endorsement or a claim that every price or
  integration has been independently checked.
- **[Read the implementation guides](guides/):** operational guidance and evaluation checklists for
  choosing software that fits your workspace.
- **[Compare reference stacks](catalog/stacks/):** sample combinations and tradeoffs, not universal
  prescriptions.
- **[Explore starter Compose packs](compose/):** optional technical examples for people who want to
  self-host; these are not plug-and-play production deployments.

Use the files directly on GitHub, or download the repository ZIP. The optional Astro documentation
website and local build instructions below are for maintainers and developers.

## Architecture

```text
catalog/**/*.yaml (canonical records)
            |
            +--> packages/schema       Zod schemas and shared types
            +--> packages/validators   schema, business-rule, and freshness checks
            +--> packages/generators   derived MDX/Markdown and JSON
                         |
                         +--> apps/web  Astro + Starlight static site
```

| Path                         | Responsibility                                            |
| ---------------------------- | --------------------------------------------------------- |
| `catalog/tools/`             | Canonical tool records and the tool template              |
| `catalog/stacks/`            | Canonical reference-stack records                         |
| `catalog/workflows/`         | Canonical workflow records                                |
| `packages/schema/`           | Runtime Zod schemas and TypeScript types                  |
| `packages/validators/`       | Catalog validation and freshness CLI                      |
| `packages/generators/`       | Documentation and JSON generation                         |
| `apps/web/`                  | Astro/Starlight documentation application                 |
| `apps/web/src/content/docs/` | Editorial site content plus generated content directories |
| `docs/architecture/`         | Repository-level architecture decision records (ADRs)     |

See [`docs/architecture/`](docs/architecture/) for architecture decisions and
[`ROADMAP.md`](ROADMAP.md) for implementation status.

## Canonical And Generated Data

YAML under `catalog/` is canonical. Editorial Markdown outside a `generated/` directory is maintained
by people. JSON Schema mirrors under `catalog/schema/` are derived from the Zod schemas and must stay
in sync with them; they are contract artifacts, not a second catalog data source.

The following site paths are derived by `pnpm generate` and are intentionally ignored by Git:

- `apps/web/src/content/docs/tools/generated/`
- `apps/web/src/content/docs/stacks/generated/`
- `apps/web/src/content/docs/workflows/generated/`
- `apps/web/src/content/docs/guides/tools/`
- `apps/web/src/content/docs/integrations/generated/`
- `apps/web/public/data/`

Do not hand-edit those generated paths. Change the canonical catalog or generator, run the generator,
and inspect the resulting local site. CI and Pages builds generate these artifacts in their own clean
workspace.

## Prerequisites

- Node.js 22, matching `.nvmrc` and the GitHub workflows
- Corepack
- pnpm 9.15.0, matching the `packageManager` field and CI

Prepare the package manager and install the locked dependency graph:

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install --frozen-lockfile
```

## Run Locally

Validate canonical data, create generated content, and start Astro:

```bash
pnpm validate
pnpm generate
pnpm dev
```

Astro prints the local URL when it starts (normally `http://localhost:4321`). To test a production
build instead:

```bash
pnpm build
pnpm --filter @ocs/web preview
```

## Scripts

Run commands from the repository root.

| Command                      | Purpose                                                        |
| ---------------------------- | -------------------------------------------------------------- |
| `pnpm dev`                   | Start the documentation site development server                |
| `pnpm format`                | Write Prettier formatting changes                              |
| `pnpm format:check`          | Check Prettier and Markdown formatting without modifying files |
| `pnpm lint`                  | Run workspace lint scripts, Prettier checks, and Markdownlint  |
| `pnpm typecheck`             | Type-check every workspace package                             |
| `pnpm validate`              | Validate catalog YAML and business rules                       |
| `pnpm generate`              | Generate derived site documents and JSON exports               |
| `pnpm test`                  | Run workspace Vitest suites                                    |
| `pnpm test:e2e`              | Build, preview, and run focused Chromium browser tests         |
| `pnpm test:a11y`             | Build, preview, and run serious/critical axe checks            |
| `pnpm build`                 | Build packages and the documentation site                      |
| `pnpm check`                 | Run validation, generation, tests, and build                   |
| `pnpm freshness`             | Report records whose verification review is stale              |
| `pnpm link-check`            | Download checksum-verified Lychee 0.24.2; check external links |
| `pnpm release:evidence`      | Generate unsigned SBOM, license inventory, and checksums       |
| `pnpm scan:reference-images` | Run an advisory scan of Compose reference image tags           |

Install the local Chromium test browser once with
`pnpm --filter @ocs/web exec playwright install chromium`. Playwright builds and previews the static
site for local browser runs. CI reuses its preceding production build.

The CI workflow runs formatting checks, lint, type-checking, validation, generation, unit tests, the
production build, browser tests, and accessibility tests as separate steps so failures are
attributable. Release evidence and reference-image scans run in separately labeled workflows because
neither is a deployment or runtime certification.

## GitHub Pages

The public site is deployed on Vercel at <https://open-coworking-stack.vercel.app>.
`.github/workflows/deploy-pages.yml` is preserved for GitHub Pages as an alternative. A hosted run for
commit `e107548` failed before the build at `actions/configure-pages`: GitHub's Pages API returned
`404` because Pages was not enabled/configured for the then-private repository. This was a
repository/account configuration blocker, not evidence of a site build failure. No Pages deployment
occurred.

If the repository owner later authorizes Pages:

1. Confirm the chosen GitHub plan and private-repository Pages availability.
2. In repository Pages settings, enable Pages with **GitHub Actions** as the source.
3. Ensure Actions has permission to deploy Pages.
4. Manually dispatch the workflow for an approved ref before enabling push-driven publication.

The workflow derives `PUBLIC_BASE_PATH` as `/<repository-name>` for normal project Pages and as an
empty path for a repository named `<owner>.github.io`. Set a repository Actions variable named
`PUBLIC_BASE_PATH` to a nonempty slash-prefixed value to override that behavior, for example `/docs`
or `/` for a root/custom-domain deployment. No secret is required. The actual deployment URL is
reported by GitHub after a successful run.

See the site [deployment options](apps/web/src/content/docs/guides/deployment-options.md) for Pages,
Vercel, and Netlify build settings.

## Release Engineering

- [`CHANGELOG.md`](CHANGELOG.md) records repository changes; v0.1.0 notes are in
  [`docs/project/V0.1_RELEASE_NOTES.md`](docs/project/V0.1_RELEASE_NOTES.md).
- [`docs/project/RELEASE_PROCESS.md`](docs/project/RELEASE_PROCESS.md) defines evidence and approvals.
- [`docs/project/RELEASE_READINESS.md`](docs/project/RELEASE_READINESS.md) records current blockers.
- [`docs/project/PRIVATE_PREVIEW_CHECKLIST.md`](docs/project/PRIVATE_PREVIEW_CHECKLIST.md) keeps preview
  access deliberate.
- [`docs/project/PUBLIC_LAUNCH_CHECKLIST.md`](docs/project/PUBLIC_LAUNCH_CHECKLIST.md) gates publication.
- [`docs/project/ROLLBACK.md`](docs/project/ROLLBACK.md) covers static-site rollback.

The release-evidence workflow uploads unsigned build evidence for 14 days. SHA-256 checksums establish
file integrity only; this repository does not currently claim artifact signing or provenance.
SBOM and reference-image commands require a running Docker engine for their pinned Syft and Trivy
containers.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before changing catalog records. Contributions must use
official sources where possible, classify licensing conservatively, distinguish verified facts from
unknowns, and describe how software augments work while retaining human oversight.

## Security And Licensing

Do not put credentials, private member data, or exploitable vulnerability details in catalog records,
issues, examples, or workflows. Report repository vulnerabilities through the private path described
in [`SECURITY.md`](SECURITY.md). Publicly disclosed concerns about a catalog listing can use the
catalog security issue form.

- Code, schemas, scripts, and site application code: MIT, see [`LICENSE-CODE`](LICENSE-CODE)
- Editorial content: CC BY 4.0, see [`LICENSE-CONTENT`](LICENSE-CONTENT)
- Upstream projects: their respective licenses; a catalog classification does not relicense them

The directory is informational. Re-check official pricing, licensing, privacy, and security sources
before making a production decision.
