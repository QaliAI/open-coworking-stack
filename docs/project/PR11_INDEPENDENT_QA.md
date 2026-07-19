# PR #11 — Independent QA Report

QA branch: `qa/pr11-release-candidate`  
Base branch: `release/operator-product-v0.1` (at `a387db5`)  
Umbrella PR: [#11](https://github.com/QaliAI/open-coworking-stack/pull/11)  
QA date: 2026-07-18

---

## P0 Findings

### P0-1: Stack Builder uses hard-coded product catalog, not canonical catalog data

**Area**: Stack Builder (`apps/web/src/utils/stack-builder.ts`, `apps/web/src/components/StackBuilder.astro`)

**Evidence**: The entire recommendation engine maintains a separate hard-coded product mapping (`toolChoices`, `alternatives`, `costsFor`). Every recommended tool name, purpose, alternative, and cost assumption is duplicated in TypeScript rather than derived from:
- Canonical stack records (`catalog/stacks/`)
- Canonical tool IDs (`catalog/tools/`)
- Tool task-fit mappings
- Verification tier
- Guide status
- Deployment model
- Technical difficulty
- Maintenance burden

**User impact**: An operator selects priorities and receives product names, costs, and alternatives that are not verified against the canonical catalog. Recommendations can suggest tools whose catalog records are stale, research-backlog, or avoid-new-deployment. Costs appear authoritative but are unsourced fabricated numbers.

**Recommended correction**: Rebuild the recommendation engine to derive every recommendation from canonical records. Until then, the current approach is a hard-coded planning aid, not a catalog-driven recommendation system.

**Status**: Open

### P0-2: ROI calculator pre-populates unsourced fabricated numbers and uses "ROI" label for capacity value

**Area**: ROI Calculator (`apps/web/src/utils/roi-calculator.ts`, `apps/web/src/components/RoiCalculator.astro`)

**Evidence**: 
- `defaultRoiInput` pre-populates all fields with sample numbers (300 tasks, 8 min/task, 4 min/tool, $30/hr, $1500 setup, $250/month, etc.)
- The component name and URL path use "ROI" and "roi-calculator"
- The calculator only measures labor capacity value, not actual cash savings
- No currency selector, locale formatting, training time, exception handling, downtime allowance, adoption ramp, migration time, annual price increase, or contingency fields exist
- The disclaimer exists but the UI presents "Estimated net monthly value" and "First-year ROI estimate" as though they represent financial outcomes

**User impact**: An operator seeing default values may interpret them as typical, authoritative, or verified numbers. The term "ROI" when only labor capacity value is calculated can mislead procurement decisions.

**Recommended correction**: 
- Rename to "Workflow Capacity and Payback Estimator"
- Remove all pre-populated defaults; use empty values or an explicit "Load example" toggle
- Separate: time potentially redirected, gross capacity value, actual cash savings (requires explicit user declaration), implementation cost, ongoing cost
- Add missing fields: currency, training time, exception-handling time, downtime allowance, adoption ramp, migration time
- Never calculate actual cash savings unless the user explicitly states a real reduction in cash expense
- Never use "ROI" for capacity-only output

**Status**: Open

### P0-3: Guide validation checks structure, not substance

**Area**: Validators (`packages/validators/src/validate-catalog.ts` lines 153-193)

**Evidence**: The "full guide" validation:
- Counts H2 headings (requires 33+)
- Checks for a 33-point coverage checklist
- Checks for keyword presence (`fit`, `tasks`, `human`, `cost`, etc.)
- Does not check for placeholder content (`TODO`, `FIXME`, `Placeholder`)
- Does not measure content quality (boilerplate ratio, section length, duplication)
- Does not require source attribution for official claims
- Does not check task/role ID resolution within guide content
- Does not verify that guide status does not exceed evidence status

**User impact**: Guides that pass validation may be structurally complete but substantively empty. The "25 full guides" count overstates actual implementation-ready content.

**Recommended correction**:
- Add frontmatter/companion schema with tool ID, guide status, reviewed date, official evidence URLs, implementation status, runtime status
- Check for TODO/FIXME/placeholder markers
- Verify every official claim has a retained source
- Verify guide tool ID, task IDs, and role IDs resolve
- Verify guide status does not exceed evidence status
- Add content-quality report (duplicated paragraphs, boilerplate ratio, short sections)
- Update test fixtures to reflect new checks

**Status**: Open

### P0-4: Comparison pages are due-diligence worksheets, not evidence-backed comparisons

**Area**: Comparisons (`apps/web/src/content/docs/comparisons/`)

**Evidence**: All 21 comparison pages plus the capability benchmark use "Partial" and "Not established" for the vast majority of cells. The benchmark explicitly states all cells are intentionally left as "Partial" or "Not established". While this is honest, calling these "comparisons" overstates their utility — they are evaluation worksheets with minimal sourced differentiators.

**User impact**: An operator expecting ready-to-use comparisons with sourced differentiators will find mostly empty cells and caveats. The term "comparison" sets incorrect expectations.

**Recommended correction**:
- Add visible classification label: "due-diligence worksheet", "evidence-backed comparison", "directional shortlist", "research backlog"
- Deepen at least 3 flagship comparisons using official sourced evidence
- No page should be called an evidence-backed comparison unless it contains material, sourced differentiators

**Status**: Open

---

## P1 Findings

### P1-1: Implementation packs lack concrete, tool-specific artifacts

**Area**: `implementation-packs/` (25 packs)

**Evidence**: The validator checks for 11 required files and 3 required directories but does not verify:
- YAML/JSON syntax of artifacts
- Whether artifacts contain tool-specific configuration vs. generic templates
- Whether templates use fabricated (safe) data
- Whether packs are importable, runtime-tested, or production-evaluated

All 25 packs currently pass validation with generic templates.

**User impact**: An operator downloading an "implementation pack" receives a governance template structure, not a tool-specific, importable configuration they could use.

**Recommended correction**:
- Add pack status taxonomy: governance template, configuration example, importable pilot, runtime tested, production evaluated
- For at least 10 flagship packs, add concrete tool-specific artifacts with fabricated data
- Validate YAML/JSON syntax and internal references
- Display pack status publicly

**Status**: Open

### P1-2: Navigation sidebar has too many entries

**Area**: `apps/web/astro.config.mjs`

**Evidence**: 
- "Operator tasks" auto-generates all 105 tasks into the sidebar
- "Tool guides" auto-generates 90+ guide entries
- "Generated workflows" auto-generates 75 entries
- "Stacks" auto-generates 14 entries
- The sidebar becomes unmanageable and loses its navigational utility

**User impact**: Operators cannot scan the sidebar to find content — it becomes a dump of all generated content.

**Recommended correction**:
- Replace auto-generated listings with curated index pages for large collections
- Tasks: use a curated "Operator tasks" page with searchable table
- Workflows: use a curated "Workflows" index page organized by business area
- Tool guides: keep the "Tool guides" folder but add a curated guide index
- Keep the 10 recommended top-level navigation groups

**Status**: Open

### P1-3: Starlight duplicate ID warnings for comparisons

**Area**: `apps/web/astro.config.mjs`, comparison pages

**Evidence**: Comparison pages list each other in the sidebar auto-generation, creating slug collisions. Starlight emits "later items will overwrite" warnings.

**User impact**: Cosmetic only — no routing failure — but indicates unfinished sidebar configuration.

**Recommended correction**: Move comparisons under a dedicated sidebar group with explicit entries rather than unresolved auto-generation.

**Status**: Open

### P1-4: Cost assumptions in Stack Builder lack provenance and review dates

**Area**: `apps/web/src/utils/stack-builder.ts` (lines 193-228)

**Evidence**: The `costsFor` function returns hard-coded numbers ($800 setup, $280/mo subscriptions, etc.) with no source URL, review date, or provenance label. The UI displays them as editable inputs but the initial values appear authoritative.

**User impact**: Operators may treat these as verified price estimates.

**Recommended correction**: Replace with empty editable fields, or add "Load example assumptions" button with clear provenance labels and fabricated-data warnings.

**Status**: Open

### P1-5: Missing business products, region, and technical-support questions in Stack Builder

**Area**: `apps/web/src/utils/stack-builder.ts` (lines 17-34)

**Evidence**: The `StackBuilderInput` interface lacks:
- Business products (private offices, coworking memberships, dedicated desks, meeting rooms, day passes, events, virtual office/mail, enterprise teams)
- Current core coworking platform
- Accounting system
- Access-control need
- Member Wi-Fi identity need
- Mobile experience need
- Virtual-office compliance need
- Region
- Whether contracted technical support exists

**User impact**: Recommendations cannot account for the operator's actual product mix, geography, or existing systems.

**Recommended correction**: Add structured (not free-text) inputs for these questions.

**Status**: Open

### P1-6: Free-text inputs in Stack Builder lack privacy warning

**Area**: `apps/web/src/components/StackBuilder.astro` (lines 133-144)

**Evidence**: Three free-text textareas (current systems, required integrations, constraints) have no privacy warning.

**User impact**: An operator might enter credentials, member data, or confidential information in these fields.

**Recommended correction**: Add warning: "Do not enter credentials, member personal data, payment details, access codes, or confidential contracts."

**Status**: Open

### P1-7: Missing security headers in Vercel configuration

**Area**: `vercel.json`

**Evidence**: `vercel.json` contains only build configuration (build command, install command, output directory, framework). No security headers are configured: no CSP, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, or framing policy.

**User impact**: A deployed preview would lack security hardening.

**Recommended correction**: Add security headers to `vercel.json`, at minimum: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY`.

**Status**: Open

### P1-8: Link-checker accepts 403/429 globally

**Area**: `.lychee.toml`, `.github/workflows/freshness-links.yml`

**Evidence**: The Lychee wrapper and workflow accept 403/429 globally without host-specific exceptions. Global acceptance can hide broken links that happen to return a 403 status.

**User impact**: A link that returns 403 (not just rate-limiting or known automation denial) could go undetected.

**Recommended correction**: Replace global 403/429 acceptance with documented host-specific exceptions. Report accepted failures separately from passed links.

**Status**: Open

### P1-9: Missing GitHub branch protection ruleset documentation

**Area**: Repository settings, `docs/project/RELEASE_PROCESS.md`

**Evidence**: No documentation exists for a `main` ruleset requiring PR, successful CI, resolved conversations, no force pushes, no branch deletion, and at least one approval for release changes.

**User impact**: Without documented rulesets, the branch is unprotected against accidental pushes or merges.

**Recommended correction**: Document the recommended ruleset in `RELEASE_PROCESS.md` and apply it when the GitHub plan supports it.

**Status**: Open

### P1-10: Generated exports omit canonical operational and verification detail

**Area**: `packages/generators/src/generate-docs.ts`

**Evidence**: The generated catalog JSON and task/role pages export a limited subset of fields. Full operational detail (cost breakdowns, security/privacy/backup specifics, evidence chains) is not included.

**User impact**: Downstream consumers of generated JSON get an incomplete picture.

**Recommended correction**: Expand generators to include full canonical data, or document the lossy export and provide the YAML sources as the canonical reference.

**Status**: Open

### P1-11: Missing Lighthouse CI or performance baseline

**Area**: CI configuration

**Evidence**: No Lighthouse, PageSpeed, or performance/SEO/best-practices check is configured. The only browser checks are Playwright functional tests and axe accessibility scans.

**User impact**: Performance regressions can go undetected.

**Recommended correction**: Add Lighthouse CI to the release workflow, or document its absence as a known gap.

**Status**: Open

### P1-12: Stack Builder tests don't verify canonical ID resolution

**Area**: `apps/web/src/utils/stack-builder.test.ts`

**Evidence**: Current tests verify recommendation outcomes (which track is selected, do-not-self-host behavior, normalization). They do not test:
- Canonical tool IDs resolve
- Stale/research/historical tools are excluded
- Region-sensitive gaps are visible
- Missing evidence reduces recommendation confidence
- Costs are never presented as verified quotes
- Exported Markdown includes evidence and caveats

**User impact**: The test suite does not guard against the recommendation engine suggesting inappropriate tools.

**Recommended correction**: Add the missing test cases.

**Status**: Open

### P1-13: ROI calculator tests don't cover edge cases

**Area**: `apps/web/src/utils/roi-calculator.test.ts`

**Evidence**: Current tests cover base case, sensitivity ordering, slower-software handling, and boundary clamping. They do not cover:
- Zero-value inputs
- Negative cash savings (when costs exceed capacity value)
- Slow adoption curves
- High-maintenance scenarios
- No-cash-savings explicit mode

**User impact**: Edge cases where the calculator produces misleading outputs are not tested.

**Recommended correction**: Add test cases for all named scenarios.

**Status**: Open

### P1-14: No human operator acceptance test has been conducted

**Area**: `docs/ops/operator-acceptance-testing.md`

**Evidence**: The acceptance test plan exists with 8 personas and structured tasks, but all results are marked "not completed" — no real operators have been tested.

**User impact**: Usability, trust, and comprehension issues with real operators remain unknown.

**Recommended correction**: Keep the plan as-is with honest "not completed" markers. Do not fabricate results.

**Status**: Open (not blocking code work)

---

## Summary

| Severity | Count | Key issues |
|----------|-------|------------|
| P0       | 4     | Stack Builder hard-coded catalog, ROI name/numbers, guide validation checks structure not substance, comparisons are worksheets |
| P1       | 14    | Implementation pack depth, navigation, costs, missing inputs, privacy, security headers, link-check, branch protection, exports, performance, test gaps, human review |

All fixes will be delivered through focused child PRs into `release/operator-product-v0.1`.
