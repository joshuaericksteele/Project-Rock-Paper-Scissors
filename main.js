const choices = ["rock", "paper", "scissors"];



function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computersSelection) {
    const playerChoice = prompt("Chose Rook, Paper, Scissors").textToLowercase;
    if (playerSelection === computersSelection) {
        return "Tied game!, play again!";
    } if (playerSelection === "rock" && computersSelection === "scissors") {
        return "You won! Rock smashes Scissors.";
    } if (playerSelection === "scissors" && computersSelection === "paper") {
        return "You won! Scissors cuts Paper.";
    } if (playerSelection === "paper" && computersSelection === "rock") {
        return "You won! Paper wraps Rock.";
    } if (playerSelection === "scissors" && computersSelection === "rock") {
        return "You lose! Rock smashes Scissors.";
    } if (playerSelection === "paper" && computersSelection === "scissors") {
        return "You lose! Scissors cuts Paper.";
    } if (playerSelection === "rock" && computersSelection === "paper") {
        return "You lose! Paper wraps Rock.";
    }
}

// const playerSelection = "rock";
let playerSelection = prompt("Chose rock paper or scissors");
const computersSelection = getComputerChoice();
console.log(computersSelection);

// console.log(playRound("rock", "scissors"));

function game() {
   
}