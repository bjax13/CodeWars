function solution(num) {
  var count = 0 ;

for (var i = 0; i < num; i++) {


  if (i%3 ===  0 && i% 5 ===0) {
    count += i;
  }else if (i% 5 ===0) {
    count += i;
  }
}else if (i%3 ===  0) {
    count += i;
  }
}

return count;
}

evensAndOdds("This website is for losers LOL!");
