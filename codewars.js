function decompose(n) {
    if (n<5) {
      return null;
    }



    var remainder = 0;
    var arr = [];

    var nSquared = n * n - ((n-1)*(n-1));

    arr.push(n-1);

    var arr2 =[]

    while (nSquared > 0) {
      var root  = Math.floor(Math.sqrt(nSquared),1)
      nSquared-=root*root;
      arr2.unshift(root);
      arr.unshift(root);


    }

    var passed = true;
    for (var i = 0; i < arr2.length - 1; i++) {
      if (arr2[i]=== arr2[(i+1)]) {
        passed = false
      }




    }

    console.log(passed);

    return arr;
}























console.log(decompose(2));
console.log(decompose(7));
