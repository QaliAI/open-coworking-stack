# Security controls gap analysis

> **Analysis date:** 2026-07-20
> **Baseline:** `release/operator-product-v0.1`
> **Scope:** Security controls present in committed configuration, workflows, and documentation.

## Implemented controls

| Control                                                           | Where                                                                      | Status  |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------- | ------- |
| Security policy                                                   | `SECURITY.md` — supported versions, reporting path, out-of-scope           | Present |
| Dependabot                                                        | `.github/dependabot.yml` — npm + actions, monthly                          | Present |
| Trivy image scanning                                              | `.github/workflows/reference-image-scan.yml` — weekly, Compose pack images | Present |
| Syft SBOM generation                                              | `.github/workflows/release-evidence.yml` — on tag push + manual            | Present |
| SHA-256 checksums                                                 | `scripts/generate-checksums.mjs`                                           | Present |
| License inventory                                                 | `scripts/generate-license-inventory.mjs`                                   | Present |
| Security concern reporting path                                   | `.github/ISSUE_TEMPLATE/catalog-security-concern.yml`                      | Present |
| PR template verification gates                                    | `.github/PULL_REQUEST_TEMPLATE.md` — 8-item checklist                      | Present |
| Loopback-only compose ports                                       | All `compose/*/compose.yaml` — `BIND_ADDRESS` defaults to `127.0.0.1`      | Present |
| No privileged containers, Docker socket mounts, broad host mounts | All `compose/*/compose.yaml`                                               | Present |
| Placeholder-not-default secrets                                   | All `compose/*/.env.example` — `REPLACE_WITH_*` markers                    | Present |

## Gaps

### Static analysis

| Gap                                 | Severity | Recommended action                                        |
| ----------------------------------- | -------- | --------------------------------------------------------- |
| No CodeQL workflow                  | High     | Added in `qa/security-release-controls` — enable on merge |
| No SAST (Semgrep, SonarCloud, etc.) | Medium   | Evaluate after CodeQL baseline established                |
| No IaC scanning (Checkov, tfsec)    | Low      | Adopt if Terraform/Ansible manifests are added            |
| No dependency-review in PRs         | Medium   | Enable GitHub native dependency review in repo settings   |

### Secret detection

| Gap                        | Severity | Recommended action                                 |
| -------------------------- | -------- | -------------------------------------------------- |
| No secret scanning in PRs  | High     | Gitleaks workflow added — enable on merge          |
| No pre-commit hook         | Medium   | Add `.husky/pre-commit` with Gitleaks or similar   |
| No `.gitleaks.toml` config | Low      | Add repo-specific allowlist once baseline is clean |

### Supply chain

| Gap                                   | Severity | Recommended action                                     |
| ------------------------------------- | -------- | ------------------------------------------------------ |
| No signed commits                     | High     | Enable in branch protection and document GPG/SSH setup |
| No artifact signing (Sigstore/cosign) | High     | Add to release workflow when tags are published        |
| No provenance attestation (SLSA)      | High     | Requires artifact signing first; evaluate SLSA 1-2     |
| No pinning for Action dependencies    | Medium   | Pin third-party actions to full SHA (not semver tags)  |

### Branch and access

| Gap                       | Severity | Recommended action                                |
| ------------------------- | -------- | ------------------------------------------------- |
| No branch protection      | Critical | Apply rules per `branch-protection-audit.md`      |
| No CODEOWNERS             | Medium   | Updated in `qa/security-release-controls`         |
| No MFA enforcement check  | Low      | Verify org-level MFA requirement                  |
| No admin audit log review | Low      | Schedule quarterly org audit if GitHub Enterprise |

### Pipeline

| Gap                                                 | Severity | Recommended action                             |
| --------------------------------------------------- | -------- | ---------------------------------------------- |
| CI runs on `pull_request` not `pull_request_target` | Low      | Acceptable — no PR-write permissions needed    |
| No approval gate for release workflow               | Medium   | Add `environments:` to `release-evidence.yml`  |
| Release evidence not published                      | Low      | Enable GitHub Pages or add artifact publishing |

### Runtime

| Gap                                               | Severity | Recommended action                                   |
| ------------------------------------------------- | -------- | ---------------------------------------------------- |
| Compose runtime stages 2-11 not validated         | Medium   | Operate compose packs in staging and report results  |
| No container runtime security (seccomp, AppArmor) | Low      | Evaluate when deploying to production host           |
| No network policy (Docker network segmentation)   | Low      | Internal `backend` networks present in compose files |

## Remediation roadmap

| Phase                              | Controls                                                                                     | Timeline    |
| ---------------------------------- | -------------------------------------------------------------------------------------------- | ----------- |
| **Immediate (this PR)**            | CodeQL, Gitleaks, PR labeling, semantic PR, CODEOWNERS, branch protection doc                | 2026-07     |
| **Short-term (v0.1 release gate)** | Branch protection rules configured, secret scanning pass on existing history, Action pinning | Pre-release |
| **Medium-term (v0.2)**             | Pre-commit hooks, Sigstore signing on release, SLSA provenance                               | Post-v0.1   |
| **Long-term (v0.3+)**              | SAST integration, container runtime hardening, IaC scanning                                  | Per roadmap |

## Notes

- GitHub's built-in secret scanning and push protection may be enabled at the org level;
  this is not visible from within the repository configuration.
- Private vulnerability reporting is referenced in `SECURITY.md` but requires activation
  in repo Settings > Security > Private vulnerability reporting.
- Dependabot runs monthly with 5-PR limit per ecosystem — this is conservative and should
  be reviewed as the dependency count grows.
