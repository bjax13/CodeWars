function decompose(n) {
    console.log("start");
    if (n<5) {
      return null;
    }



    var remainder = 0;
    var arr = [];

    var nSquared = n * n;



    var arr2 = sumsOfSq(nSquared,n-1);


    if (passed(arr2)) {
      for (var i = 0; i < arr2.length; i++) {
        arr.unshift(arr2[i]);
      }
    }else {
      arr2.reverse();
      var smallTot = 0
      for (var i = 0; i < arr2.length; i++) {
        smallTot+=arr2[i]*arr2[i];
        if (arr2[i]<5) {
          arr2.shift();
          i--;
        }else {

          for (var j = arr2[i]-1; j >= 5; j--) {

            var arr3 = sumsOfSq(smallTot,j)

            arr3.sort(function(a, b) {
              return a - b;
            });
            var inOrder ;
            if (arr3.length-1>arr3.length-2) {
              inOrder = true;
            }else {
              inOrder = false;
            }

            console.log(arr3);
            if (passed(arr3)&& inOrder) {
              arr = [];
              arr2.shift();
              arr = arr3.concat(arr2)
              console.log(arr);
              if (passed(arr)) {
                return arr;
              }
            }


          }

        }

      }
    }




    function sumsOfSq(nSquared,startInt) {
      var total = nSquared;
      var arr2 =[];
      total-= startInt*startInt;
      arr2.push(startInt)
      while (total > 0) {
        var root  = Math.floor(Math.sqrt(total),1)
        total-=root*root;
        arr2.push(root);
      }
      return arr2;
    }

    function passed(arr) {

      var passed = true;

      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i]=== arr[(i+1)]) {
          passed = false
        }

      }
      return passed;
    }

    console.log(passed(arr));

    console.log("returned");

    return arr;
}






















console.log(decompose(7));
console.log(decompose(625));
console.log(decompose(44));
console.log(decompose(50));
