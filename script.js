const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};


let roundsPlayed = 0; 
let gameOver = false; 


console.log(roundsPlayed);
updateScoreElement();

function updateResult(result) {
    document.querySelector('.js-result').innerHTML = `${result}`;
}

function updateGameMoves(playerMove, computerMove) {
    document.querySelector('.js-gameMoves').innerHTML = `You picked ${playerMove}, Computer picked ${computerMove}`;
}

function updateScoreElement() {document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playGame(playerMove) {
    if(gameOver) {
        alert("Game Over! Click 'Reset Game' to play again");
        return; 
    }

    const computerMove = getComputerChoice();

    updateGameMoves(playerMove, computerMove);

    let result;

    if (playerMove === 'Scissors') {

        if (computerMove === 'Rock') {
            result = 'You Lose!';
        } else if (computerMove === 'Paper') {
            result = 'You Win!';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }

    } else if (playerMove === 'Paper') {

         if (computerMove === 'Rock') {
            result = 'You Win!';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose!';
        }

    } else if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose!';
        } else if (computerMove === 'Scissors') {
            result = 'You Win!';
        }
    }

    updateResult(result);

    if (result === 'You Win!') {
        score.wins += 1;
    } else if (result === 'You Lose!') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }
        
    console.log(JSON.stringify(score));

    localStorage.setItem('score', JSON.stringify(score));


    
    console.log(result);

    
    updateScoreElement();

    roundsPlayed++;

    console.log(`Rounds played: ${roundsPlayed}, Wins: ${score.wins}, Losses: ${score.losses} Ties: ${score.ties}`);


    if (roundsPlayed === 5) {
        gameOver = true;

        if(score.wins > score.losses) {
        alert('Lucky you! You Won!');
    } else if (score.losses > score.wins) {
        alert('You lost, try again?');
    } else {
        alert("It's a Tie, No one won!")
    }

    }
    
    
}


function getComputerChoice () {
    const randomNumber = Math.random();

    let computerMove ;

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
         computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
         computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber <1) {
         computerMove = 'Scissors';
    }

    console.log(computerMove);

    return computerMove;
}