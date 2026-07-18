---
title: License classes explained
description: How Open Coworking Stack classifies tools so operators are not misled by “open” marketing.
---

| Class                  | Meaning                                          | Operator implication                                                                                              |
| ---------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `oss-osi-approved`     | OSI-approved open source license                 | Greatest freedom to run, modify, and (usually) host for members—still read the license (AGPL obligations matter). |
| `open-core`            | Core is OSS; valuable modules often proprietary  | Budget for paid features or accept gaps.                                                                          |
| `source-available`     | Source visible, not OSI open source (e.g. BSL)   | Production use may be restricted; read terms.                                                                     |
| `fair-code`            | Source available with commercial restrictions    | Common for automation tools; legal review for your entity.                                                        |
| `freemium-saas`        | Hosted product with free + paid tiers            | Expect limits and upgrade pressure.                                                                               |
| `free-saas`            | Hosted free for intended use (still proprietary) | Free ≠ open; exit plan still required.                                                                            |
| `free-trial`           | Time/usage limited trial                         | Not a production free tier.                                                                                       |
| `proprietary`          | Closed commercial software                       | Fine when it fits—just don’t call it open source.                                                                 |
| `unknown-needs-review` | Maintainers have not classified yet              | Do not deploy based on assumptions.                                                                               |

## Common traps

- **“We published source on GitHub”** ≠ open source.
- **AGPL** is open source but may require sharing modifications if you provide the software as a network service—get counsel if unsure.
- **Enterprise screenshots** often show paid modules not present in community editions.
