---
title: Future API compatibility
description: How a future hosted API can mirror the Git catalog without rewriting content.
---

## Proposed approach (not implemented in v0.1)

1. CI publishes `catalog.json` as an artifact and Pages asset.
2. A worker syncs JSON into Supabase tables 1:1 with Zod types.
3. Public read API serves the same fields as `Tool` / `Stack` schemas.
4. Writes remain via Git pull requests for auditability—or gated admin sync.

No authentication system is required for v1 static hosting.
