# Security review

Review TLS and proxy exposure, administrative routes, named accounts and authentication, service/database credentials, database/network access, backups, environment separation, script endpoint, content security policy interaction, dependency updates, exports, logs, dashboard sharing, and cloud account recovery.

Reject production readiness if administrative secrets reach client code, event values allow arbitrary personal/free text, staging can write to production unexpectedly, backups/exports are unprotected, or account/deletion recovery is untested.

Privacy/legal review is mandatory for production collection, consent choices, cross-border processing, identity joins, employees/members, or sensitive events. Security/database review is mandatory for custom internet exposure, major migrations, or strict recovery objectives.

This checklist is not a penetration test, data-protection impact assessment, or certification.
