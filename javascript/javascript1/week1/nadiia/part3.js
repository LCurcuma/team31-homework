console.log('===== PART 3 =====');

restaurant = 'Carlo\'s Pizzaria';
console.log(restaurant);

owner = 'Carlo';
// calculate the new name of the restaurant and log it

// change the name of the owner and log the restaurant name again. What happened to the name of the restaurant and why?
owner = 'Maria'

let pizzas = ['Margherita Pizza', 'Pesto Pizza', 'Pepperoni Pizza', 'BBQ Chicken Pizza', 'White Pizza', 'Meat Lover\'s Pizza'];
let pizzaPrices = [90, 120, 120, 130, 110, 135];

for (let pizzaIndex=0; pizzaIndex < pizzaName.length; pizzaIndex++){
    console.log('#', pizzaIndex+1 , pizzas[pizzaIndex], ' - ', pizzaPrices[pizzaIndex], ' DKK');
};

order = [0, 1, 1, 2, 4];

let orderSum = 0;

for(let orderIndex=0; orderIndex<order.length; orderIndex++){
    orderSum += pizzaPrices[order[orderIndex]];
}
console.log('Order price:', orderSum, 'DKK');

let discountSum = 0;

for(orderIndex=0; orderIndex<order.length; orderIndex++){
    if(orderIndex === 0){
        let discount = pizzaPrices[order[orderIndex]] * 0.8;
        discountSum += discount;
    }
    else{
        discountSum += pizzaPrices[order[orderIndex]];
    }
}
console.log('Order price(with discount):', discountSum, 'DKK');

let isVegetarian = [true, true, false, false, true, false];

for (let pizzaIndex=0; pizzaIndex<pizzas.length; pizzaIndex++){
    if(isVegetarian[pizzaIndex]===true){
        console.log('#', pizzaIndex, pizzas[pizzaIndex],  '(v) -', pizzaPrices[pizzaIndex], 'DKK');
    }
    else{
        console.log('#', pizzaIndex, pizzas[pizzaIndex],  ' -', pizzaPrices[pizzaIndex], 'DKK');
    }
}

/*let order = [];

function firstPizza(){
    order[0] = document.querySelector('.element:checked').value;
    order[0] = parseInt(order, 10);
    console.log(order);
    return(order);
}

function addPizza(){
    let addedItem = document.querySelector('.element:checked').value;
    order.push = addedItem;
    console.log(order.push);
    return(order.push);
}
function calculateSum(){
console.log(order);
console.log(typeof(order));
}*/