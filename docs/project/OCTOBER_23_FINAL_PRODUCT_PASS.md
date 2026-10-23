# October 23 final product pass

## Baseline

- Directory: public `QaliAI/open-coworking-stack`, clean `main` at `c991598`; PR #11 merged, v0.1.0 published. No stashes or untracked work. Existing open PRs are dependency updates (#1–10).
- Production: <https://open-coworking-stack.vercel.app>, deployment `dpl_EQGzXjbrDnFQ4jsFjNEvPqzRipwr`, same commit. Anonymous browser confirms the old methodology-first homepage and misleading July generation date.
- Canonical YAML feeds the existing TypeScript generator, Astro/Starlight pages, JSON directory, Stack Builder, and estimator. Preserve all routes and use existing Pagefind global search.
- CoworkingSpace.ai: `origin/main` at `cbed570`; production deployment `dpl_7m3uU4uJu9Fy4WWGMCfzPb1N76py` matches. Existing clean worktree `codex/product-funnel` at `99bd9cc` is one unmerged commit ahead; preserve it. Existing PR #1 (`feat/prospector-flagship`) remains separate. A new isolated worktree starts at current production/main.
- Separate release branches: `codex/october-23-directory-release` and `codex/october-23-tools-release`. The coordinator owns all edits and Git operations; research/editorial agents were read-only.
- User explicitly requested commit, push, and immediate production release. No DNS changes, purchases, messages, or new hosting projects are authorized or needed.

## Release approach

Lead with browsing tools, expose official links and honest review/cost labels, retain detailed research behind expandable sections, simplify navigation, fix factual conflicts in canonical sources, and regenerate. Use a native CoworkingSpace.ai `/tools` landing page linking into the independent directory, with each site's own canonical URL. Preserve unmerged work and existing conversion paths.

Validation results, final counts, deployment evidence, research decisions, and unsent sharing copy will be recorded here before handoff.

## Implemented and checked

- Directory first: requested H1, Browse Tools / Build My Tech Stack, twelve category shortcuts, cards at desktop and phone sizes, official website/source actions, full-guide-only Read Guide actions, optional compact table and expandable operator-fit research. Existing detail routes and all supporting page families survive.
- Search uses canonical description, tags, coworking uses and task fits, with case/punctuation/plural normalization. Shared URL state covers category groups, exact filters and review groups, reset/count/empty states and browser history. Existing Pagefind indexes tools, guides, workflows, comparisons, roles and tasks.
- Sidebar leads with tools, categories, stacks, guides and contribution. Tasks/roles/workflows/recipes remain in collapsed playbooks. Comparison index now links all 22 pages. Removed private-candidate copy, incorrect estimator-default claims and internal design scoring comments. Representative page families and targeted risky statements were reviewed; not every generated page was individually edited or audited.
- Actual generation time now comes from the generator clock, separately from per-tool evidence dates. No mass refresh of review dates or tier promotions.
- Canonical Cal.com now describes the hosted freemium service, not the MIT Cal.diy repository. Tour guide/comparison and room-booking recommendations agree. The self-hosted builder uses Easy!Appointments. Historical Compose content is preserved with an explicit edition warning.
- LibreBooking points to the current repository/docs and requires 7.1.0 or later because of the [October 13 account-takeover advisory](https://github.com/LibreBooking/librebooking/security/advisories/GHSA-mvjx-72w3-wqhp).
- CoworkingSpace.ai has an independent static `/tools` landing page, unique canonical metadata, sitemap entry, primary/footer links and a link from relevant content. It links to the existing directory; there is no iframe or cross-project asset proxy. Directory pages retain their own Vercel canonicals. No DNS or domain settings changed.

## Canonical counts and bounded research

Regenerated counts: **125 tools; 22 Evaluated; 100 Research Backlog; 3 Commercial Benchmark; 0 Verified Core**. Preserved **105 tasks, 75 workflows, 14 stacks and 14 roles**. Tool guide statuses: **25 full, 26 stubs, 74 planned**. Comparison pages: **22**.

Nine additions remain Research Backlog, partially verified and unfeatured, with planned guides and no implementation claims:

| Candidate    | Evidence and limits                                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hi.Events    | [Official license](https://github.com/HiEventsDev/hi.events/blob/develop/LICENCE), [pricing](https://hi.events/pricing): community attribution, paid enterprise features, ticket/payment fees.    |
| Postiz       | [Repository](https://github.com/gitroomhq/postiz-app), [pricing](https://postiz.com/pricing): AGPL community versus paid cloud, provider app approval and hosted-first feature limits.            |
| Mixpost Lite | [MIT repository](https://github.com/inovector/mixpost), [edition comparison](https://mixpost.app/pricing): Lite network list; paid approvals, queue and broader networks are not claimed as free. |
| Snipe-IT     | [Repository](https://github.com/grokability/snipe-it), [pricing](https://snipeitapp.com/pricing): asset custody and reconciliation, not full facilities maintenance; paid hosting separate.       |
| Xibo CMS     | [CMS](https://github.com/xibosignage/xibo-cms), [player pricing](https://xibosignage.com/pricing): CMS/open-source players versus paid Android/webOS/Tizen; ChromeOS remains outside this review. |
| Frappe HR    | [GPL repository](https://github.com/frappe/hrms), [shift docs](https://docs.frappe.io/hr/shift-management): staff/leave/attendance; country payroll needs qualified review.                       |
| pretix       | [License](https://github.com/pretix/pretix/blob/master/LICENSE), [pricing](https://pretix.eu/about/en/pricing): AGPL with additional terms; hosted and payment fees separate.                     |
| Roomer       | [Exact project](https://github.com/c0dewhacker/Roomer): floor plans and desk/assets documented; maintenance, security and production readiness not established.                                   |
| Cal.diy      | [Repository](https://github.com/calcom/cal.diy), [official warning](https://www.cal.diy/): MIT community code, advanced administration and explicitly personal/non-production scope.              |

WARP is deferred: no identifiable project in available prior research or `git log --all -S WARP -- catalog docs guides`. No Cloudflare WARP or terminal product was assumed. No speculative AI receptionist promotion. LibreBooking was updated in place, not duplicated. Only the LibreBooking October release date was verified; no other “latest version” claims were invented.

## Test evidence

- Baseline: `pnpm validate`, `pnpm generate`, `pnpm test` passed on the original 116 entries.
- Release: `pnpm validate` (zero errors/warnings), `pnpm generate`, `pnpm test` (48 tests), `pnpm lint`, `pnpm typecheck` (zero errors/warnings; three existing unused-code hints), `pnpm build` (450 pages) passed.
- `PLAYWRIGHT_SKIP_BUILD=1 pnpm test:e2e -- --workers=2`: **110 passed**. Includes nine new candidates through generated search/filter/detail journeys, shared URLs/reset/empty states, keyboard controls, Pagefind page families, builder/estimator and retained routes. Responsive checks cover 320, 375, 414, 768 and 1280px across relevant tests; 39 route/viewport checks include axe and overflow assertions.
- `PLAYWRIGHT_SKIP_BUILD=1 pnpm test:a11y -- --workers=2`: **3 passed**. No serious/critical axe violations on homepage, desktop directory or phone directory.
- `pnpm quality-report`: zero issues. `pnpm freshness`: 0/125 older than 180 days or marked stale. Freshness is not an endorsement.
- `pnpm link-check`: 2,582 links / 1,020 unique, one temporary 522 at `https://docmost.com/docs/`; a separate anonymous request returned 200. Existing 403/429 exceptions and excluded example/blocked hosts remain connectivity exceptions, not verified factual claims. No records were deleted for request blocking.
- CoworkingSpace.ai: `npm ci`, `npm run build` passed. `npm audit --omit=dev`: zero vulnerabilities. Existing build/development dependencies report four high findings; follow-up needed, with no dependency upgrade folded into this presentation release.
- `pnpm release:licenses` succeeded locally. Local `pnpm release:evidence` stopped because Docker Desktop's Linux engine was unavailable. The [unsigned evidence workflow](https://github.com/QaliAI/open-coworking-stack/actions/runs/39993965965) subsequently **succeeded** on GitHub, producing a 9.3 MB artifact with the site, dependency licenses, CycloneDX SBOM and checksums at release commit `e5397e8` (before the CI-only labeler repair).
- CoworkingSpace.ai preview `https://coworkingspace-d6zlpylr1-qaliais-projects.vercel.app/tools` is READY at `f1ff5e7`, but anonymous requests redirect to Vercel login. Automatic approval review rejected the temporary authentication-bypass action as an unauthorized access-control change. Protection remains intact; local page verification and post-release anonymous custom-domain checks are used instead.
- Directory preview `https://open-coworking-stack-98o474l0t-qaliais-projects.vercel.app/` was checked anonymously: correct heading, generated counts, directory navigation and production-origin canonical. GitHub Secret Scan and CodeQL passed. The existing size-label workflow referenced nonexistent `@v1`; pinned the officially documented v0.5.7 commit and removed an unsupported input. Its current `pull_request_target` run uses the old base workflow, so that automation-only failure cannot validate the fix until it reaches main.

## Sharing copy (unsent)

Description: A free directory of software, open-source options and practical guides for coworking operators. Browse tools for CRM, tours, meeting rooms, marketing, events and daily operations, with clear license, cost and review labels.

Subject: Free tools for coworking operators

Hi Travis,

I pulled together a free resource with software tools, open-source options and practical guides for coworking operators. It covers CRM, scheduling, meeting rooms, marketing, events and day-to-day operations.

Here's the link: <https://www.coworkingspace.ai/tools>

Thought it might be useful for you and others in the industry. Would love your feedback.

Rubin

The public URL above passed anonymous production checks. No email or other message has been sent.

## Production handoff — GO

Both destinations were verified anonymously after publication:

- <https://www.coworkingspace.ai/tools> and `/tools/` return the dedicated landing page. Apex requests redirect to www; canonical, Open Graph URL and new sitemap entry match the final www tools URL. Browser checks include phone and desktop widths and the Browse Tools path into the directory.
- <https://open-coworking-stack.vercel.app> returns the requested heading and current counts. Fourteen known route variants spanning the homepage, directory, tool records, guide, comparison, stack, role, task, workflow, builder and estimator return 200. All eleven discovered production assets return 200. Production JSON reports 125 / 22 Evaluated / 100 Research Backlog / 3 Commercial Benchmark / 0 Verified Core, generated `2026-10-23T17:25:18.929Z`. No authentication is required for these public destinations.
- Directory release merged via [PR #18](https://github.com/QaliAI/open-coworking-stack/pull/18), production merge `915a75e50ec5a20db641af6d26c7a3fce05eacae`, deployment `dpl_EnU3LnN4hFjtpdHmVuDHvrRnYToT`. [Final release CI](https://github.com/QaliAI/open-coworking-stack/actions/runs/39994259612) passed, as did CodeQL, Secret Scan, title validation, path labeling and Vercel. The old size-label check used the pre-fix base workflow; its valid release pin is included in main.
- CoworkingSpace.ai merged [PR #2](https://github.com/QaliAI/coworkingspace-ai/pull/2) and the hostname-only correction in [PR #3](https://github.com/QaliAI/coworkingspace-ai/pull/3), production merge `1adfa41889a3f9ee6dea384ecb3da8b79f92447d`. Original unmerged product-funnel work and PR #1 were preserved.
- The directory repository remains public. Both release working trees were clean before this documentation-only handoff update. No DNS changes, purchases, emails or GitHub version release were performed.

### Remaining work

No distribution blocker remains. Important follow-ups belong to the maintainer:

1. Re-review older Research Backlog entries in bounded batches; evaluate installation, privacy, recovery and actual coworking workflows before recommending them for production. Roomer and Cal.diy remain research-only; WARP remains unidentified.
2. Patch and retest CoworkingSpace.ai's four development/build dependency audit findings separately; production dependencies reported zero. Avoid folding unrelated framework upgrades into this release.
3. Decide whether to retire or explicitly configure the legacy GitHub Pages workflow. Its [production run](https://github.com/QaliAI/open-coworking-stack/actions/runs/39994813477) failed at Configure Pages with “Get Pages site failed / Not Found”; the working Vercel destination is the canonical release. No Pages site was enabled as a shortcut.
4. Keep blocked/rate-limited external link results separate from genuine missing pages. The Docmost documentation URL returned 200 on direct recheck; an additional crawl of the provider's page reported rate limits, a 522 and obfuscated email-protection URLs. None justified deleting a catalog record.

Protected-preview bypass remains unavailable because automatic approval review rejected the access-control change. No approval is pending for the completed public production release; that preview limitation does not affect either verified public URL.
