//Math.floor(Math.random() * (max - min + 1)) + min;


let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// console.log("First Card: " + firstCard);
// console.log("Second Card: " + secondCard);
// console.log("Sum: " + sum);

if (sum <= 20){
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21){
  message = "Wohoo! You've got Blackjack! 🥳"
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭"
  isAlive = false
}

console.log(message);
console.log(`hasBlackJack: ${hasBlackJack}`);
console.log(`isAlive: ${isAlive}`);