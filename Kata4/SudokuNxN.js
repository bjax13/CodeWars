var Sudoku = function(data)
{
  console.log(data);
  var maxNum = data[0].length;
  var valid = false;
  var validSum = sumOfNums(maxNum);
  var sqrSize = Math.sqrt(maxNum);
  //   Private methods
  // -------------------------


  function sumOfNums(n) {
    return ((n*(n+1))/2)
  }
  //console.log(sumOfNums(data[0].length));

  function isSquare(n){
    return (Math.sqrt(n)%1=== 0 ) ? true: false
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
  function equalsValidSum(n){
    return n == validSum;
  }

  function validSolution(board){
    var sumh = [];
    var sumy = [];
    var osums = [];
    for (var j = 0; j < sqrSize; j++) {
      osums.push([]);
    }

    for (var i = 0; i < maxNum; i++) {
      sumh.push(0);
      sumy.push(0);
      osums
    }


    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];



    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equalsValidSum)) return false;
    return (sumh.every(equalsValidSum) && sumv.every(equalsValidSum));
  }


  if ((data)){
    valid = true;
  }


  //   Public methods

  // -------------------------
  return {
    isValid: function() {

      return valid;
    }
  };
};
