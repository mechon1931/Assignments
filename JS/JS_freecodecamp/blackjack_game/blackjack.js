let player = {
    name: 'Per',
    chips: 200
};

let cards = [];
let sumCard = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    let firsCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firsCard, secondCard];
    sumCard = firsCard + secondCard;
    renderGame();
};

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };

    sumEl.textContent = "Sum: " + sumCard;
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
};

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sumCard += card;
        cards.push(card);
        renderGame();
    }
};

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
  
}