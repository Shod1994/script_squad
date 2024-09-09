/*Guareentees Content is Already Loaded Into Project with DOMContentLoaded
before any script is ran helps with functionality*/

document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    "./Images/BlueEyesWhiteDragon.png",
    "./Images/DarkMagicianCard.png",
    "./Images/RedEyesBlackDragonCard.png",
    "./Images/MonsterRebornCard.png",
    "./Images/PotOfGreedCard.png",
    "./Images/ExodiatheForbiddenOneCard.png",
    // Duplicates to create pairs
    "./Images/BlueEyesWhiteDragon.png",
    "./Images/DarkMagicianCard.png",
    "./Images/RedEyesBlackDragonCard.png",
    "./Images/MonsterRebornCard.png",
    "./Images/PotOfGreedCard.png",
    "./Images/ExodiatheForbiddenOneCard.png",
  ];

  //Arrow Function that Shuffles Cards In The Array Above On Each Refresh
  cards.sort(() => Math.random() - 0.5);
  let flippedCards = [];
  let matchedCards = [];

  //Loop to insert cards in grid
  for (let i = 1; i <= 12; i++) {
    let selectedCards = document.getElementById("image" + i);
    selectedCards.addEventListener("click", function () {
      cardFlip(selectedCards, i);
    });
  }

  function cardFlip(selectedCards, cardIndex) {
    // 1. Change the appearance of the card to show the image (flipping the card)
    selectedCards.src = cards[cardIndex - 1];

    // 2. Track which cards are currently flipped (store the card element and index)
    flippedCards.push({ element: selectedCards, index: cardIndex });

    // 3. If two cards are flipped, compare them to see if they match
    //    - If they match, keep them flipped
    //    - If they don't, flip them back after a short delay
    if (flippedCards.length === 2) {
      preventClick = true; //Prevent further clicks while checking

      if (
        cards[flippedCards[0].index - 1] === cards[flippedCards[1].index - 1]
      ) {
        flippedCards = [];
        preventClick = false;
      } else {
        // 4. Reset the flipped cards if necessary and proceed with the next click
        setTimeout(function () {
          flippedCards[0].element.src = "Images/Yugioh-Back.png";
          flippedCards[1].element.src = "Images/Yugioh-Back.png";
          flippedCards = []; //Resets Cards They Dont Match
          preventClick = false; // Allow Clicking again
        }, 1000); // 1-second delay before flipping backk
      }
    }
  }
});
