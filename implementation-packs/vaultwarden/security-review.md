# Security review

Review threat model, unofficial/support boundary, host and proxy exposure, TLS, admin route/token, signup/invitation, user authentication and supported MFA, organization owners, collection boundaries, client supply chain/compatibility, optional email, attachments/Sends, sessions, logs, storage, backup encryption/key custody, updates, offboarding, exports, and incident rotation.

Reject readiness if accounts are shared, public signup remains open, admin access is broadly exposed, recovery keys share the server failure domain, high-impact credentials enter the pilot, exports are uncontrolled, or restore and source-system rotation are untested.

Require independent security review before production or internet exposure. This document is not a penetration test, cryptographic audit, certification, or warranty of Bitwarden-client compatibility.
