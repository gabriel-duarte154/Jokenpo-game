function game() {

let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerChoice;
let possibleChoice = ["rock", "paper", "scissor"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return possibleChoice[choice];
};

function getplayerChoice() {
    let choice = window.prompt(`Choose between Rock, Paper or Scissor:`);
    return choice;
};


function showWinner(winner, computerSelection, playerSelection) {
    if (winner === "computer") {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
        window.alert(`You lose, ${computerSelection} beats ${playerSelection}.`);
        computerScore += 1;

    } else if (winner === "player") {
        console.log(`You win!, ${playerSelection} beats ${computerSelection}.`);
        window.alert(`You win!, ${playerSelection} beats ${computerSelection}.`);
        playerScore += 1;
    }

};

function playRound(computerSelection, playerSelection) {
    let winner = "";
    if (computerSelection === playerSelection) {
        console.log(`Draw, ${computerSelection} against ${playerSelection}.`);
        window.alert(`Draw, ${computerSelection} against ${playerSelection}.`);
        return;
    } else if (
        (computerSelection === "rock" && playerSelection === "scissor") || 
        (computerSelection === "paper" && playerSelection === "rock") || 
        (computerSelection === "scissor" && playerSelection === "paper")) {
        winner = "computer";
    } else if (
        (computerSelection === "scissor" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "scissor")) {
        winner = "player";
    }   
    showWinner(winner, computerSelection, playerSelection);
    return;
 
};


for(let i = 0; i < 5; i++) {
    
    computerChoice = getComputerChoice();
    playerChoice = getplayerChoice().toLowerCase();
    playRound(computerChoice, playerChoice);
    
};

console.log(`Player Score:\n${playerScore}\nComputer Score:\n${computerScore}`);

};

game();