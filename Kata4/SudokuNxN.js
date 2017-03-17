var Sudoku = function(data)
{
  var valid = false;
  //   Private methods
  // -------------------------


  function isSquare(n){
    return (Math.sqrt(n)%1=== 0 ) ? true: false
  }

  //test dementions of data.  If not square return false
  if (!(isSquare(data[0].length))) {
    valid = false;
    return {
    isValid: function() {
      return valid;
    }
  };
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
