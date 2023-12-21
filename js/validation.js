let email_array = [];
let counter = 0;

function checkPassword(str){
    let counter = 0;
    const specialchar = '!@#$%^&*()\\-+={}[\\]:;"\'<>,.?/|\\\\]';

    // if(/[^0-9]/.test(str)){
    //     counter += 1;
    // }

    // if(/[^A-Z]/.test(str)){
    //     counter += 1;
    // }

    // if(/[^a-z]/.test(str)){
    //     counter += 1;
    // }

    // if(/[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/.test(str){
    //     counter += 1;
    // }
    
    for (const char of str){
        if(char >= '0' && char <= '9'){
            counter += 1;
            break;
        }
    }

    for (const char of str){
        if(char >= 'A' && char <= 'Z'){
            counter += 1;
            break;
        }
    }

    for (const char of str){
        if(char >= 'a' && char <= 'z'){
            counter += 1;
            break;
        }
    }

    for (const char of str){
        if (specialchar.includes(char)){
            counter += 1;
            break;
        }
    }
    
    console.log(counter);

    if(counter = 4){
        return true;
    }

    return false;
}

function checkAge(str){
    for (const char of str){
        if(char >= '0' && char <= '9'){
            return true;
        }
    }

    return false;
}

function successPage(counter, email){
    if(counter == 6){
        email_array.push(email);
        window.location.href = "success.html"; 
    }
}

document.getElementById("signup").addEventListener("submit", function (e) {
    e.preventDefault();
    
    confirm("Are you sure you want to continue?");

    let email = document.getElementById("email_input").value;
    let password = document.getElementById("password_input").value;
    let password_confirmation = document.getElementById("password-confirmation_input").value;
    let age = document.getElementById("age_input").value;
    let female = document.getElementById("female").value;
    let male = document.getElementById("male").value;
    let other = document.getElementById("other-text").value;
    counter = 0;

    if(email === ""){
        document.getElementById("error-email").innerHTML = "This field is required and cannot be empty.";
    } else if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Please enter a valid email (must end with '@gmail.com').";
    } else if(email_array.includes(email)){
        document.getElementById("error-email").innerHTML = "An account with email " + email + " already exists.";
    } else{
        document.getElementById("error-email").innerHTML = "";
        counter += 1;
    }
    
    if(password === ""){
        document.getElementById("error-password").innerHTML = "This field is required and cannot be empty.";
    } else if(password.length <= 8){
        document.getElementById("error-password").innerHTML = "Password must be at least 8 characters long, containing at least one lowercase letter (a-z), one uppercase letter (A-Z), one number (0-9), and one symbol.";
    } else if(!checkPassword(password)){
        document.getElementById("error-password").innerHTML = "Password must be at least 8 characters long, containing at least one lowercase letter (a-z), one uppercase letter (A-Z), one number (0-9), and one symbol.";
    } else{
        document.getElementById("error-password").innerHTML = "";
        counter += 1;
    }

    if(password_confirmation == ""){
        document.getElementById("error-password-confirmation").innerHTML = "This field is required and cannot be empty.";
    } else if(password_confirmation != password){
        document.getElementById("error-password-confirmation").innerHTML = "Password does not match.";
    } else{
        document.getElementById("error-password-confirmation").innerHTML = "";
        counter += 1;
    }
    
    if(age === ""){
        document.getElementById("error-age").innerHTML = "The age field is required and cannot be empty.";
    } else if(age < 13){
        document.getElementById("error-age").innerHTML = "Age must be above 13 years old.";
    } else if(!checkAge(age)){
        document.getElementById("error-age").innerHTML = "Age must be numeric.";
    } else{
        document.getElementById("error-age").innerHTML = "";
        counter += 1;
    }

    if(document.getElementById("terms").checked == false){
        document.getElementById("error-terms").innerHTML = "Please indicate that you accept the Terms & Conditions and Privacy Policy."
    } else{
        document.getElementById("error-terms").innerHTML = "";
        counter += 1;

    }

    if(document.getElementById("female").checked == false && document.getElementById("male").checked == false && document.getElementById("other-radio").checked == false){
        document.getElementById("error-gender").innerHTML = "Select at least one gender identity option."
    } else if(document.getElementById("other-radio").checked == true){
        if(other == ""){
            document.getElementById("error-gender").innerHTML = "The gender field is required and cannot be empty."
        } else{
            document.getElementById("error-gender").innerHTML = "";
            counter += 1;
        }
    } else{
        document.getElementById("error-gender").innerHTML = "";
        counter += 1;
    }

    successPage(counter, email);

})