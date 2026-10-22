# Exit Strategy

Freeze metric/dashboard changes and archive the signed metric contract, reporting view/neutral SQL, filters, rounding, source watermark logic, owners, sample inputs/expected outputs, and approved aggregate exports. Revoke the Metabase source database user after the replacement is validated.

Rebuild in the replacement and compare all fixtures plus two real approved aggregate periods. Then disable users/shares, remove source connectivity, and retain/delete application DB, caches, logs, exports, and backups under policy.

Do not assume CSV result exports preserve dashboard layout, permissions, subscriptions, lineage, or application configuration.
