function smaller(nums) {
  var stack = [];
  //create empty stack to track index of items visited
  var countArr = new Array(nums.length).fill(0);
  //create an empty array with length of nums fill with -1
  var i = 0;

  for (var i = array.length-1; i >= 0 ; i--) {
    while (stack.length>0 && x<nums[stack[i-1]]) {
        countArr[stack[0]] +=stack.length;
      }
      stack.push(i)
  }

  // for (var x in nums) {
  //   while (stack.length>0 && x<nums[stack[i-1]]) {
  //     countArr[stack.pop()] +=1;
  //   }
  //   stack.push(i)
  //   i++;
  // }


  return   countArr;
}


console.log(smaller([5, 4, 3, 2, 1]));
