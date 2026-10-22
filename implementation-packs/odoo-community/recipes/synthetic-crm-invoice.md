# Recipe: Synthetic CRM and Invoice Review

1. Record exact Community version and confirm required technical modules in that source/version.
2. Take a baseline matched backup before importing `examples/synthetic-leads.csv`.
3. Use Odoo's current import validation/test step and inspect mappings, dates, and unique External IDs.
4. Import into isolated staging only. Reconcile ten fixture IDs and route the designed duplicate to the sales owner.
5. Move approved fixtures through four stages; record any feature unavailable in Community.
6. Configure one synthetic customer and approved fixture products/tax assumptions, then create an invoice sample under finance supervision.
7. Export representative data and have sales/finance judge usability without treating it as statutory proof.
8. Restore matched state to isolation and repeat count, role, attachment, and output checks.

Never repeat this recipe with real records without a separate migration and accounting approval.
