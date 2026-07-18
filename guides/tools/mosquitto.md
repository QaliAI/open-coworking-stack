---
title: Eclipse Mosquitto coworking evaluation stub
tool_id: mosquitto
guide_status: stub
verified_on: 2026-07-17
---

# Eclipse Mosquitto coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

Eclipse Mosquitto is an OSI-approved `EPL-2.0` MQTT broker for IoT message transport. The catalog suggests sensor/access prototypes only when properly network-segmented. It holds MQTT topics/payloads and connection logs; catalog personal-data status is false, but payload design determines actual risk.

Sources reviewed **2026-07-17**: [homepage](https://mosquitto.org/), [repository](https://github.com/eclipse/mosquitto), and [documentation](https://mosquitto.org/documentation/).

## Evaluation questions

- What single sensor workflow requires MQTT?
- How will VLANs, authentication, ACLs, TLS, topic design, and retained messages be controlled?
- Could payloads reveal occupancy, identity, or access events?
- How will clients operate safely when the broker is unavailable?

## Smallest experiment

Run Mosquitto on a VLAN-isolated host and publish/subscribe temperature readings from one test sensor. Use documented authentication/ACLs and no member or access-control data.

## Risks

- Anonymous/overbroad access and untrusted network exposure
- Sensitive occupancy/access data hidden in topics or payloads
- Broker outage and unsafe device behavior

## TODO before a full guide

- [ ] Threat-model network, clients, topics, credentials, and retained data
- [ ] Verify current TLS/auth/ACL guidance
- [ ] Test outage, credential rotation, configuration backup, and restore
- [ ] Define manual facilities fallback and payload retention
