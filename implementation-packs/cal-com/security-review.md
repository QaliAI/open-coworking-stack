# Cal.com security review

| Review area    | Operator question                                                              | Evidence                           |
| -------------- | ------------------------------------------------------------------------------ | ---------------------------------- |
| Calendar scope | Can the connection read/write more than required?                              | Provider scope and revoke test     |
| Public detail  | Can invitees infer private event names, attendee data, or excess availability? | Public-page/booking review         |
| Admin/host     | Are accounts individual and privileges minimal?                                | Role/account test                  |
| Forms          | Are free text and contact fields minimized and safely worded?                  | Privacy approval                   |
| Secrets/API    | Are OAuth/API keys server-side, rotated, and restricted?                       | Secret-reference/revocation record |
| Workflows      | Can retries duplicate messages/events or leak data?                            | Failure/idempotency tests          |
| Self-host      | Are TLS, DB, mail, jobs, backups, and updates protected?                       | Architecture/recovery review       |

Escalate rooms, payment, access, identity, or sensitive visitor data to relevant specialists. No runtime security test exists.
