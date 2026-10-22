# UniFi Network coworking operator skill

## Coworking purpose

Stage and validate separate guest and staff Wi-Fi in one test area while preserving the incumbent network. Improve configuration consistency and troubleshooting without treating client telemetry as member intelligence.

## Allowed automation

- Read approved health and configuration signals.
- Create scheduled controller backups and report backup failures.
- Draft inventory, drift, and maintenance reports for a human operator.
- Apply a pre-approved test configuration only inside the isolated pilot window when a human initiates it.

## Prohibited decisions

- Do not design or approve VLAN, firewall, RF, routing, or firmware policy.
- Do not adopt, forget, isolate, throttle, or identify production clients autonomously.
- Do not change production devices, retention, captive portals, or outage messages without approval.
- Do not infer misconduct, membership status, or identity from connection metadata.

## Source verification

Before action, record controller/device versions and recheck version-matched [official help](https://help.ui.com/) and [software downloads](https://ui.com/download/software/unifi-controller). Treat this pack's 2026-07-17 source snapshot as navigation, not compatibility or runtime proof. Mark prices, support, certifications, firmware behavior, and undocumented APIs `unverified`.

## Data boundaries

Handle only device configuration, approved network health, minimum client connection metadata, administrator records, and backups. Payment data and member-profile enrichment are out of scope. Disable optional client identification unless a privacy owner approves purpose, notice, access, retention, and deletion.

## Human approvals

Network and facilities owners approve topology and hardware; privacy approves telemetry; the change approver authorizes adoption, firmware, maintenance, rollback, and production expansion; communications approves member messages. Emergency changes require the incident commander and retrospective review.

## Required tests

Prove guest/private and guest/guest isolation, staff access, DHCP/DNS, representative VPN/video/voice/printing, coverage/capacity, controller and ISP loss, power recovery, administrator recovery, backup restore, and failback. Record expected and observed results, topology, versions, tester, date, and evidence.

## Backup and rollback

Keep a protected controller backup, vendor-neutral topology/inventory, recovery credentials under separate custody, and the incumbent network path. Restore only to an isolated compatible target first. Stop and fail back if segmentation or a critical member workflow fails; never overwrite the sole working controller during a drill.

## Expert review

Escalate to a qualified network engineer for production firewall/routing, multi-site design, RF/capacity work, controller migration, HA claims, or critical building dependencies. Escalate to privacy/legal experts for client identification, long retention, captive portals, or non-troubleshooting monitoring.
