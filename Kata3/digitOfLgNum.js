function lastDigit(array) {
    console.log(array);
    var argArray = array;

    // test if array is empty
    if (argArray.length === 0) {
        return 1;
    }

    argArray[0] = lastDigit(argArray[0]);

    // test if array has length of 1 return last digit
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

    // since the powers of 1 5 and 6 always end in 1 5 or 6  quickly return befor doing calculations
    if (digit===1 || digit===5 ||digit===6) {
      return digit;
    }

    // var lastDigit = function(str1, str2){
    //   if(str2 == '0')
    //     return 1;
    //   return Math.pow(+str1.slice(-1), (+str2.slice(-2) % 4) || 4) % 10;
    // }

    if (argArray.length === 2) {
      return lastOf2(argArray[0], (argArray[1]%100))
    }

    function lastOf2(num1, num2) {
      return Math.pow(num1, (num2 % 4) || 4) %10;
    }



    // finding the last digits is best accomplished by using a pattern links below explain more
    // Link -> http://mathcentral.uregina.ca/qq/database/qq.09.04/landon1.html
    // Link -> https://brilliant.org/wiki/finding-the-last-digit-of-a-power/
    // the link explains a pattern for powers.






    //func to find last digit of a number
    function lastDigit(num) {
        return parseInt(num.toString()[num.toString().length - 1])
    }
    //func to find last two digit of a number
    function last2Digit(num) {
        return parseInt(num.toString()[num.toString().length - 2])
    }





}
// 1

console.log(lastDigit([7,6,21]));

//4
console.log(lastDigit([4,3,6]));
