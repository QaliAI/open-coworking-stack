# Security review

## Threats and controls

| Threat                   | Required control                                     | Evidence        |
| ------------------------ | ---------------------------------------------------- | --------------- |
| Broad inherited access   | Inspect page, group, teamspace, and workspace grants | Permission test |
| Public-link exposure     | No internal pilot page published                     | Link inventory  |
| Stale guest              | Time-bounded approval and revocation                 | Guest record    |
| Admin loss               | Two owners and tested recovery                       | Recovery record |
| Connected-app overreach  | Scope/owner/revocation review                        | App register    |
| Sensitive export leakage | Restricted external storage                          | Access review   |

Do not assert SSO, audit, retention, residency, or recovery controls unless the chosen plan/contract and local test prove them. Escalate any unauthorized disclosure to the privacy and security owners.
