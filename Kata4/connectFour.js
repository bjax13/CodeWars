function connectFour(board) {
  // Your code goes here

  function checkRows(board) {
    redCount = 0;
    yellowCount = 0;
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j]==='-') {
          redCount = 0;
          yellowCount = 0;
        }else if (board[i][j]==='R') {
          redCount++;
          yellowCount = 0;
          if (redCount===4) {
            return 'R';
          }
        }else if (board[i][j]==='Y') {
          yellowCount++;
          redCount = 0;
          if (yellowCount===4) {
            return 'Y';
          }
        }
        if (j > 3 && redCount === 0 && yellowCount === 0) {
          j = 8;
        }
      }
      redCount = 0;
      yellowCount = 0;
    }
  }
  return checkRows(board);
}

console.log(connectFour([['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','Y','R','R','R'],
 ['-','-','-','Y','Y','R','Y'],
 ['-','-','-','Y','R','Y','Y'],
 ['-','-','Y','Y','R','R','R']]));
