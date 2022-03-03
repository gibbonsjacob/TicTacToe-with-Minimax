function bestMove(){
  
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        board[i][j] = AI; //set this spot to AI so minimax can run
        let score = minimax(board, 0, false);
        board[i][j] = '' // set it back to nothing so the next move can be tested
        if (score > bestScore){
          bestScore = score;
          move = {i , j}
        }
      }
      
    }
  }
  console.log(move.i, move.j);
  board[move.i][move.j] = AI;
  currentPlayer = human;  
}

let scores = {
  'X': 1,
  'O': -1,
  'tie':0
};

function minimax(board, depth, isMax){
  
  let result = checkWinner();
  if (result != null){
    return scores[result];
  }
  
  if (isMax){
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = AI; //test the score of the spot
          let score = minimax(board, depth + 1, false);
          board[i][j] = ''; // set it back to nothing
          bestScore = max(score, bestScore); // if score is still -Infinity, don't go here
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = human; //test the score of the spot
          let score = minimax(board, depth + 1, true);
          board[i][j] = ''; // set it back to nothing
          bestScore = min(score, bestScore); // if score is still -Infinity, don't go here
        }
      }
    }
    return bestScore;  
  }
}