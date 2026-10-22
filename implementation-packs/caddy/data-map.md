# Data map

| Data                    | Purpose                        | Access                     | Retention/exit                          |
| ----------------------- | ------------------------------ | -------------------------- | --------------------------------------- |
| Caddy configuration     | Host and upstream routing      | Proxy owner; reviewer      | Version while active; retain exit copy  |
| Certificate state/keys  | TLS operation                  | Runtime and recovery owner | Protect per approved recovery design    |
| DNS credentials         | Record automation, if approved | Runtime secret only        | Rotate/revoke after use or exit         |
| Access logs, if enabled | Approved troubleshooting       | Restricted operators       | Minimize, rotate, delete on schedule    |
| Metrics/alerts          | Availability operations        | Operations team            | Retain only approved operational fields |

Request URLs, IP addresses, headers, and identifiers can make logs personal or sensitive. Do not log bodies, credentials, cookies, or authorization headers. Actual fields depend on reviewed configuration and must be observed in staging.
