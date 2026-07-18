---
title: HashiCorp Vault coworking evaluation stub
tool_id: vault-hashicorp
guide_status: stub
verified_on: 2026-07-17
---

# HashiCorp Vault coworking evaluation stub

> This is an incomplete evaluation stub, not an implementation guide.

## Verified snapshot

HashiCorp Vault manages application secrets, keys, and dynamic credentials. It is **source-available** under Business Source License 1.1, not OSI open source; OpenBao is a separate community option. Vault may be self-hosted or managed and holds secrets, auth methods, audit logs, and personal data.

Sources reviewed **2026-07-17**: [homepage](https://www.vaultproject.io/), [repository](https://github.com/hashicorp/vault), [documentation](https://developer.hashicorp.com/vault/docs), and [pricing](https://www.hashicorp.com/products/vault/pricing).

## Evaluation questions

- Is Vault justified after basic staff password-manager hygiene exists?
- Do BSL and commercial terms fit the exact use?
- Who owns initialization/unseal, policies, audit, HA, upgrades, and disaster recovery?
- How can applications move to another secrets system without outage or exposure?

## Smallest experiment

Only after password-manager basics exist, prototype synthetic KV secrets for staging apps. Test least privilege, revocation, outage behavior, license fit, and clean recovery.

## Risks

- Expert operational complexity and central-secret outage
- BSL/enterprise feature and pricing boundaries
- Key ceremony, audit data, migration, and recovery failure

## TODO before a full guide

- [ ] Complete license and architecture review
- [ ] Threat-model keys, storage, policies, auth, audit, and clients
- [ ] Test backup/restore, revocation, outage, and secure migration
- [ ] Define break-glass ownership and OpenBao/other exit comparison
