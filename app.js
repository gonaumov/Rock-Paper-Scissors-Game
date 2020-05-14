"use strict";

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDivP = document.querySelector(".result > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const choices = ['r', 'p', 's'];

let userScore = 0;
let computerScore = 0;

function main() {
    rockDiv.addEventListener('click', () => game("r"));
    paperDiv.addEventListener('click', () => game("p"));
    scissorsDiv.addEventListener('click', () => game("s"));
}

main();

function generateRandomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = generateRandomComputerChoice();
    const fight = userChoice + computerChoice;

    switch (fight) {
        case "rs":
        case "pr":
        case "sp":
            userWins(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            computerWins(userChoice);
            break;
        default:
            draw(userChoice);
            break;
    }
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function userWins(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "computer".fontsize(3).sup();
    const userChoiceDiv = document.getElementById(userChoice);

    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultDivP.innerHTML = `${convertToWord(userChoice)}${smallUserWord}beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

    userChoiceDiv.classList.add("green-glow");
    setTimeout(() => userChoiceDiv.classList.remove("green-glow"), 1000);
}

function computerWins(userChoice) {
    const userChoiceDiv = document.getElementById(userChoice);

    computerScore++;
    computerScoreSpan.innerHTML = computerScore;

    whenUserLoseInARow();

    userChoiceDiv.classList.add("red-glow");
    setTimeout(() => userChoiceDiv.classList.remove("red-glow"), 1000);
}

function whenUserLoseInARow() {
    if (computerScore === 1) {
        resultDivP.innerHTML = `Damn, you are so bad. You lost to a computer LMAO!`;
    } else if (computerScore === 2) {
        resultDivP.innerHTML = `OMG how bad are you!?`;
    } else if (computerScore === 3) {
        resultDivP.innerHTML = `HOLY SHIT YOU SUCK HAHAHAHAHAHAHAHA`;
    } else if (computerScore === 4) {
        resultDivP.innerHTML = `Keep losing??? SO FUCKING TERRIBLE!`;
    } else if (computerScore === 5) {
        resultDivP.innerHTML = `BEWARE, GODLIKE SHIT LEVEL OBTAINED!`;
    } else {
        resultDivP.innerHTML = `SHITTIEST PLAYER EVER FTW`;
    }
}

function draw(userChoice) {
    const userChoiceDiv = document.getElementById(userChoice);

    userScore = 0;
    userScoreSpan.innerHTML = userScore;
    computerScore = 0;
    computerScoreSpan.innerHTML = computerScore;

    resultDivP.innerHTML = `Draw? What a JOKE!`;

    userChoiceDiv.classList.add("gray-glow");
    setTimeout(() => userChoiceDiv.classList.remove("gray-glow"), 1000);
}
