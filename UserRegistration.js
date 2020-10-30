//Constants
const NAME = "Name";
const EMAIL = "Email";
const MOBILE = "Mobile";
const PASSWORD = "Password";
//Variables
let namePattern = new RegExp("^[A-Z]{1}[a-z]{2,}$");
let emailPattern = new RegExp("^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$");
let mobilePattern = new RegExp("^([0-9]{2}[ ]+)?[6-9]{1}[0-9]{9}$");
let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%*&+?/!]{1}).{8,}$");
let pattern;
let check;
//Function Validate Name
validateName = (pattern) => {
  return namePattern.test(pattern);
};
//Function Validate Email
validateEmail = (pattern) => {
  return emailPattern.test(pattern);
};
//function validate Mobile Number
validateMobile = (pattern) => {
  return mobilePattern.test(pattern);
};
//function Password Pattern
validatePassword = (pattern) => {
  return passwordPattern.test(pattern);
};

checkType = (type, pattern) => {
  switch (type) {
    case NAME:
      return validateName(pattern);
    case EMAIL:
      return validateEmail(pattern);
    case MOBILE:
      return validateMobile(pattern);
    case PASSWORD:
      return validatePassword(pattern);
  }
};

checkPattern = (type, pattern) => {
  check = checkType(type, pattern);
  if (check == true) {
    console.log("Regex Approved");
  } else {
    console.log("Pattern Rejected");
  }
}

userInput = () => {
    var prompt = require('prompt-sync')();
    var firstName = prompt('Enter First Name: ');
    checkPattern(NAME,firstName);
    var lastName = prompt("Enter Last Name: ");
    checkPattern(NAME,lastName);
    var email = prompt("Enter Email: ");
    checkPattern(EMAIL,email);
    var mobile = prompt("Enter Mobile Number: ");
    checkPattern(MOBILE,mobile);
    var password = prompt("Enter Password: ");
    checkPattern(PASSWORD,password);

}
userInput();