function validSolution(board){
  //TODO

  function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  function testRows(board) {
    for (var i = 0; i < board.length; i++) {
      let rowSum = board[i].reduce((acc, val) =>acc + val);
      if (rowSum !== 45) {
        return false
      }else if (uniq(board[i]).length !== 9) {
        return false
      }
      console.log(board[i]);
    }
    return true;
  }

  function testColumns() {

  } 

  function testBlocks() {

  }



  return testRows(board)
}

console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                           [6, 7, 2, 1, 9, 5, 3, 4, 8],
                           [1, 9, 8, 3, 4, 2, 5, 6, 7],
                           [8, 5, 9, 7, 6, 1, 4, 2, 3],
                           [4, 2, 6, 8, 5, 3, 7, 9, 1],
                           [7, 1, 3, 9, 2, 4, 8, 5, 6],
                           [9, 6, 1, 5, 3, 7, 2, 8, 4],
                           [2, 8, 7, 4, 1, 9, 6, 3, 5],
                           [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
