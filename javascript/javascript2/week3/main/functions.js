//function for setting desk

function settingDesk() {
  
  const currentLevel = document.getElementById("levels").value;

  //"deleting" starting menu
  startingMenu.setAttribute("style", "display:none;");

  //checking the chosen level (it's form 0 to 5)
  //level #0 - only 4 cards on desk
  if (currentLevel == '0') {
    setDesk(2);

    //level #1 - 8 cards
  } else if (currentLevel == '1') {
    setDesk(4);

    //level #2 - 12 cards
  } else if (currentLevel == '2') {
    setDesk(6);

    //level #3 - 16 cards
  } else if (currentLevel == '3') {
    setDesk(8);

    //level #4 - 20 cards
  } else if (currentLevel == '4') {
    setDesk(10);

    //level #5 - 26 cards (it was decided to create 26 cards)
  } else if (currentLevel == '5') {
    setDesk(cards.length);
  }
}

//function for setting desk with some amount of cards
function setDesk(amountOfCards) {
  amountOfCardsOnTheDesk = amountOfCards * 2;
  //showing container with count
  countContainer.removeAttribute("style");

  //pushing some amount of cards to desk-array and doubling them (that's why I'm pushing this cards two times)
  for (let i = 0; i < amountOfCards; i++) {
    desk.push(cards[i]);
    desk.push(cards[i]);
  }

  //shuffling cards
  const sortedDesk = desk.sort(() => {
    return 0.5 - Math.random();
  });

  //creating cards, setting attributes and setting event listener
  sortedDesk.forEach((card) => {
    let deskCard = document.createElement("div");
    //deskCard.setAttribute("title", card.name);
    deskCard.setAttribute("class", "card");

    //not sure about id, because all cards will have the second cards with the same id, that should NOT be in html(((
    deskCard.setAttribute("id", card.id);
    deskMenu.appendChild(deskCard);
    deskCard.addEventListener("click", () => {
      if (deskCard.className === "card") {
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '"'
        );
        deskCard.className =
          "card_flipped card_is-flipped card_changed-color card_not_faded";

        //starting timer
        if (count == 1) {
          const timerForSeconds = setInterval(function () {
            if (seconds > 58) {
              seconds = 0;
              timerSeconds.innerText = "0" + seconds;
            } else if (seconds < 9) {
              seconds++;
              timerSeconds.innerText = "0" + seconds;
            } else {
              seconds++;
              timerSeconds.innerText = seconds;
            }
          }, 1000);
          const timerForMinutes = setInterval(function () {
            if (minutes < 10) {
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

        //checking, if there are two cards opened
        if (cardsOpened.length === 1) {
          cardsOpened.push(card.id);
          console.log(cardsOpened);
          setTimeout(function () {
            //checking, if these two cards are same
            if (cardsOpened[0] === cardsOpened[1]) {
              if (amountOfCardsOnTheDesk > 2) {
                amountOfCardsOnTheDesk--;
                amountOfCardsOnTheDesk--;
              } else {
                endGame();
              }
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToRemove =
                document.querySelectorAll(".card_flipped");
              deskCardsToRemove.forEach(function (card) {
                card.classList.add("card_fade");
                setTimeout(function () {
                  deskMenu.removeChild(card);
                }, 1000);
              });
            } else {
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToHide =
                document.querySelectorAll(".card_flipped");
              deskCardsToHide.forEach(function (card) {
                card.className = "card";
                card.removeAttribute("style");
              });
            }
          }, 1000);
        } else if (cardsOpened.length < 2) {
          cardsOpened.push(card.id);
          console.log(cardsOpened);
        }
      } else if (
        deskCard.className ===
        "card_flipped card_is-flipped card_changed-color card_not_faded"
      ) {
        deskCard.removeAttribute("style");
        deskCard.className = "card card_changed-color_2";
      } else if (deskCard.className === "card card_changed-color_2") {
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '");'
        );
        deskCard.className =
          "card_flipped card_is-flipped card_changed-color card_not_faded";
        //checking, if there are two cards opened
        if (cardsOpened.length === 1) {
          cardsOpened.push(card.id + "1");
          console.log(cardsOpened);
          setTimeout(function () {
            if (cardsOpened[0] === cardsOpened[1]) {
              if (amountOfCardsOnTheDesk > 2) {
                amountOfCardsOnTheDesk--;
                amountOfCardsOnTheDesk--;
              } else {
                endGame();
              }
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToRemove =
                document.querySelectorAll(".card_flipped");
              deskCardsToRemove.forEach(function (card) {
                card.classList.add("card_fade");
                setTimeout(function () {
                  deskMenu.removeChild(card);
                }, 1000);
              });
            } else {
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToHide =
                document.querySelectorAll(".card_flipped");
              deskCardsToHide.forEach(function (card) {
                card.className = "card";
                card.removeAttribute("style");
              });
            }
          }, 1000);
        } else if (cardsOpened.length < 2) {
          cardsOpened.push(card.id);
          console.log(cardsOpened);
        }
      }
    });
  });
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

// //EasterEgg function (I will draw a bunch of cards... Again)
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

  //pushing some amount of cards to desk-array and doubling them (that's why I'm pushing this cards two times)
  for (let i = 0; i < easterCards.length; i++) {
    desk.push(easterCards[i]);
    desk.push(easterCards[i]);
  }

  //shuffling cards
  const sortedDesk = desk.sort(() => {
    return 0.5 - Math.random();
  });

  //creating cards, setting attributes and setting event listener
  sortedDesk.forEach((card) => {
    let deskCard = document.createElement("div");
    deskCard.setAttribute("title", card.name);
    deskCard.setAttribute("class", "card");

    //not sure about id, because all cards will have the second cards with the same id, that should NOT be in html(((
    deskCard.setAttribute("id", card.id);
    deskMenu.appendChild(deskCard);
    deskCard.addEventListener("click", () => {
      if (deskCard.className === "card") {
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '"'
        );
        deskCard.className =
          "card_flipped card_is-flipped card_changed-color card_not_faded";

        //starting timer
        if (count == 1) {
          const timerForSeconds = setInterval(function () {
            if (seconds > 58) {
              seconds = 0;
              timerSeconds.innerText = "0" + seconds;
            } else if (seconds < 9) {
              seconds++;
              timerSeconds.innerText = "0" + seconds;
            } else {
              seconds++;
              timerSeconds.innerText = seconds;
            }
          }, 1000);
          const timerForMinutes = setInterval(function () {
            if (minutes < 10) {
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

        //checking, if there are two cards opened
        if (cardsOpened.length === 1) {
          cardsOpened.push(card.id);
          console.log(cardsOpened);
          setTimeout(function () {
            //checking, if these two cards are same
            if (cardsOpened[0] === cardsOpened[1]) {
              if (amountOfCardsOnTheDesk > 0) {
                amountOfCardsOnTheDesk--;
                amountOfCardsOnTheDesk--;
              } else {
                endGame();
              }
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToRemove =
                document.querySelectorAll(".card_flipped");
              deskCardsToRemove.forEach(function (card) {
                card.classList.add("card_fade");
                setTimeout(function () {
                  deskMenu.removeChild(card);
                }, 1000);
              });
            } else {
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToHide =
                document.querySelectorAll(".card_flipped");
              deskCardsToHide.forEach(function (card) {
                card.className = "card";
                card.removeAttribute("style");
              });
            }
          }, 1000);
        } else if (cardsOpened.length < 2) {
          cardsOpened.push(card.id);
          console.log(cardsOpened);
        }
      } else if (
        deskCard.className ===
        "card_flipped card_is-flipped card_changed-color card_not_faded"
      ) {
        deskCard.removeAttribute("style");
        deskCard.className = "card card_changed-color_2";
      } else if (deskCard.className === "card card_changed-color_2") {
        countFlipping();
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '");'
        );
        deskCard.className =
          "card_flipped card_is-flipped card_changed-color card_not_faded";
        //checking, if there are two cards opened
        if (cardsOpened.length === 1) {
          cardsOpened.push(card.id + "1");
          console.log(cardsOpened);
          setTimeout(function () {
            if (cardsOpened[0] === cardsOpened[1]) {
              if (amountOfCardsOnTheDesk > 0) {
                amountOfCardsOnTheDesk--;
                amountOfCardsOnTheDesk--;
              } else {
                endGame();
              }
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToRemove =
                document.querySelectorAll(".card_flipped");
              deskCardsToRemove.forEach(function (card) {
                card.classList.add("card_fade");
                setTimeout(function () {
                  deskMenu.removeChild(card);
                }, 1000);
              });
            } else {
              cardsOpened.length = 0;
              console.log(cardsOpened);
              const deskCardsToHide =
                document.querySelectorAll(".card_flipped");
              deskCardsToHide.forEach(function (card) {
                card.className = "card";
                card.removeAttribute("style");
              });
            }
          }, 1000);
        } else if (cardsOpened.length < 2) {
          cardsOpened.push(card.id);
          console.log(cardsOpened);
        }
      }
    });
  });
}
