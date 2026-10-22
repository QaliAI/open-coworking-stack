# Data map

| Data                              | Location/flow                   | Access                          | Retention/exit                   |
| --------------------------------- | ------------------------------- | ------------------------------- | -------------------------------- |
| Target URL/port and neutral label | Operator to Uptime Kuma         | Technical/service owners        | Plain approved service inventory |
| Heartbeats and incidents          | Target responses to data store  | Responders                      | Minimum operational retention    |
| Notification destination/token    | Uptime Kuma to provider         | Restricted admins               | Channel register; revoke at exit |
| Optional check credential/header  | Secret store/application state  | Least-privilege admins only     | Avoid; rotate/revoke at exit     |
| Status-page text                  | Dashboard to public if approved | Communications-approved editors | Reviewed archive/removal         |

Do not include member identifiers, secret query strings, internal topology, or private incident detail in labels and public pages. Inspect backup contents and logs for secrets before approving handling.
