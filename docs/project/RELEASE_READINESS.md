# Release Readiness

> **Status 2026-10-22:** v0.1.0 was released from the consolidated candidate (PR #11 plus the
> October final-readiness fixes and the PR #17 corrections). This gate document is retained as the
> pre-release evidence record; see `docs/project/V0.1_RELEASE_NOTES.md` and
> `docs/project/POST_RELEASE_BACKLOG.md` for current state.

Last reviewed: 2026-10-20  
Candidate branch: `release/final-readiness-v0.1` (PR #11 head `52d356b` plus narrow fixes, unpushed)  
Decision: **ready for owner review and protected preview; not approved for public release**

This is a living gate, not a release claim. Re-evaluate it against the exact candidate commit.

## Exact state

- PR #11 (`release/operator-product-v0.1` → `main`): **draft**, 731 files, head `52d356b`.
- QA PRs #12–#16 were merged into the release branch on 2026-07-20 and are ancestors of `52d356b`;
  PR #11 already contains them. `qa/pr11-release-candidate` (one docs-only commit, the independent
  QA report) is not merged; its findings were checked (below).
- Open Dependabot PRs #1–#10 target `main` and are deliberately excluded.
- Hosted CI on PR #11's head: **3 failing checks**, all explained and addressed:
  Prettier drift in 25 files (fixed), Gitleaks 403 (fixed), CodeQL "code scanning is not enabled"
  (repository setting — open).
- Protected preview: `https://open-coworking-stack-272shh6vg-qaliais-projects.vercel.app`
  (Vercel Authentication on). Pages is not enabled for the private repository.

## Verified claims versus PR #11's description

| PR #11 claim                   | Re-run result (2026-10-20)                                                                                                                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 116 software records           | Confirmed (`pnpm validate`: 116 tools, 14 stacks, 75 workflows, 105 tasks, 14 roles, 0 issues)                                                                                                                 |
| 440 generated pages            | 440 at start; **441** now (Start Here added)                                                                                                                                                                   |
| 37 passing browser tests       | Inaccurate. There were 60 browser tests (59 passed, **1 failed**: stale ROI heading) and 44 unit tests. Now 102 browser + 46 unit, all passing                                                                 |
| Stack builder / ROI calculator | Work. Fixed: builder never received catalog data in the production build (see below)                                                                                                                           |
| Link check 0 errors            | External: 2,409 links, 9 flagged (paperless 403, HashiCorp 429, mosquitto.org unreachable from this network, one dead Seatsurfing URL fixed). **Internal: 157 broken links found and fixed; now 0 of 147,984** |

## Defects found and fixed in this pass

1. 157 broken internal links (comparisons, generated task/role pages, integrations index).
2. Stack Builder: the catalog JSON was embedded as literal text and read by file path, so the
   built site never showed license class or guide status and replaced server-rendered links with
   bare lists. Tool lists now link to the record, the install guide (stubs labeled), and the
   official site.
3. Accessibility: unlabeled markdown checkboxes (critical) and keyboard-inaccessible scrollable
   tables (serious) on every checklist/table page; fixed with a rehype plugin.
4. Stale e2e test (ROI heading) and a mislabeled homepage action ("Estimate ROI and TCO").
5. License classification: 9 records corrected from official LICENSE files
   (`LICENSING_PRIVACY_AUDIT.md`).
6. Missing explainability: the builder page now states its four rules and what it does not do.

## Independent QA report (`PR11_INDEPENDENT_QA.md`) status

| Finding                                      | Status now                                                                                                                                                           |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0-1 builder hard-coded, not catalog-derived | **Still true by design.** Tool choice is a fixed editorial mapping; catalog supplies license/guide/links. Disclosed on the builder page. Rebuild is post-launch work |
| P0-2 ROI label and prefilled numbers         | Resolved (renamed; empty start; "Load example (fabricated)")                                                                                                         |
| P0-3 guide validation structural only        | Addressed (placeholder, source, boilerplate checks; quality report)                                                                                                  |
| P0-4 comparisons overstated                  | Addressed (classification labels); depth remains partial                                                                                                             |
| P1-1 implementation pack depth               | Partly (3 compose stacks, 3 n8n workflows); runtime unverified                                                                                                       |
| P1-2 sidebar length                          | Mitigated (collapsed groups)                                                                                                                                         |
| P1-3 duplicate sidebar ids                   | Resolved (`comparisons` slug)                                                                                                                                        |
| P1-4 cost provenance                         | Resolved (labeled fabricated demonstration data)                                                                                                                     |
| P1-5 missing builder questions               | **Open**                                                                                                                                                             |
| P1-6 free-text privacy warning               | Resolved                                                                                                                                                             |

## Test evidence (this machine, Windows, Node 24, pnpm 9.15)

| Gate                | Result                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm validate`     | 0 errors, 0 warnings                                                                                                                      |
| `pnpm typecheck`    | 0 errors, 0 warnings (3 hints before; none now)                                                                                           |
| `pnpm test`         | 46/46 unit tests                                                                                                                          |
| `pnpm build`        | 441 pages; also built with `PUBLIC_BASE_PATH=/open-coworking-stack` — 0 broken links                                                      |
| `pnpm format:check` | Pass (Prettier + markdownlint)                                                                                                            |
| Playwright e2e+a11y | 102/102: routes, directory, calculators, operator journey, axe (serious/critical) and horizontal overflow on 12 routes at 320/375/1280 px |
| Compose             | 8/8 files pass `docker compose config` (dummy env). **No container run** — Docker engine off                                              |
| Preview             | Vercel preview reachable with authentication; Start Here and builder content confirmed                                                    |

## Remaining gates (owner)

- [ ] Review/merge PR #11; hosted CI green at the candidate (CodeQL needs GHAS or public repo)
- [ ] Decide author-email exposure; run full-history Gitleaks; counsel review (see audit)
- [ ] Review `crater` and other flagged catalog records
- [ ] Supply related-product URLs (section is hidden until then)
- [ ] Runtime validation of Compose packs on a Docker-capable runner
- [ ] Human operator review of the acceptance test plan (8 personas)
- [ ] Explicit approval to make the repository public; rollback rehearsal

A missing gate is not implicitly waived by a passing build.
