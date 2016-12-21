function lastDigit(array){
var argArray = array;

console.log(Math.pow(1,0));
// test if array is empty
if (argArray.length === 0) {
  return 1;
}

argArray[0]=lastDigit(argArray[0]);

if (argArray[0]===0) {
  var total = 0;
  for (var i = 1; i < argArray.length; i++) {
    total = Math.pow(total,argArray[i]);
  }
  return total;
}

// establish power pattern for first argument
// Link -> http://mathcentral.uregina.ca/qq/database/qq.09.04/landon1.html
// Link -> https://brilliant.org/wiki/finding-the-last-digit-of-a-power/
// the link explains a pattern for powers.

function powerPattern(num) {
  var int = lastDigit(num);
  var pattern = [];

  for (var i = 1; i < 5; i++) {
    var last = lastDigit(Math.pow(num,i))
    if (pattern.indexOf(last)!== -1) {
      return pattern;
    }
    pattern.push(last)
  }
  return pattern
}



//func to find last digit of a number
function lastDigit(num) {
    return parseInt(num.toString()[num.toString().length-1])
}



console.log(argArray);

}
// 4
console.log(lastDigit([ 0, 0, 0 ]));
