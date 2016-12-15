// function primeFactors(n){
//     //your code here
//     if (n < 2){
//       return "("+n+")";
//     }
//
//     var string = "";
//
//     function isPrime(num) {
//       for (var i = 2; i * i <= num; i++) {
//         if (num % i) {
//           return  false;
//         }
//       }
//       return true;
//     }
//
//     for (var i = 2; i <= n; i++) {
//       var count = 0;
//
//
//         while (n%i===0) {
//           count++;
//           n = n/i;
//         }
//         if (count === 0) {
//
//         }else if (count === 1) {
//           string+= "("+i+")";
//         }else {
//           string+=("("+i+"**"+count+")");
//         }
//
//     }
//
//     return string;
// }

function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}


console.log(primeFactors(86240));
