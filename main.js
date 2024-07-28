let firstCard = 1;
let secondCard = 1;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]; // storage for cards

let hasBlackJack = false;
let isAlive = true;

let message = ""
let messageEL = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let startGame = document.querySelector("#startGame");

startGame = () => {
    renderGame();
}

renderGame = () => {
    //render out firstCard and secondCard
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "   + " " + cards;

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    } 
    else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEL.textContent = message;
}

newCard = () => {
    console.log("Drawing a new card from the deck!");
    let card = Math.floor(Math.random() * 12); // random num between 0 and 11


    sum += card
    cards.push(card);
    renderGame();
}

resetGame = () => {
    message = "Want to play a round?";
    messageEL.textContent = message;


    cards = [];
    sumEl.textContent = "Sum: ";
    cardsEl.textContent = "Cards: "   + " " + cards;
}






