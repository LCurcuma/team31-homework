function showClothesToWear(/*currentTemperature*/){

    //If you want to check, if code works with parameter
    //comment line below
    const currentTemperature = parseInt(document.getElementById('temperature').value, 10);


    //comment also all strings with .innerText
    if (currentTemperature < -15){
        document.getElementById('clothes').innerText = 'It\'s really cold outside. Wear as much clothes, as you can';
        console.log('It\'s really cold outside. Wear as much clothes, as you can');
    }
    else if (currentTemperature >= -15 && currentTemperature <= 0){
        document.getElementById('clothes').innerText = 'You should wear jacket, long-sleeve tee, long pants, hat, gloves and scarf';
        console.log('You should wear jacket, long-sleeve tee, long pants, hat, gloves and scarf');
    }
    else if (currentTemperature > 0 && currentTemperature <= 5){
        document.getElementById('clothes').innerText = 'You should wear jacket, long-sleeve tee and long pants';
        console.log('You should wear jacket, long-sleeve tee and long pants');
    }
    else if (currentTemperature > 5 && currentTemperature <= 10){
        document.getElementById('clothes').innerText = 'You should wear hoodie, long-sleeve tee and long pants';
        console.log('You should wear hoodie, long-sleeve tee and long pants');
    }
    else if (currentTemperature > 10 && currentTemperature <= 15){
        document.getElementById('clothes').innerText = 'You should wear hoodie, t-shirt and long pants';
        console.log('You should wear hoodie, t-shirt and long pants');
    }
    else if (currentTemperature > 15 && currentTemperature <= 30){
        document.getElementById('clothes').innerText = 'You should wear t-shirt and shorts';
        console.log('You should wear t-shirt and shorts');
    }
    else{
        document.getElementById('clothes').innerText = 'Live in fridge';
        console.log('Live in fridge');
    }
}

//and then uncomment the line below
//console.log(showClothesToWear(18));