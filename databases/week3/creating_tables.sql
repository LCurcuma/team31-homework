USE lesson3;

CREATE TABLE Meal
(id int NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
description text,
location varchar(255) NOT NULL,
`when` datetime,
max_reservations int,
price decimal NOT NULL,
created_date date NOT NULL,
PRIMARY KEY (id));

CREATE TABLE Reservation
(id int NOT NULL AUTO_INCREMENT,
number_of_guests int NOT NULL,
meal_id int NOT NULL,
created_date date NOT NULL,
contact_phonenumber varchar(255),
contact_name varchar(255),
contact_email varchar(255) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES Meal(id));

CREATE TABLE Review
(id int NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
description text,
meal_id int NOT NULL,
stars int NOT NULL,
created_date date NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES Meal(id));