# n8n Lead Handoff Data Map

| Field/state         | Authority            | n8n handling                       | Destination/log rule                      |
| ------------------- | -------------------- | ---------------------------------- | ----------------------------------------- |
| `source_id`         | Form store           | Idempotency and reconciliation key | Unique destination external reference     |
| Name/email          | Submitted form       | Pass without enrichment            | Test lead contact; minimize log retention |
| Company             | Submitted form       | Optional mapping                   | Omit if not required                      |
| Inquiry type        | Approved form values | Deterministic mapping only         | Lead category, never eligibility          |
| Consent flag        | Consent capture      | Pass as evidence pointer/status    | Never infer or change                     |
| Execution ID/status | n8n                  | Troubleshooting                    | Retain for approved short period          |
| Credentials         | Provider owners      | n8n credential store               | Never export values or log headers        |
| Workflow JSON       | Integration owner    | Definition                         | Inspect names/IDs/headers before storage  |

The form store retains the original. The destination owns follow-up state. n8n must not become the only copy of a submission or exception.
