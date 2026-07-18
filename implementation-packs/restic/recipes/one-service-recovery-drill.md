# Recipe: one-service recovery drill

1. Choose a non-critical service and record version, expected record count, and official backup method.
2. Produce a database dump or quiesced source; verify it before Restic runs.
3. Back up approved files/configuration to an offsite repository with a pilot tag.
4. Record the exact snapshot ID and run `ls` to inspect expected paths.
5. Follow the approved `check` plan; account for full-data check bandwidth if selected.
6. On a clean isolated host, recover access without the source host and restore the exact snapshot.
7. Restore the database, inject secrets separately, and start the service.
8. Have the application owner validate representative records and workflow; have a second person witness.

Commands, repository URLs, and check depth must come from the current official docs and local approved design, not this generic recipe.
