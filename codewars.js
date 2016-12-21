// function lastDigit(array){
// var argArray = array;
// var powerPattern = [];
//
// // establish power pattern for first argument
// // Link -> http://mathcentral.uregina.ca/qq/database/qq.09.04/landon1.html
// // the link explains a pattern for powers.
//
//
//
//
// console.log(argArray);
//
// }
// // 4
// console.log(lastDigit([ 4, 3, 6 ]));


function Randomizer(min, max) {
  var randomSequence = []
  var availableNumbers = [];

  for (var i = min; i <= max; i++) {
    availableNumbers.push(i)
  }
  console.log(availableNumbers);

  for (var i = 0; i <= availableNumbers.length; i++) {
    var number = Math.floor(Math.random() * availableNumbers.length)
    console.log(number);
    console.log (availableNumbers.splice(availableNumbers[number],1));
    number = (availableNumbers.splice(availableNumbers[number],1));
    randomSequence.push(number);

    console.log(randomSequence);
    console.log(availableNumbers);
  }


  // for (var i = min -1; i <= max ; i++) {
  //   var number = Math.floor(Math.random() * max + min)
  //   if (randomSequence.indexOf(number) === -1 && number <=max ) {
  //     randomSequence.push(number)
  //   }else {
  //     i--;
  //   }
  //   console.log(randomSequence);
  // }

  this.next = function () {

  }
  this.sequence = function () {

  }
  return randomSequence;
}

console.log(Randomizer(0,9));
