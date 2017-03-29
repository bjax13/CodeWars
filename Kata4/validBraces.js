function validBraces(braces){
  console.log(braces);
  var arr = braces.split('');
  var leftStack = [];
  var rightStack = [];

  var leftBraces = ['(', '{', '['];
  var rightBraces = [')', '}', ']'];

  for (var i = 0; i < arr.length; i++) {
    if (leftBraces.indexOf(arr[i])!= -1) {
      leftStack.push(arr[i])
    }else {
      if (leftStack[leftStack.length-1] != leftBraces[rightBraces.indexOf(arr[i])]) {
        return false;
      }else {
        leftStack.pop();
      }
    }
  }
  if (leftStack.length > 0) {
    return false
  }

  return true;
}
