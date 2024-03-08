document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const username = document.getElementById("logEmail");
    const password = document.getElementById("logPassword");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        let isValid = true;

        if (usernameValue === '') {
            setError(username, "Username cannot be blank");
            isValid = false;
        } else {
            setSuccess(username);
        }

        if (passwordValue === '') {
            setError(password, "Password cannot be blank");
            isValid = false;
        } else if (passwordValue.length <= 4) {
            setError(password, "Password is too small");
            isValid = false;
        } else {
            setSuccess(password);
        }

        if (isValid) {
            login(usernameValue, passwordValue);
        } else {
            alert('Please fill all fields correctly before submitting the form.');
        }
    }

    function setError(input, msg) {
        const formControl = input.parentElement;
        const label = formControl.querySelector("label");
        label.innerText = msg;
        formControl.className = "input-field error";
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "input-field success";
    }

    function login(username, password) {
        const container = document.querySelector(".container");
        const storedData = localStorage.getItem('signUpData');
        if (storedData) {
            const signUpData = JSON.parse(storedData);
            const user = signUpData.find(user => user.username === username && user.password === password);
            if (user) {
                alert('Logined Successfully');

                setTimeout(function() {
                    window.location.href = "index.html";
                }, 1000);
            } else {
                alert('Invalid username or password. Please try again.');
            }
        } else {
            alert('No user data found. Please sign up first.');
        }
    }
});



