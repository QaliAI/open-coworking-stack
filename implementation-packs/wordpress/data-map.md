# Data map

| Data                            | Location/flow                                      | Access                       | Retention/exit                                 |
| ------------------------------- | -------------------------------------------------- | ---------------------------- | ---------------------------------------------- |
| Public pages/posts/media        | Editors to site/CDN if any                         | Approved editors/admins      | Native content export plus source media        |
| Minimal tour fields             | Browser to form storage/email/approved destination | Lead-response staff only     | Reconcile and delete under approved retention  |
| Users/roles                     | WordPress/identity layer                           | Technical owner and managers | Access/offboarding register                    |
| Database/uploads/config         | Host and backups                                   | Technical/recovery owners    | Full protected backup and tested restore       |
| Theme/plugin assets/settings    | Site and vendor services                           | Technical owner              | Dependency manifest and replacement plan       |
| Logs/spam/analytics if approved | Host/third parties                                 | Minimum authorized roles     | Separate review, retention, deletion, and exit |

Payment, identity-document, access-control, and member-billing data are prohibited. Map actual plugin/host flows; WordPress core documentation cannot establish them.
