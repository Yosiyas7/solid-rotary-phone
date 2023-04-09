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
        // When box is clicked function gets id of the clicked element,
        const id = this.id;

        //  calculates the row and col values based on the id using the mathfloor
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
            $('#message').text(`${currentPlayer} Wins`);
            $('.box').off('click');
      }     

  }
  return false;
}

  const checkColumns = () => {
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            $('#message').text(`${currentPlayer} Wins`);
            $('.box').off('click');
        }
    return false;
    };
  }

  const checkDiagonals = () => {
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        $('#message').text(`${currentPlayer} Wins`);
        $('.box').off('click');
    } else if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        $('#message').text(`${currentPlayer} Wins`);
        $('.box').off('click');
    }
    return false;
  }
  
  const checkTie = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === '_') {
          return false;
        }
      }
    }
    $('#message').text('Tie');
    $('.box').off('click');
    return true;
}

  //call the functioin to add click event listener to boxes
  clickedBox();
    // Add click event listener to restart button
    $('#restartButton').click(() => {
        // Reload the page
        location.reload();
      });
});


function startConfetti() {
    // create a new instance of the confetti library
    const confettiSettings = {
      target: 'confetti-canvas',
      size: 1,
      max: 200,
      animate: true,
      props: ['circle', 'square', 'triangle', 'line'],
      colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]],
      clock: 25,
    };
    const confetti = new ConfettiGenerator(confettiSettings);
  
    // start the confetti animation
    confetti.render();
  }