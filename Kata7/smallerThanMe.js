function smaller(nums) {
  var smallerCount = 0;
  var countArr = []

  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if (nums[i]> nums[j]) {
        smallerCount++;
      }
    }
    countArr.push(smallerCount);
    smallerCount = 0;
  }
  return   countArr;
}
