//Code for assignment
let boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

const candies = [
  {
    candyType: "sweet",
    price: 0.5,
  },
  {
    candyType: "chocolate",
    price: 0.7,
  },
  {
    candyType: "toffee",
    price: 1.1,
  },
  {
    candyType: "chewing-gum",
    price: 0.03,
  },
];

function addCandy(candyType, weight) {
  if (!candyType) {
    console.log("You should write candy's type");
  } else if (!weight) {
    console.log("You should write weight of candies");
  } else {
    for (let i = 0; i < candies.length; i++) {
      if (candyType == candies[i].candyType) {
        let candyPrice = weight * candies[i].price;
        boughtCandyPrices.push(candyPrice);
      }
    }
  }
}

addCandy("sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
console.log(boughtCandyPrices);

function canBuyMoreCandy() {
  let i = 0;
  let TotalPrice = 0;

  while (i < boughtCandyPrices.length) {
    TotalPrice += boughtCandyPrices[i];
    i++;
  }

  let remainder = amountToSpend - TotalPrice;

  if (remainder > 0) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
}

canBuyMoreCandy();

addCandy("sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
canBuyMoreCandy();

addCandy("sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
canBuyMoreCandy();

addCandy("sweet", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
canBuyMoreCandy();

//Code for HTML-document

let boughtCandyPrices2 = [];

//used object, as was suggested

const candies2 = [
  {
    candyType2: "sweet",
    price2: 0.5,
  },
  {
    candyType2: "chocolate",
    price2: 0.7,
  },
  {
    candyType2: "toffee",
    price2: 1.1,
  },
  {
    candyType2: "chewing-gum",
    price2: 0.03,
  },
];

function addCandyInteractiveVersion() {
  const candyType2 = document.getElementById("candy-name").value;
  const weight2 = parseInt(document.getElementById("candy-weight").value, 10);

  if (!weight2) {
    document.getElementById("candy-prices").innerText =
      "You should enter weight";
  } else if (!candyType2) {
    document.getElementById("candy-prices").innerText =
      "You should write candy type";
  } else {
    for (let i = 0; i < candies2.length; i++) {
      if (candyType2 == candies2[i].candyType) {
        const candyPrice2 = weight * candies[i].price;
        boughtCandyPrices2.push(candyPrice2);
        document.getElementById("candy-prices").innerText = boughtCandyPrices2;
      }
    }
  }
}

const amountToSpend2 = Math.random() * 100;

function canBuyMoreCandyInteractiveVersion() {
  let i2 = 0;
  let totalPrice2 = 0;
  while (i2 < boughtCandyPrices2.length) {
    totalPrice2 += boughtCandyPrices2[i];
    i2++;
  }
  let remainder2 = amountToSpend2 - totalPrice2;
  if (remainder2 > 0) {
    alert("You can buy more, so please do!");
  } else {
    alert("Enough candy for you!");
  }
}
