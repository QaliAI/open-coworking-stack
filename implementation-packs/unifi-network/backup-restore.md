# Backup and restore

1. Record controller form/version, device versions, site identifiers, and official backup guidance used.
2. Create the supported controller backup before change and copy it to encrypted off-controller storage.
3. Store checksum, date, operator, independent topology, device/location inventory, critical policy intent, and separately protected recovery access.
4. Restore a copy to an isolated compatible controller target; never overwrite the only production controller.
5. Verify sites, admins, device inventory, VLAN/SSID mapping, firewall intent, and a test-device workflow without adopting production devices unexpectedly.
6. Record elapsed time as observed evidence, not a general recovery guarantee.

A downloaded backup is not a passed restore. Portability across versions/controller forms remains unverified until this procedure succeeds on the chosen path.
