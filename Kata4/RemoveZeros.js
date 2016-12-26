function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods
  //such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  var holder;
  var arrLength = array.length

  for (var i = 0; i < arrLength; i++) {
    if (array[i]=== 0 || array[i] === '0') {
      holder = array[i];

      for (var j = i; j < array.length; j++) {

        if (j + 1 === array.length) {
          array[j]= holder;
        }else {
          array[j]= array[j+1];
        }

      }
      i--;
      arrLength--;
    }
  }
  return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));


// Best practice
// the majority of solutions were in line with my solution.
// the following after reviewing would be best practice since
// the tow functions are split into functions for reusibility 

// function removeZeros(array) {
//     var end = array.length;
//     for (var i = 0; i < end; i++) {
//         if (array[i] === 0 || array[i] === "0") {
//             arrayShiftToEnd(array, i);
//             i--;
//             end--;
//         }
//     }
//     return array;
// }
//
// function arrayShiftToEnd(array, n) {
//     var end = array[n]
//     for(var i = n; i <  array.length; i++) {
//         array[i] = array[i + 1]
//     }
//     array[array.length - 1] = end;
//
//     return array
// }
