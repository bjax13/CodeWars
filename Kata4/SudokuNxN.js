var Sudoku = function(data) {
    console.log("***data***");
    console.log(data);
    var maxNum = data[0].length;
    var valid = false;
    var validSum = sumOfNums(maxNum);
    var sqrSize = Math.sqrt(maxNum);

    //findes solution sum for N - Example for a normal Sudoku solution sum is 45 = 1+2+...+8+9
    function sumOfNums(n) {
        return ((n * (n + 1)) / 2)
    }

    //only numbers that have a whole sqrt are valid for Sudoku  1,4,9,16,25 etc.
    function isSquare(n) {
        return (Math.sqrt(n) % 1 === 0)
            ? true
            : false
    }

    //test dementions of data.  If not square return false
    if (!(isSquare(maxNum))) {
        valid = false;
        return {
            isValid: function() {
                return valid;
            }
        };
    }

    // valid sum for Sudoku
    function equalsValidSum(n) {
        return n == validSum;
    }

    function validSolution(board) {
        var sumh = [];
        var sumv = [];
        var osums = [];

        //add sub arrays for osums
        for (var j = 0; j < sqrSize; j++) {
            osums.push([]);
        }
        //fill test array to proper size for N
        for (var i = 0; i < maxNum; i++) {
            sumh.push(0);
            sumv.push(0);
            osums[Math.floor(i / sqrSize)].push(0)
        }

        for (var i = 0; i < maxNum; i++) {
            for (var j = 0; j < maxNum; j++) {
                //validate values are integers. 
                if (Number.isInteger(board[i][j])) {
                  sumh[i] += board[i][j];
                  sumv[j] += board[i][j];
                  osums[Math.floor(i / sqrSize)][Math.floor(j / sqrSize)] += board[i][j];
                }else {
                  return false;
                }

            }
        }
        for (var i = 0; i < sqrSize; i++)
            if (!osums[i].every(equalsValidSum))
                return false;
    return (sumh.every(equalsValidSum) && sumv.every(equalsValidSum));

    }

    valid = validSolution(data);

    //   Public methods

    // -------------------------
    return {
        isValid: function() {

            return valid;
        }
    };
};
