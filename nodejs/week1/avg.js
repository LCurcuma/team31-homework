"use strict";
const numbers = process.argv.slice(2);
const amountOfNumbers = numbers.length;
let sum = 0;

if (amountOfNumbers === 0) {
  console.error("You should insert numbers");
} else {
  numbers.forEach((number) => {
    number = parseInt(number);
    sum += number;
  });

  if (!isNaN(sum)) {
    const average = sum / amountOfNumbers;
    console.log(average);
  } else {
    console.error("An array contains a string");
  }
}
