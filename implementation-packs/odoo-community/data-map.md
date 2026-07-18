# Odoo Community Evaluation Data Map

| Synthetic data/state        | Authority in evaluation  | Odoo use                  | Exit/recovery                               |
| --------------------------- | ------------------------ | ------------------------- | ------------------------------------------- |
| Lead External ID/contact    | Fixture CSV              | CRM opportunity/contact   | Export/reconcile by External ID             |
| Stage/lost reason           | Sales contract           | Workflow sample           | Neutral process map plus export             |
| Product/service             | Finance-approved fixture | Invoice line sample       | Export fields and assumptions               |
| Tax/currency/invoice        | Finance fixture          | Document/lifecycle review | Finance checks output; not statutory proof  |
| Users/roles                 | Technical owner          | Access enforcement        | Role register and denied tests              |
| Attachments/chatter         | Synthetic only           | Workflow context          | Filestore/export fidelity tested separately |
| PostgreSQL/filestore/config | Service                  | Recoverable state         | Matched backup/restore                      |
| Modules/custom code         | Technical inventory      | Behavior and schema       | Exact source/version/license map            |

No real member, payment, bank, identity, access, dispute, or employee data is allowed.
