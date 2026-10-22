# Cal.com data map

| Object                     | Source                 | Purpose                     | Exit/control                               |
| -------------------------- | ---------------------- | --------------------------- | ------------------------------------------ |
| Host schedule/availability | Authoritative calendar | Offer slots/avoid conflicts | Calendar remains source of truth           |
| Event type/rules           | Scheduling owner       | Tour constraints/messages   | Configuration register/manual recreation   |
| Attendee contact/answers   | Booking form           | Confirm and prepare visit   | Minimum CRM/manual handoff; retention      |
| Booking state              | Cal.com/calendar       | Book/reschedule/cancel      | Reconcile export to calendar/open register |
| OAuth/API credential       | Calendar/Cal.com       | Connection/automation       | Named custodian and provider revocation    |
| Notification/workflow logs | Service/provider       | Delivery/troubleshooting    | Restricted, retention-limited evidence     |

Payment and identity-document data are excluded. Export fields, deletion, provider copies, and residency are untested.
