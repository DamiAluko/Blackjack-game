//Math.floor(Math.random() * (max - min + 1)) + min;

const startButton = document.getElementById('start-btn')
const newCardButton = document.getElementById('new-card-btn')

// startButton.addEventListener('click', startGame)
// newCardButton.addEventListener('click', newCard)

let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById('cards-el')

let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let newCardGenerated;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

console.log("First Card: " + firstCard);
console.log("Second Card: " + secondCard);
console.log("Sum: " + sum);
console.log(message);
console.log(`hasBlackJack: ${hasBlackJack}`);
console.log(`isAlive: ${isAlive}`);

function startGame(){
  // alert("Starting the game...");

  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

  if (sum <= 20){
  messageEl.textContent = "Do you want to draw a new card?";
} else if (sum === 21){
  messageEl.textContent = "You've got Blackjack!"
  hasBlackJack = true;
} else {
  messageEl.textContent = "You're out of the game!"
  isAlive = false
}}

function newCard(){
  //messageEl.textContent = "Drawing a new card from deck...";
  newCardGenerated = Math.floor(Math.random() * (11 - 2 + 1)) + 2;

  sum += newCardGenerated;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent += " " + newCardGenerated;
  startGame()
}