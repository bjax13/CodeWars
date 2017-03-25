function longest(s1, s2) {
  console.log(s1);
  console.log(s2);
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let uniq = [];

  arr1.concat(arr2)


  for (var i = 0; i < arr1.length; i++) {
    if (uniq.indexOf(arr1[i])=== -1) {
      uniq.push(arr1[i])
    }
  }

  return uniq.join('');

}
