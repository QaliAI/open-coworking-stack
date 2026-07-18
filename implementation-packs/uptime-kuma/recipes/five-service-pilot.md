# Recipe: five-service alert pilot

1. Select five authorized services and complete one monitor record for each.
2. Deploy privately on a host separate from the principal application failure domain.
3. Create the administrator locally and configure TLS/proxy before broader access.
4. Add least-invasive checks with neutral labels and no credentials where possible.
5. Configure one approved test notification route and a manual fallback contact.
6. For a controlled test endpoint, trigger down, delayed alert, acknowledgement, and recovery.
7. Exercise maintenance suppression and notification-provider failure/fallback.
8. Restore the monitoring state to isolation and send a post-restore test alert.
9. Have humans complete all five real workflows and sign production readiness.

Never trigger a production payment, booking, or captive-portal outage merely to test this recipe.
