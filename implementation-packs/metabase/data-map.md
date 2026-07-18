# Metabase Occupancy Data Map

| Data                     | Authority                       | Reporting representation           | Control/exit                        |
| ------------------------ | ------------------------------- | ---------------------------------- | ----------------------------------- |
| Resource ID/type         | Booking system                  | Pseudonymous resource key/category | Mapping retained by source owner    |
| Available interval       | Space schedule/closure register | Start/end and availability flag    | Metric contract defines denominator |
| Booking interval/status  | Booking system                  | Required timestamps/status only    | No member identity                  |
| Source watermark         | Reporting load                  | Last complete source timestamp     | Display on dashboard                |
| Metric/query definition  | Metric owner                    | Saved question/card                | Preserve neutral SQL and contract   |
| Dashboard/users/groups   | Metabase application DB         | Runtime configuration              | Back up app DB; revoke on exit      |
| Query results/cache/logs | Metabase/deployment             | Runtime evidence                   | Minimize and retain by policy       |

Connected source data is not backed up by backing up Metabase. The source owner retains source lineage and quality evidence.
