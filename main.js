let firstCard = 1;
let secondCard = 1;
let total = firstCard + secondCard;
let cards = [firstCard, secondCard]; // storage for cards

let message = ""
let messageEL = document.querySelector("#message-el");
let totalEl = document.querySelector("#total-el");
let cardsEl = document.querySelector("#cards-el");
let startGame = document.querySelector("#startGame");

let newCardbtn = document.querySelector("#newCardbtn");
    newCardbtn.style.display = "none";
let startGamebtn = document.querySelector("#startGamebtn");
    startGamebtn.style.display = "block";
let restartGamebtn = document.querySelector("#restartGamebtn");
    restartGamebtn.style.display = "none";

startGame = () => {
    renderGame();
    newCardbtn.style.display = "block";
}

renderGame = () => {
    //render out firstCard and secondCard
 
    totalEl.textContent = "Total: " + total;
    cardsEl.textContent = "Cards: "   + " " + cards;

    if(total <= 20){
        message = "Do you want to draw a new card?";
        restartGamebtn.style.display = "block";
    } 
    else if(total === 21){
        message = "You've got Blackjack!";
        newCardbtn.style.display = "none";
        startGamebtn.style.display = "none";
        restartGamebtn.style.display = "block";


    }
    else {
        message = "You're out of the game!";
        newCardbtn.style.display = "none";
        startGamebtn.style.display = "none";
        
    }
    messageEL.textContent = message;
}

newCard = () => {
    restartGamebtn.style.display = "block";

    let card = Math.floor(Math.random() * 12); // random num between 0 and 11


    total += card
    cards.push(card);
    renderGame();
}

resetGame = () => {
    message = "Want to play a round?";
    messageEL.textContent = message;


    cards = [firstCard, secondCard];
    total = firstCard + secondCard;
    totalEl.textContent = "Total: ";
    cardsEl.textContent = "Cards: ";

    startGamebtn.style.display = "block";
    newCardbtn.style.display = "none";
    restartGamebtn.style.display = "none";

}






