# Pilot plan

1. Application owner selects a non-critical staging service and defines expected responses.
2. DNS/proxy owners capture the existing route and recovery values.
3. Security/privacy approve exposure, trust, headers, modules, and no/minimal logging.
4. Proxy owner applies the reviewed configuration using current official docs.
5. Run every test in `templates/test-record.md`, including unknown host and upstream failure.
6. Rebuild in clean staging and repeat the critical tests.
7. Restore the prior route within the approved window and verify it.
8. Owners decide reject, revise, or approve a separately scoped production change.

Stop for unexpected public exposure, sensitive logs, certificate/key leakage, unexplained routing, or failed rollback. Staging output alone is not production evidence.
