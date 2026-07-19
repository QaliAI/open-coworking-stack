# Public Launch Checklist

This checklist requires explicit repository-owner approval. Completing technical checks does not grant
permission to make the repository or a deployment public.

## Authorization and trust

- [ ] Record owner approval for the exact commit, destination, visibility, and launch time.
- [ ] Confirm repository visibility and Pages/provider access settings intentionally; do not change
      them as an incidental workflow fix.
- [ ] Confirm security reporting has a working private channel visible to users.
- [ ] Review licensing, notices, trademarks, disclaimer, privacy boundaries, and all launch claims.
- [ ] Ensure no claim upgrades `partially-verified` records or reference templates without evidence.

## Release evidence

- [ ] Hosted CI passes at the exact commit.
- [ ] Pinned link check passes or every exception is documented and time-bounded.
- [ ] Unsigned SBOM, dependency-license inventory, site build, and checksums are reviewed.
- [ ] Advisory image-scan findings and failures are reviewed without describing packs as tested.
- [ ] Browser, accessibility, mobile, sitemap, canonical URL, and export checks pass.
- [ ] A private preview is approved and closed or retained intentionally.

## Deployment controls

- [ ] A known-good prior ref/artifact and its checksum are available.
- [ ] `docs/project/ROLLBACK.md` has been rehearsed for the selected provider.
- [ ] DNS, custom domain, TLS, analytics, and indexing behavior are reviewed where applicable.
- [ ] Deployment credentials are least-privilege provider secrets, never repository content.
- [ ] Monitoring owner and launch observation window are assigned.

## Launch and verification

- [ ] Deploy only through the explicitly approved provider path.
- [ ] Record the deployment ID, commit, URL, time, and approver.
- [ ] Run route, asset, sitemap, canonical, accessibility, and external-link smoke checks.
- [ ] Confirm the public URL does not expose preview branches, source maps with secrets, or private
      artifacts.
- [ ] Announce only after verification; include known limitations and no unsupported signing claim.

## Decision

- [ ] Mark the launch accepted, rolled back, or held, with owner and timestamp.
- [ ] If accepted, update release/readiness records and schedule a post-launch review.
- [ ] If held or rolled back, preserve evidence and open narrowly scoped corrective work.
