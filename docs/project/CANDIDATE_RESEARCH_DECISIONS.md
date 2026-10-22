# Candidate Research Decisions

Checked: 2026-07-18

## Scope and Method

This is a documentation-only review of all candidate groups in the research request. It includes:

1. Nadine as a historically important open-source coworking project.
2. Current commercial coworking benchmarks, including the four products already represented in the
   catalog and seven high-value comparison candidates that are not currently represented.
3. The named booking, CRM, billing, outreach, publishing, local-discovery, analytics, AI, community,
   events, network, IT, printing, remote-support, and telephony candidates.

Only official project, vendor, documentation, pricing, legal, status, and repository sources were
used. Vendor feature and scale statements are recorded as vendor claims, not independently verified
facts. No product was installed, trialed, contracted, security-audited, or tested with coworking data.
Consequently, this review cannot establish runtime status, implementation quality, support quality,
security effectiveness, export completeness, or fitness for a particular operator. It cannot justify
`Verified Core`.

The decisions below are editorial recommendations. They do not change the catalog. For products that
already have catalog records, "add as Evaluated" means the eventual tier should be Evaluated after the
existing record is brought up to the required evidence standard, not that a duplicate record should be
created.

## Decision Summary

| Decision                          |  Count | Candidates                                                       |
| --------------------------------- | -----: | ---------------------------------------------------------------- |
| Add to Verified Core              |      0 | None                                                             |
| Add as Evaluated                  |     41 | See the existing narratives and remaining-candidate tables below |
| Add as Research Backlog           |     16 | See the remaining-candidate tables below                         |
| Add as Historical                 |      1 | Nadine                                                           |
| Reject irrelevant                 |      0 | None                                                             |
| Reject stale                      |      0 | None                                                             |
| Reject license/pricing unsuitable |      0 | None                                                             |
| Defer insufficient evidence       |      1 | Proximity                                                        |
| **Total candidates**              | **59** |                                                                  |

## Historical Open-Source Candidate

### Nadine

**Decision: add as Historical.**

**Official sources checked:**

- [Project repository](https://github.com/nadineproject/nadine)
- [Latest GitHub release](https://github.com/nadineproject/nadine/releases/tag/v2.2.3)
- [Project documentation](https://nadine.readthedocs.io/en/main/)
- [Official feature page](https://nadineproject.org/features.html)

**Established:**

- The project describes Nadine as software built for Office Nomads to support both staff and members
  in coworking operations.
- Official documentation identifies a Django application with member, staff, admin, and tablet
  interfaces. The project feature page describes member communications, reporting, sign-in, front
  desk, billing, calendar, and other integrations.
- The repository and documentation identify the license as GNU AGPL v3.0. GitHub's official repository
  metadata also reports `AGPL-3.0`.
- The repository is public and was not marked archived or disabled when checked. Its latest repository
  push was 2023-02-15, while the latest published release shown by GitHub is `v2.2.3`, published
  2020-01-24. The README still labels Nadine 3.0 as `TBD`.

**Unknown:**

- Whether Office Nomads or any other space still runs Nadine in production in 2026.
- Whether the unarchived repository is maintained, supported, secure on a current dependency stack, or
  suitable for a new deployment. Repository metadata and a documentation page are not runtime proof.
- Whether installation, upgrades, backup/restore, payment integrations, access-control integrations,
  and data export work on currently supported infrastructure.
- The cost and operator skill required to rehabilitate or migrate a deployment.

**Coworking value:**

Nadine is unusually relevant as a coworking-native open-source design artifact. Its staff/member split,
front-desk workflow, community features, and integrations can inform the directory's historical record
and task model. The release and repository dates make it unsafe to present as a current implementation
recommendation without substantial technical and operational testing.

## Existing Commercial Benchmark Records

### Cobot

**Decision: add as Evaluated (already cataloged; do not duplicate).**

**Official sources checked:**

- [Coworking product site](https://www.cobot.me/en)
- [Pricing](https://www.cobot.me/en/pricing)
- [Developer API](https://dev.cobot.me/api-docs)
- [Help center](https://helpcenter.cobot.me/en/)

**Established:**

- The vendor currently presents a coworking-specific managed platform covering memberships, member and
  visitor management, bookings, invoicing and payments, access-control integrations, analytics, a
  member app, and an open API.
- The official pricing page describes a paid-member-based subscription, a trial, optional services,
  transaction fees for specified non-member sales, and the ability to export data on cancellation.
- Public pricing, product documentation, and developer documentation make Cobot a useful small and
  independent-space comparison anchor.

**Unknown:**

- Export scope and fidelity, API coverage relative to the UI, regional payment/tax suitability, actual
  support outcomes, and total cost for a representative operator.
- Contractual, privacy, security, residency, recovery, and service-level details applicable to a
  particular customer. Marketing-page compliance statements were not independently assessed.
- Runtime reliability and workflow fit; no trial or migration was performed.

**Coworking value:**

Cobot provides a focused baseline for comparing an assembled stack with an integrated membership,
booking, billing, member-portal, and access-integration service.

### OfficeRnD Flex

**Decision: add as Evaluated (already cataloged; do not duplicate).**

**Official sources checked:**

- [OfficeRnD Flex](https://www.officernd.com/coworking-software/)
- [Flex pricing](https://www.officernd.com/pricing/flex/)
- [Developer documentation](https://developer.officernd.com/docs/welcome)
- [Trust center](https://trust.officernd.com/)

**Established:**

- The vendor currently separates its coworking/flex product from its general workplace product.
- Official material describes member lifecycle, inventory and reservations, billing and payments,
  visitor handling, ecommerce, reporting, member apps, multi-location operation, integrations, and a
  public API.
- A dedicated pricing surface and trust center exist, but their existence is not proof of a complete
  price or security review.

**Unknown:**

- The complete current price for each operator profile, onboarding and add-on costs, contract terms,
  payment fees, and migration costs.
- Export completeness, API entitlement and limits, data residency selected for a customer, control
  effectiveness, incident history, and recovery behavior.
- Actual usability and accounting/access-control behavior; no sandbox or operator references were
  tested.

**Coworking value:**

OfficeRnD Flex is a strong comparison anchor for multi-location operations, revenue workflows,
integrations, and member experience. It should remain clearly distinguished from OfficeRnD Workplace.

### Nexudus

**Decision: add as Evaluated (already cataloged; do not duplicate).**

**Official sources checked:**

- [Coworking product site](https://nexudus.com/)
- [Coworking pricing](https://nexudus.com/coworking-pricing/)
- [Developer hub](https://developers.nexudus.com/reference/getting-started-with-your-api-1)
- [Security and compliance](https://nexudus.com/security/)

**Established:**

- The vendor currently presents a coworking platform for member management, CRM, bookings, billing,
  payments, check-in and access, community, reporting, companion apps, and multi-location operation.
- Official pages describe an API-first approach and native integrations. The pricing page exposes an
  active-user/per-location model and identifies some items that can cost extra, although the fetched
  page did not render every base price value.
- Product, pricing, developer, support, update, and security surfaces are available from the vendor.

**Unknown:**

- A reproducible total price for defined small, mid-size, and multi-location scenarios, including
  implementation, training, branded apps, integrations, payment processing, and contract terms.
- Export completeness, API limits and entitlement, data location, control effectiveness, support
  quality, and recovery behavior.
- Runtime and workflow behavior; no tenant or API was exercised.

**Coworking value:**

Nexudus provides a broad-suite benchmark for complex and multi-location operators, especially where API
coverage, finance, access, and companion apps influence stack design.

### Optix

**Decision: add as Evaluated (already cataloged; do not duplicate).**

**Official sources checked:**

- [Product site](https://www.optixapp.com/)
- [Pricing](https://www.optixapp.com/pricing/)
- [Developer platform](https://developer.optixapp.com/)
- [Help center](https://support.optixapp.com/en/)

**Established:**

- The vendor currently presents coworking and flex-space software covering booking, invoicing, plans,
  CRM, check-ins, visitor management, community features, member apps, integrations, and automations.
- The official pricing page publishes plan, active-user, location, automation, API, sandbox, app, and
  selected add-on distinctions. It also identifies a trial.
- A developer platform and help center exist.

**Unknown:**

- Total cost after payment processing, document signing, branding, locations, automations, onboarding,
  and other services for a real operator.
- Export fidelity, API completeness and limits, data residency, security-control effectiveness,
  recovery, and contract exit behavior.
- Runtime usability and automation safety; no trial or member workflow was tested.

**Coworking value:**

Optix is a useful benchmark for automation-heavy operations, mobile/member experience, and explicit
feature/add-on packaging.

## New Commercial Benchmark Candidates

### Archie

**Decision: add as Evaluated.**

**Official sources checked:**

- [Coworking product](https://archieapp.co/coworking-software)
- [Pricing](https://archieapp.co/pricing)
- [Developer API](https://developers.archieapp.co/)
- [Service-level agreement](https://archieapp.co/agreements-and-terms/service-level-agreement)

**Established:**

- The vendor has a dedicated coworking product covering CRM and member lifecycle, contracts, billing,
  resource booking, visitor and delivery handling, access and Wi-Fi integrations, community features,
  analytics, branding, and multi-location administration.
- Official pages link to an open API, status page, legal terms, data-processing addendum, and service-
  level agreement.
- The pricing page is live and presents multiple product tabs; the fetched view did not establish a
  complete coworking price schedule.

**Unknown:**

- Complete coworking pricing and packaging, transaction and integration fees, contract minimums,
  onboarding cost, and total cost at representative member/location counts.
- Export completeness, API entitlement and limits, data residency, security-control effectiveness,
  support outcomes, and migration behavior.
- Runtime quality; no demo, trial, or integration was exercised.

**Coworking value:**

Archie fills a material comparison gap for an integrated, modern coworking suite spanning lead-to-
member conversion, finance, access, visitors, booking, and community experience.

### Coworks

**Decision: add as Evaluated.**

**Official sources checked:**

- [Product site](https://www.coworks.com/)
- [Pricing](https://www.coworks.com/pricing)
- [Integrations](https://www.coworks.com/integrations-with-tools)
- [Help center](https://help.coworksapp.com/en/)

**Established:**

- The vendor currently targets coworking, flex offices, makerspaces, incubators, and other shared-space
  models.
- Official material describes a member app, room/equipment booking, billing, day passes, events, lead
  capture, check-ins, visitor handling, access integrations, multi-location management, and analytics.
- The official pricing page publishes annual and monthly tiers, member allowances, broad feature
  distinctions, and enterprise/custom packaging.

**Unknown:**

- Add-on, payment-processing, migration, and implementation costs; contract and renewal terms; and
  exact total cost for multiple campuses.
- Export formats and completeness, API availability outside enterprise packaging, data residency,
  security evidence, recovery, and support outcomes.
- Runtime and operator fit; the self-guided demo was not treated as a test.

**Coworking value:**

Coworks is a useful benchmark for independent and community-oriented operators and for adjacent shared
spaces that need coworking-style booking, membership, event, and billing workflows.

### Spacebring

**Decision: add as Evaluated.**

**Official sources checked:**

- [Product site](https://www.spacebring.com/)
- [Pricing](https://www.spacebring.com/pricing)
- [Documentation](https://www.spacebring.com/docs)
- [API and webhooks](https://www.spacebring.com/docs/api)

**Established:**

- The vendor currently presents a coworking system of record for contracts, subscriptions, billing,
  payments, bookings, access, customer management, community engagement, member service, analytics,
  multi-location operation, and branded member/admin experiences.
- The official pricing page publishes a Business plan, enterprise/custom packaging, active-user and
  location allowances, minimum commitment periods, and several usage-based or optional add-ons.
- Official documentation includes API and webhook material, and the site provides release notes.

**Unknown:**

- Total cost under realistic growth and usage, payment-gateway fees, local invoicing suitability,
  negotiation terms, migration effort, and exit cost.
- Export completeness, API limits and entitlement beyond published packaging, data residency,
  security-control effectiveness, AI data boundaries, recovery, and support outcomes.
- Runtime quality and workflow safety; no trial, API, access system, or payment flow was tested.

**Coworking value:**

Spacebring adds a current benchmark for mobile-first member/admin operation, explicit API packaging,
community and service features, and transparent examples of usage/add-on pricing complexity.

### Yardi Kube

**Decision: add as Evaluated.**

**Official sources checked:**

- [Yardi Kube Suite](https://www.yardi.com/suite/yardi-kube-suite/)
- [Yardi Kube product site](https://www.yardikube.com/)
- [Pricing entry point](https://www.yardikube.com/flexible-pricing/)
- [Integrations and API](https://www.yardikube.com/integrations-api/)

**Established:**

- Yardi currently presents Kube as a coworking/flex suite with separate space-management and IT-
  management products plus listing-network connections.
- Official material describes reservations, occupancy, billing, payments, floor plans, member apps,
  CRM, accounting connections, Wi-Fi/network administration, integrations, and products for growing
  operators and landlords.
- Product and demo/pricing entry points are current. No public open-source license is presented; this
  review treats it only as a commercial service benchmark.

**Unknown:**

- Actual subscription, implementation, hardware/network, integration, support, and training prices;
  contract minimums; and total cost by portfolio size.
- Export completeness, API access terms and limits, data residency, security-control effectiveness,
  recovery, and the degree of dependency on the wider Yardi product ecosystem.
- Runtime quality; no implementation or network integration was tested.

**Coworking value:**

Yardi Kube fills the enterprise and landlord benchmark gap, particularly where coworking operations,
property accounting, portfolio reporting, network management, and lead marketplaces intersect.

### Deskworks

**Decision: add as Evaluated.**

**Official sources checked:**

- [Product site](https://mydeskworks.com/)
- [Pricing](https://mydeskworks.com/pricing/)
- [Integrations](https://mydeskworks.com/product/integrations)
- [Support hub](https://support.mydeskworks.com/)

**Established:**

- The vendor currently presents coworking and flex-office software for billing and payments, bookings
  and passes, memberships and community, check-ins, usage tracking, access integrations, reporting, and
  multi-location operation.
- Its official pricing page publishes distinct member-based coworking and resource-based flex-office
  structures, feature comparisons, a trial, selected add-on prices, and API/webhook availability on
  specified plans.
- Official help, legal, privacy, and integration surfaces are linked from the product site.

**Unknown:**

- Payment-processing rates, contract terms, implementation and migration effort, negotiated enterprise
  cost, and total cost after relevant add-ons.
- Export scope, API details and limits, data residency, security evidence, recovery, and support
  outcomes.
- Runtime quality, especially automated usage billing and network check-in; neither was tested.

**Coworking value:**

Deskworks provides a useful small-operator and flex-office benchmark with unusually clear distinctions
between member-based and resource-based pricing and with network usage tied to coworking billing.

### essensys

**Decision: add as Evaluated.**

**Official sources checked:**

- [Product site](https://essensys.tech/)
- [Products](https://essensys.tech/products/)
- [Integrations](https://essensys.tech/integrations/)
- [Compliance](https://essensys.tech/compliance/)

**Established:**

- The vendor currently targets flexible-workspace operators and office landlords, but its present
  product surface is narrower than an all-in-one membership/billing platform.
- Official material identifies essensys Platform for managed Wi-Fi experience and utilization
  intelligence, and elumo for booking and access, including a hardware component. Integration and
  support surfaces are available.
- No public price schedule was established in the reviewed official sources.

**Unknown:**

- Pricing, contract scope, supported network/access hardware, deployment and support costs, regional
  availability, and total cost.
- Integration/API depth, raw-data export, data residency, security-control effectiveness, recovery, and
  hardware replacement/exit paths.
- Runtime accuracy for occupancy data, access, and billing triggers; no hardware or software was tested.

**Coworking value:**

essensys is valuable as a specialist benchmark for multi-tenant connectivity, utilization intelligence,
and meeting-room booking/access. It should not be represented as a complete coworking management suite
without evidence of current membership and finance capabilities.

### Proximity

**Decision: defer insufficient evidence.**

**Official sources checked:**

- [Official domain](https://www.proximity.space/)
- [Coworking route](https://www.proximity.space/coworking)
- [Integrations route](https://www.proximity.space/integrations)
- [Privacy route](https://www.proximity.space/privacy)

**Established:**

- The official domain responded and exposed routes named for coworking, flex space, integrations,
  support, privacy, trials, and demos.
- The content returned during this check was a generic index describing a proximity-marketing platform,
  not coherent official documentation for the previously known coworking management/access product.

**Unknown:**

- Whether the coworking product is currently sold, supported, or maintained; its current owner and
  product scope; pricing; licensing; documentation; integrations; data practices; and customer exit
  path.
- Whether the generic content is a temporary publishing failure, a product transition, or a permanent
  change. No conclusion about staleness or irrelevance is justified from this evidence alone.

**Coworking value:**

An integrated software/access-control offering could be relevant, but the current official evidence is
not sufficient for a responsible catalog record or commercial benchmark. Recheck only after coherent
vendor documentation or a direct vendor response is available.

## Remaining Named Candidates

The following 47 decision units complete the brief. `Evaluated` remains a documentation-level catalog
recommendation, not a runtime, security, support, or production endorsement. Every row was checked on
2026-07-18.

### Floor Plans and Resource Booking

| Candidate                                           | Official URL(s)                                                                                                        | Decision                                               | Established from official sources                                                                                                                                               | Unknowns                                                                                                                                                                     | Coworking value                                                                                                                              | Checked    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Roomer                                              | [Repository](https://github.com/c0dewhacker/Roomer)                                                                    | Add as Research Backlog                                | The AGPL-3.0 repository describes self-hosted desk and asset reservations across buildings and floors, with floor-plan uploads and bookable assets.                             | The project is very new; security, migrations, releases, accessibility, load, backup/restore, and operator adoption were not established.                                    | Direct fit for visual desk and asset booking, but too little evidence yet for an Evaluated addition.                                         | 2026-07-18 |
| Workplacify                                         | [Site](https://workplacify.com/)<br>[Repository](https://github.com/igeligel/workplacify)                              | Add as Research Backlog                                | Official sources describe an active, self-hostable desk scheduler with offices, floors, floor maps, and analytics.                                                              | GitHub reports no standard SPDX conclusion; self-hosting terms, releases, security, exports, recovery, and production evidence need review.                                  | Potential visual hot-desk option for staff or members if licensing and operational gaps are resolved.                                        | 2026-07-18 |
| LibreBooking                                        | [Repository](https://github.com/LibreBooking/librebooking)<br>[Documentation](https://librebooking.readthedocs.io/)    | Add as Evaluated                                       | The official GPL-3.0 project describes mobile-friendly, extensible scheduling for rooms and other resources.                                                                    | Coworking entitlements, payments, member lifecycle, access control, security posture, upgrades, and restore behavior were not tested.                                        | Useful generic room/equipment scheduler when a full coworking suite is unnecessary.                                                          | 2026-07-18 |
| Seatsurfing                                         | [Repository](https://github.com/seatsurfing/seatsurfing)<br>[Documentation](https://seatsurfing.io/docs/)              | Add as Evaluated (already cataloged; do not duplicate) | The official GPL-3.0 project covers desk sharing, room reservations, free seating, and coworking use.                                                                           | Current runtime, identity integration, privacy controls, accessibility, scale, upgrades, and recovery still require hands-on evidence.                                       | Strong focused benchmark for desks and rooms without membership billing.                                                                     | 2026-07-18 |
| Cal.diy                                             | [Documentation](https://cal.diy/)<br>[Repository](https://github.com/calcom/cal.diy)                                   | Add as Research Backlog                                | Cal.com identifies this MIT-licensed repository as its self-hosted community scheduling edition with calendar, conferencing, embed, and API capabilities.                       | Official documentation says personal, non-production use is strictly recommended and directs commercial use to Cal.com; production security and support are not established. | Scheduling concepts are relevant to tours and appointments, but the explicit production boundary prevents a current operator recommendation. | 2026-07-18 |
| MRBS (additional active resource-booking candidate) | [Project site](https://mrbs.sourceforge.io/)<br>[Repository](https://github.com/meeting-room-booking-system/mrbs-code) | Add as Evaluated                                       | The official project describes a free GPL web application for booking meeting rooms or other resources, with recurring bookings, conflict prevention, auth levels, and reports. | No floor-plan editor was established; coworking payments, member entitlements, modern security, accessibility, API depth, and recovery were not tested.                      | A narrow, active alternative for meeting rooms and shared resources.                                                                         | 2026-07-18 |

### CRM, Support, Billing, and Lead Enrichment

| Candidate                                   | Official URL(s)                                                                                                       | Decision                | Established from official sources                                                                                                                                 | Unknowns                                                                                                                                                                    | Coworking value                                                                                                                                                        | Checked    |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| HubSpot free CRM                            | [Product](https://www.hubspot.com/products/crm)<br>[CRM API](https://developers.hubspot.com/docs/guides/crm/overview) | Add as Evaluated        | HubSpot documents a no-expiration free CRM with contacts, deals, tasks, pipelines, reporting, imports, integrations, and APIs; limits and premium upgrades apply. | Future packaging, total cost after upgrades, export fidelity, data residency, consent configuration, AI data use, and coworking-system integration were not tested.         | Useful commercial benchmark for tour-to-close and partnership pipelines, not a membership or access system.                                                            | 2026-07-18 |
| LibreDesk                                   | [Repository](https://github.com/abhinavxd/libredesk)<br>[Documentation](https://docs.libredesk.io/)                   | Add as Evaluated        | The AGPL-3.0 project describes a self-hosted omnichannel support desk combining live chat and email in one application.                                           | Channel maturity, permissions, retention, spam controls, accessibility, upgrades, backup/restore, and production scale were not tested.                                     | Relevant for member requests and shared support inboxes while preserving human ownership of responses.                                                                 | 2026-07-18 |
| FOSSBilling                                 | [Site](https://fossbilling.org/)<br>[Repository](https://github.com/FOSSBilling/FOSSBilling)                          | Add as Research Backlog | The Apache-2.0 project provides client management and billing aimed primarily at hosting businesses.                                                              | Coworking plans, credits, taxes, refunds, accounting, payment compliance, access entitlements, and migration fit are unknown.                                               | Billing primitives may be reusable, but the domain mismatch requires a scoped experiment before catalog promotion.                                                     | 2026-07-18 |
| Kill Bill                                   | [Documentation](https://docs.killbill.io/)<br>[Repository](https://github.com/killbill/killbill)                      | Add as Research Backlog | The Apache-2.0 project describes an open-source subscription billing and payments platform.                                                                       | It is an engineering platform rather than a coworking app; operator UI, tax/accounting fit, payment compliance, staffing burden, and total implementation cost are unknown. | Could underpin complex recurring plans and usage charges only for operators with substantial engineering and finance oversight.                                        | 2026-07-18 |
| Hunter (lead-enrichment/free-tools example) | [Domain Search](https://hunter.io/domain-search)<br>[Data practices](https://hunter.io/our-data)                      | Add as Research Backlog | Hunter documents domain search, email finding/verification, public source links, data-subject removal, and limited free-account use.                              | Lawful basis, notice, suppression, jurisdictional privacy and anti-spam rules, data accuracy, retention, and current limits must be reviewed per campaign.                  | May help research local business partnerships, but enrichment and outreach require human approval and compliance review; never import or contact people automatically. | 2026-07-18 |

### Social Publishing and Local Discovery

| Candidate                                               | Official URL(s)                                                                                                                                                                 | Decision         | Established from official sources                                                                                                                     | Unknowns                                                                                                                                                            | Coworking value                                                                                                           | Checked    |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Postiz                                                  | [Site](https://postiz.com/)<br>[Repository](https://github.com/gitroomhq/postiz-app)                                                                                            | Add as Evaluated | The AGPL-3.0 project describes a self-hostable social-media scheduling and publishing platform with automation/agent features.                        | Network API restrictions, credential storage, moderation, approval gates, AI behavior, upgrades, backup/restore, and hosted pricing were not tested.                | Can coordinate approved coworking event and content publishing while staff retain final review.                           | 2026-07-18 |
| Mixpost                                                 | [Site](https://mixpost.app/)<br>[Repository](https://github.com/inovector/mixpost)                                                                                              | Add as Evaluated | The MIT repository describes self-hosted social scheduling, publishing, and content management.                                                       | Edition boundaries, supported-network parity, API policy changes, secrets, approvals, analytics, maintenance, and recovery need verification.                       | A focused self-hosted alternative for scheduled operator marketing.                                                       | 2026-07-18 |
| Google Business Profile                                 | [Official overview](https://developers.google.com/my-business/content/overview)<br>[Management UI](https://business.google.com/manage)                                          | Add as Evaluated | Google documents management of business presence across Search and Maps, including locations, hours, photos, posts, reviews, and eligible APIs.       | Verification eligibility, suspensions, category/address rules, review handling, API access, multi-location governance, and policy changes remain operator-specific. | High-value local discovery and reputation channel for physical coworking locations.                                       | 2026-07-18 |
| Google Search Console                                   | [Product](https://search.google.com/search-console/about)<br>[Help](https://support.google.com/webmasters/)                                                                     | Add as Evaluated | Google documents search queries, impressions, clicks, indexing, sitemap submission, URL inspection, Core Web Vitals, and issue alerts.                | Data delays, retention, property ownership, attribution limits, and the actions that improve a specific site are not established by documentation alone.            | Essential no-cost feedback for coworking website discoverability and technical search health.                             | 2026-07-18 |
| Microsoft Clarity                                       | [Product documentation](https://learn.microsoft.com/en-us/clarity/setup-and-installation/about-clarity)<br>[Privacy FAQ](https://learn.microsoft.com/en-us/clarity/faq#privacy) | Add as Evaluated | Microsoft documents session recordings, heatmaps, events, funnels, and a free service; it warns against use on sites/apps targeting under-18s.        | Consent, masking, retention, residency, sensitive-page exclusions, script performance, and legal suitability require review before deployment.                      | Can reveal friction in tours, booking, and lead forms if privacy controls and consent are correctly implemented.          | 2026-07-18 |
| Looker Studio (now documented by Google as Data Studio) | [Official documentation](https://docs.cloud.google.com/data-studio)                                                                                                             | Add as Evaluated | Google documents a no-cost dashboard/report builder with connectors, charts, filters, calculated fields, and sharing.                                 | Connector costs and limits, credential ownership, row-level access, refresh behavior, privacy, and the current naming/product transition require review.            | Useful for staff-facing occupancy, sales, marketing, and finance dashboards with governed data sources.                   | 2026-07-18 |
| Lighthouse                                              | [Documentation](https://developer.chrome.com/docs/lighthouse/overview)<br>[Repository](https://github.com/GoogleChrome/lighthouse)                                              | Add as Evaluated | Google documents an open-source automated audit tool for performance, accessibility, SEO, and best practices, runnable in DevTools, CLI, Node, or CI. | Scores vary and automated accessibility/SEO checks are incomplete; thresholds and representative devices need a defined test protocol.                              | Low-cost repeatable quality gate for public coworking pages and booking funnels.                                          | 2026-07-18 |
| PageSpeed Insights                                      | [Tool](https://pagespeed.web.dev/)<br>[Documentation](https://developers.google.com/speed/docs/insights/v5/about)                                                               | Add as Evaluated | Google documents mobile/desktop lab diagnostics via Lighthouse and eligible real-user field data via CrUX.                                            | Low-traffic pages may lack field data; lab variability, third-party scripts, and remediation impact require interpretation.                                         | Gives operators a simple external check of website and booking-page performance.                                          | 2026-07-18 |
| Google Alerts                                           | [Tool](https://www.google.com/alerts)<br>[Help](https://support.google.com/alerts/)                                                                                             | Add as Evaluated | Google provides configurable web monitoring by frequency, source, language, region, and result volume.                                                | Coverage, latency, completeness, query limits, export/API support, and false positives are not documented as guarantees.                                            | Lightweight monitoring for brand mentions, local development, competitors, and coworking news; staff must review results. | 2026-07-18 |

### Local AI, Knowledge, and Workflow Infrastructure

All candidates in this group remain Research Backlog. Official documentation establishes software
scope, not safe handling of member, employee, access, financial, identity, or contract data. Model
licenses and terms must also be checked separately from the platform license.

| Candidate   | Official URL(s)                                                                                               | Decision                | Established from official sources                                                                                                    | Unknowns                                                                                                                                                  | Coworking value                                                                                  | Checked    |
| ----------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| Open WebUI  | [Site](https://openwebui.com/)<br>[Repository](https://github.com/open-webui/open-webui)                      | Add as Research Backlog | The project provides a self-hostable user interface supporting Ollama and OpenAI-compatible APIs.                                    | Current license obligations, auth/tenant isolation, connector permissions, prompt/log retention, model behavior, upgrades, and recovery need review.      | Potential staff AI front end, but not for unsupervised member or operational decisions.          | 2026-07-18 |
| AnythingLLM | [Documentation](https://docs.anythingllm.com/)<br>[Repository](https://github.com/Mintplex-Labs/anything-llm) | Add as Research Backlog | The MIT project describes local-first document chat, retrieval, agents, workspaces, and multiple model/vector providers.             | Document ACL propagation, citations, deletion, prompt injection, telemetry, connector scope, model licenses, and quality are unverified.                  | Could support a staff knowledge assistant over approved policies and guides.                     | 2026-07-18 |
| Ollama      | [Documentation](https://docs.ollama.com/)<br>[Repository](https://github.com/ollama/ollama)                   | Add as Research Backlog | The MIT project provides local model download, serving, and an API.                                                                  | Each model's license and provenance, hardware cost, patching, isolation, retention, output quality, and production support remain separate decisions.     | Useful local inference layer for tightly scoped staff experiments.                               | 2026-07-18 |
| Onyx        | [Documentation](https://docs.onyx.app/)<br>[Repository](https://github.com/onyx-dot-app/onyx)                 | Add as Research Backlog | The project describes open-source AI chat and enterprise search across connected knowledge sources.                                  | Edition/license boundaries, source ACL fidelity, indexing/deletion, prompt injection, model/provider data flows, and recovery need verification.          | Potential cross-system staff search if permissions and source governance are proven.             | 2026-07-18 |
| Dify        | [Documentation](https://docs.dify.ai/)<br>[Repository](https://github.com/langgenius/dify)                    | Add as Research Backlog | The project provides visual agent/workflow development, retrieval, model-provider connections, and application deployment.           | License conditions, tenant isolation, secret handling, tool permissions, tracing data, model terms, evaluation, and safe rollback are unknown.            | Could prototype approved staff workflows, with mandatory human checkpoints.                      | 2026-07-18 |
| Flowise     | [Documentation](https://docs.flowiseai.com/)<br>[Repository](https://github.com/FlowiseAI/Flowise)            | Add as Research Backlog | The project describes visual construction and deployment of AI agents and flows.                                                     | License/edition boundaries, authentication defaults, secret storage, tool execution, prompt injection, data retention, testing, and rollback need review. | Useful for visual prototyping, not evidence that an automation is safe for coworking operations. | 2026-07-18 |
| Langflow    | [Documentation](https://docs.langflow.org/)<br>[Repository](https://github.com/langflow-ai/langflow)          | Add as Research Backlog | The MIT project supports building and deploying AI-powered agents and workflows.                                                     | Component trust, auth, secrets, code/tool execution, data flows, model terms, observability, evaluation, and recovery remain unverified.                  | Candidate for staff-built prototypes when execution is sandboxed and reviewed.                   | 2026-07-18 |
| Qdrant      | [Documentation](https://qdrant.tech/documentation/)<br>[Repository](https://github.com/qdrant/qdrant)         | Add as Research Backlog | The Apache-2.0 project provides vector search/storage and structured filtering, self-hosted or managed.                              | It is infrastructure, not a coworking app; embedding provenance, deletion, tenancy, backup, encryption, scale, and operating cost need design evidence.   | Possible retrieval backend for an approved internal knowledge system.                            | 2026-07-18 |
| Weaviate    | [Documentation](https://docs.weaviate.io/weaviate)<br>[Repository](https://github.com/weaviate/weaviate)      | Add as Research Backlog | The BSD-3-Clause project provides object/vector storage, vector search, and structured filtering.                                    | Hosting/edition boundaries, embedding providers, ACL design, deletion, backups, upgrades, scale, and cost are not established for coworking use.          | Alternative retrieval backend, valuable only as part of a governed application.                  | 2026-07-18 |
| LocalAI     | [Documentation](https://localai.io/)<br>[Repository](https://github.com/mudler/LocalAI)                       | Add as Research Backlog | The MIT project provides local, OpenAI-compatible inference for language, vision, voice, image, and other models on varied hardware. | Model licenses, supply chain, hardware performance, sandboxing, auth, patching, retention, output safety, and support are unverified.                     | Potential private inference layer for experiments that exclude high-risk automated decisions.    | 2026-07-18 |

### Community and Events

| Candidate | Official URL(s)                                                                                | Decision         | Established from official sources                                                                                                              | Unknowns                                                                                                                                                       | Coworking value                                                                            | Checked    |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| Discourse | [Site](https://www.discourse.org/)<br>[Repository](https://github.com/discourse/discourse)     | Add as Evaluated | The GPL-2.0 project provides hosted or self-hosted community discussion with moderation, trust, search, and integrations.                      | Hosting cost, moderation labor, identity integration, privacy/retention, accessibility configuration, migration, and recovery require evaluation.              | Strong option for durable member discussions and knowledge, with active human moderation.  | 2026-07-18 |
| Flarum    | [Documentation](https://docs.flarum.org/)<br>[Repository](https://github.com/flarum/framework) | Add as Evaluated | The MIT project provides extensible forum software for online communities.                                                                     | Extension security/maintenance, moderation, SSO, privacy, scale, accessibility, backup/restore, and mobile behavior were not tested.                           | Lighter forum candidate for member Q&A and community threads.                              | 2026-07-18 |
| HumHub    | [Site](https://www.humhub.com/)<br>[Repository](https://github.com/humhub/humhub)              | Add as Evaluated | The project describes a self-hostable enterprise social network with spaces, profiles, streams, and modules.                                   | Current license/edition details, module quality, moderation, SSO, privacy, accessibility, upgrades, and recovery need review.                                  | Closer to a private member social network than a traditional forum.                        | 2026-07-18 |
| Pretix    | [Documentation](https://docs.pretix.eu/)<br>[Repository](https://github.com/pretix/pretix)     | Add as Evaluated | The official project provides ticketing for conferences, workshops, shows, and other events, with self-hosted and managed options.             | Current license/edition terms, payment fees, taxes, refunds, check-in hardware, privacy, accounting, accessibility, and restore behavior require verification. | High-value specialist for paid coworking events where generic RSVP tools are insufficient. | 2026-07-18 |
| Mobilizon | [Site](https://mobilizon.org/)<br>[Source](https://framagit.org/framasoft/mobilizon/)          | Add as Evaluated | Official sources describe open-source federated event and group management with participation, moderation, ICS/RSS, imports/exports, and APIs. | Current governance/support transition, federation moderation, hosting, deliverability, privacy, upgrades, and recovery need review.                            | Useful community-owned calendar and RSVP layer for public programs and member groups.      | 2026-07-18 |

### Network Access and Guest Wi-Fi

| Candidate   | Official URL(s)                                                                                                             | Decision         | Established from official sources                                                                                                              | Unknowns                                                                                                                                                       | Coworking value                                                                               | Checked    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| PacketFence | [Site](https://www.packetfence.org/)<br>[Repository](https://github.com/inverse-inc/packetfence)                            | Add as Evaluated | The GPL-2.0 project provides network access control, captive registration/remediation, BYOD management, 802.1X, and wired/wireless management. | Supported hardware, topology, HA, upgrades, identity integration, logging/retention, operator skill, and failure modes need lab testing.                       | Powerful benchmark for member/guest network admission in larger or security-sensitive spaces. | 2026-07-18 |
| FreeRADIUS  | [Documentation](https://www.freeradius.org/documentation/)<br>[Repository](https://github.com/FreeRADIUS/freeradius-server) | Add as Evaluated | The GPL-2.0 project is a multi-protocol policy and AAA server used for RADIUS authentication and authorization.                                | It is infrastructure, not a portal; schema, identity source, accounting, redundancy, certificates, hardware compatibility, and recovery require expert design. | Foundation for Wi-Fi or wired member authentication and usage accounting.                     | 2026-07-18 |
| OpenWISP    | [Documentation](https://openwisp.io/docs/)<br>[Controller repository](https://github.com/openwisp/openwisp-controller)      | Add as Evaluated | The project provides network/Wi-Fi controller functions including provisioning, configuration, updates, PKI, monitoring, and OpenWrt support.  | Complete component/version matrix, device support, multi-tenancy, HA, security hardening, upgrades, staffing, and recovery were not tested.                    | Relevant for centrally managing Wi-Fi across one or many coworking locations.                 | 2026-07-18 |
| openNDS     | [Documentation](https://opennds.readthedocs.io/)<br>[Repository](https://github.com/openNDS/openNDS)                        | Add as Evaluated | The GPL-2.0 project provides a small captive-portal gateway between a public local network and the internet.                                   | Identity, payments, policy/legal notices, retention, abuse handling, hardware support, fail-open/closed behavior, scale, and monitoring need design evidence.  | Focused guest Wi-Fi onboarding component, not a complete network access system.               | 2026-07-18 |

### IT Assets, Support, and Printing

| Candidate | Official URL(s)                                                                                             | Decision         | Established from official sources                                                                                                                       | Unknowns                                                                                                                                                                | Coworking value                                                                                                    | Checked    |
| --------- | ----------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- |
| Snipe-IT  | [Site](https://snipeitapp.com/)<br>[Repository](https://github.com/grokability/snipe-it)                    | Add as Evaluated | The AGPL-3.0 project manages IT assets, accessories, consumables, licenses, users, and assignment history.                                              | Member-versus-staff tenancy, barcode workflow, SSO, privacy, maintenance, hosted pricing, scale, backups, and restore were not tested.                                  | Useful for tracking operator laptops, tablets, access hardware, AV gear, and loan equipment.                       | 2026-07-18 |
| GLPI      | [Site](https://glpi-project.org/)<br>[Repository](https://github.com/glpi-project/glpi)                     | Add as Evaluated | The GPL-3.0 project provides IT asset management, inventory, licenses, service desk, and ITIL-oriented workflows.                                       | Plugin/edition boundaries, discovery agents, tenancy, SSO, privacy, staffing, upgrades, and recovery need verification.                                                 | Broader asset and service-desk option for multi-location operators with formal IT processes.                       | 2026-07-18 |
| RustDesk  | [Documentation](https://rustdesk.com/docs/)<br>[Repository](https://github.com/rustdesk/rustdesk)           | Add as Evaluated | The AGPL-3.0 project provides remote desktop/support with self-hosting options.                                                                         | Server/client edition boundaries, relay security, end-to-end encryption configuration, consent, recording, unattended access, patching, and audit controls need review. | Can augment staff IT support, but every remote session requires explicit authorization and strong access controls. | 2026-07-18 |
| CUPS      | [Documentation](https://openprinting.github.io/cups/)<br>[Repository](https://github.com/OpenPrinting/cups) | Add as Evaluated | The Apache-2.0 OpenPrinting project provides standards-based print services and printer queues.                                                         | CUPS alone does not establish quotas, charging, secure release, member identity, fleet compatibility, hardening, or support model.                                      | Core print infrastructure for shared printers, usually paired with a management/accounting layer.                  | 2026-07-18 |
| SavaPage  | [Site](https://www.savapage.org/)<br>[Source](https://gitlab.com/savapage)                                  | Add as Evaluated | The official AGPLv3-or-later project describes web print, secure release, delegated printing, auditing, pay-per-print, LDAP, NFC, and CUPS integration. | Current release/support terms, payment compliance, printer/card-reader compatibility, accessibility, HA, upgrades, and restore behavior require testing.                | Direct fit for member printing, quotas, secure release, and cost recovery.                                         | 2026-07-18 |

### Telephony

| Candidate | Official URL(s)                                                                                  | Decision         | Established from official sources                                                                                                           | Unknowns                                                                                                                                                                      | Coworking value                                                                          | Checked    |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------- |
| Asterisk  | [Site](https://www.asterisk.org/)<br>[Repository](https://github.com/asterisk/asterisk)          | Add as Evaluated | The official project provides a communications toolkit/PBX engine for SIP, call routing, voicemail, queues, conferencing, and integrations. | Deployment design, carrier and emergency-calling rules, number portability, fraud controls, recording consent, HA, patching, and support require telecom expertise.           | Flexible foundation for reception, extensions, queues, and virtual-office call flows.    | 2026-07-18 |
| FreePBX   | [Site](https://www.freepbx.org/)<br>[Framework repository](https://github.com/FreePBX/framework) | Add as Evaluated | The GPL-3.0 framework is the web administration layer for an Asterisk-based PBX ecosystem.                                                  | Distribution/module licensing, commercial add-ons, supported hardware, upgrades, carrier configuration, emergency calling, security, HA, and recovery need review.            | More approachable Asterisk administration for operator-managed reception and extensions. | 2026-07-18 |
| FusionPBX | [Site](https://www.fusionpbx.com/)<br>[Repository](https://github.com/fusionpbx/fusionpbx)       | Add as Evaluated | The official project describes a domain-based multi-tenant PBX and voice switch built on FreeSWITCH.                                        | Repository metadata does not identify an SPDX license; tenancy isolation, carrier rules, emergency calling, fraud, recording, upgrades, HA, and support require verification. | Potential multi-tenant telephony layer for private offices and virtual-office services.  | 2026-07-18 |

## Prioritized Recommendations

These priorities apply to future catalog work, not this research change.

| Priority | Recommendation                                                                                                   | Reason and required evidence before addition                                                                                                                                                                                                                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| P0       | Add evaluated records for Archie, Coworks, Spacebring, and Yardi Kube                                            | Together they close the largest current comparison gaps: modern integrated suite, community/small-space operations, mobile/API packaging, and enterprise/landlord operations. Record only current official pricing structures and distinguish vendor claims from tested facts. |
| P0       | Re-review the existing Cobot, OfficeRnD Flex, Nexudus, and Optix records for Evaluated placement                 | They are already cataloged and remain useful anchors, but current records should be reconciled with official pricing, developer, privacy/security, export, and product-scope sources. Do not duplicate them.                                                                   |
| P0       | Add Google Business Profile, Search Console, Lighthouse, and PageSpeed Insights as Evaluated                     | They are direct, low-complexity discovery and website-quality aids. Document account ownership, policy, privacy, and measurement limits rather than promising traffic or conversion gains.                                                                                     |
| P0       | Re-review Seatsurfing and add LibreBooking and MRBS as Evaluated                                                 | These focused booking tools create a useful comparison set without claiming membership, billing, floor-plan, or access capabilities they do not establish. Do not duplicate Seatsurfing.                                                                                       |
| P1       | Add Deskworks as Evaluated                                                                                       | Its public member-versus-resource pricing and network usage model add a useful small-operator/flex-office comparison. Verify payment fees, API/export details, security evidence, and terms first.                                                                             |
| P1       | Add essensys as Evaluated in specialist connectivity/access categories                                           | It fills a different gap from all-in-one suites. Keep the scope narrow and obtain pricing, architecture, hardware lifecycle, API/export, and data-boundary evidence.                                                                                                           |
| P1       | Add the evaluated CRM, support, publishing, analytics, community, and event candidates                           | Start with HubSpot free CRM, LibreDesk, Postiz, Mixpost, Clarity, Data Studio, Discourse, Flarum, HumHub, Pretix, and Mobilizon. Keep scope and human ownership explicit.                                                                                                      |
| P1       | Add network, IT, printing, remote-support, and telephony candidates only as specialist records                   | These tools can be high value but require domain experts, hardware and topology evidence, security boundaries, legal review, and recovery plans. Avoid presenting infrastructure components as complete coworking systems.                                                     |
| P1       | Add Nadine as Historical                                                                                         | Preserve coworking-native open-source history and architectural lessons. Clearly label the last release and push dates and prohibit current deployment recommendations without a maintained fork and full runtime/security review.                                             |
| P2       | Keep Roomer, Workplacify, Cal.diy, FOSSBilling, Kill Bill, Hunter, and all ten AI candidates in Research Backlog | Resolve maturity, licensing/edition, production-support, compliance, data-boundary, safety, and operator-effort gaps before creating catalog records. Cal.diy's official non-production warning is a hard current boundary.                                                    |
| P2       | Recheck Proximity                                                                                                | Require coherent official product documentation or direct vendor confirmation before deciding whether it belongs in Evaluated, Historical, rejected-stale, or rejected-irrelevant status.                                                                                      |

## Evidence Needed for Any Future Promotion

No candidate should move to Verified Core based on these pages. Promotion would require, at minimum:

- A defined operator scenario and documented hands-on trial or deployment.
- Tested member onboarding, booking, billing, refunds/credits, access changes, staff approvals, failure
  handling, and disable/rollback procedures.
- Verified exports and an exit exercise, including attachments, financial records, memberships,
  bookings, access mappings, and audit history where applicable.
- Current contract, full pricing, payment fee, add-on, implementation, support, renewal, and termination
  review for commercial products.
- Security, privacy, retention, residency, subprocessor, backup, recovery, and incident-response review
  appropriate to the data held.
- API/integration entitlement and limit testing rather than relying on the presence of developer pages.
- Human operator sign-off; automation must augment staff workflows and preserve oversight.
