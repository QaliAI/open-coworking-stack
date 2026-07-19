---
title: Self-hosted PBX vs hosted phone
description: Compare business telephony operating models for front desks and sales teams.
page_classification: Due-diligence worksheet
---

## Shared dimensions

| Model           | Evaluation lane                                                          | Evidence status                                                     |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Self-hosted PBX | Operator-managed call control using projects such as Asterisk or FreePBX | Partial                                                             |
| Hosted phone    | Provider-managed calling service                                         | Not established until provider, region, numbers, and plan are named |

Compare number availability/porting, inbound routing, queues, emergency calling, devices, voicemail,
recording, messaging, resilience, support, accessibility, compliance, and exit.

## Operator profiles

Self-hosting may fit a telephony-capable organization with unusual integration/control needs. Hosted
phone usually fits a lean operator wanting provider operations and support. Geography, regulation,
carrier availability, and internet resilience can decide the model.

## Task coverage

Both can augment reception routing, sales calls, voicemail, opening-hours handling, and escalation.
Staff still answer with judgment, verify callers, handle emergencies, protect recordings, and follow
up when routing or transcription fails.

## Human work remaining

People maintain greetings and schedules, staff queues, review missed calls, approve recordings,
handle abuse/fraud, support devices, manage number ports, and operate outage procedures.

## Technical difficulty

Self-hosting is high due to SIP, carriers, NAT/firewalls, codecs, quality of service, fraud controls,
devices, updates, monitoring, redundancy, and emergency calling. Hosted phone is low-to-moderate but
still needs network, identity, device, and carrier-transition work.

## True-cost categories

Count software/service, numbers, usage, carrier/SIP trunks, devices/headsets, internet redundancy,
implementation, porting, recording/storage, compliance, support, monitoring, fraud, staff time, and
exit. Exact prices and free limits are not established.

## Portability

Confirm legal control and porting of every number. Retain routing plans, greetings, voicemail and
recording policy, contacts, device inventory, call records required by policy, credentials, and a
tested transition plan.

## Integrations and verification caveat

CRM, help desk, directory, mobile/desktop client, recording, messaging, carrier, and emergency-service
integrations are `partial` until region, number type, direction, identity matching, limits, support
boundary, and current official docs are verified.

## Security

Restrict international/premium calling, use strong device/admin credentials, protect SIP and portals,
monitor fraud, patch, segment voice devices, define recording consent/retention, secure voicemail,
and rehearse compromised-account response.

## Licensing

Asterisk and FreePBX combine open-source components with project/vendor-specific modules and services;
verify every deployed component. Hosted phone is proprietary and governed by service/carrier terms.

## Maintenance

Maintain carriers, numbers, routes, schedules, devices, certificates, fraud controls, updates,
backups, call-quality monitoring, emergency location data, porting records, and outage diversion.

## Scenario recommendations

Test ordinary, unanswered, transferred, queued, after-hours, emergency, blocked, fraudulent, poor
network, internet-outage, and provider-outage scenarios. Prefer hosted service unless control needs
and telephony expertise justify operating the PBX.

## Do not use when

Do not self-host without fraud monitoring, emergency-calling validation, redundancy, and a named
telephony owner. Do not sign hosted service before confirming number portability, support boundaries,
recording rules, and outage forwarding.

## Verification

Verified on **2026-07-18**. Regional availability, emergency behavior, features, prices, free limits,
and integrations are `partial` or `not established` until provider- and site-specific testing.

## Official sources

- [Asterisk](https://www.asterisk.org/) and [Asterisk documentation](https://docs.asterisk.org/)
- [FreePBX](https://www.freepbx.org/) and [FreePBX documentation](https://sangomakb.atlassian.net/wiki/spaces/FP/overview)
- [Twilio voice](https://www.twilio.com/voice) and [Twilio voice docs](https://www.twilio.com/docs/voice) as one hosted/API benchmark, not a recommendation
