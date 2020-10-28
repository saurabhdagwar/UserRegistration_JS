//Constants
const NAME = "Name";
const EMAIL = "Email";
const MOBILE = "Mobile";
//Variables
let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let emailPattern = new RegExp('^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$');
let mobilePattern = new RegExp('(^[0-9]{1,3}[ ]+)?[6-9]+[0-9]{9,9}$');
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

checkType = (type,pattern) => {
    switch(type){
        case NAME :
            return validateName(pattern);
        case EMAIL :
            return validateEmail(pattern);
        case MOBILE :
            return validateMobile(pattern);
    }
}

function checkPattern(type,pattern) {
     check = checkType(type,pattern); 
    if(check == true){
        console.log("Regex Approved");
    }
    else{
        console.log("Pattern Rejected");
    }
}
checkPattern(NAME,"Saurabh");
checkPattern(NAME,"Dagwar");
checkPattern(EMAIL,"saurabhdagwar@gmail.com");
checkPattern(MOBILE,"91 8856852313");

