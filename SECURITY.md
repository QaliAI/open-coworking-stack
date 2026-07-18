# Security Policy

## Supported versions

Security fixes are accepted against the default branch (`main`).

| Component               | Support                         |
| ----------------------- | ------------------------------- |
| Catalog metadata & docs | Current `main`                  |
| Generators / validators | Current `main`                  |
| Documentation website   | Current `main`                  |
| Starter packs (Compose) | Current `main` (templates only) |

## Reporting a vulnerability

Do **not** open a public issue for security vulnerabilities in this repository's code, CI, or generated site.

Preferred path:

1. Use GitHub **Private vulnerability reporting** on this repository if enabled.
2. Otherwise use a private maintainer contact published in the repository profile. This checkout has
   no configured remote or published private contact, so do not include vulnerability details in a
   public issue while that channel is unavailable. A report should include:
   - description of the issue;
   - impact assessment;
   - reproduction steps;
   - suggested remediation if known.

Please allow a reasonable response window before public disclosure.

## Out of scope

- Vulnerabilities in **upstream** tools listed in the catalog. Report those to the upstream project.
- Misconfigurations an operator introduces when deploying starter packs in production.
- Theoretical issues without a plausible impact on this repository or its consumers.

## Catalog security notes

If a listed tool has a known, publicly disclosed security concern that operators should know about when evaluating it, open a normal issue using the **Security concern (catalog)** template. Do not include exploit details or private member data.
