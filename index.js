//Math.floor(Math.random() * (max - min + 1)) + min;
//Math.floor(Math.random() * (11 - 2 + 1)) + 2;
//Math.floor(Math.random() * (13 + 1));

const startButton = document.getElementById('start-btn')
const newCardButton = document.getElementById('new-card-btn')
const playerEl = document.getElementById('player-el')

// startButton.addEventListener('click', startGame)
// newCardButton.addEventListener('click', newCard)
let player = {
  name: "Dami",
  chips: 20
}

let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive;
let message = "";
let allCards = [firstCard, secondCard];

// console.log("First Card: " + firstCard);
// console.log("Second Card: " + secondCard);
// console.log("Sum: " + sum);
// console.log(message);
// console.log(`hasBlackJack: ${hasBlackJack}`);
// console.log(`isAlive: ${isAlive}`);

function getRandomCard(){
  let randomCard = Math.floor(Math.random() * 13) + 1;
  return randomCard;
}
function renderGame(){
  // game logic
  if (sum <= 20){
  message = "Do you want to draw a new card?";
  isAlive = true;
  
} else if (sum === 21){
  message = "You've got Blackjack!"
  player.chips += 10;
  hasBlackJack = true;
  isAlive = false 
} else {
  message = "You're out of the game!"
  isAlive = false
}
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: "
  
  for (let i = 0; i < allCards.length; i++){
    cardsEl.textContent +=  allCards[i] + " "
  }
  // cardsEl.textContent = "Cards: " + allCards[0] + " " + allCards[1];
  console.log(isAlive);
  console.log(allCards);
}

function newCard(){
  //messageEl.textContent = "Drawing a new card from deck...";
  let newCardGenerated = getRandomCard()

  if(isAlive && hasBlackJack === false){
    allCards.push(newCardGenerated);
    sum += newCardGenerated;
    renderGame()
  }
  
}

function startGame(){
  playerEl.textContent = player.name + ": $" + player.chips
  renderGame()
}

//for loop practice
// let cards = [7, 3, 9]
// for (let i = 0; i < cards.length; i+=1){
//   console.log(cards[i])
// }



