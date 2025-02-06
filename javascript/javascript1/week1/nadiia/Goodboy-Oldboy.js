function dogAgeIfy(){

    const dogYearOfBirth = parseInt(document.getElementById("dogYearOfBirth").value, 10);
    const dogYearFuture = parseInt(document.getElementById("dogsFutureYear").value, 10);
    let dogYear = (dogYearFuture - dogYearOfBirth) * 7;

    document.getElementById("dogFutureAge").innerText = "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".";

    let shouldShowResultInDogYears = true; //or false

    if(shouldShowResultInDogYears){
    dogYear = (dogYearFuture - dogYearOfBirth) * 7;
    console.log("Your dog will be", dogYear, "dog years old in", dogYearFuture);
    document.getElementById("dogFutureAge").innerText = "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".";
    }
    else{
    dogYear = dogYearFuture - dogYearOfBirth;
    console.log("Your dog will be", dogYear, "human years old in", dogYearFuture);
    document.getElementById("dogFutureAge").innerText = "Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".";
}

}

/*function dogAgeIfyInHuman(){

    let dogYearOfBirth = parseInt(document.getElementById("dogYearOfBirth").value, 10);
    let dogYearFuture = parseInt(document.getElementById("dogsFutureYear").value, 10);
    let dogYear = dogYearFuture - dogYearOfBirth;

    document.getElementById("dogFutureAge").innerText = "Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".";
}*/

/* With if/else statement:
let shouldShowResultInDogYears = true; //or false

if(shouldShowResultInDogYears){
dogYear = (dogYearFuture - dogYearOfBirth) * 7;
console.log("Your dog will be", dogYear, "dog years old in", dogYearFuture);
}
else{
dogYear = dogYearFuture - dogYearOfBirth;
console.log("Your dog will be", dogYear, "human years old in", dogYearFuture);
}*/