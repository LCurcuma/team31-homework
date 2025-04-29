USE lesson1;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('Make assignment for DB week 2', 'You should do only part 1', '2025-04-29', '2025-04-29', '2025-04-30', 2, 11);

-- Change the title of a task
UPDATE task 
SET title = 'Make assignment for DB week 2 part 1'
WHERE id = 36;

-- Change a task due date
UPDATE task
SET due_date = '2025-04-29'
WHERE id = 36;

-- Change a task status + mark a task as complete
UPDATE task
SET status_id = 3
WHERE id = 36;

-- Delete a task
DELETE FROM task
WHERE id = 36;