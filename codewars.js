function gap(gap, start, end) {
    var currentGap  = 0;
    var currentStart = start;
    var arrOfPrime = [];
    var firstGap = [2];

    // function isPrime() {
    //   for (var i = start; i <= end; i++) {
    //     var primBool = true;
    //     for (var j = i-1; j > 1; j--) {
    //       if (i%j === 0) {
    //         primBool = false;
    //         j = 0;
    //       }
    //     }
    //     if (primBool) {
    //       arrOfPrime.push(i);
    //       //console.log(arrOfPrime[(arrOfPrime.length-1)] - arrOfPrime[(arrOfPrime.length-2)]);
    //       if (arrOfPrime.length<2) {
    //
    //       }else if (arrOfPrime[(arrOfPrime.length-1)] - arrOfPrime[(arrOfPrime.length-2)]=== gap) {
    //         firstGap.push(arrOfPrime[(arrOfPrime.length-2)]);
    //         firstGap.push(arrOfPrime[(arrOfPrime.length-1)]);
    //         return firstGap;
    //       }
    //     }
    //   }
    //   //console.log(arrOfPrime);
    // }

    function isPrime() {

      for (var i = 2; i < end; i++) {
        arrOfPrime[i] = true;
      }


      var loopLimit = Math.sqrt(end);


      for (var i = 2; i < loopLimit; i++) {
        if (arrOfPrime[i]=== true) {
          for (var j = i*i ; j < end; j+=i) {
            arrOfPrime[j]= false;
          }
        }
      }

      


      for (var i = start; i < end; i+=2) {
        if (arrOfPrime[i]) {
          if (!firstGap) {
            firstGap.push(i);
          }else if (firstGap.length === 1) {
            firstGap.push(i);
          }else {
            firstGap[0]=firstGap.pop();
            firstGap.push(i)
            if (firstGap[1]-firstGap[0] === gap) {
              return firstGap;
            }
          }
          console.log(firstGap);

        }
        if (i%2=== 0) {
          i--;
        }
      }


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

console.log(gap(8,300,1111400));
