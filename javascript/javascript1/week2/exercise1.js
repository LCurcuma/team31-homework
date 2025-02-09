function checkBalance(){
    const bankBalance = parseInt(document.getElementById("balance").value, 10);

    if(bankBalance <= 0){
        console.log('Please deposit some money');
        document.getElementById('balance_result').innerText = 'Please deposit some money';
        document.getElementById('balance_result').style.color = 'red';
    } else if(bankBalance > 0 && bankBalance <= 1000){
        console.log('Your balance is looking okay');
        document.getElementById('balance_result').innerText = 'Your balance is looking okay';
        document.getElementById('balance_result').style.color = 'green';
    } else if(bankBalance >= 1000 && bankBalance < 3000){
        console.log('Your balance is looking good');
        document.getElementById('balance_result').style.color = 'green';
        document.getElementById('balance_result').innerText = 'Your balance is looking good';
    } else if(bankBalance >= 3000 && bankBalance < 10000){
        console.log('Your balance is fantastic');
        document.getElementById('balance_result').style.color = 'green';
        document.getElementById('balance_result').innerText = 'Your balance is fantastic';
    } else {
        console.log('Your balance is AMAZING!');
        document.getElementById('balance_result').style.color = 'green';
        document.getElementById('balance_result').innerText = 'Your balance is AMAZING';
    }
}

function getCircleArea(){
    const radius = parseInt(document.getElementById('circle-radius').value, 10);
    let area = Math.PI * Math.pow(radius, 2);
    document.getElementById('circle-area').innerText = area;
    console.log('Circle Area: ' + area);
}   

function celciusToFahreneit(){
    const celcius = parseInt(document.getElementById('celsius').value, 10);
    let fahrenheitTemp = celcius * (9 / 5) + 32;
    document.getElementById('fahrenheit').innerText = fahrenheitTemp;
    console.log('Temperature in fahrenheit: ' + fahrenheitTemp + 'F');
}

function convertDate(){

    const dateString = document.getElementById("date").value;
    let formattedDate = new Date(dateString);
    document.getElementById('result_date').innerText = formattedDate;
    console.log(formattedDate);
    /*let arrayDate = dateString.split('-', 3);
    let formattedDate = [arrayDate[2], arrayDate[1], arrayDate[0]];
    document.getElementById('result_date').innerText = formattedDate.join('-');
    console.log(formattedDate.join('-'));*/
}

function simpleLoop(){
    let arrayOfNumbers = [];
    for(let i = 74; i < 99; i++){
        arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    document.getElementById('result-of-simple-loop').innerText = arrayOfNumbers;
}

function writeString(){
    const stringToLog = document.getElementById('string').value;
    const numberOfTimesToLog = parseInt(document.getElementById('number-of-times').value, 10);
    for(let i=0; i<numberOfTimesToLog; i++){
        console.log(stringToLog);
        document.getElementById("result_string").innerText+= stringToLog + '\n';
    }
}

function sendEmailTo(){
    const email = document.getElementById('email').value;
    let emails = email.split('|');
    console.log(emails);
    for(let i = 0; i < emails.length; i++){
        console.log("Email sent to: " + emails[i]);
        document.getElementById('emails').innerText += ' Email sent to: ' + emails[i] + '; \n'
    }
}