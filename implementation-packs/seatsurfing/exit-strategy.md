# Exit strategy

1. Maintain independent floor images, 20-desk register, user/group crosswalk, rules, and future-booking fallback.
2. Verify any official UI/API export before depending on it; otherwise plan a controlled database migration with expert review.
3. Freeze new reservations and capture the cutover time.
4. Extract and manually reconcile all future reservations.
5. Notify members and operate the manual/replacement system through overlap.
6. Export/retain aggregate history only under approved policy; delete personal history after obligations expire.
7. Revoke identity clients, admins, secrets, and infrastructure; expire backups according to policy.

Billing, stored payment methods, and door credentials should not need migration because they are prohibited from this pack.
