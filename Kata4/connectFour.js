function connectFour(board) {
  // 'Y'our code goes here

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
  function checkColumns(board) {
    var columnAsRow = [['-','-','-','-','-','-','-'],
                       ['-','-','-','-','-','-','-'],
                       ['-','-','-','-','-','-','-'],
                       ['-','-','-','-','-','-','-'],
                       ['-','-','-','-','-','-','-'],
                       ['-','-','-','-','-','-','-'],
                       ['-','-','-','-','-','-','-']];
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        columnAsRow[j][i] = (board[i][j])
      }
    }
    return checkRows(columnAsRow);
  }
  function checkDiag(board) {

    function test(X) {
      var win=4, len=board.length, r=0, c=0, dr=0, dl=0;
      for(var i=0;i<len;i++){
          for(var j=0;j<len;j++){
              // (board[j][i]===X) ? c++ : c=0;
              // (board[i][j]===X) ? r++ : r=0;
              if(board[i][j]===X && i<len-win+1){ dr=0; dl=0;
                  for(var z=0;z<win;z++){
                      (board[i+z][j+z]===X) ? dr++ : dr=0;
                      (board[i+z][j-z]===X) ? dl++ : dl=0;
                  }
              }
              if(c===win || r===win || dr===win || dl===win){return true;}
          } r=0;
      }
    }

    if (test('Y')) {
      return 'Y'
    }else if (test('R')) {
      return 'R'
    }else {
      return null;
    }


  }

  function isFull(board) {
    for (var i = 0; i < board[0].length; i++) {
      if (board[0][i] === '-') {
        return false;
      }
    }
    return true;
  }

  var rows = checkRows(board);
  var column = checkColumns(board);
  var diag = checkDiag(board);
  var full = isFull(board);

  if (rows === "Y" || rows === "R") {
    console.log('rows');
    return rows;
  }else if (column === "Y" || column === "R") {
    console.log('colums');
    return column
  }else if (diag === "Y" || diag === "R") {
    console.log('diag');
    return diag
  }else if (full) {
    return 'draw'
  }else {
    return 'in progress'
  }
}

console.log(connectFour([
  ['-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-'],
  ['-','-','R','-','Y','-','R'],
  ['-','Y','Y','R','Y','-','R'],
  ['-','R','Y','R','Y','-','R']]));
