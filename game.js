$(function(){
    const player1 = 'X';
    const player2 = 'O';
  //select current player
  let currentPlayer = player1;

  //give the boxes empty arrays
  // this is to call the first nested array board[0][0]
  const board = [
        // ["_", "_", "_", "_", "_", "_", "_", "_", "_"]    
    ["_", "_", "_"], 
    ["_", "_", "_"],
    ["_", "_", "_"]
    ];


  // const box = {
  //     "0": "_",
  //     "1": "_",
  //     "2": "_",
  //     "3": "_",
  //     "4": "_",
  //     "5": "_",
  //     "6": "_",
  //     "7": "_",
  //     "8": "_",
  // };
  //add event listener for all boxes and listen for a click. Execute the
  const clickedBox = function() {
    $('.box').on('click', function() {
        const id = this.id;
        const row = Math.floor(id/3);
        const col = id % 3;
    
        //check is the box is not already filled
        if (board[row][col] === '_') {
    
        // fill the box with the current player's symbol
            board[row][col ] = currentPlayer;
            $(this).text(currentPlayer);
            checkRows();
            checkColumns();
            checkDiagonals();
            //switch to the other player's turn
            if (currentPlayer === player1) {
                currentPlayer = player2;
              } else {
                currentPlayer = player1;
              }
        }
    })
  }

  const checkRows = function () {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
          console.log(`${currentPlayer} Wins`)
          $('.box').off('click')
      }     
    return false;
    };
  }

  const checkColumns = () => {
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            console.log(`${currentPlayer} Wins`)
            $('.box').off('click')
        }
    return false;
    };
  }

  const checkDiagonals = () => {
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        console.log(`${currentPlayer} Wins`)
    } else if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        console.log(`${currentPlayer} Wins`)
        $('.box').off('click')
    }
    return false;
  }
  

  //call the functioin to add click event listener to boxes
  clickedBox();
    // Add click event listener to restart button
    $('#restartButton').click(() => {
        // Reload the page
        location.reload();
      });
});