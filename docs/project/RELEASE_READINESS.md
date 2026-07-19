# Release Readiness

Last reviewed: 2026-07-18  
Candidate branch: `release/operator-product-v0.1`  
Decision: **not release-ready**

This is a living gate, not a release claim. Re-evaluate it against the exact candidate commit.

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

| Gate                                    | State       | Required evidence or action                                                   |
| --------------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Scope and changelog reviewed            | Pending     | Reviewer confirms release scope and `CHANGELOG.md`                            |
| Frozen install and complete local check | Pending     | Fresh run against the exact candidate                                         |
| Hosted CI for candidate                 | Pending     | Successful CI run at candidate commit                                         |
| Link check                              | Passed      | 2,308 links checked; 0 errors; documented 403/429/LibreBooking exceptions     |
| SBOM and dependency licenses            | Implemented | Run unsigned release-evidence workflow and review outputs                     |
| Static artifact checksums               | Implemented | Review `SHA256SUMS`; do not call checksums signatures                         |
| Reference-image scan                    | Advisory    | Review results and scan errors; tags remain mutable and packs remain untested |
| Runtime validation of Compose packs     | Blocked     | Isolated startup, persistence, backup, restore, upgrade, and rollback drills  |
| Security and privacy review             | Pending     | Review changed attack surface, data handling, and disclosure path             |
| Accessibility and browser evidence      | Partial     | Chromium and axe exist; broader browser/mobile coverage is not established    |
| Private preview                         | Pending     | Approved protected preview and private-preview checklist                      |
| Public launch authorization             | Blocked     | Explicit owner approval and completed public-launch checklist                 |
| Rollback rehearsal                      | Pending     | Known-good artifact/ref and provider-specific restoration test                |
| Artifact signing/provenance             | Not offered | No supported signing identity or provenance workflow is configured            |

## Blocking facts

- The broader operator-product completion audit still identifies shallow or unverified catalog,
  workflow, stack, and implementation-pack evidence.
- Pages cannot deploy with the current private-repository configuration.
- Reference Compose packs are configuration-validated templates, not runtime-verified releases.
- No protected preview has been reviewed and no public launch has been authorized.

The release owner must record accepted exceptions with an owner and expiry. A missing gate is not
implicitly waived by a passing build.
