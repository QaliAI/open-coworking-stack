# Recipe: one staging proxy

1. Choose `staging-service.example.invalid` as a placeholder and replace it only in the private reviewed configuration.
2. Record the intended internal upstream and verify it directly from the proxy network.
3. Use the minimal site-address plus `reverse_proxy` pattern from current official Caddy documentation; do not paste secrets into the Caddyfile.
4. Leave access logging off unless the privacy owner approves exact fields and retention.
5. Validate/reload through the selected official deployment method.
6. Run expected-host, unknown-host, HTTPS, outage, and rollback tests.

This recipe deliberately omits deployment-specific commands, paths, and DNS modules until the operator verifies the selected version and environment.
