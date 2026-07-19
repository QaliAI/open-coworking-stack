---
title: PacketFence vs FreeRADIUS vs managed network access
description: Compare network access control building blocks and managed services.
page_classification: Due-diligence worksheet
---

## Shared dimensions

| Option                 | Evaluation lane                                       | Evidence status                                                        |
| ---------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| PacketFence            | Network access control platform                       | Partial; no catalog entry                                              |
| FreeRADIUS             | RADIUS authentication/authorization/accounting server | Partial; no catalog entry                                              |
| Managed network access | Vendor-operated access service                        | Not established until vendor, hardware, region, and contract are named |

PacketFence and FreeRADIUS are not direct substitutes: one is evaluated as a broader control plane,
the other as protocol infrastructure. Managed services vary substantially.

## Operator profiles

PacketFence may fit an experienced network team needing policy/orchestration, FreeRADIUS a team
building a specific AAA architecture, and managed access an operator needing accountable network
operations. Site topology and existing switches/APs are prerequisites to comparison.

## Task coverage

Options can augment onboarding, credential/certificate enforcement, segmentation, guest access,
accounting, and revocation. Front-desk identity checks, policy approval, device exceptions, incident
triage, and safety-critical access decisions remain human work.

## Human work remaining

People define segments and acceptable use, approve identities, support devices, handle inaccessible
portals, investigate abuse, coordinate vendors, and maintain an outage guest-access procedure.

## Technical difficulty

Self-managed NAC/AAA is high difficulty across switching, wireless, VLANs, certificates, directories,
DHCP/DNS, firewalls, monitoring, redundancy, and physical troubleshooting. Managed access still
requires local topology, escalation, and acceptance ownership.

## True-cost categories

Count licenses or service, servers, network hardware, certificates, identity, design, survey/cabling,
implementation, monitoring, support, spares, staff/on-call, upgrades, and outage impact. Exact prices
and free limits are not established.

## Portability

Retain topology, VLAN/policy design, RADIUS clients, identity mappings, certificates/PKI plan,
device records, portal content, logs required by policy, configurations, and tested hardware rollback.

## Integrations and verification caveat

Switch/AP, controller, directory, PKI, captive portal, firewall, and logging integrations are
`partial` until exact model, firmware, protocol, attributes, fail-open/closed behavior, support
boundary, and current official docs are verified in a lab.

## Security

Segment members, guests, staff, management, building systems, and untrusted devices. Protect shared
secrets and certificates, restrict administration, log proportionately, patch, monitor anomalies,
design redundancy, and test safe failure without weakening the network silently.

## Licensing

PacketFence and FreeRADIUS are open-source projects under their current licenses; verify packaged
components and support terms. Managed services are proprietary and require service, privacy, and
data-processing review.

## Maintenance

Maintain hardware/firmware compatibility, certificates, identities, policies, shared secrets,
redundancy, logs, patches, backups, lab tests, spares, diagrams, and vendor escalation contacts.

## Scenario recommendations

Run a lab and one-zone pilot with common devices, unknown devices, expired credentials, roaming,
printer/IoT exceptions, directory outage, controller outage, revocation, and rollback. Use a network
specialist for design and acceptance.

## Do not use when

Do not deploy NAC by trial and error on a live coworking network. Do not use shared credentials when
individual accountability is required, and do not buy managed access without explicit hardware,
data, support, and exit boundaries.

## Verification

Verified on **2026-07-18**. Hardware compatibility, capabilities, service levels, prices, free limits,
and integrations are `partial` or `not established` until site-specific testing.

## Official sources

- [PacketFence](https://www.packetfence.org/) and [PacketFence documentation](https://www.packetfence.org/doc/)
- [FreeRADIUS](https://freeradius.org/) and [FreeRADIUS documentation](https://www.freeradius.org/documentation/)
- [Wi-Fi Alliance](https://www.wi-fi.org/) for standards context
