//declaring variables for players and board
const player1 = 'x';

const player2 = 'y';

//select current player
let currentPlayer = player1;

//give the boxes empty arrays
const board = [["_", "_", "_"], ["_", "_", "_"], ["_", "_", "_"]];

let playerText = $('#playerText');
let restartButton = $('restartButton');

const boxes = {
    $('box').click(function () {
        const boxClass = $(this).attr('id');
        const row = parseInt((boxClass[6])-1);
        const col = parseInt((boxClass[8])-1);
    })
}

//Add the game logic
//If player 1 selects 3 squares in a row, player 1 wins
//Check diagonally, up and across
//If player 2 selects 3 squares in a row, player 2 wins
//Check diagonally, up and across
//Else the game ended in a draw
//Update game display using jQuery

// Determine a way to swap turns with the other player

//Display the outcome of the game
//Display 'Player 1/2 won' or 'The game ended in a tie'

//Find a way to make the restart button reset the game