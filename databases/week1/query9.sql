USE lesson1;

SELECT 
	status.name AS status_name,
	COUNT(task.status_id) AS amount_of_tasks
FROM task
JOIN status
ON status.id = task.status_id
GROUP BY status.id
