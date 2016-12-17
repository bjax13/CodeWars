function decompose(n) {
    if (n<5) {
      return null;
    }



    var remainder = 0;
    var arr = [];

    var nSquared = n * n - ((n-1)*(n-1));

    arr.push(n-1);

    while (nSquared > 0) {
      var root  = Math.floor(Math.sqrt(nSquared),1)
      nSquared-=root*root;
      arr.unshift(root);
    }


    return arr;
}























console.log(decompose(2));
console.log(decompose(7));
