function lastDigit(array) {
    console.log(array);
    var argArray = array;

    console.log(Math.pow(4,2));
    console.log(Math.pow(4,729));

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

    var lastDigitPattern = [];



    var digit = argArray[0];
    var mod = 0;

    for (var i = 0; i < argArray.length-1; i++) {
      lastDigitPattern = powerPattern(digit);
      console.log();
      mod = argArray[i+1] % lastDigitPattern.length;
      console.log(digit);
      // if (argArray[i] > argArray[i+1]) {
      //   lastDigitPattern.reverse();
      // }
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
// 4

console.log(lastDigit([4,3,6]));
