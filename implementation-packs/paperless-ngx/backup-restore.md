# Backup, export, and restore

## Create recovery artifacts

1. Stop or control active consumption.
2. Run the official document exporter to a restricted target; record application version and options.
3. Reconcile 20 originals, archive files/thumbnails as selected, metadata/manifest, and expected users/configuration.
4. Back up database, media/data, secret-free configuration, version pins, and export to an offsite restricted target.
5. Run the official sanity checker and resolve or document every finding.

## Prove recovery

Create a completely empty matching-version instance, import the export, recreate excluded API tokens/secrets, and verify all 20 originals/pages, OCR/archive, thumbnails, metadata, search, users/object permissions, denied download, and sanity checker. Cross-version import must not be assumed safe.
