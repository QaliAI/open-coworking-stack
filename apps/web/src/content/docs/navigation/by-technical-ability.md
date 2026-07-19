---
title: Navigate by technical ability
description: Five honest operating levels aligned to catalog implementation difficulty.
---

Choose the level the named maintainer can sustain during an incident or holiday, not the level reached
once during setup. Tool records use the five labels below; maintenance burden and workflow complexity
still need separate review.

## 1. Trivial

**Can sustain:** ordinary web account setup, individual logins/MFA, simple settings, CSV export, and
vendor support escalation.

- Prefer a small managed stack such as [Solo Operator Hosted and Simple](../../stacks/generated/solo-operator-hosted-simple/).
- Require a second person with documented emergency access.
- Still test exports, permissions, cancellation, support, and manual fallback.
- [Browse trivial implementations](../../directory/?difficulty=trivial).

## 2. Easy

**Can sustain:** managed-service administration, forms, simple automation, DNS records with guidance,
role configuration, documented imports/exports, and routine troubleshooting.

- Keep integrations low consequence and visible to a human queue.
- Avoid self-hosting a critical database solely because installation has a one-click path.
- [Browse easy implementations](../../directory/?difficulty=easy).

## 3. Moderate

**Can sustain:** command-line basics, managed hosting or controlled containers, DNS/TLS, logs,
databases at an operational level, protected secrets, backups, isolated restores, and tested updates.

- Use [starter packs](../../guides/starter-packs/) in staging, not as production assurance.
- Assign weekly maintenance and quarterly recovery capacity.
- [Browse moderate implementations](../../directory/?difficulty=moderate).

## 4. Hard

**Can sustain:** Linux and networking administration, reverse proxies, mail delivery, identity/access
design, monitoring, incident response, data migration, version-aware upgrades, and rollback under
pressure.

- Require peer review, immutable image/version records, and off-host recovery.
- Price on-call and specialist labor against a managed alternative.
- [Browse hard implementations](../../directory/?difficulty=hard).

## 5. Expert

**Can sustain:** complex distributed or security-sensitive systems, capacity/performance engineering,
high-risk migrations, deep application/database recovery, threat modeling, dependency maintenance,
and upstream/vendor escalation.

- Expertise is domain-specific; container skill is not accounting, privacy, accessibility, access
  control, or life-safety qualification.
- Prefer managed or specialist support when expert coverage is not redundant and continuously funded.
- [Browse expert implementations](../../directory/?difficulty=expert).

If nobody can restore the selected arrangement and verify the business workflow afterward, move down a
level, buy managed support, or defer. Use the [buy/build/self-host guide](../../ops/buy-build-self-host/)
to record the decision.
