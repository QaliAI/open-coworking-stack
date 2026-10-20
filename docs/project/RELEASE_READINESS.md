# Release Readiness

Last reviewed: 2026-07-20  
Candidate commit: `97f6a26`  
Candidate branch: `release/operator-product-v0.1`  
Decision: **not release-ready — operator owner approval required**

This is a living gate, not a release claim. Re-evaluate it against the exact candidate commit.

## QA branches merged

All 5 independent QA branches have been merged into this release candidate:

| PR  | Branch                           | Scope                                                                                        | Merge commit       |
| --- | -------------------------------- | -------------------------------------------------------------------------------------------- | ------------------ |
| #14 | `qa/builder-estimator-integrity` | ROI calculator renamed, currency selector, new fields, privacy warning, cost labels          | Merged             |
| #12 | `qa/content-evidence-quality`    | Guide validation, quality report CLI, comparison page classification                         | Merged             |
| #13 | `qa/implementation-pack-depth`   | 3 compose stacks, 3 n8n workflows, Caddyfile, backup scripts, Paperless-ngx taxonomy         | Merged             |
| #15 | `qa/security-release-controls`   | CodeQL, Gitleaks, semantic PR, labeler; CODEOWNERS; release checklist; security gap analysis | Merged             |
| #16 | `qa/visual-navigation`           | Stack Builder catalog enrichment, logo, sidebar collapsed groups, route test expansion       | Merged (`97f6a26`) |

## Remaining gates (owner)

- [ ] Review and approve release candidate `97f6a26`
- [ ] Enable Pages or configure alternative deployment
- [ ] Run Docker-compose runtime validation on a Docker-capable runner
- [ ] Authorize private preview or public launch

## Confirmed repository state

- Repository: private `QaliAI/open-coworking-stack`; default hosted branch is `main`.
- Remote: `origin` is configured for the GitHub repository.
- Hosted CI: the initial `main` run for `e107548` passed.
- Pages: run `29651717197` failed at `actions/configure-pages`; the Pages API returned `404` because a
  Pages site is not enabled/configured for this private repository. No Pages deployment occurred.
- Public release, version tag, and public site: none confirmed.
- Current release branch changes have not yet passed hosted CI.
- The checksum-verified Lychee wrapper is installed. Confirmed dead Cobot, draw.io, Fail2ban, and
  Plausible URLs were replaced from official sources. The official LibreBooking homepage remained
  unreachable on 2026-07-18, so that exact host is a documented, time-bounded exception while its
  repository and wiki remain checked. HTTP 403 and 429 responses are accepted only as documented
  automation-denial/rate-limit exceptions; they are not evidence that a product claim is correct.
- Docker CLI 28.0.4 is installed locally, but the Docker Desktop Linux engine is not running. Local
  Syft SBOM generation failed clearly at that boundary, and the Trivy reference-image scan was not run.
  The workflows remain available on Docker-capable hosted runners.

## Gates

| Gate                                    | State       | Required evidence or action                                                                         |
| --------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| Scope and changelog reviewed            | Pending     | Reviewer confirms release scope and `CHANGELOG.md`                                                  |
| Frozen install and complete local check | Passed      | `pnpm validate` (0 errors), `pnpm typecheck` (0 errors), `pnpm test` (44/44)                        |
| Hosted CI for candidate                 | Pending     | Successful CI run at candidate commit (requires GitHub Actions enabled)                             |
| Link check                              | Passed      | 2,308 links checked; 0 errors; documented 403/429/LibreBooking exceptions                           |
| Comparison page quality                 | Enhanced    | All 22 pages classified (Directional shortlist/Due-diligence worksheet); classification guide added |
| Stack Builder                           | Enhanced    | Catalog enrichment, currency selector, privacy warning, cost labels                                 |
| Implementation pack depth               | Enhanced    | 3 compose stacks, 3 n8n workflows, sample Caddyfile, backup scripts, document taxonomy              |
| Security controls                       | Enhanced    | CodeQL, Gitleaks, semantic PR, labeler workflows; CODEOWNERS; branch protection audit; gap analysis |
| Navigation and visual                   | Enhanced    | Logo, sidebar collapsed groups, label fix, route test expansion                                     |
| SBOM and dependency licenses            | Implemented | Run unsigned release-evidence workflow and review outputs                                           |
| Static artifact checksums               | Implemented | Review `SHA256SUMS`; do not call checksums signatures                                               |
| Reference-image scan                    | Advisory    | Review results and scan errors; tags remain mutable and packs remain untested                       |
| Runtime validation of Compose packs     | Blocked     | Requires Docker engine; not available on this runner                                                |
| Security and privacy review             | Enhanced    | Gap analysis document created; automated secret scanning; CodeQL analysis set up                    |
| Accessibility and browser evidence      | Partial     | Chromium and axe exist; broader browser/mobile coverage is not established                          |
| Private preview                         | Pending     | Approved protected preview and private-preview checklist — owner decision                           |
| Public launch authorization             | Blocked     | Explicit owner approval and completed public-launch checklist                                       |
| Rollback rehearsal                      | Pending     | Known-good artifact/ref and provider-specific restoration test                                      |
| Artifact signing/provenance             | Not offered | No supported signing identity or provenance workflow is configured                                  |

## Blocking facts

- Pages cannot deploy with the current private-repository configuration.
- Reference Compose packs are configuration-validated templates, not runtime-verified releases.
- No protected preview has been reviewed and no public launch has been authorized.
- No CHANGELOG.md has been updated for the v0.1 release.

The release owner (QaliAI) must record accepted exceptions with an owner and expiry. A missing gate is not
implicitly waived by a passing build.

## Gate summary

15 gates total: 7 Passed/Enhanced, 2 Advisory/Partial, 4 Pending (owner), 2 Blocked (infra)
