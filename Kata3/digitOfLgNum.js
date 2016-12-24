function lastDigit(array) {
    console.log(array);
    var argArray = array;



    // test if array is empty
    if (argArray.length === 0) {
        return 1;
    }

    argArray[0] = lastDigit(argArray[0]);

    // test if array has length of 1 return last digit if so
    if (argArray.length === 1) {
      return argArray[0]
    }

    // arguments starting with 0 testcase;
    if (argArray[0] === 0) {
        var total = 0;
        for (var i = 1; i < argArray.length; i++) {
            if (argArray[i] === 0 && total === 1) {
                total = 0;
            } else {
                total = Math.pow(total, argArray[i]);
            }

        }
        return total;
    }

    // arguments with 1 in power positions return last digit of first argument if so

    for (var i = 1; i < argArray.length; i++) {
      if (argArray[i]===1) {
        return argArray[0]
      }else if (argArray[i]===0) {
        return 1;
      }
    }

    var digit = argArray[0];
    var mod = 0;
    var lastDigitPattern = powerPattern(digit);

    if (digit===1 || digit===5 ||digit===6) {
      return digit;
    }

    // reduce each to last digit of each power

    // for (var i = argArray.length-1; i >=1 ; i--) {
    //   argArray[i] = argArray[i]% lastDigitPattern.length
    //
    //   argArray[i] = lastDigitPattern[argArray[i]];
    //
    //   console.log(argArray);
    // }
    //
    // var total;
    //
    // for (var i = argArray.length-1; i >=1 ; i--) {
    //   total = Math.pow(argArray[i-1],argArray[i])
    //
    //   argArray[i-1]= total% lastDigitPattern.length
    //
    //   argArray[i-1] = lastDigitPattern[argArray[i-1]];
    //
    //   console.log(argArray);
    // }
    //
    // if (argArray[1]%lastDigitPattern.length-1 <0) {
    //   return lastDigitPattern[lastDigitPattern.length-1]
    // }else {
    //   return lastDigitPattern[argArray[1]%lastDigitPattern.length-1]
    // }







    if (argArray[0] > argArray[1]) {
      lastDigitPattern.reverse();
      for (var i = 1; i < argArray.length; i++) {
        argArray[i] = lastDigit(argArray[i])
      }
    }


    console.log(argArray);



    // works for most but not for some.

    for (var i = 0; i < argArray.length-1; i++) {


      mod = argArray[i+1] % lastDigitPattern.length;

      if (!mod) {
        mod = lastDigitPattern.length;
      }

      digit = lastDigitPattern[mod-1];

    }

    return digit


    // establish power pattern for first argument
    // Link -> http://mathcentral.uregina.ca/qq/database/qq.09.04/landon1.html
    // Link -> https://brilliant.org/wiki/finding-the-last-digit-of-a-power/
    // the link explains a pattern for powers.

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



    console.log(argArray);

}
// 1

console.log(lastDigit([7,6,21]));

//4
console.log(lastDigit([4,3,6]));
