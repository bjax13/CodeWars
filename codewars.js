
function pigIfy(string) {
  var arr = string.split(" ")

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(1)+ arr[i].charAt(0) + "a"
  }
  console.log(arr);
  return arr.join(' ');
}

console.log(pigIfy('translate english to pig latin'));


function pigIfy2(string) {

  return string.split('').forEach(function (word) {word = word.slice(1) + word.charAt(0) + "a"}).join(" ")
}

console.log(pigIfy2('translate english to pig latin'));
