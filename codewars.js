var nbrOfLaps = function (x, y) {
  console.log(x);
  console.log(y);
  var xCount = 1;
  var yCount = 1;
  var xTot = x;
  var yTot = y;

  while (xTot !== yTot) {
    if (xTot> yTot) {
      yTot+=y;
      yCount++;
    }else {
      xTot+=x;
      xCount++;
    }
  }


  return [xCount, yCount];
}
