# Changelog

All notable repository changes are recorded here. This project follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and intends to use
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) for tagged releases.

## [Unreleased]

### Added

- Start Here operator pathway, stack-builder install-guide links, release-audit browser tests
  (accessibility and overflow on 12 routes at 3 widths, operator journey), licensing/privacy audit,
  public release plan, distribution drafts, and `docs/NEXT_SESSION.md`.

### Fixed

- 157 broken internal links; stack-builder catalog enrichment in production builds; unlabeled
  checkboxes and keyboard-inaccessible tables; stale ROI heading test; Prettier and Gitleaks CI
  failures; nine tool license classifications corrected from official LICENSE files.

### Added

- Release process, readiness gate, preview and launch checklists, and rollback instructions.
- Reproducible Lychee wrapper pinned to version 0.24.2 with platform archive checksums.
- Unsigned release-evidence workflow for a site build, CycloneDX SBOM, dependency-license inventory,
  and SHA-256 checksums.
- Advisory Trivy workflow for the image tags referenced by Compose templates.
- Deliberate LF normalization through `.gitattributes`.

### Changed

- Link checking no longer depends on a globally installed Lychee binary.
- Repository and deployment status documentation now reflects the private GitHub repository, hosted
  CI evidence, and confirmed Pages configuration failure.

No version has been tagged or published from these changes.
