//Math.floor(Math.random() * (max - min + 1)) + min;

const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', StartGame)

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
  alert("Starting the game...");

  if (sum <= 20){
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21){
  message = "Wohoo! You've got Blackjack! 🥳"
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭"
  isAlive = false
}}