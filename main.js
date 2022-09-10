const computerText = document.querySelector("#computerText");
const playerText = document.querySelector("#playerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");
const winText = document.querySelector("#winText");
const lossText = document.querySelector("#lossText");
const drawText = document.querySelector("#drawText");
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
}));

function computerTurn() {

    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function checkWinner() {

    if (player == computer) {
        return "Draw!";
        
    }
    else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win !" : "You Lose!";
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win !" : "You Lose!";
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win !" : "You Lose!";
    }
}
