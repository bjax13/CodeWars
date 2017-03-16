function isIsogram(str){
  let arrStr = str.toLowerCase().split('');
  let lettersUsed = [];
  for (var i = 0; i < arrStr.length; i++) {
    if (lettersUsed.indexOf(arrStr[i])=== -1) {
      lettersUsed.push(arrStr[i]);
    }else {
      return false;
    }
  }
  return true;
}
