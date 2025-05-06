SELECT meal.title, AVG(review.stars) AS average_stars FROM meal
JOIN review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY average_stars DESC