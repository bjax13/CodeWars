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

    if (stack.length === 0) {
      countArr[i] = 0;
    }else {
      countArr[i] =locationOf(nums[i],stack)+1;
    }

    stack = insert(nums[i],stack)

  }

  return   countArr;
}


console.log(smaller([5, 4, 3, 2, 1]));
