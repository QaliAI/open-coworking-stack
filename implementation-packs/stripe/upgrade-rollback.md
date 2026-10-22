# Upgrade and rollback

## Change gate

Review Stripe and connector changelogs, API/event versions, SDK changes, key scopes, and regional product terms. Run all five cases and security tests in sandbox. Do not combine API-version migration, connector release, live activation, key rotation, and bank change.

## Rollback triggers and procedure

Trigger on reconciliation mismatch, duplicate money-state action, invalid-signature acceptance, leaked credential, broken decline/refund handling, or unsupported connector behavior. Disable new initiation, preserve open invoice/payment references, revert prior connector/config/version mapping, rotate affected keys, replay/retrieve authoritative state safely, reconcile the entire change window, and use alternate payment communication. Keep authorized Stripe access for open refunds/disputes.
