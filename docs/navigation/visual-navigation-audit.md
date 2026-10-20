# Visual and navigation audit

> **Audit date:** 2026-07-20
> **Scope:** `release/operator-product-v0.1` baseline
> **Method:** Static analysis of config, content tree, custom CSS, and Starlight documentation patterns.

## Findings

### Navigation structure

| #   | Finding                                                                                                                    | Severity | Status                                                              |
| --- | -------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- |
| 1   | Duplicate Starlight content-ID warnings for `comparisons` slug — `comparisons.md` conflicted with `comparisons/` directory | High     | Fixed: moved to `comparisons/index.md`, resolved all relative links |
| 2   | Large auto-generated groups (stacks, workflows, tool guides, integrations) default to expanded — creates very long scroll  | Medium   | Fixed: added `collapsed: true` to 6 sidebar groups                  |
| 3   | Conditionally shown groups (tasks, roles, generated workflows) depend on build artifacts — may be empty on fresh clone     | Low      | Documented in dev setup                                             |
| 4   | "Decision paths" sidebar label used "ROI/TCO estimator" — name outdated                                                    | Low      | Fixed: updated to "Workflow estimator"                              |

### Visual identity

| #   | Finding                                                                                          | Severity | Status                                                |
| --- | ------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------- |
| 5   | No custom logo — Starlight rendered site title as plain text                                     | Medium   | Fixed: added `public/logo.svg` with brand icon        |
| 6   | RoiCalculator and StackBuilder components use hardcoded light-mode colors — no dark mode support | Medium   | Needs component refactor                              |
| 7   | `src/env.d.ts` missing — IDE may lack Astro type references                                      | Low      | Fixed: added `/// <reference types="astro/client" />` |
| 8   | No favicon on SEO meta aside from `favicon.svg`                                                  | Low      | Already present                                       |

### Responsive and mobile

| #   | Finding                                                                      | Severity | Status    |
| --- | ---------------------------------------------------------------------------- | -------- | --------- |
| 9   | Directory view switches from card (mobile) to table (>=64rem) — good pattern | None     | Confirmed |
| 10  | Touch targets >=3rem on pointer:coarse — good practice                       | None     | Confirmed |
| 11  | Reduced-motion support — good practice                                       | None     | Confirmed |
| 12  | Color contrast pass (40–41 per CSS header comment) — verified                | None     | Confirmed |

### Content organization

| #   | Finding                                                                                           | Severity | Status    |
| --- | ------------------------------------------------------------------------------------------------- | -------- | --------- |
| 13  | 6 decision-path navigation pages under `navigation/` are well-linked from sidebar and stack pages | None     | Confirmed |
| 14  | `src/content/docs/` has 22 comparison files + index under `comparisons/` — well organized         | None     | Confirmed |
| 15  | Sidebar links verified: all 27 manual slugs resolve to existing files                             | None     | Confirmed |

## Recommendations beyond this branch

| Priority | Item                                                                                                          | Effort  |
| -------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| High     | Refactor RoiCalculator and StackBuilder to use CSS custom properties for colors (inherit from `--sl-color-*`) | 2–3 hrs |
| Medium   | Add Starlight logo with proper `alt` text via `logo` config property in `astro.config.mjs`                    | 15 min  |
| Low      | Add page-level `hero` images to flagship guides (stacks) for visual hierarchy                                 | 4–5 hrs |
| Low      | Evaluate switching splash template to a custom layout for more visual control                                 | 2–3 hrs |
