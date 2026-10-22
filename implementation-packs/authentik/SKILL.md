# Authentik coworking operator skill

## Coworking purpose

Support staff SSO and controlled deprovisioning for one approved internal app. Do not use this skill to control member eligibility or physical access.

## Allowed automation

Prepare configuration inventories, compare intended groups to an approved roster, draft test cases, and report login/disablement evidence. Automation may apply a pre-approved staging policy only with an authenticated operator and change record.

## Prohibited decisions

Do not grant/revoke access without approved source data, approve privileged roles, waive MFA, decide employment status, disable break-glass access, or cut over/restore production autonomously.

## Source verification

Check the exact release's [documentation](https://docs.goauthentik.io/), [repository](https://github.com/goauthentik/authentik), release notes, target-app authentication docs, and pricing/edition source. Label unresolved behavior `unverified`.

## Data boundaries

Use only pilot staff identifiers and minimum app claims. Exclude member, payment, door-access, payroll, medical, and real secrets from pack artifacts and test fixtures.

## Human approvals

Require manager approval for access, app-owner approval for mappings, security approval for admin/MFA/fallback, and recovery-witness approval for restore. Require explicit cutover and rollback authorization.

## Required tests

Test allowed/denied login, MFA enrollment/recovery, logout/session disablement, least privilege, callback failure, outage fallback, secret revocation, and isolated restore. Capture expected/actual results.

## Backup and rollback

Back up PostgreSQL and applicable official static directories before change. Authentik documents downgrade as unsupported; restore a version-compatible pre-change state and app fallback instead of attempting schema downgrade.

## Expert review

Obtain IAM/security review for privileged or regulated apps and privacy/legal review where staff identity processing requires it. Runtime behavior in this pack is untested.
