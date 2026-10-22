# Upgrade and rollback

Before change, inventory core version, runtime/database, modules, customizations, and mailbox provider. Read current official guidance and verify every module's compatibility. Take a validated backup, clone representative staging, then retest mail, threading, roles/notes, attachments, queue rules, exports, and restore.

Mailbox, privacy, and technical owners approve the window. Stop on migration errors, missing/duplicate messages, delivery changes, permission drift, broken modules, or queue inconsistency.

Rollback through the approved deployment/database recovery path while writes and retrieval are controlled. If risk remains, return routing/work to the source mailbox and reconcile by message ID and timestamp before reopening FreeScout.
