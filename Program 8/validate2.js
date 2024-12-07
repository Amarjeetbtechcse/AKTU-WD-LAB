function validateForm() {
    var phoneNum = document.getElementById("phoneNum").value;
    var email = document.getElementById("email").value;

    var isValid = true;

    // Clear any previous error messages
    document.getElementById("phoneNumError").textContent = "";
    document.getElementById("emailError").textContent = "";

    // Validate phone number please amarjeet
    if (phoneNum === "") {
        document.getElementById("phoneNumError").textContent = "Phone number is required";
        isValid = false;
    } else if (phoneNum.length < 12) {
        document.getElementById("phoneNumError").textContent = "Phone number must be at least 12 characters long.";
        isValid = false;
    }

    // Validate email amarjeet
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    return isValid;
}
