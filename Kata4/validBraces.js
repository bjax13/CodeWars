function validBraces(braces){
  // convert string to array
  var arr = braces.split('');
  // Stack of left braces to compaire to other items
  var leftStack = [];

  // valid brace examples
  var leftBraces = ['(', '{', '['];
  var rightBraces = [')', '}', ']'];

  for (var i = 0; i < arr.length; i++) {
    // if item is a left bracket push it to the left bracket stack
    if (leftBraces.indexOf(arr[i])!= -1) {
      leftStack.push(arr[i])
    }
    // if item is not a left backet item check to see if arr[i] is the right brace that closes the braces on the top of the stack.
    else {
      if (leftStack[leftStack.length-1] != leftBraces[rightBraces.indexOf(arr[i])]) {
        return false;
      }else {
        //remove from top of left stack when arr[i] is the compliment right brace
        leftStack.pop();
      }
    }
  }

  //after completing the loop all left stack items should be removed.
  //otherwise return false.
  if (leftStack.length > 0) {
    return false
  }

  return true;
}
