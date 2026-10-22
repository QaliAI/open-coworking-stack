# Chatwoot security review

| Review area     | Operator question                                                            | Evidence                                 |
| --------------- | ---------------------------------------------------------------------------- | ---------------------------------------- |
| Agents/admins   | Are accounts individual, least-privilege, MFA-protected where supported?     | Role/login/denial test                   |
| Notes/replies   | Can private notes ever reach visitors or unauthorized agents?                | Message visibility test                  |
| Widget/domain   | Is the widget shown only where approved with privacy/urgent text?            | Page/source/browser review               |
| Attachments     | Are size/type/access/scanning/retention and sensitive-data response defined? | Upload/download/denial tests             |
| Credentials     | Are channel/API/mail/storage/database secrets protected and revocable?       | Secret register/revoke test              |
| Automation      | Can rules/bots misroute, duplicate, disclose, or close a case?               | Negative/failure tests before enablement |
| Self-host stack | Are web/worker, PostgreSQL, Redis, storage, proxy, backups secured?          | Architecture and restore review          |

Escalate vulnerabilities privately through upstream channels. No penetration or runtime security test exists.
