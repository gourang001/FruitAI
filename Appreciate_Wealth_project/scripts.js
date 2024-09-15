document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Dummy credentials
    const dummyUsername = "user";
    const dummyPassword = "password";

    if (username === dummyUsername && password === dummyPassword) {
        window.location.href = "home.html";  // Redirect to homepage
    } else {
        document.getElementById("error-msg").textContent = "Invalid Username or Password!";
    }
});
