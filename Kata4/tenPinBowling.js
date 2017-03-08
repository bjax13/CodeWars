function bowlingScore(frames) {
  var rolls = frames.replace(/ /g, '').split(''),
      count = 0,
      score = 0,
      frame;
  for (var i = 0; i < rolls.length; i++) {
    if (rolls[i] === 'X') rolls[i] = 10;
    if (rolls[i] === '/') rolls[i] = 10 - rolls[i - 1];
    else rolls[i] = parseInt(rolls[i]);
  }
  while (count < 10) {
    count++;
    frame = rolls.shift();
    if (frame === 10) score += frame + rolls[0] + rolls[1];        // Strike!!
    else {
      frame += rolls.shift();
      score += frame;
      if (frame === 10) score += rolls[0];                         // Spare!
    }
  }
  return score;
}


// function bowlingScore(frames) {
//   // Figure out the score!
//   var arrFrams = frames.split(' ');
//   var score = 0;
//
//   for (var i = 0; i < arrFrams.length; i++) {
//     if (arrFrams[i].length === 1) {
//       if (i === 9) {
//         score+= 10;
//       }else if (i === 8) {
//         var nextFrame = [];
//         nextFrame.push(arrFrams[i])
//         nextFrame.push(arrFrams[i+1])
//         var nextFrameStr = nextFrame.join('');
//         nextFrame = nextFrameStr.split('');0
//         for (var j = 0; j < 3; j++) {
//           if (nextFrame[j] === 'X') {
//             score+=10;
//           }else if (nextFrame[j] === '/') {
//             score-= nextFrame[j-1];
//             score+=10
//           }else {
//             score+= parseInt(nextFrame[j]);
//           }
//         }
//       }else {
//         var nextFrame = [];
//         nextFrame.push(arrFrams[i])
//         nextFrame.push(arrFrams[i+1])
//         nextFrame.push(arrFrams[i+2])
//         var nextFrameStr = nextFrame.join('');
//
//         nextFrame = nextFrameStr.split('');0
//         for (var j = 0; j < 3; j++) {
//           if (nextFrame[j] === 'X') {
//             score+=10;
//           }else if (nextFrame[j] === '/') {
//             score-= parseInt(nextFrame[j-1]);
//             score+=10
//           }else {
//             score+= parseInt(nextFrame[j]);
//           }
//         }
//       }
//     }else if (arrFrams[i].length === 2) {
//       var temp = arrFrams[i].split('');
//
//       if (temp[1] === '/') {
//         score+= 10
//         temp2 = arrFrams[i+1]
//         if (temp2.length === 1) {
//           score+=10
//         }else if (temp2.length >1) {
//           tempArr = temp2.split('');
//           if (tempArr[0] === 'X') {
//             score+= 10;
//           }else {
//             score+= parseInt(tempArr[0]);
//           }
//         }
//       }else{
//         score+= parseInt(temp[0]);
//         score+= parseInt(temp[1]);
//       }
//     }else if (arrFrams[i].length === 3) {
//       var temp = arrFrams[i].split('');
//
//       for (var j = 0; j < 3; j++) {
//         if (temp[j] === 'X') {
//           score+=10;
//         }else if (temp[j] === '/') {
//           score-= parseInt(temp[j-1]);
//           score+=10
//         }else {
//           score+= parseInt(temp[j]);
//         }
//       }
//     }
//     console.log("Frame"+ i + " - " + score);
//   }
//   return score;
// }

console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'));
console.log(bowlingScore('60 X 21 3/ 18 44 X 41 4/ XXX'));
