// https://www.codewars.com/kata/roman-numerals-encoder/train/javascript

function solution(number){

  var arr = number.toString().split('');

  var count = 0 ;
  var numberString = '';
  var solutionArray = [];

  for (var i = arr.length-1; i > 0 ; i--) {

    numberString = arr[i]

    for (var i = 0; i < count; i++) {
      numberString = numberString + '0';
    }
  }

  return true;
}
