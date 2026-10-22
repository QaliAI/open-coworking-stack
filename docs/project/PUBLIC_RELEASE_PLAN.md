# Public release plan

The repository stays **private** until every blocking item below is closed and the owner approves in
writing. DNS is not changed by this plan.

## Where we are

- Release candidate branch: `release/final-readiness-v0.1` (PR #11 head plus narrow fixes).
- Protected preview: `https://open-coworking-stack-272shh6vg-qaliais-projects.vercel.app`
  (Vercel project `open-coworking-stack`, team `qaliais-projects`; Vercel Authentication is on, so
  an anonymous request is redirected to login). Vercel labelled the first deployment "production"
  because the project was new; it has no custom domain.
- GitHub Pages: not enabled for the private repository (see `RELEASE_READINESS.md`).

## Blocking items (must close before public)

1. **Owner review** of the branch and merge of PR #11 (draft, 731 files). QA PRs #12–16 are already
   ancestors of PR #11's head; do not re-merge them.
2. **Author-email decision** (see `LICENSING_PRIVACY_AUDIT.md` §3).
3. **Full-history Gitleaks run** and a human skim of `compose/`, `implementation-packs/`,
   `release-artifacts/`.
4. **Counsel review** of CC BY content scope versus the paid products, trademark notes, and the
   Disclaimer page.
5. **Hosted CI green on the candidate.** Causes at PR #11's head: Prettier drift (fixed), Gitleaks
   403 (fixed with `pull-requests: read`), CodeQL "code scanning is not enabled" (a repository
   setting: it needs GitHub Advanced Security on a private repository, or turns green once public).
6. **crater** and any other flagged catalog records reviewed (audit §1).
7. **Related-product URLs** supplied, or the section stays hidden (hidden is safe).

## Not blocking, but state it in the launch post

- Compose packs are syntax-validated demonstrations, not runtime-tested.
- Task-fit coverage is partial; zero tools are "Verified Core".
- Comparisons are directional shortlists.

## Sequence

1. Owner merges the candidate to `main`. Hosted CI runs; fix anything real.
2. Enable GitHub Pages (Actions source) or keep Vercel. Set `PUBLIC_BASE_PATH` / `PUBLIC_SITE_URL`
   only for a sub-path host. A base-path build was verified link-clean.
3. Re-run `PRIVATE_PREVIEW_CHECKLIST.md` against the deployed URL.
4. Owner approves, then: flip repository visibility, tag `v0.1.0`, deploy, publish the posts in
   `DISTRIBUTION_ASSETS.md`.
5. After launch: apply Dependabot PRs one at a time (Astro 7 and Zod 4 are major bumps) and enable
   branch protection per `docs/security/branch-protection-audit.md`.

## Rollback

`ROLLBACK.md` applies. On Vercel, promote the previous deployment. Repository visibility can return
to private, but anything already cloned or indexed cannot be recalled.
