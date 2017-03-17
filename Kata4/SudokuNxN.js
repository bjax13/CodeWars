var Sudoku = function(data)
{
  var valid = false;
  //   Private methods
  // -------------------------
  function validSolution(board){
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
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }

  if (validSolution(data)){
    valid = true;
  }


  //   Public methods
  function equals45(n){
    return n == 45;
  }
  // -------------------------
  return {
    isValid: function() {

      return valid;
    }
  };
};
