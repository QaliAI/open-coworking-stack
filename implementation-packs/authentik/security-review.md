# Authentik security review

| Review area   | Operator question                                                          | Blocking evidence                         |
| ------------- | -------------------------------------------------------------------------- | ----------------------------------------- |
| Admin plane   | Are individual admin accounts, MFA, and restricted network paths used?     | Admin-role and login test                 |
| Claims        | Does the app receive only approved attributes?                             | Sanitized token/claim review              |
| Policy        | Can an unapproved user or group gain access?                               | Negative test                             |
| Secrets       | Who owns, rotates, and revokes provider/database/bootstrap secrets?        | Secret register reference and revoke test |
| Proxy/outpost | Are callback, proxy trust, Docker socket, and outpost privileges reviewed? | Architecture sign-off                     |
| Recovery      | Is break-glass independent and reviewed after use?                         | Witnessed drill                           |
| Events        | Are sensitive logs restricted and retained deliberately?                   | Access/retention review                   |

Escalate privileged, finance, access-control, HR, or regulated apps to an IAM/security specialist. No penetration test or runtime review has occurred.
