console.log('---level 0. 0.6. Arrays---');

console.log('--printing items in an array--');

let favoriteFood = ['pizza', 'sushi', 'onigiri', 'borsch', 'vareniki'];

for(const food of favoriteFood){
    console.log(food);
}

console.log('--returning sum of elements--');

function sumOfElements(arrayOfNumbers){
    let sum = 0;

    for(const number of arrayOfNumbers){
        sum += number;
    }

    return(sum);
}

const arrayOfNumbers = [5, 10, -98, 17.5, 365, -2.5];

console.log(sumOfElements(arrayOfNumbers));

console.log('--removing last element of array--');

let array = [10, 20, 30, 40, 50];

console.log(array);

array.pop();
array.push(60);

console.log(array);

console.log('--finding largest number of an array--');

function showLargestNumber(arrayOfNumbers){
    let largest = 0;

    for(let number of arrayOfNumbers){
        if(number > largest){
            largest = number;
        }
    }

    return largest;
}

console.log(showLargestNumber(arrayOfNumbers));
console.log(showLargestNumber(array));