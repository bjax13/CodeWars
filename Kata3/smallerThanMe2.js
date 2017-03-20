function smaller(nums) {
  var stack = [];
  //create empty stack to track index of items visited
  var countArr = new Array(nums.length).fill(-1);
  //create an empty array with length of nums fill with -1
  var i = 0;
  for (var x in nums) {
    while (stack.length>0 && x<nums[stack[-1]]) {
      countArr[stack.pop()] = x;
    }
    stack.push(i)
    i++;
  }


  return   countArr;
}
