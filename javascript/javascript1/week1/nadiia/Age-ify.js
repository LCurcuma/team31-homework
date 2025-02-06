
function AgeIfy(){

const yearOfBirth = parseInt(document.getElementById("yearOfBirth").value, 10);
const yearFuture = parseInt(document.getElementById("futureYear").value, 10);
let age = yearFuture - yearOfBirth;

document.getElementById("futureAge").innerText = 'You will be ' + age + ' years old in ' + yearFuture + '.';
console.log('You will be', age, 'years old in', yearFuture, '.');

}