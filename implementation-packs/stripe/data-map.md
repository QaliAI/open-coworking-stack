# Stripe pilot data map

| Data                         | Source          | Stripe purpose      | Authority                  | Exit artifact                |
| ---------------------------- | --------------- | ------------------- | -------------------------- | ---------------------------- |
| Synthetic customer           | Test fixture    | Payment correlation | Fixture register           | Customer-ID crosswalk        |
| Invoice reference            | Billing sandbox | Stable correlation  | Billing system             | Invoice/payment crosswalk    |
| Payment/refund/dispute event | Stripe sandbox  | Processing status   | Stripe plus finance review | Reports/event evidence       |
| Fee/payout-like report       | Stripe sandbox  | Reconciliation test | Finance worksheet          | Reconciled report            |
| API/webhook secret           | Stripe sandbox  | Authentication      | Secret vault               | Key inventory reference only |

Do not put key values, payment credentials, real personal data, door codes, contract notes, or free-text member cases in metadata, logs, templates, or evidence.
