
let score = JSON.parse(localStorage.getItem("score")) ||
{
    wins: 0,
    losess: 0,
    ties: 0
};

document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losess}, Ties: ${score.ties}`;


function game(playerChoice){
    let random = Math.random();
    let compMove;
    let result;

    if (random < 1 / 3) {
        compMove = "rock";
    } else if (random < 2 / 3) {
        compMove = "paper";
    } else {
        compMove = "scissors";
    }

    if (playerChoice === compMove) {
        result = "Tie!";
        score.ties++;
    } else if (
        (playerChoice === "rock" && compMove === "scissors") ||
        (playerChoice === "paper" && compMove === "rock") ||
        (playerChoice === "scissors" && compMove === "paper")
    ) {
        result = "You win!";
        score.wins++;
    } else {
        result = "You lose!";
        score.losess++;
    }

    document.querySelector(".moves")
        .innerHTML = `(Your Move) ${playerChoice}, ${compMove} (Computer Move). ${result}`;

    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("moves", document.querySelector(".js-score").innerHTML);

    document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losess}, Ties: ${score.ties}`;
}

function resetScore(){
    score.wins = 0;
    score.losess = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losess}, Ties: ${score.ties}`;

    document.querySelector(".moves")
    .innerHTML = "";
}

