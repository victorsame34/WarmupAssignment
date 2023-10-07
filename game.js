var pointsplayer = 0;
var pointscomputer = 0;
const results = [];
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "The result is a tie!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            pointsplayer++;
            return "You Won! Rock beats Scissors";
        } else {
            pointscomputer++;
            return "You Lose! Paper beats Rock";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            pointsplayer++;
            return "You Won! Paper beats Rock";
        } else {
            if (computerSelection === "scissors") {
                pointscomputer++;
                return "You Lose! Scissors beats Paper";
            }
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            pointscomputer++;
            return "You Lose! Scissors beats Rock";
        } else {
            if (computerSelection === "paper") {
                pointsplayer++;
                return "You Won! Scissors beats Paper";
            }
        }
    }
}


function computerPlay() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        default:
            return "scissors"
    }
}

function game(playerSelection) {
    if (pointsplayer == 5) {
        return document.getElementById("winner").innerHTML = "The winner is you! Congratulations!!";
    } else if (pointscomputer == 5) {
        return document.getElementById("winner").innerHTML = "You lost! Better chance the next time";
    } else {
        const computerSelection = computerPlay();
        results.push("<li>"+playRound(playerSelection, computerSelection)+"</li>");
        document.getElementById("result").innerHTML = results.toString();
    }
}