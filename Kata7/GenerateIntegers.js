function longest(s1, s2) {
  console.log(s1);
  console.log(s2);
  let arr1 = (s1+s2).split('');

  let uniq = [];




  for (var i = 0; i < arr1.length; i++) {
    if (uniq.indexOf(arr1[i])=== -1) {
      uniq.push(arr1[i])
    }
  }

  return uniq.sort().join('');
