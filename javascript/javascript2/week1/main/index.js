//Netlify deployment: https://vocal-cannoli-85e9ae.netlify.app

const div = document.createElement("div");
div.classList = "card";
document.body.appendChild(div);

div.addEventListener("click", function () {
  if (div.className === "card") {
    div.classList = "card_flipped card_is-flipped card_changed-color";
  } else if (
    div.className === "card_flipped card_is-flipped card_changed-color"
  ) {
    div.classList = "card card_changed-color_2";
  } else if (div.className === "card card_changed-color_2") {
    div.classList = "card_flipped card_is-flipped card_changed-color";
  }
});

//this is for future (this is for automatically "unflipping" the card)
/*setTimeout(function(){
        div.className = 'card';
    }, 2000);*/
