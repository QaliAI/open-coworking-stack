# BorgBackup configuration checklist

- [ ] Supported Borg series/package recorded on client and server
- [ ] Source and exclude manifest approved by application owner
- [ ] Database/application preparation exits nonzero on failure
- [ ] Remote repository is separate from source and has free-space monitoring
- [ ] Encryption mode, repository ID, key export, and passphrase custody recorded
- [ ] SSH key restricted to intended repository/command where supported
- [ ] Scheduler user has only required source/repository access
- [ ] Archive naming and prune filter isolate this source
- [ ] Retention reviewed against recovery and privacy obligations
- [ ] Exit codes, warnings, logs, staleness, and capacity produce alerts
- [ ] `check`, compact, and restore cadences assigned
- [ ] Prior backup remains until clean-host restore acceptance

Do not run repair or destructive retention from this checklist. Nothing is configured by the pack.
