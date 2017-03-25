function openOrSenior(data){

  var arr = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i][0]>= 55 && (data[i][1] > 7 && data[i][1] < 27)) {
      arr.push('Senior');
    }else {
      arr.push('Open');
    }
  }
  return arr;
}
