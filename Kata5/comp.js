function warsOne(num) {
  var string = num.toString().split('');
  console.log(string);



  for (var i = 0; i < string.length; i++) {

    for (var j = i+1; j < string.length; j++) {
      if (string[i]<string[j]) {
        var temp = string[j]
        string[j]
      }
    }
  }
}


warsOne(21445);
