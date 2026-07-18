# Authentik exit strategy

1. Inventory every provider, app, outpost, user/group mapping, and secret owner.
2. Establish and test each app's replacement or local login before disconnecting Authentik.
3. Reconcile identities and privileges to the approved roster; do not bulk-copy unreviewed policy.
4. Schedule cutover, freeze changes, and retain a staffed fallback window.
5. Revoke provider/API secrets and remove callbacks/outposts after app-owner acceptance.
6. Export/retain only approved identity and event evidence, then apply deletion/backup retention policy.
7. Preserve version-compatible recovery capability until retention ends.

Export fidelity and automated migration are untested; expect manual policy mapping and app-by-app validation.
