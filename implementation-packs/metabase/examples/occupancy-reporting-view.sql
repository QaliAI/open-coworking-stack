-- Illustrative contract, not production-ready SQL. Adapt to the approved source DB.
-- The source query must emit no member identity or payment/access data.
CREATE VIEW coworking_occupancy_reporting_example AS
SELECT
  CAST('fixture-resource-a' AS VARCHAR(64)) AS resource_key,
  CAST('desk' AS VARCHAR(32)) AS resource_type,
  CAST('2026-07-01T09:00:00Z' AS VARCHAR(32)) AS interval_start_utc,
  CAST('2026-07-01T10:00:00Z' AS VARCHAR(32)) AS interval_end_utc,
  60 AS available_minutes,
  60 AS booked_minutes,
  CAST('2026-07-01T10:05:00Z' AS VARCHAR(32)) AS source_watermark_utc;
