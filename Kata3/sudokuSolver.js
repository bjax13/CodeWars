// https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript

function sudoku(puzzle) {
    var solvedPuzzle = puzzle;

    function equals45(n) {
        return n == 45;
    }

    function validSolution(board) {
        var sumh = [0,0,0,0,0,0,0,0,0];
        var sumv = [0,0,0,0,0,0,0,0,0];
        var osums = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                sumh[i] += board[i][j];
                sumv[j] += board[i][j];
                osums[Math.floor(i / 3)][Math.floor(j / 3)] += board[i][j];
            }
        }
        for (var i = 0; i < 3; i++)
            if (!osums[i].every(equals45))
                return false;
    return (sumh.every(equals45) && sumv.every(equals45));
    }

    function fillGaps(board) {
        var solvedBoard = board.slice(0);
        var possibleArr = [[],[],[],[],[],[],[],[],[]];

        // fill possibleArr
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board.length; j++) {

                if (board[i][j] > 0) {
                    //---------   1     2     3     4     5     6     7     8     9
                    var poss = [false,false,false,false,false,false,false,false,false]
                    poss[board[i][j] - 1] = true;
                    possibleArr[i][j] = poss;
                } else {
                    //---------    1     2     3     4     5     6     7     8     9
                    var possZ = [true,true,true,true,true,true,true,true,true]
                    //check if you can eliminate possibilities
                    for (var k = 0; k < board.length; k++) {
                        // row
                        if (board[i][k] > 0) {
                            possZ[board[i][k] - 1] = false;
                        }
                        // column
                        if (board[k][j] > 0) {
                            possZ[board[k][j] - 1] = false;
                        }
                    }
                    // sqr
                    for (var l = 0; l < 3; l++) {
                        for (var m = 0; m < 3; m++) {
                            if (board[l + (Math.floor(i / 3) * 3)][m + (Math.floor(j / 3) * 3)] > 0) {
                                //Math.floor(i/3)][Math.floor(j/3)
                                possZ[board[l + (Math.floor(i / 3) * 3)][m + (Math.floor(j / 3) * 3)] - 1] = false;
                            }
                        }
                    }
                    possibleArr[i][j] = possZ;
                }
            }
        }
        function addArr(a, b) {
            return a + b;
        }

        for (var i = 0; i < possibleArr.length; i++) {
            for (var j = 0; j < possibleArr.length; j++) {
                // console.log(possibleArr[i][j]);
                // console.log(possibleArr[i][j].reduce(addArr,0));
                if (possibleArr[i][j].reduce(addArr, 0) === 1) {
                    for (var k = 0; k < possibleArr[i][j].length; k++) {
                        if (possibleArr[i][j][k]) {
                            solvedBoard[i][j] = k + 1;
                        }
                    }
                }
            }
        }
        return solvedBoard;
    }
    while (!validSolution(solvedPuzzle)) {
        solvedPuzzle = fillGaps(solvedPuzzle);
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
    [0,0,0, 0,8,0, 0,7,9]
];

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
