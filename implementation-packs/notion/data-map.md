# Notion pilot data map

| Object     | Allowed input                     | Owner           | Notion role     | Exit artifact             |
| ---------- | --------------------------------- | --------------- | --------------- | ------------------------- |
| SOP page   | Copy of approved source           | SOP owner       | Staff reference | HTML and Markdown         |
| Tracker    | Non-critical tasks                | Tracker owner   | Coordination    | CSV plus field dictionary |
| Attachment | Approved low-risk file            | Page owner      | Context         | Exported file             |
| Guest      | One synthetic contractor identity | Workspace admin | Permission test | Offboarding evidence      |

## Boundary checks

- Label each page `internal`, `external-test`, or `prohibited`.
- Keep source URI, owner, and next review date on every pilot page.
- Store exports outside Notion with access equal to the highest included classification.
- Reconcile export inventory because inaccessible private/teamspace content may be omitted.
