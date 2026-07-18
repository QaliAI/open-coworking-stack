# Architecture Decisions

Architecture decision records (ADRs) document consequential repository decisions that contributors
need to preserve or deliberately replace.

## Index

| ADR                                                     | Status   | Decision                                                |
| ------------------------------------------------------- | -------- | ------------------------------------------------------- |
| [0001](0001-git-first-catalog-and-derived-artifacts.md) | Accepted | Keep catalog YAML canonical and generate site artifacts |

## Adding An ADR

1. Copy [`adr-template.md`](adr-template.md) to the next zero-padded number and a short slug.
2. Describe the context, decision, consequences, and alternatives without rewriting prior ADRs.
3. Link superseding and superseded records in both ADRs and update this index.
4. Include the ADR in the same pull request as the architectural change when possible.

Accepted ADRs are historical records. If a decision changes, add a new ADR rather than editing the old
decision to imply it always held.
