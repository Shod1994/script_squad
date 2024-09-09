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
    "./Images/PotOfGreedCard.png",
    "./Images/MonsterRebornCard.png",
    "./Images/ExodiatheForbiddenOneCard.png",
  ];

  //Arrow Function that Shuffles Cards In The Array Above On Each Refresh
  cards.sort(() => Math.random() - 0.5);

  //Loop to insert cards in grid
  for(let i = 1; i <= 12; i++){
  let selectedCards = document.getElementById('image' + i);
  selectedCards.addEventListener('click', function() {
  cardFlip(selectedCards, i);
  })
  }

  function cardFlip(selectedCards, index) {
    
  }
});


