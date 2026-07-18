# ADR 0001: Git-First Catalog And Derived Artifacts

- Status: Accepted
- Date: 2026-07-18
- Deciders: Initial repository maintainers

## Context

The project needs a reviewable, vendor-neutral technology directory whose factual and licensing claims
can be changed through normal code review. Operators also need a browsable site and machine-readable
exports. Maintaining the same records independently in YAML, web pages, and JSON would create drift
and make it unclear which representation is authoritative.

The repository does not need member accounts or operational coworking data. A future API may improve
distribution, but it must not become a second editorial source of truth.

## Decision

YAML records under `catalog/` are the canonical tool, stack, and workflow data. Zod schemas in
`packages/schema/` define the runtime content contract, and `packages/validators/` applies schema and
business-rule checks.

`packages/generators/` transforms validated records into documentation pages and JSON under these
ignored paths:

- `apps/web/src/content/docs/tools/generated/`
- `apps/web/src/content/docs/stacks/generated/`
- `apps/web/public/data/`

Editorial Markdown outside generated directories remains human-maintained. Generated artifacts are
created locally for inspection and rebuilt in CI and deployment; they are not hand-edited or committed.
Any future API must mirror the canonical Git content model rather than become an independent database
of record.

## Consequences

- Catalog changes remain diffable, attributable, and reviewable without a running service.
- Validation and generation must run before tests and site builds that consume derived artifacts.
- Clean builds cannot rely on generated files or package outputs left in a developer workspace.
- Generator defects can affect many pages at once, so generator behavior requires focused tests.
- Dynamic community features would require a separate system while preserving Git as the authority for
  catalog content.

## Alternatives Considered

### Database As The Primary Store

This would support dynamic writes but add hosting, migrations, access control, and export consistency
work before those capabilities are required. It would also weaken pull-request review as the default
content workflow.

### Hand-Maintained YAML, Markdown, And JSON

This avoids a generator but duplicates facts and makes drift likely. The project instead accepts the
cost of deterministic generation and generator tests.

### Commit Generated Outputs

This can make static hosting simpler, but it expands diffs and permits stale artifacts to appear current.
The selected workflows generate artifacts in clean build jobs and upload only the built site.
