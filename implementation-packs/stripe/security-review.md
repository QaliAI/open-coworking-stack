# Security and payment review

| Risk                    | Required control                                 | Evidence               |
| ----------------------- | ------------------------------------------------ | ---------------------- |
| Card-data exposure      | Documented low-risk/provider-hosted integration  | PCI flow diagram       |
| Secret-key exposure     | Vault, restricted keys, scan, rotation procedure | Key inventory/test     |
| Forged webhook          | Raw-body signature verification over HTTPS       | Invalid-signature test |
| Replay/duplicate action | Event/object IDs and idempotent state handling   | Duplicate test         |
| Excess event/data scope | Required events/metadata only                    | Scope review           |
| Account/bank takeover   | Strong roles, recovery, second approval          | Account control record |

PCI compliance is shared responsibility. Obtain qualified advice before moving beyond a documented low-risk flow. Treat exposed restricted or secret keys as compromised and rotate under official guidance.
