function findEvenIndex(arr)
{
  if (arr.length ===0) {
    return -1
  }
  for (var i = 0; i < arr.length; i++) {
    arr[i]

    if (arr.slice(0,i).reduce(function(acc, val) {
        return acc + val;
    }, 0) === arr.slice(i+1, slice.length-1).reduce(function(acc, val) {
        return acc + val;
    }, 0) ) {
      return i;
    }

    
  }

  return -1
}
