SELECT reservation.id, reservation.number_of_guests, reservation.created_date, reservation.contact_name, meal.title FROM reservation
JOIN meal ON reservation.meal_id = meal.id
WHERE meal.id = 2
ORDER BY reservation.created_date