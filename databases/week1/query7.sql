USE lesson1;

SELECT title, due_date
FROM task
WHERE title LIKE '%database%'
	OR description LIKE '%database%'