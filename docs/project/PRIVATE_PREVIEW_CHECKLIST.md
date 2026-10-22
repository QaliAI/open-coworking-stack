# Private Preview Checklist

Use a local preview by default. A provider preview URL is not private merely because it is unlisted.

## Before sharing

- [ ] Identify the exact commit and ensure the worktree contains no credentials or private data.
- [ ] Run `pnpm install --frozen-lockfile`, `pnpm check`, browser tests, accessibility tests, and the
      pinned link check.
- [ ] Build with a root base path and the intended preview origin; inspect the sitemap and canonical
      links.
- [ ] Verify generated catalog data contains only public, brand-neutral records.
- [ ] Select named reviewers and an expiry date.
- [ ] Confirm the preview platform's access protection is enabled before the first provider deploy.
- [ ] Confirm search-engine indexing is disabled by provider protection or an independently verified
      preview control; obscurity is insufficient.
- [ ] Do not add provider tokens to repository files, workflow YAML, build logs, or preview content.

## Local-only preview

```bash
pnpm build
pnpm --filter @ocs/web preview --host 127.0.0.1
```

Binding to `127.0.0.1` keeps the preview on the local machine. Do not change to `0.0.0.0` on an
untrusted network.

## Review

- [ ] Check `/`, `/directory/`, one generated tool, one guide, one stack, one workflow, exports, 404,
      favicon, and sitemap.
- [ ] Test keyboard navigation, narrow viewport, dark mode, and a real screen-reader path.
- [ ] Check canonical URLs, repository links, and asset paths against the preview origin.
- [ ] Record defects without member data, credentials, or undisclosed vulnerability details.
- [ ] Obtain reviewer sign-off or return the candidate for revision.

## Close

- [ ] Remove or expire the provider preview after review.
- [ ] Revoke temporary reviewer access and preview-only credentials.
- [ ] Retain the commit, evidence run, review result, and accepted exceptions.
- [ ] Confirm that closing a preview did not alter production aliases or DNS.
