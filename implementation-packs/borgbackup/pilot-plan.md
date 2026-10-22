# BorgBackup pilot plan

## Prepare

Complete `templates/source-manifest.yaml`, select a low-risk service, and prove its preparation output can rebuild an empty staging instance without Borg first.

## Archive

Initialize a protected remote repository under the selected official version, export the key as required, run one manual archive, and inspect archive paths and excludes. Add scheduling only after inspection.

## Recover

Extract one file, then rebuild the service on a clean host using the archive and separately supplied secrets. A different operator should recover the key/passphrase under the custody procedure.

## Decide

Accept only if forced failures alert, archive contents match the manifest, retention selects expected archives, and the owner validates service data within the recovery objective. Runtime and timing are untested until this evidence exists.
