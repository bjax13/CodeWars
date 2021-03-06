//https://www.codewars.com/kata/how-many-are-smaller-than-me-ii

// got to a point where I am stumped.  Will need to ask for help sometime. 

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


    if (stack.length === 0) {
      countArr[i] = 0;
    }else if (nums[i]> stack[0]) {

      countArr[i] =locationOf(nums[i]-.1,stack)+1;
    }else{
      countArr[i] =0;
    }

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

  return   countArr;
}


console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));
