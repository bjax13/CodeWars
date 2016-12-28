function chooseBestSum(t, k, ls) {
  console.log("t = "+ t);
  console.log("k = "+ k);
  console.log("ls = "+ ls);

  if (ls.length < k) {
    return null
  }
  let list = ls;
  let longest = 0;

  list.sort((a,b)=> b-a);

  for (var i = 0; i < list.length; i++) {
    if (list[i] > t) {
      list.shift();
    }
  }

  if (list.length < k) {
    return null;
  }

  console.log(list);



  for (var i = 0; i < k; i++) {
    longest+=list[i]
  }
  if (longest <= t) {
    return longest
  }else {
    for (var i = k; i < list.length; i++) {
      longest-= list[i-1] - list[i];
      if (longest <= t) {
        return longest
      }
    }
  }














  // for (var i = 0; i < ls.length-2; i++) {
  //   for (var j = i+1; j < ls.length-1; j++) {
  //     for (var l = j+1; l < ls.length; l++) {
  //       if (ls[i]+ls[j]+ls[l] > longest && ls[i]+ls[j]+ls[l] <= t) {
  //         longest = ls[i]+ls[j]+ls[l];
  //         console.log("long = "+longest);
  //         console.log("i = "+ls[i]);
  //         console.log("j = "+ls[j]);
  //         console.log("l = "+ls[l]);
  //         if (longest === t) {
  //           return longest
  //         }
  //       }
  //     }
  //   }
  // }
  // return longest


    // your code
}

console.log(chooseBestSum(230, 3, [91,74,73,85,73,81,87]));
