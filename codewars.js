
function mixedFraction(s){
  var integer = 0;
  var negative = false;
  var arr = s.split("/").map(function (s) {
    return parseInt(s,10);
  })

  //throw error if 0 is in the denominator
  if (arr[1]=== 0) {
    throw new Error('ZeroDivisionError');
  }


  if (arr[0] < 0 || arr[1] <0 ) {
    if (arr[0] < 0 && arr[1] <0 ) {
      negative = false;
    }else {
      negative = true;
    }
    if (arr[0]< 0) {
      arr[0]*=-1;
    }
    if (arr[1]< 0) {
      arr[1]*=-1;
    }

  }

  if (arr[0]=== arr[1]) {
    if (negative) {
      return '-1';
    }
    return "1";
  }

  //test if integer needs to be updated
  if(arr[0]> arr[1]){
    integer = Math.floor(arr[0]/arr[1],1);
    arr[0]%=arr[1];
  }

  //test if result is 0 or int only
  if (!arr[0]) {
    if (!integer) {
      return "0";
    }else {
      if (negative) {
        integer*=-1;
      }
      return integer.toString();
    }
  }

  //reduce fraction
  for (var i = 2; i < arr[1]; i++) {
    if (arr[0]%i === 0 && arr[1]%i === 0) {
      arr[0]/=i;
      arr[1]/=i;
      i=1;
    }
  }




  console.log(integer);
  console.log(arr[0]);
  console.log("/");
  console.log(arr[1]);
  console.log(arr);

  if (negative) {
    if (integer) {
      integer*=-1;
    }else {
      arr[0]*=-1;
    }
  }

  if (integer === 0) {
    return arr[0] + "/" + arr[1];
  }

  return integer + " " + arr[0] + "/" + arr[1];
}



console.log(mixedFraction("1/1"));
