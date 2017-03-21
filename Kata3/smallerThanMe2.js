//https://www.codewars.com/kata/how-many-are-smaller-than-me-ii

function smaller(nums) {
  var stack = [];
  //create empty stack to track index of items visited
  var countArr = new Array(nums.length).fill(0);
  //create an empty array with length of nums fill with 0

  function insert(element, array) {
    array.splice(locationOf(element, array) + 1, 0, element);
    return array;
  }

  function locationOf(element, array, start, end) {
    start = start || 0;
    end = end || array.length;
    var pivot = parseInt(start + (end - start) / 2, 10);
    if (end-start <= 1 || array[pivot] === element) return pivot;
    if (array[pivot] < element) {
      return locationOf(element, array, pivot, end);
    } else {
      return locationOf(element, array, start, pivot);
    }
  }

  for (var i = nums.length-1; i >= 0 ; i--) {
    console.log(stack);
    console.log("Number -"+nums[i]);
    console.log("Location -"+locationOf(nums[i],stack));
    console.log("stack -"+stack[locationOf(nums[i],stack)]);
    while (stack.length>0 && nums[i]<stack[locationOf(nums[i],stack)]) {
        countArr[i] +=stack.length;
        console.log("in loop");
      }

    stack = insert(nums[i],stack)

  }



  // var array = [1,2,3,4,5,6,7,8,9];
  // var element = 3.5;

  //
  // console.log(insert(element, array));

  // for (var x in nums) {
  //   while (stack.length>0 && x<nums[stack[i-1]]) {
  //     countArr[stack.pop()] +=1;
  //   }
  //   stack.push(i)
  //   i++;
  // }


  return   countArr;
}


console.log(smaller([5, 4, 6, 2, 1]));
