const emailLabel = document.getElementById("email-label"); // this whole group just grabs the references of the ID's
const emailField = document.getElementById("email-field");
const emailErr = document.getElementById("email-error");

function validateEmail() {
    if(!emailField.value.match(/\S+@\S+\.\S+/)){ //email field needs to follow format
        emailErr.innerHTML = "Please enter a valid email"; //the error message in question
        return false;
    }

        emailErr.innerHTML = ""; //if everything is clear, remove err msg
        return true;
}