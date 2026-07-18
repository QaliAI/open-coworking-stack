# Synthetic CRM and Invoice Evaluation

## Prepare

Approve stages, role matrix, fixture products/taxes/currency, and exact Community modules. Take a baseline backup before imports because official docs warn imports are permanent.

## Execute

Import the ten synthetic leads by External ID, resolve the designed duplicate case, move records through stages, create a synthetic customer/product/invoice sample, and have finance annotate every unsupported or ambiguous conclusion.

## Break and recover

Run malformed/duplicate/changed-ID imports on disposable restores. Test role denials, database outage, storage exhaustion, missing attachment, and module failure. Restore matched state to isolation and reconcile every lead/attachment/output.

## Pass gate

Ten leads reconcile, denied actions remain denied, finance accepts only the sample's limited purpose, exports are usable, every feature maps to Community/module/version, and clean restore passes. Production is still a separate decision.
