// function validate(password) {
//   console.log(password);
//   return /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"/.test(password);
// }

// function validate(password) {
//   console.log(password);
//   return /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$"/.test(password);
// }

function validate(password) {
  console.log(password);
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\s]).{6,}$/.test(password);
}
