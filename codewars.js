function primeFactors(n){
    //your code here
    var string = "";

    function isPrime(num) {
      for (var i = 2; i * i <= num; i++) {
        if (num % i) {
          return  false;
        }
      }
      return true;
    }

    for (var i = 2; i <= n; i++) {
      var count = 0;


        while (n%i===0) {
          count++;
          n = n/i;
        }
        if (count === 0) {

        }else if (count === 1) {
          string+= "("+i+")";
        }else {
          string+=("("+i+"**"+count+")");
        }

    }

    return string;
}

console.log(primeFactors(86240));
