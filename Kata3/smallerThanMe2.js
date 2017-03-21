//https://www.codewars.com/kata/how-many-are-smaller-than-me-ii

function smaller(nums) {
  var stack = [];
  //create empty stack to track index of items visited
  var countArr = new Array(nums.length).fill(0);
  //create an empty array with length of nums fill with 0

  function insert(element, array) {
    array.splice(locationOf(element, array) , 0, element);
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
    }else if (nums[i]> stack[0]) {
      console.log("Number -"+nums[i]);
      console.log("Location -"+locationOf(nums[i]-.1,stack));
      countArr[i] =locationOf(nums[i]-.1,stack)+1;
    }else{
      countArr[i] =0;
    }

    if (stack.length === 0) {
      stack.push(nums[i]);
    }else if (stack.length===1) {
      if (stack[0]<nums[i]) {
        stack.push(nums[i])
      }else {
        stack.unshift(nums[i])
      }
    }else {
      if (nums[i]>stack[0] && nums[i] < stack[stack.length - 1]) {
        stack = insert(nums[i],stack)
      }else {
        if (stack[0]<nums[i]) {
          stack.push(nums[i])
        }else {
          stack.unshift(nums[i])
        }
      }
    }

  }

  return   countArr;
}


console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));
