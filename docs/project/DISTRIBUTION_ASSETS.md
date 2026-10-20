# Distribution assets (drafts)

Use only after the owner approves public release (`PUBLIC_RELEASE_PLAN.md`). Replace `<SITE_URL>`
and `<REPO_URL>`. Every number below was true on 2026-10-20 from `pnpm validate` and the build; re-run
before posting.

## Facts you may state

- 116 tool records, 14 reference stacks, 75 workflows, 105 operator tasks, 14 operator roles.
- 22 comparison pages, each labeled as a directional shortlist or due-diligence worksheet.
- Stack Builder compares hosted, hybrid, and self-hosted operating models; a capacity and payback
  estimator uses editable assumptions and promises no savings.
- Every tool shows a license class (open source, open-core, source-available, fair-code, freemium,
  proprietary) and what human work remains.
- 25 tools have a full installation guide; 26 have a stub; the rest are planned.

## Facts you must not state

- "Verified" tools — zero tools are Verified Core.
- Savings, ROI, or staff reductions; any pricing.
- That the Compose stacks are production-ready or tested.
- GitHub stars or adoption numbers (none are recorded).

## Launch post (long)

Title: _Choosing coworking software without the jargon_

If you run a coworking space, "free", "open source" and "self-hosted" get used loosely and the real
cost is usually your time. Open Coworking Stack is a free directory of software for coworking and
flexible-workspace operators. For each tool it shows the license type (truly open source versus
open-core, source-available or proprietary), the cost model, the work that stays with your team,
and an installation guide where one exists.

Start with the five-step operator pathway: find the problem, compare options, choose a hosted,
hybrid or self-hosted model, review an editable cost estimate, and run a small pilot. If nobody on
your team runs servers, the Stack Builder will tell you not to self-host.

It is a decision aid, not a ranking: there is no paid placement, comparisons are directional, and
the sample numbers are fabricated demonstrations you replace with real quotes. The reference
Docker setups are demonstrations, not production systems.

<SITE_URL>/start/start-here/ · Source and corrections: <REPO_URL>

## Short posts

- **LinkedIn / X (1):** "Is that coworking tool really open source? We checked 116 of them against
  their actual LICENSE files — and corrected several. Free directory, no paid placement: <SITE_URL>"
- **LinkedIn / X (2):** "No technical team? Don't self-host. A five-step path from 'billing is
  chaos' to a costed first pilot, written for coworking operators: <SITE_URL>/start/start-here/"
- **Community / forum:** "I built a free directory of coworking software with license
  classifications, human-work boundaries and install guides. It is incomplete on purpose — zero tools
  are marked fully verified yet. Corrections welcome: <REPO_URL>/issues"

## Repository description and topics

Description: "A verified-as-far-as-we-can-say directory of software for coworking operators:
licenses, costs, human work, and install guides."
Topics: `coworking`, `flexible-workspace`, `open-source`, `self-hosting`, `directory`, `astro`.

## Related paid products (credibility rules)

Coworking Launch Manual, Prospector and SellSpace are separate paid products from the maintainer.
On the site they appear only on the Start Here page, in a labeled section that links to the
trust policy, and only once real URLs are set in `apps/web/src/data/related-products.ts`. In posts:
mention them in a separate closing line, never inside a recommendation, ranking, or comparison;
no discount codes or tracked links in the directory; disclose the relationship every time.

## Visual assets

None were generated in this session. The site logo is `apps/web/src/assets/logo.svg`. If an
Open Graph image is wanted, make a 1200x630 card from the Start Here title and the five steps.
