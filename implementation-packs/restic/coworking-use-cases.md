# Coworking use cases

## In scope

- One non-critical booking, document, knowledge, or internal operations service.
- Prepared database dump, application files, and secret-free recovery configuration.
- Offsite encrypted snapshots, failure alerts, repository checks, and clean-host restore drills.
- Separate business-portable export where the application supports one.

## Out of scope

- Crash-consistent copying assumed to be application-consistent.
- Legal archive, immutable retention, or disaster-recovery claims without separate design.
- The only backup repository in the source host/account/failure domain.
- Production in-place restore as a pilot test.

The application owner, not Restic, decides whether the recovered coworking workflow is usable.
