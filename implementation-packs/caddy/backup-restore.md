# Backup and restore

## Backup set

Protect the reviewed configuration, service definition, module/build inventory, certificate/state material required by the chosen deployment, DNS/firewall values, and recovery instructions. Keep secrets out of version control and store recovery access separately.

## Restore test

Build a clean isolated instance, recover required state or safely reissue certificates according to the approved design, apply config, and test host routing, HTTPS, upstream failure, logs, and monitoring. Record date, versions, duration, operator, evidence locations, and missing items.

A copied file is not a restore test. Do not claim certificate recovery/reissuance, DNS API recovery, or recovery time until observed.
