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
        return "You won! Rock smashes Scissors.";
    } else if (playerSelection === "scissors" && computersSelection === "paper") {
        return "You won! Scissors cuts Paper.";
    } else if (playerSelection === "paper" && computersSelection === "rock") {
        return "You won! Paper wraps Rock.";
    } else if (playerSelection === "scissors" && computersSelection === "rock") {
        return "You lose! Rock smashes Scissors.";
    } else if (playerSelection === "paper" && computersSelection === "scissors") {
        return "You lose! Scissors cuts Paper.";
    } else if (playerSelection === "rock" && computersSelection === "paper") {
        return "You lose! Paper wraps Rock.";
    }
}
    const playerSelection = prompt("Chose rock paper or scissors").toLowerCase()
    const computersSelection = getComputerChoice();

console.log(playRound(playerSelection, computersSelection));
console.log(playerSelection, computersSelection);

// function game() {
//     for (let i = 0; i < 5; i++)
    
//     console.log(playRound(playerSelection, computersSelection));
// }
// // if (playersScore > computersScore) {
// //     return "You beat the computer! You are a Star"
// // }
// // console.log(game);

// console.log(game());