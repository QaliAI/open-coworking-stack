# Pilot plan

## Scope

Five non-sensitive authorized checks, one test notification route, one independent monitoring host, no public status page, and no automated remediation.

## Gates

1. Service owners approve expected response, business impact, and manual runbook.
2. Security approves targets, egress, credentials, and dashboard exposure.
3. Operations approves delays, maintenance, escalation, and test disruption.
4. Controlled failure/recovery and fallback notification pass.
5. Isolated restore and post-restore alert pass before production reliance.

## Stop conditions

Stop for unauthorized target access, secret leakage, alert storm, missed controlled failure, notification sent to the wrong recipient, public detail exposure, failed restore, or absent responder coverage.

Operators set thresholds from business needs and measured delivery; this repository supplies no notification or recovery guarantee.
