# Upgrade and rollback

## Restic binary change

Read official release notes, pin the candidate, test it against a copied/test repository, run check/restore acceptance, and retain the previous binary. Roll back by stopping jobs, restoring the prior pin/configuration, and repeating check plus sample restore.

## Repository-format change

Treat migration as a separate irreversible-risk project because a newer format can require a newer minimum Restic version. Preserve an independent repository copy and compatible tooling, obtain two approvals, and prove recovery before migration. Do not describe reinstalling the old binary as rollback.

## Stop conditions

Stop on changed snapshot scope, check errors, incompatible backend behavior, unexplained duration/cost growth, failed restore, or missing previous tooling.
