const choices = ["rock", "paper", "scissors"];

function game() {
    
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computersSelection) {

}

const playerSelection = "rock";
const computersSelection = getComputerChoice();
console.log(computersSelection);