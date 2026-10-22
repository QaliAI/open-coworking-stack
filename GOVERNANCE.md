# Governance

## Purpose

Open Coworking Stack is a community-maintained directory and implementation resource. Governance exists to keep metadata honest, licensing accurate, and contributions reviewable.

## Roles

| Role                            | Responsibility                                                        |
| ------------------------------- | --------------------------------------------------------------------- |
| **Maintainer**                  | Merge rights, release decisions, security triage, catalog quality bar |
| **Reviewer**                    | Reviews PRs for factual accuracy, schema validity, and tone           |
| **Contributor**                 | Submits tools, guides, fixes, and improvements via pull requests      |
| **Operator advisor** (informal) | Provides real-world coworking workflow feedback                       |

## Decision making

1. **Lazy consensus** for routine catalog updates and doc fixes: open a PR, address review, merge after approval.
2. **Maintainer decision** for taxonomy changes, schema version bumps, license classification disputes, and reference-stack changes.
3. **Documented ADR** (architecture decision record under `docs/architecture/`) for breaking content-model changes.

## Catalog integrity rules

- Prefer official sources over secondary blogs.
- Never invent pricing, stars, certifications, or free-tier limits.
- Use `unverified` when a field cannot be confirmed.
- Classify licenses conservatively; escalate disputed cases to maintainers.
- Disclose affiliations if you work for a listed vendor.

## Releases

The documentation site is intended to deploy from `main` only after the repository owner enables and
authorizes a Pages environment. The repository and hosted CI exist, but the confirmed Pages attempt
failed because Pages is not enabled/configured; no live deployment is asserted. Catalog schema
versions are recorded in the YAML records and schema package. JSON Schema mirrors under
`catalog/schema/` are generated from the Zod schemas and must remain synchronized. Breaking schema
changes require a major version bump in `@ocs/schema` and a migration note in `ROADMAP.md`.

## Conflict of interest

Vendors may contribute factual corrections. Marketing-only PRs that inflate claims, bury licensing caveats, or remove competitor context will be rejected.
