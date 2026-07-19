# Changelog

All notable repository changes are recorded here. This project follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and intends to use
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) for tagged releases.

## [Unreleased]

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
