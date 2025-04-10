const takingData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/LCurcuma/LCurcuma.github.io/refs/heads/main/js3/cards.json"
  );
  const cards = await response.json();
  return cards;
};

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
async function setDesk(amountOfCards) {
  amountOfCardsOnTheDesk = amountOfCards * 2;

  //showing container with count
  countContainer.removeAttribute("style");

  const cards = await takingData();

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
    deskCard.setAttribute("class", "card_" + amountOfCards);
    deskCard.setAttribute("id", card.id);
    deskMenu.appendChild(deskCard);

    deskCard.addEventListener("click", () => {
      //starts timer
      if (count === 0) {
        let start = true;
        startTimer(start);
      }

      if (deskCard.className === "card_" + amountOfCards) {
        //count flip
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '")'
        );
        deskCard.className =
          "card_flipped_" +
          amountOfCards +
          " card_is-flipped card_changed-color card_not_faded";

        //checking, if there are two cards opened
        checkAmountOfCardsOpened(cardsOpened, deskCard, amountOfCards);
      } else if (
        deskCard.className ===
        "card_flipped_" +
          amountOfCards +
          " card_is-flipped card_changed-color card_not_faded"
      ) {
        deskCard.removeAttribute("style");
        deskCard.className = "card_" + amountOfCards + " card_changed-color_2";
        resetTheAmountOfCards();
      } else if (
        deskCard.className ===
        "card_" + amountOfCards + " card_changed-color_2"
      ) {
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '");'
        );
        deskCard.className =
          "card_flipped_" +
          amountOfCards +
          " card_is-flipped card_changed-color card_not_faded";

        //checking, if there are two cards opened
        checkAmountOfCardsOpened(cardsOpened, deskCard, amountOfCards);
      }
    });
  });
}

function resetTheAmountOfCards() {
  cardsOpened.length = 0;
}

//checking amount of cards, that were opened
function checkAmountOfCardsOpened(cardsOpened, cardOnDesk, amountOfCards) {
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
        const deskCardsToRemove = document.querySelectorAll(
          ".card_flipped_" + amountOfCards
        );
        deskCardsToRemove.forEach(function (card) {
          card.classList.add("card_fade");
          setTimeout(function () {
            deskMenu.removeChild(card);
          }, 1000);
        });
      } else {
        cardsOpened.length = 0;
        const deskCardsToHide = document.querySelectorAll(
          ".card_flipped_" + amountOfCards
        );
        deskCardsToHide.forEach(function (card) {
          card.className = "card_" + amountOfCards;
          card.removeAttribute("style");
        });
      }
    }, 1000);
  } else {
    cardsOpened.push(cardOnDesk.id);
  }
}

function pushingCardsToDesk(amountOfCards, cards) {
  //pushing some amount of cards to desk-array and doubling them (that's why I'm pushing this cards two times)
  for (let i = 0; i < amountOfCards; i++) {
    desk.push(cards[i]);
    desk.push(cards[i]);
  }
}

function startTimer(start) {
  if (start) {
    timer = setInterval(() => {
      if (seconds < 9) {
        seconds++;
        timerSeconds.innerText = "0" + seconds;
      } else if (seconds < 59) {
        seconds++;
        timerSeconds.innerText = seconds;
      } else if (seconds === 59) {
        seconds = 0;
        minutes++;
        timerSeconds.innerText = "00";
      }
      if (minutes < 9) {
        timerMinutes.innerText = "0" + minutes;
      } else {
        timerMinutes.innerText = minutes;
      }
    }, 1000);
  } else {
    clearInterval(timer);
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
  setTimeout(() => {
    endingMenu.removeAttribute("style");
    countContainer.setAttribute("style", "display: none;");
  }, 1000);
}

//function for restarting the game
function restartingGame() {
  count = 0;
  countText.innerText = count;
  seconds = 0;
  minutes = 0;
  timerMinutes.innerText = "00";
  timerSeconds.innerText = "00";
  start = false;
  startTimer(start);
  endingMenu.setAttribute("style", "display: none;");
  startingMenu.removeAttribute("style");
  countContainer.setAttribute("style", "display: none;");
}
