console.log("-----Highest and Lowest-----");

function showHighestAndLowestNumber(numbers) {
  let arrayOfStringNumbers = numbers.split(" ");

  let highest = Math.max(...arrayOfStringNumbers);
  let lowest = Math.min(...arrayOfStringNumbers);

  return highest.toString() + " " + lowest.toString();
}

console.log(showHighestAndLowestNumber("1 2 3 4 5"));
console.log(showHighestAndLowestNumber("1 2 -3 4 5"));
console.log(showHighestAndLowestNumber("1 9 3 4 -5"));
