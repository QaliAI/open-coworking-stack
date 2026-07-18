# Upgrade and rollback

## Before change

Review version-specific release/migration notes, tracking-script changes, data-store compatibility, and cloud notices as applicable. Back up self-hosted state, restore a copy, inspect privacy behavior, and run the count/access/performance suite on the exact target.

## Stop and rollback

Stop for prohibited collection, schema/migration errors, dashboard access failure, site regression, or unexplained count corruption. Disable the site script first when collection is unsafe. Use only the tested compatible application/data rollback; migration reversal is not assumed. Reconcile gaps and duplicates explicitly.

Cloud rollback capabilities remain provider-specific and unverified until documented for the selected plan.
