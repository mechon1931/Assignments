let firstCard = 21;
let secondCard = 4;
let sumCard = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");

function startGame() {
    if (sumCard <= 20) {
        message = "Do you want to draw a new card? 🙂";
        
    } else if (sumCard === 21) {
        message = "Woohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message
}

