---
title: Frigate coworking evaluation stub
tool_id: frigate-nvr
guide_status: stub
verified_on: 2026-07-17
---

# Frigate coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Frigate is an OSI-approved `MIT` self-hosted NVR with object detection. The catalog limits its coworking case to perimeter awareness subject to privacy law, signage, and workplace-monitoring rules. Cameras, acceleration hardware, and storage are significant cost components. It holds video, detection events, camera configuration, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://frigate.video/), [repository](https://github.com/blakeblackshear/frigate), and [documentation](https://docs.frigate.video/).

## Evaluation questions

- Is there an approved legal basis and privacy-impact assessment for the exact camera view?
- Who may view/export footage, and for how long is it retained?
- What hardware, storage, camera, and incident-response capacity is required?
- Can footage/configuration be recovered and securely deleted?

## Smallest experiment

Only after privacy approval, pilot one exterior camera with short retention and no unnecessary areas in view. Test access, event accuracy, export, deletion, and camera outage handling.

## Risks

- High privacy, surveillance, signage, and legal risk
- Storage/hardware cost and false detections
- Feed exposure, retention failure, and access abuse

## TODO before a full guide

- [ ] Complete legal/privacy-impact and signage review
- [ ] Verify hardware/storage requirements from official docs
- [ ] Test access logs, export, deletion, backup, and restore
- [ ] Document incident evidence handling and human review
