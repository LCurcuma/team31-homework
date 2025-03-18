//Netlify deployment: https://precious-vacherin-483600.netlify.app

const startingMenu = document.getElementById("start_menu");
const deskMenu = document.getElementById("desk");
const endingMenu = document.getElementById('restart');
const easterMenu = document.getElementById('easter');


//desk with cards
const desk = [];

//count is amount of times, when user flipped card
let count = 0;
const countText = document.getElementById('count');

const countContainer = document.getElementById('count_container');
countContainer.setAttribute('style', 'display: none;')

//timer
let seconds = 0;
let minutes = 0;

const timerSeconds = document.getElementById('seconds');
const timerMinutes = document.getElementById('minutes');

//amount of cards opened
let cardsOpened = [];

//amount of cards on desk
let amountOfCardsOnTheDesk = 0;

const restartingButton = document.getElementById('restart');

restartingButton.addEventListener('contextmenu', function(){
    easterMenu.removeAttribute('style');
});
