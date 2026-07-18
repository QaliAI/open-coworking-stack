---
title: Seatsurfing for coworking desk booking
tool_id: seatsurfing
guide_status: full
verified_on: 2026-07-17
---

# Seatsurfing for coworking desk booking

Seatsurfing provides self-hosted desk and space booking. A coworking operator should pilot one accurately mapped floor and 20 hot desks with a limited member group before treating occupancy metrics as layout evidence.

## Fit and non-fit

**Good fit:** a hot-desk operation replacing a whiteboard/spreadsheet, with fair-use rules, floor-plan ownership, privacy review, and a manual check-in fallback.

**Poor fit:** a billing, membership entitlement, or door-access replacement; an inaccurate map; or a rollout that exposes members' location history without a defined need and retention.

## License and cost boundary

Seatsurfing is OSI-approved open source under `GPL-3.0-only`. Budget for compute/database/TLS, floor-plan and account setup, updates/backups/support, any identity or reporting extensions, and staff time to maintain spaces and fair-use rules. No managed service or hosting price is asserted by the catalog.

Record **software**, **hosting**, **setup**, **maintenance**, **plugins/extensions**, and **support** separately; mark each as applicable, not applicable, or unknown rather than assuming a zero cost.

## Prerequisites and data map

Assign booking, facilities, privacy, and technical owners. Define the 20 desks, hours, pilot users, booking/cancellation and no-show rules, accessibility handling, utilization definitions, and manual fallback.

| Data              | Source              | Seatsurfing use   | Exit/handoff                            |
| ----------------- | ------------------- | ----------------- | --------------------------------------- |
| Users             | Pilot member roster | Booking identity  | Membership system remains authoritative |
| Locations/spaces  | Floor plan          | 20 desks          | Independent floor inventory             |
| Bookings          | Member actions      | Reservations      | Front-desk exception list               |
| Occupancy metrics | Booking records     | Layout experiment | Aggregated reviewed export              |

Bookings and accounts are personal data. Payment data is excluded.

## Smallest useful experiment

Using the [official docs](https://seatsurfing.io/docs/), model one floor with 20 hot desks, invite a pilot member group for two weeks, and export occupancy statistics. Compare booked versus observed use without covert surveillance and collect member feedback.

## Implementation sequence

1. Approve the floor map, desk identifiers, pilot rules, and privacy notice.
2. Review deployment and booking configuration in [official documentation](https://seatsurfing.io/docs/).
3. Build staging with TLS, restricted administration, and test users.
4. Validate the map onsite with facilities and community staff.
5. Run the two-week pilot with a visible manual exception path.
6. Review fairness, no-shows, accessibility, privacy, and metric interpretation.
7. Complete export and restore before expanding floors or members.

## Security and privacy controls

- Restrict admin and user access; keep the member system authoritative.
- Minimize booking/location visibility and retain history only as approved.
- Use TLS, supported updates, and protected backups.
- Do not infer presence, performance, or behavior beyond the approved utilization purpose.
- Provide transparent booking rules and a correction/deletion route.
- Review identity or access-control connectors separately; none are verified here.

## Backup, export, and restore test

Back up database, configuration, maps/assets, and required application state following official guidance. Restore to clean staging and verify all 20 desks, pilot users, bookings, rules, and permissions. Export representative booking/occupancy data and confirm operations can interpret it without hidden application logic.

## Integrations and manual handoffs

No membership, identity, access, or BI integration is catalog-verified. Community staff approve pilot users and handle conflicts; facilities maintains the map; front desk handles walk-ins and exceptions; privacy owners review location data; analysts interpret aggregate metrics.

## Human oversight

People set fair-use rules, resolve conflicts, support accessibility, protect location privacy, and interpret utilization. Seatsurfing augments desk claims and occupancy signals; it does not decide entitlement or staffing.

## Operational checklist

- [ ] Booking, facilities, privacy, and technical owners named
- [ ] 20-desk map validated onsite
- [ ] Fair-use, cancellation, no-show, and accessibility rules approved
- [ ] Booking visibility and retention minimized
- [ ] Manual exception route available
- [ ] Two-week feedback/metric review completed
- [ ] Booking export verified
- [ ] Clean restore passed

## Rollback and exit

Keep the whiteboard/spreadsheet/manual process ready during the pilot. Roll back by stopping new bookings, exporting future reservations, notifying pilot members, and returning claims to the manual process. Before expansion, retain the independent floor/desk inventory and prove user, booking, and metric exports can move to a replacement.

## Verification and unknowns

Snapshot verified **2026-07-17** from [Seatsurfing](https://seatsurfing.io/), the [backend repository](https://github.com/seatsurfing/backend), and [documentation](https://seatsurfing.io/docs/).

Unknown until verified: current deployment requirements, export fidelity, identity/access integrations, mobile/client behavior, production sizing, support, managed offerings, and jurisdiction-specific location privacy requirements.
