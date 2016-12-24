// ******** Codwars problam


// For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).
//
// E. g.,
//
// lastDigit([3, 4, 2]) === 1
// because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.
//
// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.
//
// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.
//
// This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.

//   My solution

function lastDigit(array) {

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
        if (argArray[i] === 1) {
            return argArray[0]
        } else if (argArray[i] === 0) {
            return 1;
        }
    }

    var digit = argArray[0];

    // since the powers of 1 5 and 6 always end in 1 5 or 6  quickly return befor doing calculations
    if (digit === 1 || digit === 5 || digit === 6) {
        return digit;
    }


    // test if only 2 args in array if so use simple function
    if (argArray.length === 2) {
        return lastOf2(argArray[0], (argArray[1] % 100))
    }

    // uses if array has 3 + items in array

    // for powers of powers return last 2 digits then once on first arg return last digit

    for (var i = argArray.length - 2; i >= 0; i--) {
        if (i === 0) {
            if (argArray[i + 1].length > 99) {
                argArray[i] = lastOf2((lastDigit(argArray[i])), last2Digit(argArray[i + 1]))
            } else {
                argArray[i] = lastOf2((lastDigit(argArray[i])), (argArray[i + 1]))
            }
        } else {
            if (argArray[i + 1].length > 99) {
                argArray[i] = last2Of2((lastDigit(argArray[i])), last2Digit(argArray[i + 1]))
            } else {
                argArray[i] = last2Of2((lastDigit(argArray[i])), (argArray[i + 1]))
            }
        }
    }

    return argArray[0]

    // finding the last digits is best accomplished by using a pattern links below explain more
    // Link -> http://mathcentral.uregina.ca/qq/database/qq.09.04/landon1.html
    // Link -> https://brilliant.org/wiki/finding-the-last-digit-of-a-power/
    // the link explains a pattern for powers.

    //function uses shortcuts as noted in links above to get last digit with 2 args
    function lastOf2(num1, num2) {
        return Math.pow(num1, (num2 % 4) || 4) % 10;
    }
    //function uses shortcuts as noted in links above to get last 2 digits
    function last2Of2(num1, num2) {
        return Math.pow(num1, (num2 % 4) + 4) % 100;
    }

    //func to find last digit of a number
    function lastDigit(num) {
        return parseInt(num.toString()[num.toString().length - 1])
    }
    //func to find last two digit of a number
    function last2Digit(num) {
        return parseInt(num.toString()[num.toString().length - 2])
    }
}

// others solutions from CodeWars


// this one I liked because it was clever and short.  having never used the reduceRight function before it was interesting to see it in practice

// function lastDigit(as){
//   return as.reduceRight(function(pow, base, index, array) {
//     return pow === 0 ? 1 : ( +pow == 1 ? base : Math.pow(base % 100, +pow % 4 + 4));
//   }, 1) % 10;
// }

// this is what I felt is best practice.  easier to read and follow than the last yet still very fast.

// function lastDigit(as) {
//   /** HANDLE SPECIAL CASES **/
//   // reduce zeros ( 0^n = 0, n^0 = 1)
//   // removes all elements after the digit before the last zero
//   // and iterates while zeros are found
//   do {
//     var zeroInd = as.lastIndexOf(0);
//     if (zeroInd > 0 ) as.splice(zeroInd - 1);
//   } while (zeroInd > 0)
//
//   if (as.length === 0) {
//     // empty array returns 1
//     return 1;
//   } else if (as.length === 1) {
//     // if there is only one element, return its last digit
//     return as[0] % 10;
//   }
//   // 0^n = 0
//   if (as[0] === 0) return 0;
//
//   var baseDigit = as[0] % 10;
//   // if k % 10 = 0|1|5|6, last digit is always 0|1|5|6
//   if ( baseDigit === 0 || baseDigit === 1 ||
//     baseDigit === 5 || baseDigit === 6) return baseDigit;
//
//   /** SPECIAL CASES DONE **/
//
//   // n^k last digit has a cyclic behavior
//   var map = {
//     2: [6, 2, 4, 8],
//     3: [1, 3, 9, 7],
//     4: [6, 4, 6, 4],
//     7: [1, 7, 9, 3],
//     8: [6, 8, 4, 2],
//     9: [1, 9, 1, 9]
//   }
//
//   // we have to calculate the % 4 of the total exponent
//   var baseExp = as[1] % 4;
//
//   switch (baseExp) {
//     case 0:
//     case 1:
//       // if the base exponent is (4k + 0|1),
//       // (4k + 0|1)^n % 4 = 0|1 for every n
//       return map[baseDigit][baseExp]
//     case 2:
//       // if baseExp is 4k + 2,
//       // (4k + 2)^n % 4 = 0 if n > 1
//       if (as[2] && as[2] > 1) {
//         return map[baseDigit][0];
//       } else {
//         // (4k + 2)^n % 4 = 2 if n = 1
//         return map[baseDigit][2];
//       }
//     case 3:
//       if (as[2] && as[2] % 2 === 0) {
//         // if baseExp = 4k + 3,
//         // (4k + 3)^n % 4 = 1 if n is even,
//         return map[baseDigit][1];
//       } else {
//         // (4k + 3)^n % 4 = 3 if n is odd
//         // see https://en.wikipedia.org/wiki/Euler%27s_theorem,
//         // using phi(4) = 2 => 3^(2k + 0|1) = 1|3 mod (4)
//         return map[baseDigit][3];
//       }
//     default:
//       return null;
//   }
// }


// 1

console.log(lastDigit([7, 6, 21]));

//4
console.log(lastDigit([4, 3, 6]));
