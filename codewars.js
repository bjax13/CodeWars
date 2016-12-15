//Find the length of longest subsequence of same incrementing values
function longestSequenceIn(string)
{
  var longest = 0;
  var increment = 0;
  var count = 1;
  var arr = string.split(' ').map(function (a) {
    return parseInt(a,10);
  });

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[(i+1)] - arr[(i)] === increment) {
      count++;
      if (count > longest) {
        longest = count;
      }
    }else {
      count = 1;
      increment = (arr[(i+1)] - arr[i])
    }


  }


  return longest +1
}

console.log(longestSequenceIn('1 2 3 4 5 6'));
