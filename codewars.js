function decompose(n) {
    if (n<5) {
      return null;
    }



    var remainder = 0;
    var arr = [];

    var nSquared = n * n - ((n-1)*(n-1));

    arr.push(n-1);

    var arr2 = sumsOfSq(nSquared);

    for (var i = 0; i < arr2.length; i++) {
      arr.unshift(arr2[i]);
    }


    function sumsOfSq(nSquared) {
      var total = nSquared;
      var arr2 =[];
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
        if (arr[i]=== arr2[(i+1)]) {
          passed = false
        }

      }
      return passed;
    }

    console.log(passed(arr2));

    return arr;
}






















console.log(decompose(7));
console.log(decompose(50));
console.log(decompose(44));
