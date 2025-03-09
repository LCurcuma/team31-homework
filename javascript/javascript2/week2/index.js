// for(let i = 0; i < mentors.length; i++){
//     console.log(mentors[i]);
// }

// let i = 0;

// while(i < mentors.length){
//     console.log(mentors[i]);
//     i++;
// }

// let i = 0;

// do{
//     console.log(mentors[i]);
//     i++;
// } while(i < mentors.length);

// mentors.forEach(function(item){
//     console.log(item);
//     // console.log(mentors[i]);
// });

console.log("---Exercise 1---");

// for(let i = 0; i < restaurants.length; i++){
//     console.log(restaurants[i]);
// };

restaurants.forEach(function (restaurant) {
  console.log(restaurant);
});

console.log("---End of exercise 1---");

// for( let restaurant of restaurants){
//     console.log(restaurant);
// }

function changeCase(name) {
  return `${name.toUpperCase()}-${Math.round(Math.random() * 100)}`;
}

let mentorNamesTrad = [];
for (let i = 0; i < mentors.length; i++) {
  const name = mentors[i].name;
  const changedName = changeCase(name);
  mentorNamesTrad.push(changedName);
}

console.log(mentorNamesTrad);

let mentorNamesMap = mentors.map(function (mentor, i) {
  return changeCase(mentor.name);
});

console.log(mentorNamesMap);

console.log("---Exercise 2---");

let restaurantNames = [];

for (let restaurant of restaurants) {
  restaurantNames.push(restaurant.name);
}

console.log(restaurantNames);

let restaurantNamesWithMap = restaurants.map(function (restaurant) {
  return restaurant.name;
});

console.log(restaurantNamesWithMap);

console.log("---End of exercise 2---");

const arr = []; //whole array is const, but all items of array are let
arr[1] = 1; //yes
arr[2] = 2; //yes
arr[2] = 8; //yes

// arr = [1, 2];//no

const mentorsWithDbSkills = [];

for (let i = 0; i < mentors.length; i++) {
  const mentor = mentors[i];
  const subjects = mentor.subjects.map(function (subject) {
    return subject.toLowerCase();
  });

  if (subjects.includes("database") || subjects.includes("db")) {
    mentorsWithDbSkills.push(mentors[i].name);
  }
}

console.log(mentorsWithDbSkills);

const mentorsTeachingDb = mentors.filter(function (mentor, i) {
  const subjectToLowerCase = mentor.subjects.map(function (subject) {
    return subject.toLowerCase();
  });
  if (
    subjectToLowerCase.includes("database") ||
    subjectToLowerCase.includes("db")
  ) {
    return true;
  } else {
    return false;
  }
});

const namesOfMentorsTeachingDb = mentorsTeachingDb.map(function (mentor) {
  return mentor.name;
});

console.log(namesOfMentorsTeachingDb);
console.log("Original mentors:", mentors);

console.log("---Exercise 3---");

const italianAndPizzaRestaurants = [];

for (let restaurant of restaurants) {
  if (
    restaurant.type.includes("italian") ||
    restaurant.type.includes("pizza")
  ) {
    italianAndPizzaRestaurants.push(restaurant);
  }
}

console.log(italianAndPizzaRestaurants);

console.log("---End of exercise 3---");

console.log("Mentors before", mentors[0]);

const years = mentors.map((mentor) => {
  return mentor.yearOfExperience;
});

years.sort(function (itemA, itemB) {
  return itemA > itemB ? -1 : 1; //if = ? else = :
});

console.log("Mentors after", mentors);
console.log(["w", "r", "e", "a"].sort());
console.log("Years sorted", years);

console.log("---Exercise 4---");

const restaurantForRating = restaurants.map(function (restaurant) {
  return { name: restaurant.name, rating: restaurant.rating };
});

restaurantForRating.sort(function (firstRestaurant, secondRestaurant) {
  return firstRestaurant.rating > secondRestaurant.rating ? -1 : 1;
});

console.log(restaurantForRating);

console.log("---End of exercise 4---");

function myFunction() {}

const myFunction2 = () => {};

const myFunction3 = function () {};

// //anonymous
// function () {

// }

// () => {

// }

console.log("---Exercise 5---");

//Filter, sorting, mapping (creating new array), looping (showing all names)
const filterItalianAndPizzaRestaurants = restaurants
  .filter((restaurant) => {
    return (
      restaurant.type.includes("italian") || restaurant.type.includes("pizza")
    );
  })
  .sort((firstRestaurant, secondRestaurant) => {
    if (firstRestaurant.rating > secondRestaurant.rating) {
      return 1;
    } else if (firstRestaurant.rating < secondRestaurant.rating) {
      return -1;
    } else {
      return 0;
    }
  })
  .map((resto) => {
    return resto.name;
  })
  .forEach((name) => {
    console.log(name);
  });

console.log("---End of exercise 5---");
