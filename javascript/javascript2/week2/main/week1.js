//This file is NOT part of week2 project
//All updates are in week2.js

const div = document.createElement("div");
div.classList = "card";
document.body.appendChild(div);
div.setAttribute("id", cards[1].id);

div.addEventListener("click", function () {
  if (div.className === "card") {
    div.setAttribute("style", 'background-image: url("' + cards[1].url + '");');
    div.classList = "card_flipped card_is-flipped card_changed-color";
  } else if (
    div.className === "card_flipped card_is-flipped card_changed-color"
  ) {
    div.removeAttribute("style");
    div.classList = "card card_changed-color_2";
  } else if (div.className === "card card_changed-color_2") {
    div.setAttribute("style", 'background-image: url("' + cards[1].url + '");');
    div.classList = "card_flipped card_is-flipped card_changed-color";
  }
});

//this is for future (this is for automatically "unflipping" the card)
/*setTimeout(function(){
        div.className = 'card';
    }, 2000);*/

/*
        const card_1 = document.createElement('div');
        card_1.setAttribute('class', 'card');
        card_1.setAttribute('id', sortedDesk[0].id);
        deskMenu.appendChild(card_1);
        card_1.addEventListener("click", ()=>{
            if (card_1.className === "card"){
                card_1.setAttribute('style', 'background-image: url("' + sortedDesk[0].url + '"');
                card_1.classList = "card_flipped card_is-flipped card_changed-color";
            }else if (
                card_1.className === "card_flipped card_is-flipped card_changed-color"
              ) {
                card_1.removeAttribute('style');
                card_1.classList = "card card_changed-color_2";
              } else if (div.className === "card card_changed-color_2") {
                card_1.setAttribute('style', 'background-image: url("' + sortedDesk[0].url + '");');
                card_1.classList = "card_flipped card_is-flipped card_changed-color";
              }
        });

        const card_2 = document.createElement('div');
        card_2.setAttribute('class', 'card');
        card_2.setAttribute('id', sortedDesk[1].id);
        deskMenu.appendChild(card_2);
        card_2.addEventListener("click", ()=>{
            if (card_2.className === "card"){
                card_2.setAttribute('style', 'background-image: url("' + sortedDesk[1].url + '"');
                card_2.classList = "card_flipped card_is-flipped card_changed-color";
            }else if (
                card_2.className === "card_flipped card_is-flipped card_changed-color"
              ) {
                card_2.removeAttribute('style');
                card_2.classList = "card card_changed-color_2";
              } else if (div.className === "card card_changed-color_2") {
                card_2.setAttribute('style', 'background-image: url("' + sortedDesk[1].url + '");');
                card_2.classList = "card_flipped card_is-flipped card_changed-color";
              }
        });

        const card_3 = document.createElement('div');
        card_3.setAttribute('class', 'card');
        card_3.setAttribute('id', sortedDesk[2].id);
        deskMenu.appendChild(card_3);
        card_3.addEventListener("click", ()=>{
            if (card_3.className === "card"){
                card_3.setAttribute('style', 'background-image: url("' + sortedDesk[2].url + '"');
                card_3.classList = "card_flipped card_is-flipped card_changed-color";
            }else if (
                card_3.className === "card_flipped card_is-flipped card_changed-color"
              ) {
                card_3.removeAttribute('style');
                card_3.classList = "card card_changed-color_2";
              } else if (div.className === "card card_changed-color_2") {
                card_3.setAttribute('style', 'background-image: url("' + sortedDesk[2].url + '");');
                card_3.classList = "card_flipped card_is-flipped card_changed-color";
              }
        });

        const card_4 = document.createElement('div');
        card_4.setAttribute('class', 'card');
        card_4.setAttribute('id', sortedDesk[3].id);
        deskMenu.appendChild(card_4);
        card_4.addEventListener("click", ()=>{
            if (card_4.className === "card"){
                card_4.setAttribute('style', 'background-image: url("' + sortedDesk[3].url + '"');
                card_4.classList = "card_flipped card_is-flipped card_changed-color";
            }else if (
                card_4.className === "card_flipped card_is-flipped card_changed-color"
              ) {
                card_4.removeAttribute('style');
                card_4.classList = "card card_changed-color_2";
              } else if (div.className === "card card_changed-color_2") {
                card_4.setAttribute('style', 'background-image: url("' + sortedDesk[3].url + '");');
                card_4.classList = "card_flipped card_is-flipped card_changed-color";
              }
        });*/

/*
      const cardIndex = Math.floor(Math.random() * cards.length);
      desk.push(cards[cardIndex]);
      desk.push(cards[cardIndex]);
      */
