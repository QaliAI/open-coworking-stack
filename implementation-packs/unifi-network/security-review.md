# Security review

Review management-network isolation, controller exposure, named administrator access, authentication controls, recovery credentials, firmware provenance/support, device adoption, firewall intent, guest isolation, DNS/DHCP security, backup protection, log access, optional telemetry, and incident access.

Reject production readiness if default/shared credentials remain, management is guest-reachable, unsupported versions are required, telemetry lacks approval, or rollback depends on the same controller being changed.

Expert network review is mandatory for production firewall/routing changes, remote multi-site management, complex RF design, or critical building systems. Privacy/legal review is mandatory before client identification, captive portals, or extended connection-history retention.

This document is a review agenda, not a penetration test or vendor security assessment.
