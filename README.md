# Open Coworking Stack

**Free and open-source software for running a coworking space, explained in plain English.**

A free resource from [CoworkingSpace.ai](https://www.coworkingspace.ai/).

[**Browse the tools →**](https://open-coworking-stack.vercel.app/directory/) ·
[Setup guides](https://open-coworking-stack.vercel.app/guides/) ·
[Build my tech stack](https://open-coworking-stack.vercel.app/stack-builder/) ·
[Get setup help](https://www.coworkingspace.ai/)

---

## What this is

Running a coworking space means juggling tours, room bookings, member agreements, invoices,
newsletters, Wi-Fi, door access and a lot of follow-up. There are good free and open-source tools for
almost all of it, but they are hard to find and harder to compare.

Open Coworking Stack is a curated list of those tools, written for coworking owners, community
managers and operations teams. For each tool it tells you:

- **What it does for a coworking space**, in everyday language
- **What it really costs**: free, free with paid upgrades, or paid
- **How hard it is to set up** and whether you need your own server
- **What your team still does by hand**, because software helps your staff, it does not replace them
- **Where to get it**: links to the official website and source code

No sign-up. Nobody pays to be listed.

## Find a tool for the job

| You want to…                                         | Start here                                                                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Track leads, tours and follow-ups                    | [Sales & CRM](https://open-coworking-stack.vercel.app/directory/?collection=sales-crm)                             |
| Let prospects book a tour online                     | [Tours & Scheduling](https://open-coworking-stack.vercel.app/directory/?collection=tours-scheduling)               |
| Let members book desks and meeting rooms             | [Desks & Meeting Rooms](https://open-coworking-stack.vercel.app/directory/?collection=desks-rooms)                 |
| Send agreements for e-signature, keep a house manual | [Documents & E-Signatures](https://open-coworking-stack.vercel.app/directory/?collection=documents-signatures)     |
| Send invoices and take payments                      | [Finance & Billing](https://open-coworking-stack.vercel.app/directory/?collection=finance-billing)                 |
| Run your website, newsletter and social posts        | [Marketing & SEO](https://open-coworking-stack.vercel.app/directory/?collection=marketing-seo)                     |
| Run events and keep members talking                  | [Events & Community](https://open-coworking-stack.vercel.app/directory/?collection=events-community)               |
| Connect your apps so data moves on its own           | [Automation & AI](https://open-coworking-stack.vercel.app/directory/?collection=automation-ai)                     |
| Log mail and packages for virtual-office members     | [Virtual Office & Mailroom](https://open-coworking-stack.vercel.app/directory/?collection=virtual-office-mailroom) |
| Track equipment and maintenance                      | [Facilities & Assets](https://open-coworking-stack.vercel.app/directory/?collection=facilities-assets)             |
| See website traffic and how the space is used        | [Analytics & Reporting](https://open-coworking-stack.vercel.app/directory/?collection=analytics-reporting)         |
| Sort out Wi-Fi, door access, passwords and backups   | [IT & Security](https://open-coworking-stack.vercel.app/directory/?collection=it-security)                         |

## Good places to start

These tools have been reviewed in depth and each has a step-by-step setup guide.

| Job                                         | Tool                                                                             | Cost                     |
| ------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------ |
| Let prospects book tours online             | [Cal.com](https://open-coworking-stack.vercel.app/guides/tools/cal-com/)         | Free plan, paid upgrades |
| Let members book desks and rooms            | [Seatsurfing](https://open-coworking-stack.vercel.app/guides/tools/seatsurfing/) | Free, you host it        |
| Answer website chat and member messages     | [Chatwoot](https://open-coworking-stack.vercel.app/guides/tools/chatwoot/)       | Free core, paid extras   |
| Keep house rules and staff how-tos together | [BookStack](https://open-coworking-stack.vercel.app/guides/tools/bookstack/)     | Free, you host it        |
| Send the member newsletter                  | [listmonk](https://open-coworking-stack.vercel.app/guides/tools/listmonk/)       | Free, you host it        |
| Connect your apps so data moves on its own  | [n8n](https://open-coworking-stack.vercel.app/guides/tools/n8n/)                 | Free core, paid extras   |
| See how people find your website            | [Umami](https://open-coworking-stack.vercel.app/guides/tools/umami/)             | Free plan, paid upgrades |
| Share staff passwords safely                | [Vaultwarden](https://open-coworking-stack.vercel.app/guides/tools/vaultwarden/) | Free, you host it        |

## How to use it

1. **Pick one job.** Start with the task that eats the most time. Don't try to replace everything at
   once.
2. **Compare a few options.** Each listing shows the price, setup effort and what your team still
   handles. The [side-by-side comparisons](https://open-coworking-stack.vercel.app/comparisons/) help.
3. **Try it small.** Test with one location, a few friendly members or dummy data before you move
   everyone over.

You don't need to install anything to use this project. Everything is on the
[website](https://open-coworking-stack.vercel.app/). This GitHub repository is where the listings
are maintained.

## Good to know

- **Free doesn't mean zero work.** Self-hosted tools need a server and someone to keep them updated
  and backed up.
- **Paid tools are labelled.** Some listings are paid products, included so you can compare.
- **Some listings are still being checked.** Tools marked "Not yet reviewed" look promising, but
  confirm pricing and features on the official site before you commit.
- **Listings are not endorsements.** Prices and plans change; always check the official site. See the
  [disclaimer](DISCLAIMER.md).

## Want help setting it up?

[CoworkingSpace.ai](https://www.coworkingspace.ai/) helps coworking operators choose, install and
connect these tools: tour booking, CRM, room booking, billing, member communication and automation.
[Get in touch](https://www.coworkingspace.ai/) and we'll suggest a practical starting stack for your
space.

## Suggest a tool or a fix

Know a tool we missed, or spotted something out of date?
[Open an issue](https://github.com/QaliAI/open-coworking-stack/issues) or see
[CONTRIBUTING.md](CONTRIBUTING.md).

---

## For contributors and developers

Everything below is for people who maintain the listings or the website. Coworking operators can
stop reading here.

This repository is a directory and implementation resource, not a hosted SaaS product and not a copy
of the projects it describes. Upstream software stays in its official repositories under its own
license. Tool records live in [`catalog/tools/`](catalog/tools/), reference stacks in
[`catalog/stacks/`](catalog/stacks/), operational guidance in [`guides/`](guides/), and optional
self-hosting examples in [`compose/`](compose/). The Compose packs are technical starting points,
not plug-and-play production deployments.

### Architecture

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

### Canonical And Generated Data

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

### Prerequisites

- Node.js 22, matching `.nvmrc` and the GitHub workflows
- Corepack
- pnpm 9.15.0, matching the `packageManager` field and CI

Prepare the package manager and install the locked dependency graph:

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install --frozen-lockfile
```

### Run Locally

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

### Scripts

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

### GitHub Pages

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

### Release Engineering

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

### Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before changing catalog records. Contributions must use
official sources where possible, classify licensing conservatively, distinguish verified facts from
unknowns, and describe how software augments work while retaining human oversight.

### Security And Licensing

Do not put credentials, private member data, or exploitable vulnerability details in catalog records,
issues, examples, or workflows. Report repository vulnerabilities through the private path described
in [`SECURITY.md`](SECURITY.md). Publicly disclosed concerns about a catalog listing can use the
catalog security issue form.

- Code, schemas, scripts, and site application code: MIT, see [`LICENSE-CODE`](LICENSE-CODE)
- Editorial content: CC BY 4.0, see [`LICENSE-CONTENT`](LICENSE-CONTENT)
- Upstream projects: their respective licenses; a catalog classification does not relicense them

The directory is informational. Re-check official pricing, licensing, privacy, and security sources
before making a production decision.
