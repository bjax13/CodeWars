var nbrOfLaps = function (x, y) {
  var xCount = 1;
  var yCount = 1;
  var xTot = x;
  var yTot = y;

  while (xTot !== yTot) {
    if (xTot> yTot) {
      yTot+=y;
      yTot++;
    }else {
      xTot+=x;
      xTot++;
    }
  }


  return [xCount, yCount];
}
