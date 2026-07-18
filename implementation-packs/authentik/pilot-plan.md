# Authentik pilot plan

## Prepare

Select one non-critical app and two staff users with different intended access. Capture current login, session, logout, and fallback behavior. Approve the access matrix and data fields.

## Execute

Deploy isolated staging, configure one provider/application, enroll MFA, and run the test matrix in `examples/pilot-access-test.csv`. Preserve exact versions and sanitized evidence.

## Failure injection

Disable one user, stop or isolate Authentik, break a test callback, and test recovery. Do not perform failure injection against production.

## Decide

Proceed only if denial/disablement, least privilege, fallback, and restore pass. The identity owner, app owner, security reviewer, and recovery witness sign; otherwise roll back and record defects.

Runtime duration, compatibility, and capacity are untested.
