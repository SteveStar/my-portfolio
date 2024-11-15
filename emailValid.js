const emailLabel = document.getElementById("email-label");
const emailField = document.getElementById("email-field");
const emailErr = document.getElementById("email-error");

function validateEmail() {
    if(!emailField.value.match(/\S+@\S+\.\S+/)){
        emailErr.innerHTML = "Please enter a valid email";
        return false;
    }

        emailErr.innerHTML = "";
        return true;
}