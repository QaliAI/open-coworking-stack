# Licensing and privacy audit

Audit date: 2026-10-20 · Branch: `release/final-readiness-v0.1` · Scope: pre-public-release review.
Nothing here is legal advice. A lawyer should review the items marked **Owner/counsel**.

## 1. Tool classification (directory content)

Method: every catalog record with a GitHub repository (116 records) was compared with the license
GitHub reports for the repository. Every `oss-osi-approved` record was then scanned for
enterprise-licensed paths (`ee/`, `enterprise/`, `proprietary/`, `*-LICENSE` files), and the
`LICENSE` file of each flagged repository was read directly.

### Corrections made (commit `fix(catalog): correct license classes…`)

| Tool            | Was                            | Now                        | Evidence (official LICENSE, read 2026-10-20)                                         |
| --------------- | ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------ |
| Activepieces    | oss-osi-approved, MIT          | open-core, MIT             | MIT except `packages/ee`, which has a separate commercial license                    |
| Authentik       | oss-osi-approved, GPL-3.0-only | open-core, **MIT**         | MIT except `authentik/enterprise`; the SPDX value was wrong                          |
| Medusa          | oss-osi-approved, MIT          | open-core, MIT             | MIT except materials under `ENTERPRISE-LICENSE.md`                                   |
| Stirling-PDF    | oss-osi-approved, MIT          | open-core, MIT             | MIT except `app/proprietary`, `app/saas`, `engine`, proprietary frontend paths       |
| Twenty CRM      | oss-osi-approved, AGPL-3.0     | open-core, AGPL-3.0        | AGPL with application exception; files marked `@license Enterprise` are commercial   |
| Documenso       | oss-osi-approved, AGPL-3.0     | open-core, AGPL-3.0        | Root AGPL, but `packages/ee` exists — terms of that path not reviewed                |
| Invoice Ninja   | open-core, no SPDX             | **source-available**, ELv2 | Elastic License 2.0: forbids hosted-service use and license-key circumvention        |
| Cal.com         | open-core, AGPL-3.0            | open-core, **MIT**         | Root LICENSE reads MIT; earlier AGPL entry unsupported; paid cloud/enterprise exists |
| Element Synapse | oss-osi-approved (unchanged)   | unchanged + note           | Repository also ships `LICENSE-COMMERCIAL`; the AGPL path remains open source        |

All other classifications agree with the GitHub-reported license, or GitHub reports `NOASSERTION`
for benign reasons (dual licenses or non-standard license file layout: Postfix, Mosquitto,
fail2ban, WordPress, WooCommerce, PrestaShop, Pi-hole, Mautic, Mattermost).

### Residual risk — not fully verified

- The scan reads GitHub repository metadata and directory trees, not every file header. Files
  marked as commercial inside otherwise-open directories can still be missed.
- `directus`, `sentry-oss`, `n8n`, `vault-hashicorp` (source-available / fair-code) were not
  re-read; they are already on the conservative side. `outline` (BSL 1.1) was read and is correct.
- `crater` is classed `AAL` but GitHub reports AGPL-3.0 and no root `LICENSE` file was found at the
  standard path. **Needs owner review before launch.**
- Hosted/SaaS records (freemium, proprietary) record vendor terms, not licenses; pricing and limits
  are intentionally not asserted.
- `verified_on` dates for untouched records still read 2026-07-17.

### Recommended follow-up

Add a validator rule: an `oss-osi-approved` record whose repository contains a path matching
`ee|enterprise|proprietary`, or an `*ENTERPRISE*`/`*COMMERCIAL*` license file, must be `open-core`
or carry an explanatory note. Nothing enforces this today.

## 2. Project licensing

- Code: MIT (`LICENSE-CODE`). Editorial content: CC BY 4.0 (`LICENSE-CONTENT`). `NOTICE` and
  `TRADEMARKS.md` exist. Third-party marks and upstream code are not vendored.
- CC BY 4.0 lets anyone reuse the guides commercially with attribution. **Owner/counsel:** confirm
  that is intended for content adjacent to the paid Coworking Launch Manual, Prospector and
  SellSpace, and that the paid products' content is not committed to this repository.
- Dependencies (488 packages, `release-artifacts/dependency-licenses.json`): MIT 439, ISC 19,
  Apache-2.0 9, BSD 13, MPL-2.0 2, BlueOak 2, CC0 1, Python-2.0 1, and one
  `Apache-2.0 AND LGPL-3.0-or-later` (the `sharp` image library's bundled libvips). No strong
  copyleft in the shipped site code; the LGPL component is a build-time binary.
- Dependabot PRs #1–#10 (Astro 7, Starlight 0.41, Zod 4, Vitest 4, action bumps) are open against
  `main` and are **not** applied to this branch. Do not merge them into the release; schedule them
  after launch.

## 3. Privacy and historical files

- Commit history: 31 commits (21 human, 10 dependabot). No secret-shaped strings (AWS, GitHub,
  OpenAI-style, Slack, Google API keys, private-key headers) were found in the last 50 revisions
  by pattern scan. `.env.example` files contain placeholders only. This is a pattern scan, **not**
  a Gitleaks run; run Gitleaks over full history before publishing.
- **Personal email in history:** the 21 human commits carry the author email
  `rubixaico@gmail.com`. Making the repository public publishes it. **Owner:** decide between
  accepting it, rewriting history with a GitHub noreply address, or publishing from a fresh
  squashed repository. History was not rewritten.
- No private or franchise-specific data was found by search; the project remains brand-neutral.
- The site is client-side only: Stack Builder and the estimator do not transmit, store, or price
  anything, and warn users not to enter credentials or member data.
- Reference Compose stacks use placeholder secrets and are labeled demonstrations. They are
  syntax-validated (`docker compose config`) only; the local Docker engine was not running, so no
  container was started and no backup/restore/upgrade drill was performed.

## 4. Gate status

| Check                        | Result                                           |
| ---------------------------- | ------------------------------------------------ |
| License classification       | Corrected where evidenced; residual items above  |
| Dependency licenses          | No blocking copyleft                             |
| Secret scan (local patterns) | Clean; full Gitleaks history scan still required |
| Author-email exposure        | **Open — owner decision**                        |
| Counsel review (CC BY scope) | **Open**                                         |
