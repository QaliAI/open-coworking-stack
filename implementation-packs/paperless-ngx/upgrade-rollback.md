# Upgrade and rollback

1. Review official release notes and dependency/database requirements.
2. Pause intake and record held files.
3. Create a successful exporter artifact plus database/media/configuration backup.
4. Clone or import to isolated staging at the candidate pinned version.
5. Apply migrations and run all 20-document, permission, search, export, and sanity tests.
6. Schedule production with intake and technical owners present.

Rollback triggers include migration error, missing/corrupt file, permission regression, failed intake/search, or unexplained sanity finding. Stop writes, preserve failure state, restore the prior pinned application and pre-upgrade database/media/config on clean validation, pass acceptance, reopen intake, and reconcile held files.
