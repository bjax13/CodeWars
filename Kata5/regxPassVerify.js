function validate(password) {
  return /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"/.test(password);
}
