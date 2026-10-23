# Content preservation and discovery repair — October 23, 2026

This is a targeted repair in the existing Astro/Starlight directory and CoworkingSpace.ai Vite
project. It adds no catalog tools or paid services. Production publication is authorized by the
owner; the final handoff records the deployed commits and public browser evidence.

## Diagnosis

Both production aliases matched the recorded main commits before editing: directory `dbdf68e` and
CoworkingSpace.ai `1adfa41`. Anonymous browser inspection of the directory's actual Menu showed
Browse Tools, Categories, Recommended Stacks, Guides, About / Contribute, Operator Playbooks and
Advanced / Technical. This matched `dbdf68e` source, rather than the reported older screenshot.
The older hierarchy exists in earlier Git history. No service worker registration was found in
the application source. The screenshot's capture time/browser cache cannot be established from
the supplied description; there is no evidence that the current alias served the older hierarchy.

Confirmed defects were a sparse gateway and guide index, no direct task/role/workflow/stack library
indexes, a 404 at `/guides/integration-recipes/`, and Starlight's sidebar-order pagination connecting
unrelated resources. OS automatic dark mode also explained how a light gateway could open a dark
directory, without evidence of a broken CSS deployment.

## Preservation evidence

[Before manifest](./discovery-before.json) and [after manifest](./discovery-after.json) contain file
paths, record IDs, hashes, headings, routes and historical name-status diffs. The reproducible audit
is `node scripts/audit-content-preservation.mjs OUTPUT BEFORE` after a build.

| Resource                                          |             Before |              After |
| ------------------------------------------------- | -----------------: | -----------------: |
| Canonical tools                                   |                125 |                125 |
| Evaluated / research / commercial / Verified Core |   22 / 100 / 3 / 0 |   22 / 100 / 3 / 0 |
| Tasks / workflows / roles / stacks                | 105 / 75 / 14 / 14 | 105 / 75 / 14 / 14 |
| Full guides / outlines / planned                  |       25 / 26 / 74 |       25 / 26 / 74 |
| Individual comparisons                            |                 22 |                 22 |
| HTML outputs, including 404 and redirect          |                450 |                456 |

No baseline route or canonical record was deleted. Added routes: `/library/`, `/tasks/`, `/roles/`,
`/workflows/`, `/stacks/`, and the redirect at `/guides/integration-recipes/`. The guide index changes
from `.md` to `.mdx` with the same public `/guides/` URL and its original paragraphs retained.
All 51 authored tool-guide sources are unchanged from `dbdf68e`; their published bodies match
exactly after the existing duplicate-H1 removal. All four published integration documents match
their authored bodies after the documented H1 and relative-link transformations. The recipe index
has an additive operator introduction; the three detailed recipe sources are unchanged.

All 51 guide paths also existed at `e107548` and `c991598`. Compared with `e107548`, 26 are byte-identical
after newline normalization; the other 25 full guides grew in both length and section count in the
earlier release. Compared with `c991598`, 50 are identical; Cal.com is longer with the same section
count following the earlier license correction. This repair makes none of those guide edits.

The old `comparisons.md` became `/comparisons/` plus 22 pages. Its seven subjects map to knowledge
bases, scheduling, CRM, analytics, automation, identity and team chat. Team chat had no clear expanded
successor; this repair restores its operator evaluation questions in the comparison index, linking
to current tool records instead of repeating obsolete license classifications. The other six
subjects have explicit expanded comparison links. This is a topic/section and source-body audit,
not a claim of exhaustive paragraph-level equivalence across all historical revisions.

The 125 generated tool pages gain a review summary and official links; their existing sections
remain generated from the same YAML. WARP stays deferred. The nine October candidates remain in
the catalog and their search/category journeys are exercised by the browser suite.

## Navigation and data contract

The CoworkingSpace.ai build consumes `/data/discovery.json` from the directory. Totals, review groups,
category counts, samples and resource counts derive from canonical exports and the same shared
filter predicate used by the directory. A failed/invalid feed fails the gateway build. Local checks
may explicitly use `OCS_DISCOVERY_FILE`; production always fetches the canonical public feed.

| Surface                            | Destination                                                      |
| ---------------------------------- | ---------------------------------------------------------------- |
| Browse All Tools                   | Directory `/directory/`                                          |
| Search the full directory          | GET `/directory/?q=…`                                            |
| Each of 12 category cards          | `/directory/?collection=…`, with nonempty matching results       |
| Sample name / Details              | Corresponding `/tools/generated/ID/`                             |
| Official Website / Source Code     | Canonical homepage / repository URLs                             |
| Installation guides                | `/guides/`, with 25 full-guide links and 26 labeled outlines     |
| Workflows / tasks / roles / stacks | Respective complete library index                                |
| Comparisons                        | Existing `/comparisons/` and its 22 child pages                  |
| Integration recipes                | Existing `/integrations/generated/`                              |
| Implementation packs               | `/guides/starter-packs/`, with five actual repository pack links |
| Builder / estimator                | Existing `/stack-builder/` and `/roi-calculator/`                |
| Gateway Home / Operator Arcade     | Existing CoworkingSpace.ai routes                                |
| Footer                             | Directory, resource hub, gateway and contribution routes         |

The first five directory navigation labels stay in place. Operator Resources links to complete
indexes instead of rendering 105 task links in the sidebar. The pages remain indexed by Pagefind.
Related category, workflow and published full-guide links supplement Back to all tools and the
relevant library link. No explicit authored previous/next sequence existed; automatic pagination
is disabled globally because sibling libraries have no meaningful linear reading order.

The directory keeps Starlight's search, keyboard/mobile navigation and theme selector. A visitor
without a saved theme starts light; saved dark and automatic choices remain respected. Cream,
forest green, system typography, brand lockup and footer coordinate with the gateway.

## Validation and limitations

- Catalog validation: 125 tools, 14 stacks, 75 workflows, 105 tasks, 14 roles; zero errors/warnings.
- Generation and Astro build pass: 456 HTML outputs; 454 content pages indexed by Pagefind.
- Unit tests: 49 pass. Full browser suite: 131 pass, including prior tests and new discovery checks.
- Dedicated accessibility suite: three pass. The full browser suite also checks serious/critical axe
  issues and overflow on the existing operator surfaces at 320, 375 and 1280 pixels.
- Focused gateway/library run: 23 pass, including gateway axe, search submission and link checks
  at 375 and 1280 pixels. Gateway native tests: two pass; TypeScript/Vite build passes.
- Lint/format/Markdown checks pass. Type checks pass with three pre-existing unused-variable hints
  in the estimator. Freshness: zero stale tools; quality report: zero issues.
- Built navigation/assets: 456 outputs, 69,240 internal references checked, zero missing targets.
- Source link check: 2,626 occurrences / 1,042 unique; two errors, both private repository PR URLs
  in the previous release report. GitHub authenticated reads confirm PRs 2 and 3 exist and merged.
  These are anonymous-access limitations, not silently accepted public links. Configured 403/429
  exceptions remain connectivity exceptions, not verification of vendor claims.
- Dependency audit is **not clean**: directory reports 9 low, 40 moderate, 36 high, 5 critical
  affected dependency paths. CoworkingSpace.ai reports four high development findings and zero
  production dependency findings. Dependency versions are inherited from the baseline; the only
  lockfile change required here is a workspace link and pnpm's peer-resolution normalization.
  Static deployment does not provide a Node server, but build/dev dependencies still require a
  separate tested upgrade. Do not describe this release as security-clean.
- The existing optional GitHub Pages workflow previously failed because no Pages site is configured;
  Vercel remains the production host. No DNS, email, authentication or repository visibility settings
  are changed. The directory remains public; CoworkingSpace.ai remains private.

Functional acceptance is GO subject to anonymous post-deployment verification. Overall release
assessment is **CONDITIONAL GO** because dependency findings and the documented external-link and
optional-hosting limitations remain. Final URLs, commit/PR references and screenshots accompany the
handoff after production is checked.
