console.log('---level 0. 0.4. Conditions---');

console.log('--checking user\'s age--');

function showsAgeStatus(userAge){
    if(userAge < 0){
        console.log('You cannot be the age less than 0');
    } else if(userAge >= 0 && userAge <= 12){
        console.log('You\'re a child');
    } else if(userAge >= 13 && userAge <= 19){
        console.log('You\'re a teenager');
    } else if(userAge >= 20){
        console.log('You\'re an adult');
    } else {
        console.log('You should write an age!');
    }
}

showsAgeStatus(22);
showsAgeStatus(-1);
showsAgeStatus(2);
showsAgeStatus(18);

console.log('--showing, if number is positive, negative or equals zero--');

function showNumberStatus(number){
    if(number < 0){
        console.log('Number is negative');
    } else if(number === 0){
        console.log('Number is zero');
    } else if(number > 0){
        console.log('Number is positive');
    } else {
        console.log('You should write a number!');
    }
}

showNumberStatus(1);
showNumberStatus(0);
showNumberStatus(-1);

console.log('--checking, if year is leap or not--');

function isThisLeapYear(currentYear){
    const isYearIsLeap = currentYear % 4;

    if(!Number.isInteger(isYearIsLeap)){
        console.log('You should input a year');
    } else if(isYearIsLeap === 0){
        console.log('It\'s a leap year');
    } else {
        console.log('It\'s not a leap year');
    }
}

isThisLeapYear('two thousands and twenty five');
isThisLeapYear(2025);
isThisLeapYear(2012);
isThisLeapYear();

