USE lesson1;

SELECT 'Not started' AS status, COUNT(*) AS amount_of_tasks
FROM task
WHERE status_id = 1
UNION
SELECT 'In progress' AS status, COUNT(*) AS amount_of_tasks
FROM task
WHERE status_id = 2
UNION
SELECT 'Done' AS status, COUNT(*) AS amount_of_tasks
FROM task
WHERE status_id = 3