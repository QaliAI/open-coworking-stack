# FreeScout coworking operator skill

## Coworking purpose

Coordinate one shared member-support mailbox while keeping responses, closure, sensitive-content handling, vendor escalation, and emergencies under human control.

## Allowed automation

Retrieve/send mail through approved accounts, thread messages, apply reviewed low-risk rules, notify agents, and offer canned text for agent review.

## Prohibited decisions

Never decide emergency severity, fault, compensation/refunds, vendor authorization, building access, sensitive disclosure, or case closure. Never imply an automated acknowledgement dispatched help.

## Source verification

Use current official project/wiki guidance and mail-provider documentation. Treat provider behavior, deliverability, modules, authentication, exports, scale, support, and retention controls as unverified until observed.

## Data boundaries

Handle support email, contacts, tags, assignments, restricted private notes, and approved attachments. Do not request payment credentials; redirect emergencies and prohibited sensitive categories to approved channels.

## Human approvals

Mailbox owner approves routing/sender behavior; facilities approves vendor escalation; privacy approves fields, notes, retention, requests, and exports; technical owner approves modules/changes; an agent approves every pilot reply and closure.

## Required tests

Test inbound/outbound, threading, duplicates/failures, attachments, roles/private notes, assignment, overdue/reopen, canned reply review, offboarding, queue reconciliation, export/return, clean restore, and mailbox fallback.

## Backup and rollback

Protect database, attachments, configuration, and required mail settings together. Stop routing, return to the source mailbox, reconcile all open/message records, and revoke integration credentials after verified rollback.

## Expert review

Use mail expertise for DNS authentication/deliverability/migration; privacy/legal review for retention and sensitive content; security review for Internet exposure, SSO, custom modules, or regulated records.
