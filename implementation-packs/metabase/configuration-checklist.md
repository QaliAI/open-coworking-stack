# Configuration Checklist

- [ ] Pin Metabase edition/version and use a production application database for durable use.
- [ ] Create a dedicated source user/role with only required `CONNECT`/`SELECT`.
- [ ] Restrict source network access and require supported transport security.
- [ ] Create one sanitized reporting view with no member/payment/access fields.
- [ ] Set approved time zone and show source watermark/refresh delay.
- [ ] Create `occupancy-pilot` collection, analyst group, and viewer group.
- [ ] Deny native SQL to viewers and test collection/data permissions.
- [ ] Keep public links, embedding, actions, editable tables, uploads, and transforms off.
- [ ] Bound query duration/load and review the plan with the source owner.
- [ ] Configure logs/cache/exports under approved retention.
- [ ] Back up the Metabase application database and test isolated restore.
- [ ] Record every feature used and confirm its current edition availability.
