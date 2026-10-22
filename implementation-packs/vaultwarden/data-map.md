# Data map

| Data                             | Location/flow                 | Access                               | Retention/exit                                       |
| -------------------------------- | ----------------------------- | ------------------------------------ | ---------------------------------------------------- |
| Encrypted item data              | Client/server and backups     | Approved collection members          | Protected export/import then source rotation         |
| Accounts and membership          | Server/clients                | Organization owners and operators    | Access matrix; revoke/offboard                       |
| Attachments/Sends if enabled     | Server/data volume            | Explicitly approved users            | Inventory, backup, expiry/deletion evidence          |
| Admin token/config/signing state | Secret/config and data volume | Restricted technical/recovery owners | Separate recovery inventory; never bulk export       |
| Recovery codes and backup keys   | Independent protected custody | User/custodian as approved           | Tested custody and secure retirement                 |
| Decrypted export                 | Temporary approved workspace  | Two authorized people                | Immediate import verification and destruction record |

Encryption does not eliminate personal-data or breach obligations. Inspect selected-version backup/export contents and never place real secrets in evidence records.
