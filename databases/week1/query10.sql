USE lesson1;

SELECT status.id, status.name, x.amount_of_tasks
FROM status
LEFT JOIN (
SELECT 1 AS status_id, COUNT(*) AS amount_of_tasks
FROM task
WHERE status_id = 1
UNION
SELECT 2 AS status_id, COUNT(*) AS amount_of_tasks
FROM task
WHERE status_id = 2
UNION
SELECT 3 AS status_id, COUNT(*) AS amount_of_tasks
FROM task
WHERE status_id = 3
) x ON x.status_id = status.id