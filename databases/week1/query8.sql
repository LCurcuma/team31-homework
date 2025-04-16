USE lesson1;

SELECT task.title, status.name AS status
FROM task
JOIN status 
ON task.status_id = status.id
ORDER BY task.title