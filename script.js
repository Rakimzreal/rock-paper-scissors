function playGame(playerMove) {
    const computerMove = getComputerChoice();

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
        

    console.log(result);

    alert(`You picked ${playerMove}, Computer picked ${computerMove}. ${result}`);
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