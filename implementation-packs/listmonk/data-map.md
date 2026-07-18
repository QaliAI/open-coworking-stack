# listmonk Data Map

| Data                            | Authority                                        | In listmonk                        | Minimum retention/exit rule                          |
| ------------------------------- | ------------------------------------------------ | ---------------------------------- | ---------------------------------------------------- |
| Email address                   | Member/consent register                          | Subscriber address                 | Export with status, then delete on approved schedule |
| Display name                    | Member record                                    | Optional personalization           | Omit unless message requires it                      |
| Consent reference               | Consent register                                 | Approved attribute or external map | Retain evidence independently                        |
| Subscription/suppression status | Consent register plus listmonk unsubscribe event | Audience exclusion                 | Never overwrite without privacy review               |
| Segment                         | Communications policy                            | List/attribute                     | Review before every send                             |
| Campaign content                | Communications owner                             | Draft/history                      | Archive only required evidence                       |
| Delivery/bounce metrics         | SMTP/listmonk                                    | Operations and reconciliation      | Short approved retention                             |
| SMTP/API credentials            | Secret owner                                     | Runtime secret/config              | Never place in exports or this pack                  |

Map exact fields and retention before import. Open/click tracking creates additional event data and needs a separate privacy decision.
