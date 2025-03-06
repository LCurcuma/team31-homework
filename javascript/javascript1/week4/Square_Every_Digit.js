console.log("-----Square every digit-----");

function squareEveryDigit(numbers) {
  let newNumber = '';

  for (let number of String(numbers)) {
    newNumber += Math.pow(parseInt(number), 2);
  }

  return parseInt(newNumber);
}

console.log(squareEveryDigit(9119));
console.log(squareEveryDigit(765));
