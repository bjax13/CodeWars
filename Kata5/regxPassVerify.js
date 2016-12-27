// function validate(password) {
//   console.log(password);
//   return /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"/.test(password);
// }

// function validate(password) {
//   console.log(password);
//   return /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"/.test(password);
// }


// my solution

function validate(password) {
  console.log(password);
  var passed = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])([^\s\b]).{6,}$/.test(password);

  if(/[^a-zA-Z0-9]/.test(password)) {
    passed = false;
    console.log('inif');
}


  console.log(passed)
  return passed;
}

// best practice 1 liner was close not quite there.

// function validate(password) {
//   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
// }



// function validate(password) {
//   console.log(password);
//   console.log(/([a-zA-Z0-9]).{6,}$/.test(password));
//   return /^([a-zA-Z0-9])([^\s]).{6,}$/.test(password);
// }

validate('fjd3 IR9');
validate('fjd3IR9.;');
