# Release Process

This process produces reviewable evidence before any publication. A successful build or artifact
upload is not approval to deploy, tag, publish, change repository visibility, or announce a release.

## Roles

- A release owner selects the candidate commit and coordinates the checklist.
- A reviewer independently checks evidence, unresolved risks, licensing metadata, and user-visible
  changes.
- A repository owner explicitly approves any tag, GitHub Release, deployment, or visibility change.

One person may fill multiple roles for a small project, but the approvals must still be recorded.

## Candidate preparation

1. Start from an reviewed commit on `main` or a named release branch; do not release a dirty worktree.
2. Confirm `package.json` and `pnpm-lock.yaml` agree with `pnpm install --frozen-lockfile`.
3. Update `CHANGELOG.md` without marking an untagged version as released.
4. Complete `docs/project/RELEASE_READINESS.md` and the applicable launch checklist.
5. Run the local checks:

   ```bash
   pnpm install --frozen-lockfile
   pnpm format:check
   pnpm lint
   pnpm typecheck
   pnpm validate
   pnpm generate
   pnpm test
   pnpm build
   pnpm test:e2e
   pnpm test:a11y
   pnpm link-check
   ```

6. Run **Release Evidence (not a release)** with `workflow_dispatch` at the exact candidate ref.
7. Review its unsigned site build, CycloneDX SBOM, dependency-license inventory, and `SHA256SUMS`.
8. Review the latest **Reference Image Scan (advisory)** report. Findings apply to mutable reference
   image tags and do not demonstrate that the Compose templates run correctly.

## Evidence interpretation

| Evidence                         | What it establishes                                   | What it does not establish                           |
| -------------------------------- | ----------------------------------------------------- | ---------------------------------------------------- |
| CI checks                        | Source passed the named automated checks              | Editorial accuracy or production fitness             |
| Built static site                | Astro produced files for the tested commit            | A successful or authorized deployment                |
| CycloneDX SBOM                   | Syft observed packages in the build workspace         | Completeness for every runtime or legal approval     |
| Dependency-license inventory     | Installed packages reported license metadata          | Legal advice or compatibility approval               |
| SHA-256 checksums                | Later files can be compared byte-for-byte             | Signer identity, provenance, or authenticity         |
| Advisory reference-image scan    | Trivy found known fixed HIGH/CRITICAL vulnerabilities | Runtime safety, exploitability, or a production gate |
| Compose configuration validation | Docker Compose parsed a template                      | Startup, persistence, restore, upgrade, or rollback  |

The Lychee check covers external HTTP(S) links. Astro builds and browser tests cover generated routes;
Lychee filesystem resolution is not used as a substitute for Starlight routing.

The repository does not currently claim artifact signing or build provenance. Do not describe the
unsigned workflow artifacts or checksums as signed or attested.

## Approval and publication

After evidence review, the repository owner records one decision: approve, revise, defer, or reject.
Only explicit approval permits the owner to create an annotated version tag and GitHub Release. A tag
must point to the reviewed commit, and release notes must match the changelog and known limitations.
Do not reuse or move an existing version tag.

Deployment is a separate approval. Follow the private-preview or public-launch checklist and
`docs/project/ROLLBACK.md`. GitHub Pages remains blocked until the private repository has Pages enabled
and configured; enabling it or making the repository public is an owner action, not a CI repair.

## Post-release record

Record the commit, tag, workflow run URLs, artifact checksums, approver, publication URL, verification
results, and any accepted exceptions. Update the readiness document for the next candidate. Keep
security-sensitive details out of public release notes.
