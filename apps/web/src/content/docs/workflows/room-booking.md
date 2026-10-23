---
title: Workflow — Room booking
description: Policies and tooling for meeting room reservations.
---

## Minimum viable policy

- Booking window and max duration
- No-show / late cancel rules
- Cleanup expectations
- Who overrides for paid events

## Tooling

- LibreBooking for room and shared-resource reservations; use 7.1.0 or later (see the [security warning](../../tools/generated/librebooking/))
- Hosted Cal.com for prospect tours and appointments; do not treat it as a room-inventory ledger
- Seatsurfing for desks
- Avoid dual systems of record

## Automation risk

Auto-unlocking doors from calendar events without offline fallback can lock people out or let people in wrongly. Keep physical procedures.
