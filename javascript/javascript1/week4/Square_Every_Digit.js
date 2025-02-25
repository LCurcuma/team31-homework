console.log("-----Square every digit-----");

function squareEveryDigit(numbers) {
  let arrayOfDigits = numbers.toString().split("").map(Number);
  let arrayOfSquares = [];
  let result = "";

  for (let digit of arrayOfDigits) {
    arrayOfSquares.push(Math.pow(digit, 2));
  }

  for (let square of arrayOfSquares) {
    square = square.toString();
    result += square;
  }

  return result;
}

console.log(squareEveryDigit(9119));
console.log(squareEveryDigit(765));
