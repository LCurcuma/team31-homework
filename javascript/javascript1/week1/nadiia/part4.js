console.log('===== PART 4 =====');

order = [1, 2, 2];

orderSum = 0;

for(let orderIndex=0; orderIndex<order.length; orderIndex++){
    orderSum += pizzaPrices[order[orderIndex]];
}
console.log('Order price:', orderSum, 'DKK');

discountSum = 0;

for(orderIndex=0; orderIndex<order.length; orderIndex++){
    if(orderIndex === 0){
        let discount = pizzaPrices[order[orderIndex]] * 0.8;
        discountSum += discount;
    }
    else{
        discountSum += pizzaPrices[order[orderIndex]];
    }
}
console.log('Order price(with discount):', discountSum, 'DKK');

let index = 0;
let discount = pizzaPrices[order[index]] * 0.2;
console.log('Discount of first pizza:', discount, 'DKK');

let addPlasticBag = 5;
console.log('Added plastic bag:', addPlasticBag, 'DKK');
discountSum += 5;

let VAT = discountSum * 0.25;
console.log('VAT (25%):', VAT, 'DKK');

let finalSum = discountSum + VAT;
console.log('Final price:', finalSum, 'DKK');

if(finalSum < 300){
    finalSum += 50;
    console.log('Final price(incl. delivery fee):', finalSum, 'DKK');
}
else{
    console.log('Final price:', finalSum, 'DKK')
}

order = [3, 4, 4];

orderSum = 0;

for(let orderIndex=0; orderIndex<order.length; orderIndex++){
    orderSum += pizzaPrices[order[orderIndex]];
}
console.log('Order price:', orderSum, 'DKK');

discountSum = 0;

for(orderIndex=0; orderIndex<order.length; orderIndex++){
    if(orderIndex === 0){
        let discount = pizzaPrices[order[orderIndex]] * 0.8;
        discountSum += discount;
    }
    else{
        discountSum += pizzaPrices[order[orderIndex]];
    }
}
console.log('Order price(with discount):', discountSum, 'DKK');

index = 0;
discount = pizzaPrices[order[index]] * 0.2;
console.log('Discount of first pizza:', discount, 'DKK');

addPlasticBag = 5;
console.log('Added plastic bag:', addPlasticBag, 'DKK');
discountSum += 5;

VAT = discountSum * 0.25;
console.log('VAT (25%):', VAT, 'DKK');

finalSum = discountSum + VAT;
console.log('Final price:', finalSum, 'DKK');

if(finalSum < 300){
    finalSum += 50;
    console.log('Final price(incl. delivery fee):', finalSum, 'DKK');
}
else{
    console.log('Final price:', finalSum, 'DKK')
}

order = [0, 0, 0];

orderSum = 0;

for(let orderIndex=0; orderIndex<order.length; orderIndex++){
    orderSum += pizzaPrices[order[orderIndex]];
}
console.log('Order price:', orderSum, 'DKK');

discountSum = 0;

for(orderIndex=0; orderIndex<order.length; orderIndex++){
    if(orderIndex === 0){
        let discount = pizzaPrices[order[orderIndex]] * 0.8;
        discountSum += discount;
    }
    else{
        discountSum += pizzaPrices[order[orderIndex]];
    }
}
console.log('Order price(with discount):', discountSum, 'DKK');

index = 0;
discount = pizzaPrices[order[index]] * 0.2;
console.log('Discount of first pizza:', discount, 'DKK');

VAT = discountSum * 0.25;
console.log('VAT (25%):', VAT, 'DKK');

finalSum = discountSum + VAT;
console.log('Final price:', finalSum, 'DKK');

if(finalSum < 300){
    finalSum += 50;
    console.log('Final price(incl. delivery fee):', finalSum, 'DKK');
}
else{
    console.log('Final price:', finalSum, 'DKK')
}

order = [0, 1];

orderSum = 0;

for(let orderIndex=0; orderIndex<order.length; orderIndex++){
    orderSum += pizzaPrices[order[orderIndex]];
}
console.log('Order price:', orderSum, 'DKK');

discountSum = 0;

for(orderIndex=0; orderIndex<order.length; orderIndex++){
    if(orderIndex === 0){
        let discount = pizzaPrices[order[orderIndex]] * 0.8;
        discountSum += discount;
    }
    else{
        discountSum += pizzaPrices[order[orderIndex]];
    }
}
console.log('Order price(with discount):', discountSum, 'DKK');

index = 0;
discount = pizzaPrices[order[index]] * 0.2;
console.log('Discount of first pizza:', discount, 'DKK');

VAT = discountSum * 0.25;
console.log('VAT (25%):', VAT, 'DKK');

finalSum = discountSum + VAT;
console.log('Final price:', finalSum, 'DKK');

if(finalSum < 300){
    finalSum += 50;
    console.log('Delivery fee:', 50, 'DKK');
    console.log('Final price(incl. delivery fee):', finalSum, 'DKK');
}
else{
    console.log('Final price:', finalSum, 'DKK')
}