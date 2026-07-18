# BookStack data map

| Object                 | Source                     | Classification                   | Owner/exit                                   |
| ---------------------- | -------------------------- | -------------------------------- | -------------------------------------------- |
| SOP page               | Approved source document   | Staff/private or approved public | Page owner; readable export/source register  |
| Image/attachment       | Approved file store        | Match parent or stricter         | File owner; mapped archive                   |
| Draft/revision/comment | Staff authoring            | Usually staff/private            | Knowledge owner; retention decision          |
| User/role              | Staff roster/access matrix | Personal/internal                | Technical owner; offboarding register        |
| Activity/log           | System                     | Personal/security                | Restricted reviewer; retention evidence      |
| `.env` and `APP_KEY`   | Technical configuration    | Secret                           | Secret custodian; protected rebuild material |

Verify role inheritance, export content, deletion, logs, and authentication attributes in the target release. Payment data is excluded.
