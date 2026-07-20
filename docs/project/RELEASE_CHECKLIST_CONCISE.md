# Release checklist (concise)

> Consolidation of `RELEASE_PROCESS.md`, `RELEASE_READINESS.md`, `PUBLIC_LAUNCH_CHECKLIST.md`,
> and `PRIVATE_PREVIEW_CHECKLIST.md` into a single gate checklist.
> Use this document to evaluate whether the current state is ready to ship v0.1.

## P0 — Blocking

| Gate | Criteria | Status |
|------|----------|--------|
| **Content integrity** | No placeholder text, TODO markers, or boilerplate-only pages in release scope | |
| **Validation** | `pnpm validate` = 0 errors, `pnpm quality-report` = 0 issues | |
| **CI/CD** | `pnpm check` passes on `release/*` branch; CI green on latest commit | |
| **Secret scan** | Gitleaks or GitHub secret scan clean on release branch | |
| **Code scan** | CodeQL analysis clean on release branch | |
| **Dependency check** | Dependabot PRs reviewed; no HIGH/CRITICAL unfixed vulnerabilities in dependencies | |
| **Image scan** | Trivy scan of compose pack images: no CRITICAL unfixed vulns in pinned tags | |
| **SBOM evidence** | Release evidence workflow succeeds on `v*` tag; SBOM, license inventory, checksums uploaded | |
| **Branch protection** | `main` protected: PR required, 1+ approval, CI must pass, branches up to date | |
| **Release notes** | `CHANGELOG.md` updated; relevant changes called out for operator audience | |

## P1 — Should have

| Gate | Criteria | Status |
|------|----------|--------|
| **Acceptance tests** | All 8 operator persona scenarios reviewed; P0 scenarios pass | |
| **Comparison depth** | All comparison pages classified; flagships have sourced evidence markers | |
| **Stack Builder** | Hard-coded catalog replaced with canonical YAML source | |
| **Privacy checklist** | `docs/privacy-checklist.md` reviewed against page content | |
| **Compose runtime** | Stage 1 (config) + Stage 2 (pull) validated for all 5 packs | |
| **Rollback plan** | `docs/project/ROLLBACK.md` reviewed and exercised in staging | |
| **PR template** | All verification items checked against release branch | |

## P2 — Nice to have

| Gate | Criteria | Status |
|------|----------|--------|
| **Visual review** | Navigation, mobile layout, system diagram reviewed | |
| **Link check** | `pnpm lychee` passes for all external URLs in release scope | |
| **Freshness check** | All `verification.last_reviewed` dates within 90 days | |
| **Code signing** | Tag signed with GPG/SSH; release artifacts signed with Sigstore | |
| **Pages deployment** | Staging site deployed and verified (GitHub Pages or Vercel preview) | |
| **Professional boundaries** | `docs/ops/professional-help-boundaries.md` reviewed and referenced from site | |

## Decision gates

| Decision | Required approvals | Minimum criteria |
|----------|-------------------|------------------|
| **Private preview** | Repository owner | All P0 clear |
| **Public launch** | Repository owner + 1 independent reviewer | All P0 + P1 acceptance tests + P1 comparison depth |

## Post-release

- [ ] Tag release: `git tag -s v0.1.0 -m "v0.1.0"`
- [ ] Push tag: `git push origin v0.1.0`
- [ ] Verify release evidence workflow completes
- [ ] Publish release on GitHub with changelog
- [ ] Archive QA branches or merge into `release/` for audit trail
- [ ] Update `ROADMAP.md` with v0.1 delivery date
- [ ] Update `SECURITY.md` supported versions if v0.1 is a separate branch
