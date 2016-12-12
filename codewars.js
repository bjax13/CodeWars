function gap(gap, start, end) {
    var currentGap  = 0;
    var currentStart = start;
    var arrOfPrime = [];
    var firstGap = [];

    function isPrime() {
      for (var i = start; i <= end; i++) {
        var primBool = true;

        if (false) {

        }else if (true) {
          for (var j = i-1; j > 1; j--) {
            if (i%j === 0) {
              primBool = false;
              j = 0
            }
          }
        }

        if (primBool) {
          arrOfPrime.push(i);
          //console.log(arrOfPrime[(arrOfPrime.length-1)] - arrOfPrime[(arrOfPrime.length-2)]);
          if (arrOfPrime.length<2) {

          }else if (arrOfPrime[(arrOfPrime.length-1)] - arrOfPrime[(arrOfPrime.length-2)]=== gap) {
            firstGap.push(arrOfPrime[(arrOfPrime.length-2)]);
            firstGap.push(arrOfPrime[(arrOfPrime.length-1)]);
            return firstGap;
          }
        }
      }
      //console.log(arrOfPrime);
    }

    if (isPrime(firstGap.length >0)) {
      return firstGap
    };

    // for (var k = 0; k < arrOfPrime.length; k++) {
    //   if (arrOfPrime[k+1]-arrOfPrime[k] === gap) {
    //     firstGap.push(arrOfPrime[k]);
    //     firstGap.push(arrOfPrime[k+1]);
    //     return firstGap;
    //   }
    // }


    return null
}

console.log(gap(2,2,100));

gap(2,2,100);
