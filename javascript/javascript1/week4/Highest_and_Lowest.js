console.log("-----Highest and Lowest-----");

function showHighestAndLowestNumber(numbers) {
  let arrayOfStringNumbers = numbers.split(" ");
  let arrayOfNumbers = [];

  for (let number of arrayOfStringNumbers) {
    number = parseInt(number);
    arrayOfNumbers.push(number);
  }

  let highest = Math.max(...arrayOfNumbers);
  let lowest = Math.min(...arrayOfNumbers);

  let resultString = highest.toString() + " " + lowest.toString();
  return resultString;
}

console.log(showHighestAndLowestNumber("1 2 3 4 5"));
console.log(showHighestAndLowestNumber("1 2 -3 4 5"));
console.log(showHighestAndLowestNumber("1 9 3 4 -5"));
