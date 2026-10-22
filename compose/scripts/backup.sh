#!/usr/bin/env bash
# FABRICATED DEMONSTRATION — prototype backup script for a Docker Compose stack.
# Not production-grade. Does not handle concurrency, encryption, rotation, or alerting.
# Review and adapt before any use with real data.

set -euo pipefail

# --- Configuration (override via environment) ---
BACKUP_DIR="${BACKUP_DIR:-./backups}"
TIMESTAMP="$(date +%Y%m%d_%H%M%S)"
COMPOSE_PROJECT="${COMPOSE_PROJECT:-coworking}"
RETENTION_DAYS="${RETENTION_DAYS:-30}"

# List of named volumes to back up (space-separated)
VOLUMES="${VOLUMES:-caddy_data vaultwarden_data uptime_kuma_data bookstack_db bookstack_uploads bookstack_storage}"

# Databases to dump (compose service name:database_name)
PG_DATABASES="${PG_DATABASES:-}"
MYSQL_DATABASES="${MYSQL_DATABASES:-bookstack-db:bookstack}"

# --- Setup ---
mkdir -p "${BACKUP_DIR}/${TIMESTAMP}"
echo "[$(date +%H:%M:%S)] Starting backup to ${BACKUP_DIR}/${TIMESTAMP}"

# --- Database dumps ---
for db_entry in $PG_DATABASES; do
  service="${db_entry%%:*}"
  dbname="${db_entry##*:}"
  echo "  Dumping PostgreSQL: ${service}/${dbname}"
  docker compose -p "${COMPOSE_PROJECT}" exec -T "${service}" \
    pg_dump -U "${dbname}" -d "${dbname}" -Fc \
    > "${BACKUP_DIR}/${TIMESTAMP}/${service}_${dbname}.pgdump" 2>/dev/null || \
    echo "  [WARN] PostgreSQL dump failed for ${service}/${dbname}"
done

for db_entry in $MYSQL_DATABASES; do
  service="${db_entry%%:*}"
  dbname="${db_entry##*:}"
  echo "  Dumping MySQL/MariaDB: ${service}/${dbname}"
  docker compose -p "${COMPOSE_PROJECT}" exec -T "${service}" \
    mysqldump -u "${dbname}" -p"${MYSQL_PASSWORD:?}" "${dbname}" \
    > "${BACKUP_DIR}/${TIMESTAMP}/${service}_${dbname}.sql" 2>/dev/null || \
    echo "  [WARN] MySQL dump failed for ${service}/${dbname}"
done

# --- Named volumes ---
for volume in $VOLUMES; do
  echo "  Backing up volume: ${volume}"
  docker run --rm -v "${COMPOSE_PROJECT}_${volume}:/source:ro" \
    -v "${BACKUP_DIR}/${TIMESTAMP}:/backup" \
    alpine tar czf "/backup/${volume}.tar.gz" -C /source . || \
    echo "  [WARN] Volume backup failed for ${volume}"
done

# --- Metadata ---
cat > "${BACKUP_DIR}/${TIMESTAMP}/backup-info.txt" <<EOF
Backup timestamp: ${TIMESTAMP}
Compose project: ${COMPOSE_PROJECT}
Volumes included: ${VOLUMES}
PostgreSQL dbs: ${PG_DATABASES}
MySQL dbs: ${MYSQL_DATABASES}
Docker version: $(docker --version 2>/dev/null || echo unknown)
Compose version: $(docker compose version 2>/dev/null || echo unknown)
EOF

echo "[$(date +%H:%M:%S)] Backup complete: ${BACKUP_DIR}/${TIMESTAMP}"
echo "[$(date +%H:%M:%S)] Size: $(du -sh "${BACKUP_DIR}/${TIMESTAMP}" | cut -f1)"

# --- Retention ---
if [ "${RETENTION_DAYS}" -gt 0 ]; then
  echo "[$(date +%H:%M:%S)] Removing backups older than ${RETENTION_DAYS} days"
  find "${BACKUP_DIR}" -maxdepth 1 -type d -name '2*' -mtime "+${RETENTION_DAYS}" \
    -exec rm -rf {} \; -exec echo "  Removed: {}" \;
fi

echo "[$(date +%H:%M:%S)] Done"
