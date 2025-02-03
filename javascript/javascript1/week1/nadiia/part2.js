

console.log('===== PART 2 =====');

let owner = 'Carlo';
let restaurant = 'Bella Napoli';
//const specialOffer = 'Pesto Pizza';
const descriptionOfRestaurant = 'Experience the true Italian cuisine!';
const addressOfRestaurant = 'Nom Nom Street 3, 2300 Copenhagen';
const openTime = '10:00';
const closingTime = '23:00';
console.log('Welcome to', restaurant);
console.log(descriptionOfRestaurant);
const hasVeganOption = true;
const allowedSmoking = false;
const allowedDogs = false;
const telephoneNumber = '+45 12 34 56 78';
const emailAddress = 'bella-napoli@hyf.com';
let pizzaName = ['Margherita Pizza', 'Pesto Pizza', 'Pepperoni Pizza', 'BBQ Chicken Pizza', 'White Pizza', 'Meat Lover\'s Pizza'];
let pizzaPrice = [90, 120, 120, 130, 110, 135];
for (let pizzaIndex=0; pizzaIndex < pizzaName.length; pizzaIndex++){
    console.log('#', pizzaIndex+1 , pizzaName[pizzaIndex], ' - ', pizzaPrice[pizzaIndex], ' DKK');
}
const pizza6 = 'Meat Lover\'s Pizza';
const pizza6Price = 135;
const openTimeNew = '12:00';
const closingTimeNew = '21:00';
console.warn('OBS! Our new opening hours are: ', openTimeNew, ' - ', closingTimeNew);


/*console.log('This is part 2');

// avoid calling variables name
let firstName = null;
console.log(firstName);
let lastName = 'Zhykharieva';
const age = 22;
const isMale = false;
const dateOfDeath = null;

firstName = 'Nadiia';
console.log(firstName);
lastName = 'Rin';
console.log('Full name:', firstName, lastName);
console.log('age', age);*/

/*const pizzas = ['Pesto Pizza', 'White Pizza', 5, true, null];
console.log(pizzas);

const pestoPizza = pizzas[1];
console.log(pizzas.length);

const a = '20' + true;
console.log(a);
console.log(typeof pizzas[0]);
console.log(typeof pizzas[pizzas.length - 1]);*/