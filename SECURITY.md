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

Do **not** open a public issue for security vulnerabilities in this repository's code, CI, or
generated site.

Preferred path:

1. Use GitHub **Private vulnerability reporting** on `QaliAI/open-coworking-stack` if the Security tab
   offers it to you. The repository is private, and API inspection on 2026-07-18 did not confirm that
   private reporting is enabled.
2. Otherwise establish a private channel with the repository owner before sending details. No fallback
   security email is published in this repository as of 2026-07-18, so do not include vulnerability
   details in a public issue. A report should include:
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
