# Pilot plan

## Scope

Twenty approved non-current supplier invoices, retained originals, synthetic role tests, no member mail, and a clean matching-version restore.

## Sequence

1. Baseline original/page counts, checksums where practical, taxonomy, and access matrix.
2. Deploy pinned isolated staging with protected storage/secrets.
3. Create setup superuser plus separate daily finance and denied-test users.
4. Ingest one document, validate behavior, then process the remaining 19.
5. Human-check every image/page, OCR sample, and metadata field.
6. Test search, correction, duplicate handling, permissions, download denial, and deletion in synthetic scope.
7. Pause intake; export, back up, run sanity checker, and import to an empty matching-version instance.

Stop on missing pages, unauthorized access, unexplained sanity errors, failed import, or pressure to destroy originals/expand scope.
