# Contributing to Open Coworking Stack

Thank you for helping coworking operators make better technology decisions.

## Ways to contribute

1. **Add a tool** — open the “Add a tool” issue form, then submit a YAML entry + guide stub.
2. **Update metadata** — pricing links, license corrections, dead links, verification dates.
3. **Write or improve guides** — coworking-specific install, backup, and experiment steps.
4. **Improve stacks / workflows** — realistic low-cost reference architectures.
5. **Fix site or validator bugs** — TypeScript, Astro, CI.

## Development setup

```bash
# Requires Node.js 22 (see .nvmrc)
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install --frozen-lockfile
pnpm validate
pnpm generate
pnpm dev
```

Useful scripts:

| Command             | Purpose                                                        |
| ------------------- | -------------------------------------------------------------- |
| `pnpm format:check` | Check Prettier and Markdown formatting without writing changes |
| `pnpm lint`         | Workspace lint, formatting, and Markdown checks                |
| `pnpm typecheck`    | Type-check all workspace packages                              |
| `pnpm validate`     | Schema + business-rule validation of catalog YAML              |
| `pnpm generate`     | Regenerate derived docs and JSON exports                       |
| `pnpm test`         | Unit tests                                                     |
| `pnpm build`        | Build packages and documentation site                          |
| `pnpm check`        | validate → generate → test → build                             |
| `pnpm freshness`    | Report stale verification dates                                |
| `pnpm link-check`   | Check links when the Lychee binary is installed locally        |

## Adding a tool

1. Copy `catalog/tools/_template.yaml` to `catalog/tools/<slug>.yaml`.
2. Fill required fields. Use official sources only.
3. Set `license_class` carefully — never call something OSI open source without evidence.
4. Do not mark `guide_status` as `full` or set a `guide_path` unless the referenced guide exists.
5. Run `pnpm validate && pnpm generate && pnpm test`.
6. Open a pull request using the PR template.

Generated paths are listed in `README.md` and ignored by Git. Do not hand-edit or commit them; CI and
the Pages workflow regenerate them from the canonical catalog.

### Licensing classification

| Class                  | Meaning                                                    |
| ---------------------- | ---------------------------------------------------------- |
| `oss-osi-approved`     | OSI-approved open source license                           |
| `open-core`            | Core OSS with proprietary commercial modules               |
| `source-available`     | Source visible but not OSI open source                     |
| `fair-code`            | Fair-code / source-available with commercial restrictions  |
| `freemium-saas`        | Hosted product with free tier + paid upgrades              |
| `free-saas`            | Hosted product with a genuinely free tier for intended use |
| `free-trial`           | Time- or usage-limited trial only                          |
| `proprietary`          | Closed / commercial without a free production path         |
| `unknown-needs-review` | Needs maintainer review                                    |

### Do not invent facts

If you cannot verify a value, set it to `unverified` (or omit optional fields) and note what is unknown in `verification.notes`.

## Code and content licenses

- Code, schemas, scripts: MIT (`LICENSE-CODE`)
- Editorial content: CC BY 4.0 (`LICENSE-CONTENT`)

## Code of conduct

Participation is governed by `CODE_OF_CONDUCT.md`.

## Security

See `SECURITY.md`. Do not file public issues for exploitable vulnerabilities in this repo.
