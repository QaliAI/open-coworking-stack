# Exit strategy

Retain a vendor-neutral register of domains, event dictionary, metric definitions, consent/notice decision, dashboard roles, retention, aggregate reports, script locations, DNS/proxy dependencies, and supported exports.

Before migration, test whether required aggregate or row-level information can be extracted and understood outside Umami. Recreate only approved metrics on the replacement and compare synthetic counts in parallel.

At exit, remove every script/tag/plugin reference, verify browsers make no requests, revoke accounts/tokens, export required records, delete data under policy, retire self-hosted infrastructure or close cloud service, and preserve deletion/closure evidence. Export completeness remains unverified until tested.
