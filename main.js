let playersScore = 0
let computersScore = 0
  
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computersSelection) {
    
    if (playerSelection === computersSelection) {
        return "Tied game!, play again!";
    } else if (playerSelection === "rock" && computersSelection === "scissors") {
        playersScore++
        return "You won! Rock smashes Scissors.";
    } else if (playerSelection === "scissors" && computersSelection === "paper") {
        playersScore++
        return "You won! Scissors cuts Paper.";
    } else if (playerSelection === "paper" && computersSelection === "rock") {
        playersScore++
        return "You won! Paper wraps Rock.";
    } else if (playerSelection === "scissors" && computersSelection === "rock") {
        computersScore++
        return "You lose! Rock smashes Scissors.";
    } else if (playerSelection === "paper" && computersSelection === "scissors") {
        computersScore++
        return "You lose! Scissors cuts Paper.";
    } else if (playerSelection === "rock" && computersSelection === "paper") {
        computersScore++
        return "You lose! Paper wraps Rock.";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Chose rock paper or scissors", "Rock, Paper or Scissors").toLowerCase();
    const computersSelection = getComputerChoice();
    console.log(playRound(playerSelection, computersSelection));
    console.log(playerSelection, computersSelection);
    }
    if (playersScore > computersScore) {
        return "You beat the computer! You are a Star";
    } else if (playersScore < computersScore) {
        return "The computer won! Try again";
    } else if (playersScore === computersScore) {
        return "Game is tied";
    }
}

    console.log(game());

// console.log(game());