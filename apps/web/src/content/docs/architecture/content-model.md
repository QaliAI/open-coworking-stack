---
title: Content model
description: Git-versioned catalog architecture for Open Coworking Stack.
---

```mermaid
flowchart LR
  YAML[catalog/tools/*.yaml] --> VAL[validators]
  YAML --> GEN[generators]
  VAL --> CI[GitHub Actions]
  GEN --> MDX[Starlight pages]
  GEN --> JSON[public/data/*.json]
  MDX --> SITE[Static site]
  JSON --> DIR[Directory UI]
```

## Principles

- **YAML is canonical** for tools, stacks, workflows.
- **Zod schemas** in `@ocs/schema` enforce structure.
- **Generators** produce docs and JSON exports; do not hand-edit generated files.
- **Future Supabase/API** should mirror this model, not replace it.

## Schema version

`schema_version: "1.0.0"` on all catalog documents.
