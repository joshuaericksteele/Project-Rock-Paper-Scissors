const computerText = document.querySelector("#computerText");
const playerText = document.querySelector("#playerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");
const winText = document.querySelector("#winText");
const lossText = document.querySelector("#lossText");
const drawText = document.querySelector("#drawText");
const gameText = document.querySelector("#gameText");

let player;
let computer;
let result;
let win = 0;
let loss = 0;
let draw = 0;




choiceBtns.forEach(button => button.addEventListener("click", () => {
    
   

 
    player = button.textContent;
    computer = computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    winText.textContent = `Wins: ${win}`;
    lossText.textContent = `Losses: ${loss}`;
    drawText.textContent = `Draws: ${draw}`;
    gameText.textContent = game();


}));

function computerTurn() {

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function checkWinner() {
    if (player === computer) {
        draw++
        return "Tied Game!, Play again!"
    }
    else if (player === "ROCK" && computer === "SCISSORS") {
        win++
        return "You WIN! Rock smashes Scissors!"
    }
    else if (player === "SCISSORS" && computer === "PAPER") {
        win++
        return "You WIN! Scissors cuts up Paper!"
    }
    else if (player === "PAPER" && computer === "ROCK") {
        win++
        return "You WIN! Paper wraps Rock!"
    }
    else if (player === "SCISSORS" && computer === "ROCK") {
        loss++
        return "You LOSE! Rock smashes Scissors!"
    }
    else if (player === "PAPER" && computer === "SCISSORS") {
        loss++
        return "You LOSE! Scissors cuts up Paper"
    }
    else if (player === "ROCK" && computer === "PAPER") {
        loss++
        return "You LOSE! Paper wraps Rock!"
    }
}

function game() {

    if (win === 5) {
        return "You beat the Computer! Well Done!"
    }
    else if (loss === 5) {
        return "The Computer Won! Try again"
    }
    else if (draw === 5) {
        return "Game tied! Play again!"
    }

}



