function bowlingScore(frames) {
  // Figure out the score!
  var arrFrams = frames.split(' ');
  var score = 0;

  for (var i = 0; i < arrFrams.length; i++) {
    if (arrFrams[i].length === 1) {
      if (i === 9) {
        score+= 10;
      }else if (i === 8) {
        var nextFrame = [];
        nextFrame.push(arrFrams[i])
        nextFrame.push(arrFrams[i+1])
        var nextFrameStr = nextFrame.join('');
        console.log(nextFrameStr);
      }else {
        var nextTwo = [];
      }
    }else if (arrFrams[i].length === 2) {
      var temp = arrFrams[i].split('');
      console.log(temp);
      if (temp[1] === '/') {
        score+= 10
      }else{
        score+= parseInt(temp[0]);
        score+= parseInt(temp[1]);
      }
    }
  }
  return score;
}

console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'));
console.log(bowlingScore('X X X X X X X X X XXX'));
