# Authentik data map

| Object               | Source of truth  | Stored/processed                 | Access                                           | Exit evidence                                 |
| -------------------- | ---------------- | -------------------------------- | ------------------------------------------------ | --------------------------------------------- |
| Staff identity       | Approved roster  | User and minimum attributes      | Identity admins; user self-service as configured | Roster/account reconciliation                 |
| Group/app assignment | Access matrix    | Policy/group/application objects | Identity and app owners                          | Reviewed mapping register                     |
| MFA material         | User enrollment  | Factor state                     | User and authorized recovery roles               | Recovery test; do not export secrets casually |
| Provider secret      | Secret store/app | Authentik and target app         | Named technical custodians                       | Revocation record                             |
| Events               | Authentik        | Authentication/admin activity    | Restricted reviewers                             | Retention-limited incident evidence           |

Exclude payment and member data. Verify actual exports, deletion, residency, and log fields in the selected release; none is runtime-tested here.
