function chooseBestSum(t, k, ls) {
  console.log("t = "+ t);
  console.log("k = "+ k);
  console.log("ls = "+ ls);

  if (ls.length < 3) {
    return null
  }

  let longest = 0;

  for (var i = 0; i < ls.length-2; i++) {
    for (var j = i+1; j < ls.length-1; j++) {
      for (var l = j+1; l < ls.length; l++) {
        if (ls[i]+ls[j]+ls[l] > longest && ls[i]+ls[j]+ls[l] <= t) {
          longest = ls[i]+ls[j]+ls[l];
          console.log("long = "+longest);
          console.log("i = "+ls[i]);
          console.log("j = "+ls[j]);
          console.log("l = "+ls[l]);
          if (longest === t) {
            return longest
          }
        }
      }
    }
  }
  return longest


    // your code
}

console.log(chooseBestSum(230, 3, [91,74,73,85,73,81,87]));
