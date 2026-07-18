# n8n Security Review

| Threat                           | Control                                                   | Evidence                              |
| -------------------------------- | --------------------------------------------------------- | ------------------------------------- |
| Over-scoped provider token       | Separate narrow source/destination identities             | Provider scope screenshots or records |
| Secret in export                 | Inspect JSON for names, IDs, headers, and sample payloads | Redacted review record                |
| Personal payload retained        | Configure success/error retention and pruning             | Settings plus deletion observation    |
| Editor compromise                | Restricted admin/editor accounts and TLS                  | Access test and account list          |
| Duplicate write on retry         | Destination lookup/idempotency plus human uncertain queue | Duplicate/timeout fixtures            |
| Community node supply-chain risk | No community node in pilot; separate review if proposed   | Node inventory                        |

Do not infer that self-hosting establishes compliance or that n8n encrypts/protects every external log and backup. Review the actual deployment and secret custody.
