// fetch the cards to the gameBoard
document.addEventListener("DOMContentLoaded", function () {
  let cards = [
    "images/monster1.png",
    "images/monster2.png",
    "images/monster3.png",
    "images/monster4.png",
    "images/monster5.png",
    "images/monster6.png",
    //Duplicate Images
    "images/monster1.png",
    "images/monster2.png",
    "images/monster3.png",
    "images/monster4.png",
    "images/monster5.png",
    "images/monster6.png",
  ];

  // Shuffle cards on each refresh/reset
  cards.sort(() => Math.random() - 0.5);

  // flip cards
  for (let i = 1; i <= 12; i++) {
    let selectCards = document.getElementById("image" + i);
    selectCards.addEventListener("click", function () {
      selectCards.src = cards[i - 1]; //Makes sure 0 is included so the proper images can be fetched
    });
  }

  // Do the cards match

  // timer for the game

  //reset
});
