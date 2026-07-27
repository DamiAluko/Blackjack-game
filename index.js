//Math.floor(Math.random() * (max - min + 1)) + min;

const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', StartGame)

const messageEl = document.getElementById('message-el')

let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// console.log("First Card: " + firstCard);
// console.log("Second Card: " + secondCard);
// console.log("Sum: " + sum);
// console.log(message);
// console.log(`hasBlackJack: ${hasBlackJack}`);
// console.log(`isAlive: ${isAlive}`);

function StartGame(){
  // alert("Starting the game...");

  if (sum <= 20){
  messageEl.textContent = "Do you want to draw a new card? 🙂";
} else if (sum === 21){
  messageEl.textContent = "Wohoo! You've got Blackjack! 🥳"
  hasBlackJack = true;
} else {
  messageEl.textContent = "You're out of the game! 😭"
  isAlive = false
}}