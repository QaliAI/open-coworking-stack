# Post-release backlog

Everything here is explicitly **non-blocking** for v0.1.0. None of these items gate the public
release; they are candidates for later maintenance and content passes.

## Maintenance

- Dependabot major upgrades (Astro 7.x, @astrojs/starlight 0.41.x, Vitest 4.x, Zod 4.x,
  markdownlint-cli2 0.23.x, actions/* bumps). Let Dependabot regenerate them against the new
  `main` and land them one at a time; these are not current security fixes.
- Rerun CodeQL on the now-public repository and triage any findings (code scanning availability was
  a private-repository platform limitation at release time).
- Freshness pass: bring `verification.last_reviewed` dates within the 90-day window (`pnpm freshness`).
- Release-evidence hardening: artifact signing (Sigstore) and signed tags; SBOM/checksums remain
  unsigned by design today.

## Content

- Convert the 26 installation-guide stubs into full guides; write guides for the remaining tools.
- Expand comparison depth beyond the current 22 pages and add sourced evidence markers to more
  flagships.
- Grow the catalog beyond 116 tools (new candidates go through the same official-source and
  conservative-license rules).
- Operator interviews and real-workspace validation of the Start Here pathway (deliberately deferred
  from v0.1.0).

## Product / Stack Builder

- Rebuild the builder's editorial tool mapping as catalog-derived data (currently a fixed editorial
  mapping, disclosed on the builder page).
- Remaining builder questions from the independent QA report (P1-5).
- More estimator scenarios and sensitivity views.

## Infrastructure

- Production hardening and runtime testing of the Compose starter packs (they ship as
  demonstrations with placeholder secrets and no off-host backups).
- Decide whether to keep GitHub Pages as a secondary deployment target or archive the workflow.
- Lint depth: workspace lint scripts are currently minimal; add real lint rules deliberately.

## Distribution

- Publish the drafts in `docs/project/DISTRIBUTION_ASSETS.md` (launch post, comparison blurbs) once
  the owner approves the wording. No adoption numbers may be claimed.
