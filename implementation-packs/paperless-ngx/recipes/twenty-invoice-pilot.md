# Recipe: 20 historical supplier invoices

1. Select 20 approved invoices and record expected document/page counts; retain originals.
2. Define a small finance-owned taxonomy and permitted/denied user matrix.
3. Deploy isolated pinned staging and verify no daily user relies on superuser access.
4. Ingest one invoice; validate image, pages, OCR, search, metadata, and permissions.
5. Ingest the remaining 19 and complete a human quality record for every document.
6. Test a synthetic duplicate and correct a deliberately wrong test tag without deleting an original.
7. Pause intake, export, reconcile files/manifest, and run the sanity checker.
8. Import to a completely empty matching-version instance and repeat retrieval/denial tests.
9. Have finance, privacy/records, document, and technical owners decide whether the pilot may expand.
