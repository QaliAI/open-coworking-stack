# Configuration checklist

- [ ] Monitoring host is separated from primary service failure domains where practical
- [ ] Initial setup/admin interface is not publicly exposed
- [ ] TLS proxy, named accounts, supported authentication, and recovery tested
- [ ] Five targets are authorized, neutrally named, and assigned to owners/runbooks
- [ ] Intervals, timeouts, delays, retries, and maintenance are approved
- [ ] Check credentials are absent or narrowly scoped and protected
- [ ] One notification route and independent fallback are tested
- [ ] Public status is disabled unless communications/security approve content
- [ ] Monitoring host, storage, TLS, backup, and notification route have independent signals
- [ ] Restore and post-restore notification test passed before reliance

Record exact versions and observed results. Product UI state is not end-to-end service proof.
