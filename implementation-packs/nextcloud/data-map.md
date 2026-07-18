# Nextcloud Data Map

| Data/state               | Authority                   | Nextcloud role             | Exit/recovery requirement                            |
| ------------------------ | --------------------------- | -------------------------- | ---------------------------------------------------- |
| Staff roster             | HR/approved identity source | Account/group input        | Reconcile; never edit roster from Nextcloud          |
| SOP files                | Information owner           | Collaborative working copy | Neutral file download plus hash                      |
| Folder/group permissions | Folder register             | Access enforcement         | Export/register and denied-user test                 |
| Shares/tokens            | Information owner           | Controlled handoff         | Inventory, expire, revoke                            |
| Versions/deleted items   | Nextcloud                   | Recovery convenience       | Retention set; portability unproven                  |
| Database/config/data     | Service                     | Coordinated runtime state  | Matched backup and restore                           |
| Apps/themes              | Administrator               | Optional behavior/code     | Version/license/data review and backup as applicable |
| Logs/backups             | Service/security            | Evidence/recovery          | Restricted retention and deletion                    |

Calendars, contacts, forms, chat, and office editing are absent until this map is expanded and tested.
