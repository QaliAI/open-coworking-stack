# Rollback Instructions

These instructions cover this repository's static documentation site. Catalog tools and Compose
templates have their own operator-specific recovery requirements and are not deployed by this site.

## Prepare before deployment

1. Record the candidate commit, provider deployment ID, public URL, and approver.
2. Identify a known-good commit and retained build artifact. Verify its SHA-256 checksum.
3. Confirm the provider can restore or redeploy that exact version without changing repository
   visibility, DNS, or unrelated environments.
4. Define rollback triggers: broken primary routes/assets, incorrect canonical URLs, exposed private
   content, severe accessibility regression, or security/privacy risk.

## Respond

1. Stop further promotion and announcements. Preserve logs and deployment identifiers.
2. For a security or privacy exposure, restrict access first if the provider supports it, rotate any
   exposed credential outside Git, and follow `SECURITY.md`. A source revert does not revoke secrets.
3. Restore the known-good provider deployment or rebuild the known-good immutable Git ref. Never use a
   dirty working tree, force-push, moved tag, or unreviewed local files as a rollback source.
4. Keep the failing deployment available only when access is restricted and evidence retention is
   necessary.

## Provider paths

- GitHub Pages: run the preserved Pages workflow against the known-good ref only after Pages is enabled
  and deployment is authorized. If that cannot restore service promptly, disable the custom domain or
  Pages site through an approved owner action; do not make the repository public as a workaround.
- Vercel: use the project's protected rollback/redeploy control for the recorded known-good deployment,
  then verify that production aliases point to it. Do not promote a preview that lacks approval.
- Netlify: restore the recorded known-good deploy through the provider deploy history, then verify the
  primary domain and aliases. Do not trigger a new build from an unreviewed branch.

Provider controls change over time. Confirm the current provider documentation and permissions during
the rehearsal rather than relying on an untested command copied into automation.

## Verify and follow up

1. Test `/`, `/directory/`, one tool, one guide, one stack, one workflow, exports, assets, 404, and
   sitemap at the restored URL.
2. Check canonical URLs, TLS, indexing, and any custom domain.
3. Record incident time, trigger, failed and restored deployment IDs/commits, checksums, decisions, and
   residual risk.
4. Correct source through a normal reviewed change. Do not erase release history or reuse a version
   tag.
