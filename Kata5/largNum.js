var lastDigit = function(str1, str2){
  var num1 = parseInt(str1[str1.length - 1])
  var num2 = parseInt(str2)
  var num1Pattern = [];

  num1Pattern = powerPattern(num1);


  console.log(num1);
  console.log(num2);
  console.log(num1Pattern);


  function powerPattern(num) {
      var int = lastDigit(num);
      var pattern = [];

      for (var i = 1; i < 5; i++) {
          var last = lastDigit(Math.pow(num, i))
          if (pattern.indexOf(last) !== -1) {
              return pattern;
          }
          pattern.push(last)
      }
      return pattern;
  }



  //func to find last digit of a number
  function lastDigit(num) {
      return parseInt(num.toString()[num.toString().length - 1])
  }


  return 
}
