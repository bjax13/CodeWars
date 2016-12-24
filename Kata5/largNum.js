var lastDigit= (function(n1, ex){
  var lookup={}; //make lookup table for exponent mod 4
  for(var n=0;n<10;n++){
    lookup[n] = {};
    for(var x=1;x<5;x++){
      lookup[n][x%4]=Math.pow(n,x)%10
    }
  }
  return function(n1, ex){
    if(ex==="0") return 1;
    var n=n1.substr(n1.length-1);
    var e=ex.substr(ex.length-2);//need last 2 for mod 4
    var r=lookup[n] [e%4]
    return r;
  }
})();

 lastDigit('4', '6')

// did not complete above is best practice.  below is my attempt. 

// var lastDigit = function(str1, str2){
//   console.log(str1);
//   console.log(str2);
//
//   var num1 = parseInt(str1[str1.length - 1])
//   var num2 = parseInt(str2)
//   var num1Pattern = [];
//
//   if (str2.length > 3) {
//     num2 = parseInt(str2[str2.length - 2]);
//     num2%=4;
//   }
//
//   if (num1 === 0) {
//     if (!num2) {
//       return 1;
//     }
//     return num1;
//   }
//   if (!num2) {
//     return 1;
//   }
//
//   if (num1 === 0 ||num1 === 1 ||num1 === 5 ||num1 === 6) {
//     return num1;
//   }
//
//
//
//
//   num1Pattern = powerPattern(num1);
//
//
//
//   console.log(num1);
//   console.log(num2);
//   console.log(num1Pattern);
//   console.log(num2%num1Pattern.length);
//
//
//   function powerPattern(num) {
//       var int = lastDigit(num);
//       var pattern = [];
//
//       for (var i = 1; i < 5; i++) {
//           var last = lastDigit(Math.pow(num, i))
//           if (pattern.indexOf(last) !== -1) {
//               i = 5;
//           }else {
//             pattern.push(last)
//           }
//
//       }
//       console.log(pattern.length);
//       if (pattern.length<2) {
//         return pattern;
//       }else if (pattern.length === 2) {
//         pattern.reverse();
//         console.log('Reversed '+ pattern);
//         return pattern;
//       }else if (pattern.length === 4) {
//         pattern.push(pattern.shift());
//         pattern.push(pattern.shift());
//         return pattern;
//       }
//
//       return pattern;
//   }
//
//   //func to find last digit of a number
//   function lastDigit(num) {
//       return parseInt(num.toString()[num.toString().length - 1])
//   }
//
//
//   return num1Pattern[num2%num1Pattern.length];
// }
//
