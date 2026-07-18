# Configuration Checklist

- [ ] Pin a reviewed listmonk release and record PostgreSQL version.
- [ ] Put TLS at the edge and expose only officially documented public routes.
- [ ] Restrict admin/API routes by network and authentication.
- [ ] Create named admins and a limited campaign operator/list role.
- [ ] Create a dedicated API identity without campaign-send permission if sync is tested.
- [ ] Configure one sender and verify SPF, DKIM, and DMARC with the provider/DNS owners.
- [ ] Configure reply and bounce ownership; verify webhook authentication at the edge if used.
- [ ] Use UTC and record the coworking location's display/scheduling convention.
- [ ] Limit subscriber attributes and decide whether tracking is disabled or approved.
- [ ] Retain durable logs outside the in-app rolling display under approved retention.
- [ ] Include PostgreSQL, config, and filesystem/media uploads in backup scope.
- [ ] Keep the production member import and send switch disabled until approvals pass.
