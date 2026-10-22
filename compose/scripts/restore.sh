#!/usr/bin/env bash
# FABRICATED DEMONSTRATION — prototype restore script for a Docker Compose stack.
# Not production-grade. Always test restore against a non-production environment first.
# Usage: ./restore.sh <backup-timestamp-dir>

set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Usage: $0 <backup-timestamp-dir>"
  echo "Example: $0 ./backups/20260718_081500"
  exit 1
fi

BACKUP_PATH="$1"
COMPOSE_PROJECT="${COMPOSE_PROJECT:-coworking}"

if [ ! -d "${BACKUP_PATH}" ]; then
  echo "Error: backup directory not found: ${BACKUP_PATH}"
  exit 1
fi

echo "[$(date +%H:%M:%S)] Starting restore from ${BACKUP_PATH}"
echo "[WARN] This will overwrite current data in volumes and databases."
read -rp "Continue? (y/N) " confirm
if [ "${confirm}" != "y" ] && [ "${confirm}" != "Y" ]; then
  echo "Aborted."
  exit 0
fi

# --- Stop services ---
echo "  Stopping services..."
docker compose -p "${COMPOSE_PROJECT}" down

# --- Restore named volumes ---
for tarball in "${BACKUP_PATH}"/*.tar.gz; do
  volname="$(basename "${tarball}" .tar.gz)"
  echo "  Restoring volume: ${volname}"
  docker volume create "${COMPOSE_PROJECT}_${volname}" 2>/dev/null || true
  docker run --rm -v "${COMPOSE_PROJECT}_${volname}:/target" \
    -v "${BACKUP_PATH}:/backup" \
    alpine tar xzf "/backup/$(basename "${tarball}")" -C /target
done

# --- Restore databases ---
PG_RESTORES=$(ls "${BACKUP_PATH}"/*.pgdump 2>/dev/null || true)
for pgdump in $PG_RESTORES; do
  filename="$(basename "${pgdump}")"
  service="${filename%%_*}"
  dbname="${filename#*_}"
  dbname="${dbname%.pgdump}"
  echo "  Restoring PostgreSQL: ${service}/${dbname}"
  docker compose -p "${COMPOSE_PROJECT}" up -d "${service}"
  sleep 5
  docker compose -p "${COMPOSE_PROJECT}" exec -T "${service}" \
    pg_restore -U "${dbname}" -d "${dbname}" --clean --if-exists \
    < "${pgdump}" || echo "  [WARN] PostgreSQL restore had warnings for ${service}"
done

SQL_RESTORES=$(ls "${BACKUP_PATH}"/*.sql 2>/dev/null || true)
for sqlfile in $SQL_RESTORES; do
  filename="$(basename "${sqlfile}")"
  service="${filename%%_*}"
  dbname="${filename#*_}"
  dbname="${dbname%.sql}"
  echo "  Restoring MySQL: ${service}/${dbname}"
  docker compose -p "${COMPOSE_PROJECT}" up -d "${service}"
  sleep 5
  docker compose -p "${COMPOSE_PROJECT}" exec -T "${service}" \
    mysql -u "${dbname}" -p"${MYSQL_PASSWORD:?}" "${dbname}" \
    < "${sqlfile}" || echo "  [WARN] MySQL restore had warnings for ${service}"
done

# --- Restart all services ---
echo "  Restarting all services..."
docker compose -p "${COMPOSE_PROJECT}" up -d

echo "[$(date +%H:%M:%S)] Restore complete. Verify each service's health and data."
