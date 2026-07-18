# Data map

| Data                         | Source/purpose               | Access                              | Recovery/exit                         |
| ---------------------------- | ---------------------------- | ----------------------------------- | ------------------------------------- |
| Test identity attributes     | Approved test roster         | Identity admins; minimum app claims | Reconcile to independent roster       |
| Groups/roles/claims          | Approved role matrix         | Identity and app owners             | Export/document mapping independently |
| Credentials/MFA state        | User enrollment              | Protected runtime                   | Approved reset/re-enrollment path     |
| Sessions/login/admin events  | Keycloak operations/security | Restricted operators                | Retention-limited evidence            |
| Client IDs/secrets/redirects | App integration              | App/identity admins; secret store   | Rotate/revoke on rollback/exit        |
| Realm keys/database/config   | Token and realm operation    | Restricted runtime/recovery         | Protected coordinated recovery set    |

Release only required claims. Exclude live member, payment, HR case, biometric, and door-access data. Actual attributes/events must be observed and approved in staging.
