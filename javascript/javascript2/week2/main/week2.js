//Netlify deployment: https://frabjous-sherbet-cea3fd.netlify.app

const startingMenu = document.getElementById("start_menu");
const deskMenu = document.getElementById("desk");

//desk with cards
const desk = [];

function settingDesk() {
  const currentLevel = document.getElementById("levels").value;

  //"deleting" starting menu
  startingMenu.setAttribute("style", "display:none;");

  //checking the chosen level (it's form 0 to 5)
  //level #0 - only 4 cards on desk
  if (currentLevel === "0") {
    setDesk(2);

    //level #1 - 8 cards
  } else if (currentLevel === "1") {
    setDesk(4);
    //level #2 - 12 cards
  } else if (currentLevel === "2") {
    setDesk(6);

    //CAUTION
    //THE CODE BELOW IS SIMILAR TO CODE UPPER
    //THEORETICALLY (AND, SURPRISINGLY, PRACTICALLY) CODE WORKS
    //BUT WHEN YOU TAKE LEVEL 3+, THE CONSOLE SAYS, THAT IT CANNOT SEE PROPERTIES (WELL, OBJECTS IN ARRAY, BECAUSE THEY DOESN'T EXIST)
    //BUT THE DESK GIVES YOU AS MUCH CARDS, AS IT CAN
    //IT WORKS THAT WAY, BECAUSE I DRAWN 7 CARDS AND IN PROCESS OF DRAWING OTHERS
    //I GUESS, I WILL FINISH DRAWING TO THIS SUNDAY(WHICH IS 16TH OF MARCH)
    //I'LL REMOVE THIS CODE, WHEN ALL CARDS WILL BE DONE
    //THANKS FOR UNDERSTANDING

    //level #3 - 16 cards
  } else if (currentLevel === "3") {
    setDesk(8);

    //level #4 - 20 cards
  } else if (currentLevel === "4") {
    setDesk(10);

    //level #5 - 26 cards (it was decided to create 26 cards)
  } else if (currentLevel === "5") {
    setDesk(13);
  }
}

//function for setting desk with some amount of cards
function setDesk(amountOfCards) {
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
    deskCard.setAttribute("title", card.name);
    deskCard.setAttribute("class", "card");

    //not sure about id, because all cards will have the second cards with the same id, that should NOT be in html(((
    deskCard.setAttribute("id", card.id);
    deskMenu.appendChild(deskCard);
    deskCard.addEventListener("click", () => {
      if (deskCard.className === "card") {
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '"'
        );
        deskCard.className = "card_flipped card_is-flipped card_changed-color";
      } else if (
        deskCard.className === "card_flipped card_is-flipped card_changed-color"
      ) {
        deskCard.removeAttribute("style");
        deskCard.className = "card card_changed-color_2";
      } else if (deskCard.className === "card card_changed-color_2") {
        deskCard.setAttribute(
          "style",
          'background-image: url("' + card.url + '");'
        );
        deskCard.className = "card_flipped card_is-flipped card_changed-color";
      }
    });
  });
}
