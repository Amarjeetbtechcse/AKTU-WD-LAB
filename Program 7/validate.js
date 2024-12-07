function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var isValid = true;

    // Clear any previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Validate password
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;     

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must include at least one lowercase letter, one uppercase letter, and one digit.";
        isValid = false;
    }

    return isValid;
}
