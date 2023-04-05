//declaring variables for players and board
const player1 = 'X';

let restartButton = $('#restartButton');

const player2 = 'Y';

//select current player
let currentPlayer = player1;

//give the boxes empty arrays
// this is to call the first nested array board[0][0]
const board = [["_", "_", "_"], 
        ["_", "_", "_"],
        ["_", "_", "_"]];

const box = {
    "0": "_",
    "1": "_",
    "2": "_",
    "3": "_",
    "4": "_",
    "5": "_",
    "6": "_",
    "7": "_",
    "8": "_",
};


//add event listener for all boxes and listen for a click
$('.box').click() => {
    const id = e.target.id;
    const row = Math.floor(id/3);
    const col = id % 3;

    //check is the box is not already filled
    if (board[row][col] === '_') {

    // fill the box with the current player1 symbol
        board[row][col] = currentPLayer;

    }
}

function boxClicked(e) {
    const id = e.target.id;
  
    // check if the space is not already filled
    if (!spaces[id]) {
      // fill the space with the current player's symbol
      spaces[id] = currentPlayer;
      e.target.innerText = currentPlayer;
  
      // switch to the other player's turn
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
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