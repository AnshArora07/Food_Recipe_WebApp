document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const username = document.getElementById("regUsername");
    const email = document.getElementById("regEmail");
    const password = document.getElementById("regPassword");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        let isValid = true;

        if (usernameValue === '') {
            setError(username, "Username cannot be blank");
            isValid = false;
        } else {
            setSuccess(username);
        }

        if (emailValue === '') {
            setError(email, "Email cannot be blank");
            isValid = false;
        } else if (!isEmail(emailValue)) {
            setError(email, "Enter a valid email address");
            isValid = false;
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, "Password cannot be blank");
            isValid = false;
        } else if (passwordValue.length < 8) {
            setError(password, "Password must be at least 8 characters");
            isValid = false;
        } else {
            setSuccess(password);
        }

        if (isValid) {
            Signup(usernameValue, emailValue, passwordValue);
        } else {
            alert('Please fill all fields correctly before submitting the form.');
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const label = formControl.querySelector("label");
        label.innerText = message;
        formControl.className = "input-field error";
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "input-field success";
    }

    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function Signup(username, email, password) {
        let signUpData = JSON.parse(localStorage.getItem('signUpData')) || [];

        signUpData.push({
            "username": username,
            "email": email,
            "password": password
        });

        localStorage.setItem('signUpData', JSON.stringify(signUpData));
        alert('Registration successful!');
        window.location.href = "login.html";
    }
});
