# Backup and restore

## Protected state

- Consistent PostgreSQL database backup.
- Secret-free deployment configuration and exact image versions.
- Floor-plan assets and independent area/desk register.
- Recovery references for `CRYPT_KEY` and database credentials, never their values.
- Manually readable future-reservation register during pilot.

## Clean restore acceptance

Deploy matching pinned versions on isolated infrastructure, restore PostgreSQL/config/maps, inject secrets through the approved store, and verify 20 desks, areas, users/groups, rules, future bookings, admin/member permissions, denied access, login, and timezone. Record object/row counts, elapsed time, tester, and witness. Starting containers alone is not a passed restore.
