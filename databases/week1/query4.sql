USE lesson1;

SELECT *
FROM task
JOIN status
ON status.id = task.status_id
WHERE NOT status.name = 'done';
