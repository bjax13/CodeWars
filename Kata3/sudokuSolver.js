// https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

function sudoku(puzzle) {
  var solvedPuzzle = puzzle;


  function equals45(n){
    return n == 45;
  }

  function validSolution(board){
    var sumh  = [0,0,0,0,0,0,0,0,0];
    var sumv  = [0,0,0,0,0,0,0,0,0];
    var osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }

  for (var i = 0; i < solvedPuzzle.length; i++) {
    for (var j = 0; j < solvedPuzzle.length; j++) {
      solvedPuzzle[i][j]




    }
  }


  return solvedPuzzle;
}


var puzzle = [
            [5,3,0, 0,7,0, 0,0,0],
            [6,0,0, 1,9,5, 0,0,0],
            [0,9,8, 0,0,0, 0,6,0],

            [8,0,0, 0,6,0, 0,0,3],
            [4,0,0, 8,0,3, 0,0,1],
            [7,0,0, 0,2,0, 0,0,6],

            [0,6,0, 0,0,0, 2,8,0],
            [0,0,0, 4,1,9, 0,0,5],
            [0,0,0, 0,8,0, 0,7,9]];

console.log(sudoku(puzzle));

// Should return
// [[5,3,4, 6,7,8, 9,1,2],
//  [6,7,2, 1,9,5, 3,4,8],
//  [1,9,8, 3,4,2, 5,6,7],

//  [8,5,9, 7,6,1, 4,2,3],
//  [4,2,6, 8,5,3, 7,9,1],
//  [7,1,3, 9,2,4, 8,5,6],

//  [9,6,1, 5,3,7, 2,8,4],
//  [2,8,7, 4,1,9, 6,3,5],
//  [3,4,5, 2,8,6, 1,7,9]]
