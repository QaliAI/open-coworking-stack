# Security and privacy review

| Risk                          | Required control                            | Test/evidence            |
| ----------------------------- | ------------------------------------------- | ------------------------ |
| Bootstrap account takeover    | Replace initial credentials before exposure | Login test               |
| Secret/database disclosure    | Vaulted `CRYPT_KEY` and DB credentials      | Config review            |
| Booking/location overexposure | Least privilege and minimized visibility    | Denied user tests        |
| Departed member access        | Authoritative roster and disable test       | Deprovision record       |
| Admin UI exposure             | Restricted network/role and TLS             | Architecture/access test |
| History retained too long     | Approved retention plus backup expiry       | Retention record         |

Do not infer residency, deletion, SSO assurance, or audit capability without contract/configuration evidence. Do not expose raw location-history reports to managers without the approved aggregate purpose.
