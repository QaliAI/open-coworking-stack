# Uptime Kuma implementation pack

Operator pack for five coworking service monitors with named responders, controlled failure tests, manual workflow verification, and a separately recoverable monitoring host. Start with `operator-profile.yaml`, use `templates/monitor-record.yaml`, run `recipes/five-service-pilot.md`, and retain evidence beside `examples/alert-evidence.md`.

The local `compose/uptime-kuma` is a single-node, loopback-bound staging reference. This pack does not prove HA, notification delivery, provider authorization, backup completeness, public-status suitability, or end-to-end service health.
