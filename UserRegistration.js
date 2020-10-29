//Constants
const NAME = "Name";
const EMAIL = "Email";
const MOBILE = "Mobile";
const PASSWORD  = "Password";
//Variables
let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let emailPattern = new RegExp('^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$');
let mobilePattern = new RegExp('(^[0-9]{1,3}[ ]*)?[6-9]+[0-9]{9,9}$');
let passwordPattern = new RegExp('^(?=.*[A-Z])(?=.*[a-z0-9!@#$%^&*+?/]).{8,}$');
let pattern ;
let check ;
//Function Validate Name
validateName = (pattern) =>  {
    return namePattern.test(pattern);
}
//Function Validate Email
validateEmail = (pattern) => {
    return  emailPattern.test(pattern);
}
//function validate Mobile Number
validateMobile = (pattern) => {
    return mobilePattern.test(pattern);
}
//function Password Pattern
validatePassword = (pattern) => {
    return passwordPattern.test(pattern);
}

checkType = (type,pattern) => {
    switch(type){
        case NAME :
            return validateName(pattern);
        case EMAIL :
            return validateEmail(pattern);
        case MOBILE :
            return validateMobile(pattern);
        case PASSWORD :
            return validatePassword(pattern);
    }
}

function checkPattern(type,pattern) {
     check = checkType(type,pattern); 
    if(check == true){
        return "Regex Approved";
    }
    else{
        return "Pattern Rejected";
    }
}
console.log(`Validate First Name: ${checkPattern(NAME,"Saurabh")}`); 
console.log(`Validate Last Name: ${checkPattern(NAME,"Dagwar")}`);
console.log(`Validate Email: ${checkPattern(EMAIL,"saurabhdagwar@gmail.com")}`) ;
console.log(`Validate Mobile Number: ${checkPattern(MOBILE,"91 8856852313")}`) ;
console.log(`Validate Password: ${checkPattern(PASSWORD,"SaurabDagwar")}`) ;

