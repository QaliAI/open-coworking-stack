# Branch protection audit

> **Audit date:** 2026-07-20
> **Audited by:** QA automation
> **Scope:** `release/operator-product-v0.1` baseline

## Current state

No committed or repository-level branch protection rules exist for any branch.
`CODEOWNERS` is a placeholder with no configured reviewers.

## Risks

| Risk | Impact |
|------|--------|
| Force-push to `main` | History rewrite, lost CI/CD artifacts |
| Direct push without PR | Bypass CI, lint, typecheck, validate gates |
| No required reviews | Single-person releases with no independent verification |
| No stale-branch cleanup | Accumulated stale feature branches with unverified content |
| No signed commits | Inability to verify author identity or provenance |

## Recommended rules

Apply these in repository Settings > Branches > Add rule for `main`:

### Essential (P0)

1. **Require pull request before merging** — prevents direct pushes
2. **Require at least 1 approval** — ensures another contributor has reviewed
3. **Dismiss stale approvals** — forces re-review after new commits
4. **Require status checks to pass** — gates on CI, CodeQL, secret scan
   - `Travis CI — verify` (or equivalent check name from `ci.yml`)
   - `CodeQL — Analyze (javascript-typescript)`
   - `Secret Scan — Gitleaks secrets scan`
5. **Require branches to be up to date** — prevents merge skew

### Strongly recommended

6. **Include administrators** — applies rules to all accounts
7. **Restrict push** to designated deploy accounts or teams
8. **Require signed commits** — enables commit verification via GPG/SSH
9. **Lock branch** — prevents deletion once created

### Recommended for `release/*` branches

10. **Same rules as `main`** — release branches are short-lived but should not accept direct pushes
11. **Require linear history** — squash merge only, no merge commits in release lines

## Patterns not available in GitHub UI

| Control | Approach |
|---------|----------|
| Prevent large PRs | Use `labeler.yml` `size/XL` -> manual review gate |
| Block WIP PRs | Use `semantic-pr.yml` and reject titles starting with `wip:` |
| Enforce conventional commits | Already configured in `semantic-pr.yml` |
| Prevent dependency confusion | GitHub dependency review (enable in repo settings) |

## Implementation order

1. Add CodeQL (`codeql.yml`) and secret scan (`secret-scan.yml`) workflows
2. Let each workflow run at least once to create a check run
3. Configure `main` branch protection rule with all P0 checks
4. Configure `release/*` branch protection rule
5. Update `CODEOWNERS` with verified accounts
6. Enable GitHub dependency review and secret scanning (org-level settings)
