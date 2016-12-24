var lastDigit = function(str1, str2){
  console.log(str1);
  console.log(str2);

  var num1 = parseInt(str1[str1.length - 1])
  var num2 = parseInt(str2)
  var num1Pattern = [];

  if (str2.length > 31) {
    num2 = parseInt(str2.slice(str2.length - (str2.length > 16)? 16: 0))
  }

  if (!num2) {
    return 1;
  }

  num1Pattern = powerPattern(num1);



  console.log(num1);
  console.log(num2);
  console.log(num1Pattern);
  console.log(num2%num1Pattern.length);


  function powerPattern(num) {
      var int = lastDigit(num);
      var pattern = [];

      for (var i = 1; i < 5; i++) {
          var last = lastDigit(Math.pow(num, i))
          if (pattern.indexOf(last) !== -1) {
              i = 5;
          }else {
            pattern.push(last)
          }

      }
      console.log(pattern.length);
      if (pattern.length<2) {
        return pattern;
      }else if (pattern.length === 2) {
        pattern.reverse();
        console.log('Reversed '+ pattern);
        return pattern;
      }else if (pattern.length === 4) {
        pattern.push(pattern.shift());
        pattern.push(pattern.shift());
        return pattern;
      }

      return pattern;
  }

  //func to find last digit of a number
  function lastDigit(num) {
      return parseInt(num.toString()[num.toString().length - 1])
  }


  return num1Pattern[num2%num1Pattern.length];
}

lastDigit('4', '6')
