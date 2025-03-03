const box = document.querySelector('.box');
const formInBox = box.querySelector('form');
const message = document.querySelector('#text');

const firstNameInput = formInBox.querySelector('#firstname');
firstNameInput.addEventListener('change', function(){
    const firstName = firstNameInput.value;
    message.innerText = `Hello ${firstName}`;
});

// formInBox.addEventListener('submit', function(event){
//     event.preventDefault();

//     const firstNameInput = formInBox.querySelector('#firstname');
//     const firstName = firstNameInput.value;

//     const lastNameInput = formInBox.querySelector('#lastname');
//     const lastName = lastNameInput.value;

//     message.innerText = `Hello ${firstName} ${lastName}`;
// });