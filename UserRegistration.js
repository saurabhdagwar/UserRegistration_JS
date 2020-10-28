let NAME_PATTERN = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let pattern ;
function validate(pattern) {
    return NAME_PATTERN.test(pattern);
}
function checkPattern() {
    var check = validate("Saurabh"); 
    if(check == true){
        console.log("Regex Approved");
    }
    else{
        console.log("Pattern Rejected");
    }
}
checkPattern();