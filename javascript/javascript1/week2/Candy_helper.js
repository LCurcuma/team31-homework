let boughtCandyPrices = [];

function addCandy(/*candyType, weight*/){

    const candyType = document.getElementById('candy-name').value;
    const weight = parseInt(document.getElementById('candy-weight').value, 10);

    if(weight === ""){
        document.getElementById('candy-prices').innerText = 'You should enter weight';
        console.log('You should enter weight');
    }
    else{
    if (candyType === 'sweet'){
        const candyPrice = weight * 0.5;
        boughtCandyPrices.push(candyPrice);
        document.getElementById('candy-prices').innerText = boughtCandyPrices;
        console.log(boughtCandyPrices);
    }
    else if (candyType === 'chocolate'){
        const candyPrice = weight * 0.7;
        boughtCandyPrices.push(candyPrice);
        document.getElementById('candy-prices').innerText = boughtCandyPrices;
        console.log(boughtCandyPrices);
    }
    else if (candyType === 'toffee'){
        const candyPrice = weight * 1.1;
        boughtCandyPrices.push(candyPrice);
        document.getElementById('candy-prices').innerText = boughtCandyPrices;
        console.log(boughtCandyPrices);
    }
    else if (candyType === 'chewing-gum'){
        const candyPrice = weight * 0.03;
        boughtCandyPrices.push(candyPrice);
        document.getElementById('candy-prices').innerText = boughtCandyPrices;
        console.log(boughtCandyPrices);
    }
    else{
        document.getElementById('candy-prices').innerText = 'You should write candy type';
        console.log('You should write candy type');
    }
    }
}

const amountToSpend = Math.random() * 100;
console.log(amountToSpend);

function canBuyMoreCandy(){
    let i = 0;
    let totalPrice = 0;
    while(i<boughtCandyPrices.length){
        totalPrice += boughtCandyPrices[i];
        i++;
    }
    let remainder = amountToSpend - totalPrice;
    if (remainder > 0){
        alert("You can buy more, so please do!");
        console.log("You can buy more, so please do!");
    }
    else{
        alert("Enough candy for you!");
        console.log("Enough candy for you!");
    }
}