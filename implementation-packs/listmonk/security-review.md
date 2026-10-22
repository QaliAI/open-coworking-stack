# Security and Privacy Review

| Risk                             | Required control                                           | Evidence                            |
| -------------------------------- | ---------------------------------------------------------- | ----------------------------------- |
| Whole-list or wrong-segment send | Separate draft/send permission and final audience approval | Role test and signed count/sample   |
| Admin/API exposure               | TLS, restricted private routes, named accounts             | Edge rules and denied request       |
| SMTP/API secret disclosure       | External secret storage, narrow identity, rotation owner   | Redacted credential register        |
| Forged bounce events             | Provider-documented authentication/edge validation         | Provider test evidence              |
| Personal data in logs/exports    | Minimized fields and bounded retention                     | Retention setting and deletion test |
| Suppression loss                 | Independent suppression evidence and restore test          | Before/after counts and fixtures    |

Open/click tracking, public uploads, custom templates, and plugins each require a new data/security review. No certification or security posture is asserted by this pack.
