# Next session

Read `docs/project/RELEASE_READINESS.md` first; it is the source of truth for state.

## Where things stand (2026-10-20)

- Work is on local branch `release/final-readiness-v0.1`, branched from `release/operator-product-v0.1`
  (PR #11 head `52d356b`). **Nothing has been pushed.** Commits: license corrections, link repairs,
  CI/format fixes, web feature + a11y fixes, docs.
- A protected Vercel preview exists: project `open-coworking-stack` (team `qaliais-projects`),
  `https://open-coworking-stack-l5nj5hkxk-qaliais-projects.vercel.app`. It was deployed from commit
  `46eeacd`; redeploy after merging later commits (`vercel deploy --yes --scope qaliais-projects`).
  `.vercel/` and `.env.local` are git-ignored; do not commit them.
- The repository is private and must stay private until the blocking items in
  `docs/project/PUBLIC_RELEASE_PLAN.md` close. No DNS was changed.

## Do first (needs the owner)

1. Approve pushing the branch and updating PR #11 (or opening a follow-up PR into the release
   branch). Then check hosted CI. Expected: format and gitleaks now pass; CodeQL fails until GitHub
   Advanced Security is enabled or the repo is public.
2. Provide public URLs for **Coworking Launch Manual, Prospector, SellSpace**, plus approved one-line
   descriptions, and put them in `apps/web/src/data/related-products.ts`. Until then the section is
   not rendered. Do not invent descriptions.
3. Decide the commit-author email question (`docs/project/LICENSING_PRIVACY_AUDIT.md` §3).
4. Decide whether to enable GitHub Pages or keep Vercel as the host.

## Engineering backlog, in priority order

1. Add the validator rule from the audit: `oss-osi-approved` + enterprise-licensed paths ⇒ must be
   `open-core` or annotated. Review `crater` (class `AAL` vs GitHub AGPL-3.0). Re-read the licenses of
   `directus`, `sentry-oss`, `n8n`, `vault-hashicorp`. Refresh `verified_on` on touched records only.
2. Stack Builder P1-5: structured questions for business products, region, existing platform,
   accounting system, access control, contracted support (see `PR11_INDEPENDENT_QA.md`, on branch
   `qa/pr11-release-candidate`, not merged — consider merging that single docs commit).
3. Stack Builder P0-1: derive tool choices from catalog records instead of the fixed mapping in
   `apps/web/src/utils/stack-builder.ts` (also fixes drift if a catalog id is renamed — there is no
   test that every `toolChoices` id exists in the catalog; add one).
4. Run the Compose packs on a Docker-capable runner and record backup, restore, upgrade and rollback
   evidence; only then soften the "demonstration, not production" wording.
5. Directory roles dropdown shows overlapping labels ("Finance" and "Finance Billing Administrator",
   "Marketing" and "Marketing Manager"); normalize the role ids used by tools versus roles.
6. External link noise: `docs.paperless-ngx.com` (403 to bots), HashiCorp pricing (429), and
   `mosquitto.org` (unreachable from the dev network) are accepted exceptions; re-check from CI.
7. After launch: Dependabot PRs #1–#10 one at a time (Astro 7, Zod 4, Vitest 4, Starlight 0.41 are
   major or breaking). The new `rehype-accessible-content` plugin must keep passing
   `apps/web/tests/release-audit.spec.ts`.

## How to re-verify quickly

```bash
pnpm install --frozen-lockfile
pnpm validate && pnpm generate && pnpm typecheck && pnpm test
pnpm build
cd apps/web && PLAYWRIGHT_SKIP_BUILD=1 pnpm exec playwright test --project=e2e --project=a11y
```

Gotchas learned this session:

- In Astro, `<script is:inline>` does **not** interpolate `{expressions}`; use `set:html`.
- Components must not read `public/data/*.json` by file path at render time (breaks once bundled);
  use a static import as `index.mdx` does.
- Generated pages live at `/x/generated/<id>/`; relative links from them need three `../` to reach
  the site root. Hand-written pages in `comparisons/*.md` need two.
- Building with a base path from Git Bash rewrites `/open-coworking-stack` into a Windows path; use
  PowerShell for `PUBLIC_BASE_PATH=...` builds.
