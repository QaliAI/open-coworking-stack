# Operator utility and market gap review (November 11, 2026)

## Scope and evidence

This review covers the existing operator starting journey, software
comparisons, the canonical catalog and selected detailed records.
The 125 pre-existing tool records were counted and checked as an inventory;
they were **not** all independently reverified against current vendor pages.

New records were added for Spacebring, Archie, Yardi Kube, Kisi and Skedda.
The GitHub catalog now contains 130 records, excluding its YAML template.
All five newcomers are proprietary commercial benchmark entries with
partially verified status and low confidence. No vendor sandbox or integration
was tested. Commercial products are not presented as open-source software.

## Confirmed problems corrected

- OfficeRnD, Nexudus, Cobot and Optix had misleading Linux and DNS setup
  prerequisites for their hosted SaaS offerings. These were corrected.
- The same four records overstated local hosting backup responsibilities.
  They now discuss vendor recovery obligations and operator-owned fallbacks.
- The site's homepage and beginner entry point now acknowledge open-source,
  free, freemium and proprietary paid options.
- A coworking-specific comparison helps operators distinguish full suites
  from booking and physical-access specialists.

## Official vendor positioning sources

The following pages were consulted on November 11, 2026 for product
positioning only. Their statements are vendor claims, not independent
evidence of pricing, contractual entitlements or operational reliability.

- [Spacebring features](https://www.spacebring.com/features)
- [Spacebring integrations](https://www.spacebring.com/integrations)
- [Archie coworking](https://archieapp.co/coworking-software)
- [Yardi Kube](https://www.yardikube.com/)
- [Kisi coworking](https://www.getkisi.com/pricing/coworking-flex)
- [Skedda room booking](https://www.skedda.com/platform/meeting-room-booking-system)

See the [operator-facing comparison](../../apps/web/src/content/docs/comparisons/2026-platform-and-access-shortlist.md)
for an edition-specific, repeatable trial script. Kisi is access control
and Skedda is primarily booking software; neither should be compared
as an all-in-one coworking management system.

## Highest-priority outstanding gaps

1. **Complete useful setup guides.** Historical release documentation
   identifies 26 guide stubs. First test the guides for booking, billing,
   CRM, membership and access handoffs with a real operator.
2. **Validate stack-builder recommendations.** Its tool choices remain
   fixed editorial mappings rather than catalog-derived suitability
   scoring. Recommendation rules and untested assumptions are disclosed.
3. **Test starter deployments.** Compose configurations are examples,
   not verified production installations with restore and upgrade drills.
4. **Prove data exit.** Demand exports with stable identifiers, payments,
   membership history, consent and related records before choosing a vendor.
5. **Establish support ownership.** Clarify whether the operator, vendor,
   property manager or integrator is responsible for every failure.
6. **Improve existing vendor comparisons.** The existing four-vendor
   coworking suite comparison is a partial-evidence due-diligence worksheet.

## Research candidates, not automatic additions

Coworks, Proximity and regional operators' software deserve review when
official documentation and customer use cases justify them. Better
comparisons of managed mailroom operations, accounting and identity
management may also matter. Catalog size alone is not a quality metric.

## Operator acceptance script

1. Identify the operator's current software, geography and staff skills.
2. Choose one job with an observable result, such as inquiry to tour.
3. Compare no more than three relevant tools in the same functional class.
4. Confirm the exact contracted edition and get current written pricing.
5. Try test records and exception paths: missed tour, refund, door failure,
   missing package, cancellation, outage and export.
6. Record observed pass, fail or not tested for every important step.
7. Include all 12-month costs: staff time, setup, migration, integrations,
   support, hardware, payments and exit.
8. Recommend **no additional software** if configuring the existing system
   resolves the problem safely.

## Release gates and limits

CI must pass formatting, type checks, catalog validation, generation,
tests, production build, browser tests and accessibility checks at the
final commit. Editorial review must verify licenses, links and truthfulness.

A real operator study is still needed to establish first-task completion
without developer assistance. No production integration, vendor pricing
audit covering all existing records, or real-world usability certification
was performed during this review. Do not advertise an A+ field-validation
result without that evidence.
