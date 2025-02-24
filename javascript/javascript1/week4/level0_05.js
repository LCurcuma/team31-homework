console.log('---level 0. 0.5. Loops---');

console.log('--count from 1 to 10--');

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('--count from 10 to 1--');

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log('--printing even numbers from 1 to 20--');

for (let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log('--printing values of an array--');

const names = ["john", "jane", "joe"];

for(const element of names){
    console.log(element);
}