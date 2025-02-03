function houseyPricey(){

    let houseWidth = parseInt(document.getElementById("width").value, 10);
    let houseHeight = parseInt(document.getElementById("height").value, 10);
    let houseDepth = parseInt(document.getElementById("depth").value, 10);
    let volumeInMeters = houseWidth * houseHeight * houseDepth;
    let gardenSizeInM2 = parseInt(document.getElementById("gardenSize").value, 10);
    let currentHousePrice = parseInt(document.getElementById("price").value, 10);
    let housePrice = (volumeInMeters * 2.5 * 1000) + (gardenSizeInM2 * 300);

    if(housePrice > currentHousePrice){
        let priceDifference = housePrice - currentHousePrice;
        document.getElementById("payingResult").innerText = "You pay " + priceDifference + " DKK less than the real cost of house :)";
    }
    else if(housePrice === currentHousePrice){
        document.getElementById("payingResult").innerText = "You pay the real cost of house :)";
    }
    else{
        let priceDifference = currentHousePrice - housePrice;
        document.getElementById("payingResult").innerText = "You pay " + priceDifference + " DKK more than the real cost of house :(";
    }
}