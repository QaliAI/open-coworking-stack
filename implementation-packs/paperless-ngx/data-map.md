# Paperless-ngx pilot data map

| Data                          | Source/owner        | Purpose                   | Validation                  | Exit artifact                    |
| ----------------------------- | ------------------- | ------------------------- | --------------------------- | -------------------------------- |
| Original invoice              | Retained paper/file | Primary ingested document | Every page visually checked | Exported original                |
| Archive/OCR text              | Generated           | Search/readability        | Agreed query samples        | Archive file/metadata            |
| Thumbnail/index               | Generated           | UI/search                 | Sanity check and retrieval  | Regenerable, document loss noted |
| Correspondent/type/tag/date   | Finance taxonomy    | Filing                    | Finance approves all 20     | Manifest/JSON and dictionary     |
| User/group/object permissions | Admin register      | Restrict access           | Allowed and denied tests    | Access mapping                   |

Supplier invoices may contain staff/vendor personal and financial identifiers. Apply the source classification to database, OCR text, logs, exports, and backups.
