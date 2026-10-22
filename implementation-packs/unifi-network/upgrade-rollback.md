# Upgrade and rollback

## Before change

Read version-specific controller, firmware, migration, and hardware compatibility notes; capture backup and health baseline; test the exact sequence on representative hardware; approve maintenance and communications; preserve known-good access and incumbent service.

## Rollout

Change one bounded cohort, then rerun isolation and member-workflow tests. Do not allow broad automatic firmware rollout under this pack.

## Stop and rollback

Stop for lost administration, cross-segment access, device adoption/migration error, or critical workflow regression. Use the pre-approved version-compatible configuration/hardware path, verify DHCP/DNS/internet/member workflows, and communicate status. A software downgrade may be unsupported; prove the actual route before production.
