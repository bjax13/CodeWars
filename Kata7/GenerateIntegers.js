function incrementString (strng) {
  if (strng === '') {
    return 1;
  }
  var count = 0;

  var arr = strng.split('')

  if (parseInt(arr[arr.length-1])<9) {
    arr[arr.length-1]++;
  }else if (parseInt(arr[arr.length-1])===9) {
    console.log('in');
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]==='9') {
        arr.splice(i,1)
        i--;
        count++;
      }
    }
    if (parseInt(arr[arr.length-1])<9) {
      arr[arr.length-1]++;
    }else {
      arr.push(1)
    }
    for (var i = 0; i < count; i++) {
      arr.push('0')
    }
  }
  else {
    arr.push('1')
  }
  return arr.join('')
}


incrementString('foobar999')
