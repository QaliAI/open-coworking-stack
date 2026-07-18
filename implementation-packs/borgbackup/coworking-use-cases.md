# Coworking use cases

## Internal wiki recovery

Archive the wiki's application-native database dump, uploads, and reviewed configuration. Restore to an isolated hostname and have the content owner inspect records and attachments.

## Non-critical service rebuild

Archive approved service data and rebuild inputs, not an unexplained entire filesystem. Re-supply secrets from the secret store during restore.

## Lost-file request

Select the recovery point with the data owner, extract to a quarantine directory, scan/review it, then return only the approved file.

Borg is not itself database quiescing, off-site redundancy, legal-hold policy, or proof of application usability. Payment systems and safety-critical services are excluded.
