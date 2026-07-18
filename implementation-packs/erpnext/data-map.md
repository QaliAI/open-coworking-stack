# Data map

| Data                    | Pilot source                  | Purpose             | Exit/reconciliation                    |
| ----------------------- | ----------------------------- | ------------------- | -------------------------------------- |
| Synthetic customer      | Test fixture                  | Invoice party       | CSV/report plus field map              |
| Membership item         | Approved test definition      | Invoice line        | Product definition export              |
| Draft/submitted invoice | Synthetic transaction         | Lifecycle test      | Finance-checked export/report          |
| Payment metadata        | Synthetic reference only      | Reconciliation test | Independent expected-results sheet     |
| Roles/configuration     | Approved matrix               | Duty separation     | Screens/config notes and role map      |
| Attachments/files       | None unless explicitly tested | Excluded by default | Include in backup/export test if added |

Never enter card credentials or real bank credentials. Live member, financial, tax, HR, identity, or attachment data requires a new privacy/security/legal and migration approval.
