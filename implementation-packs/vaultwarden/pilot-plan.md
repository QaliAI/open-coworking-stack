# Pilot plan

## Scope

Two synthetic individual users, supported MFA, one Facilities collection, one fake item, selected clients, and then one approved low-impact Wi-Fi administration credential. No payment, root, life-safety, or bulk production secrets.

## Gates

1. Security accepts the unofficial implementation and approves architecture/policy.
2. Collection owner approves the two users and test scope.
3. Fake-item client, boundary, revocation, export, and recovery tests pass.
4. Credential owner approves migration and rotation of the one real credential.
5. Recovery custodian witnesses restore; old source access is retained until acceptance.

## Stop conditions

Stop for TLS/client warnings, open enrollment, MFA/recovery failure, cross-collection access, stale removed-user access in the tested workflow, unprotected export, incomplete restore, lost recovery custody, or inability to rotate the source credential.

No production security or recovery result is claimed until signed evidence exists.
