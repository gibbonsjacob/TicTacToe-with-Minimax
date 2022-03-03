let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let available = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let AI = 'O';
let human = 'X'
let currentPlayer = human;
let availSpots = 9;
let player;
let spot;

function checkWinner(){
  winner = null
  
  for (let i = 0; i <3; i++){
    // horizontal
    if (isGameOver(board[i][0],board[i][1],board[i][2])){
      winner = board[i][0];
    }  
    // vertical
    if (isGameOver(board[0][i],board[1][i],board[2][i])){
      winner = board[0][i];
    }
  }
    // diagonal 
    
  if (isGameOver(board[0][0],board[1][1],board[2][2])){
    winner = board[0][0];
  }    

  if (isGameOver(board[0][2],board[1][1],board[2][0])){
    winner = board[0][2];
  } 
  
  if (winner == null && availSpots == 0){
    result = 'tie';
  } else if (winner != null){
    result = winner;
  } else{
    result = null;

  }
  return result;
}  
  


function isGameOver(a, b, c){
  if (a == b && b == c && a != ''){
    return true
  } else{
    return false
  }  
}

function checkAvailable(i, j){
  if (available[i][j] == ''){
    return true
  } else {
    return false
  }
}

function makeBoard(){
  stroke(0);
  strokeWeight(2);
  line(width/3, 0, width/3, height);
  line(2 * width/3, 0, 2 * width/3, height);
  line(0, height / 3, width, height / 3);
  line(0, 2 * height / 3, width, 2 * height / 3);
}

function getLetter(player){
  if (player > 0){
    return 'X'
  } else {
    return 'O'
  }  
}

function getSpot(){
  spot = null
  while (availSpots > 0){
    i = floor(random(0, 3));
    j = floor(random(0, 3));
    if (checkAvailable(i,j)) {
      spot = [i,j] 
      return spot
    }
  }
}

function nextTurn(player){
  player *= -1;
  return player
}


function setup() {
  createCanvas(400, 400);
  textSize(64);
  textAlign(CENTER);
  // player = 1;
  bestMove();

 
}

function mousePressed(){
  
  if (currentPlayer == human){
    let spot = getSquare()
    let i = spot[0];
    let j = spot[1];
    if (board[i][j] == ''){
      board[i][j] = human;  
      currentPlayer = AI;
      // console.log(currentPlayer)
      bestMove();
    } 
  }
}



function draw() {
  background(220);
  let w = width/3;
  let h = height/3;
  frameRate(2);
  makeBoard();  
  // console.log(available.length)
  // console.log(player)
  if (availSpots > 0){
    letter = currentPlayer;
//     if (player > 0){
//      spot = getSquare();
//         // spot = getSpot();

//     } else {
//    spot = getSpot();
//       // spot = getSquare();
//     }
    // spot = getSpot();
    // i = spot[0];
    // j = spot[1];
    // available[i][j] = letter;
    // board[i][j] = letter;
    // availSpots -= 1
    
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let x = w * j;
        let y = h * i;
        text(board[i][j], x + w/2, y + h/2)
      }
    }
    result = checkWinner();
    // console.log(result)
    if (result != null && result != ""){
      console.log('Winner is ' + result)

      noLoop();
    } else{
    }
    player = nextTurn(player);
  } else{
    noLoop();
  }
  
}

