# Security review

Review registrar/DNS/host emergency access, TLS/proxy/CDN, runtime/database isolation, file permissions, individual users/roles, supported authentication, admin exposure, secret storage, core/theme/plugin provenance and maintenance, upload/form/email/spam behavior, APIs and scheduled jobs, logs, backups, updates, monitoring, and incident response.

Reject readiness if shared admins remain, staging is public with real data, unused/unsupported dependencies exist, file/plugin installation is uncontrolled, form data has unknown destinations, backups are web-accessible, or restore and credential rotation are untested.

Require expert security review for custom code, complex plugins, compromise, or high-value traffic. This agenda is not a penetration test, malware scan result, supply-chain guarantee, or certification.
