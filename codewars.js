
function mixedFraction(s){
  var integer = 0;

  var arr = s.split("/").map(function (s) {
    return parseInt(s,10);
  })

  //throw error if 0 is in the denominator
  if (arr[1]=== 0) {
    return "Error / 0"
  }

  //test if integer needs to be updated
  if(arr[0]> arr[1]){
    integer = Math.floor(arr[0]/arr[1],1);
    arr[0]%=arr[1];
  }

  //test if result is 0 or int only
  if (!arr[0]) {
    if (!integer) {
      return 0;
    }else {
      return integer;
    }
  }




  console.log(integer);
  console.log(arr[0]);
  console.log("/");
  console.log(arr[1]);
  console.log(arr);


  //your code here
  return integer + " " + arr[0] + "/" + arr[1];
}



console.log(mixedFraction("42/9"));
