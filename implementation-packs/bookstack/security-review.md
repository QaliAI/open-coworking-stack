# BookStack security review

| Review area     | Question                                                                | Required evidence            |
| --------------- | ----------------------------------------------------------------------- | ---------------------------- |
| Public boundary | Are guest/public settings off except approved content?                  | Unauthorized-session tests   |
| Roles           | Can readers edit, export, comment, or see revisions unexpectedly?       | Role matrix tests            |
| Content         | Can editors add risky scripts, embeds, forms, links, or server fetches? | Security/config review       |
| Uploads         | Are types, sizes, storage, malware process, and retention defined?      | Attachment test and policy   |
| Secrets         | Are `.env`, `APP_KEY`, DB, mail, auth, and webhook secrets protected?   | Secret inventory reference   |
| Integrations    | Are auth/webhooks/themes least-privilege and source-reviewed?           | Integration sign-off         |
| Recovery        | Does restored content preserve intended access?                         | Clean restore negative tests |

Escalate public, safety, HR, incident, or regulated content to relevant experts. No runtime security assessment exists.
