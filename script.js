let cards = [];

// Fetch cards from JSON
fetch('card.json')
  .then(response => response.json())
  .then(data => {
    cards = data;
    // Shuffle cards and set up the game once data is loaded
    setupGame();
    console.log(cards);
  })
  .catch(error => console.error('Error fetching JSON:', error));

function setupGame() {
  // Shuffle cards
  shuffle(cards);

  let clicked = [];
  let firstSelectedIndex = null;
  let secondSelectedIndex = null;

  // Flip cards
  for (let i = 1; i <= cards.length; i++) {
    let selectCards = document.getElementById("image" + i);
    selectCards.addEventListener("click", function () {
      let cardIndex = i - 1; // Adjust for zero-based index
      selectCards.src = cards[cardIndex].name; // Use the 'name' property from JSON
      clicked.push(cardIndex);
      
      if (clicked.length === 2) {
        if (cards[clicked[0]].id === cards[clicked[1]].id) {
          // Cards match
          setTimeout(() => {
            alert('Match');
            let firstSelectedCard = document.getElementById("image" + (clicked[0] + 1));
            let secondSelectedCard = document.getElementById("image" + (clicked[1] + 1));
            firstSelectedCard.style.visibility = 'hidden';
            secondSelectedCard.style.visibility = 'hidden';
            clicked = [];
          }, 1000);
        } else {
          // Cards do not match
          setTimeout(() => {
            let firstSelectedCard = document.getElementById("image" + (clicked[0] + 1));
            let secondSelectedCard = document.getElementById("image" + (clicked[1] + 1));
            firstSelectedCard.src = "images/Card-Back.png";
            secondSelectedCard.src = "images/Card-Back.png";
            clicked = [];
          }, 1000);
        }
      }
    });
  }
}

// Shuffle function
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
