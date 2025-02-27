console.log("---level 0. 0.8. Functions---");

console.log("--writing a greeting message--");

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice"));

console.log("--sum of numbers--");

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 3));

console.log("--square of number and sum of squares--");

function square(number) {
  return number * number;
}

function sumOfSquares(num1, num2) {
  let squareOfNumber1 = square(num1);
  let squareOfNumber2 = square(num2);

  return squareOfNumber1 + squareOfNumber2;
}

console.log(sumOfSquares(3, 4));
