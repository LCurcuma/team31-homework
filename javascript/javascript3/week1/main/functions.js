//function for setting desk

function settingDesk() {
  const currentLevel = document.getElementById("levels").value;
//"deleting" starting menu
startingMenu.setAttribute("style", "display:none;");
//checking the chosen level (it's form 0 to 5)
//level #0 - only 4 cards on desk
//level #1 - 8 cards
//level #2 - 12 cards
//level #3 - 16 cards
//level #4 - 20 cards
//level #5 - 26 cards
switch (currentLevel) {
  case "0":
    setDesk(2);
    break;
  case "1":
    setDesk(4);
    break;
  case "2":
    setDesk(6);
    break;
  case "3":
    setDesk(8);
    break;
  case "4":
    setDesk(10);
    break;
  case "5":
    setDesk(13);
    break;
}
}

//function for setting desk with some amount of cards
function setDesk(amountOfCards) {
  amountOfCardsOnTheDesk = amountOfCards * 2;
  //showing container with count
  countContainer.removeAttribute("style");

  fetch(
    "https://raw.githubusercontent.com/LCurcuma/LCurcuma.github.io/refs/heads/main/js3/cards.json"
  )
    .then((response) => response.text())
    .then((cards) => {
      console.log(cards);
      // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
      cards = JSON.parse(cards).cards;

      console.log(cards);
      console.log(cards[0]);
//pushing cards to desk
pushingCardsToDesk(amountOfCards, cards);
//shuffling cards
const sortedDesk = desk.sort(() => {
  return 0.5 - Math.random();
});
//creating cards, setting attributes and setting event listener
sortedDesk.forEach((card) => {
  const deskCard = document.createElement("div");
  //deskCard.setAttribute("title", card.name);
  deskCard.setAttribute("class", "card");
  deskCard.setAttribute("id", card.id);
  deskMenu.appendChild(deskCard);

  deskCard.addEventListener("click", () => {
    //starts timer
    startTimer(count);
    if (deskCard.className === "card") {
      //count flip
      countFlipping();
      deskCard.setAttribute(
        "style",
        'background-image: url("' + card.url + '")'
      );
      deskCard.className =
        "card_flipped card_is-flipped card_changed-color card_not_faded";
      //checking, if there are two cards opened
      checkAmountOfCardsOpened(cardsOpened, deskCard);
    } else if (
      deskCard.className ===
      "card_flipped card_is-flipped card_changed-color card_not_faded"
    ) {
      deskCard.removeAttribute("style");
      deskCard.className = "card card_changed-color_2";
      restartTheAmountOfCards();
    } else if (deskCard.className === "card card_changed-color_2") {
      countFlipping();
      deskCard.setAttribute(
        "style",
        'background-image: url("' + card.url + '");'
      );
      deskCard.className =
        "card_flipped card_is-flipped card_changed-color card_not_faded";
      //checking, if there are two cards opened
      checkAmountOfCardsOpened(cardsOpened, deskCard);
    }
  });
});
    });
}

function restartTheAmountOfCards(){
  cardsOpened.length = 0;
  console.log(cardsOpened);
}

//checking amount of cards, that were opened
function checkAmountOfCardsOpened(cardsOpened, cardOnDesk) {
  if (cardsOpened.length === 1) {
    cardsOpened.push(cardOnDesk.id);
    setTimeout(function () {
      //checking, if these two cards are same
      if (cardsOpened[0] === cardsOpened[1]) {
        if (amountOfCardsOnTheDesk > 2) {
          amountOfCardsOnTheDesk -= 2;
        } else {
          endGame();
        }
        cardsOpened.length = 0;
        console.log(cardsOpened);
        const deskCardsToRemove = document.querySelectorAll(".card_flipped");
        deskCardsToRemove.forEach(function (card) {
          card.classList.add("card_fade");
          setTimeout(function () {
            deskMenu.removeChild(card);
          }, 1000);
        });
      } else {
        cardsOpened.length = 0;
        console.log(cardsOpened);
        const deskCardsToHide = document.querySelectorAll(".card_flipped");
        deskCardsToHide.forEach(function (card) {
          card.className = "card";
          card.removeAttribute("style");
        });
      }
    }, 1000);
    console.log(cardsOpened);
  } else {
    cardsOpened.push(cardOnDesk.id);
    console.log(cardsOpened);
  }
}

function pushingCardsToDesk(amountOfCards, cards) {
  //pushing some amount of cards to desk-array and doubling them (that's why I'm pushing this cards two times)
  for (let i = 0; i < amountOfCards; i++) {
    desk.push(cards[i]);
    desk.push(cards[i]);
  }
}

function startTimer(count) {
  //starting timer
  if (count === 0) {
    const timerForSeconds = setInterval(function () {
      if (seconds > 58) {
        seconds = 0;
        timerSeconds.innerText = "00";
      } else if (seconds < 9) {
        seconds++;
        timerSeconds.innerText = "0" + seconds;
      } else {
        seconds++;
        timerSeconds.innerText = seconds;
      }
    }, 1000);
    const timerForMinutes = setInterval(function () {
      if (minutes < 9) {
        minutes++;
        timerMinutes.innerText = "0" + minutes;
      } else {
        minutes++;
        timerMinutes.innerText = minutes;
      }
    }, 60000);
    if (amountOfCardsOnTheDesk <= 0) {
      clearInterval(timerForMinutes);
      clearInterval(timerForSeconds);
    }
  }
}

//function, that counts amount of flips
function countFlipping() {
  count++;
  countText.innerText = count;
}

//function for ending of game
function endGame() {
  desk.length = 0;
  endingMenu.removeAttribute("style");
  countContainer.setAttribute("style", "display: none;");
}

//function for restarting the game
function restartingGame() {
  count = 0;
  countText.innerText = count;
  seconds = 0;
  minutes = 0;
  endingMenu.setAttribute("style", "display: none;");
  startingMenu.removeAttribute("style");
  countContainer.setAttribute("style", "display: none;");
}







//EasterEgg function (I will draw a bunch of cards... Again)
function setEasterDesk() {
  const password = document.getElementById("password").value;

  if (password === "3336633") {
    settingEasterDesk();
  }
}

function settingEasterDesk() {
  count = 0;
  countText.innerText = count;
  seconds = 0;
  minutes = 0;

  endingMenu.setAttribute("style", "display:none;");
  easterMenu.setAttribute("style", "display:none;");
  amountOfCardsOnTheDesk = easterCards.length;
  //showing container with count
  countContainer.removeAttribute("style");

  pushingCardsToDesk(easterCards.length, easterCards);

  //shuffling cards
  const sortedDesk = desk.sort(() => {
    return 0.5 - Math.random();
  });

  //creating cards, setting attributes and setting event listener
  sortedDesk.forEach((card) => {
    const deskCard = document.createElement("div");
    //deskCard.setAttribute("title", card.name);
    deskCard.setAttribute("class", "card");
    deskCard.setAttribute("id", card.id);
    deskMenu.appendChild(deskCard);

    deskCard.addEventListener("click", () => {
      //starts timer
      startTimer(count);
      if (deskCard.className === "card") {
        //count flip
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '")'
        );
        deskCard.className =
          "card_flipped card_is-flipped card_changed-color card_not_faded";
        //checking, if there are two cards opened
        checkAmountOfCardsOpened(cardsOpened, deskCard);
      } else if (
        deskCard.className ===
        "card_flipped card_is-flipped card_changed-color card_not_faded"
      ) {
        deskCard.removeAttribute("style");
        deskCard.className = "card card_changed-color_2";
        restartTheAmountOfCards();
      } else if (deskCard.className === "card card_changed-color_2") {
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '");'
        );
        deskCard.className =
          "card_flipped card_is-flipped card_changed-color card_not_faded";
        //checking, if there are two cards opened
        checkAmountOfCardsOpened(cardsOpened, deskCard);
      }
    });
  });
}
