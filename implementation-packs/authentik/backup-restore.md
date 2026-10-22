# Authentik backup and restore

## Backup set

Follow [official backup guidance](https://docs.goauthentik.io/docs/sys-mgmt/ops/backup-restore/): protect PostgreSQL and, when used, `/data`, filesystem certificates, custom templates, and blueprints. Also preserve versioned deployment configuration and secret-store references. Store recovery material away from the database host.

## Isolated drill

1. Provision a non-production address and compatible release.
2. Restore PostgreSQL before reconnecting Authentik.
3. Restore applicable static directories and supply test-safe secrets.
4. Verify two users, provider/application, policies, MFA recovery, allowed/denied login, and disablement.
5. Record elapsed time, versions, witness, defects, and disposal of restored PII.

Do not copy live MFA secrets merely to satisfy a test. This procedure has not been executed in this repository.
