document.addEventListener("DOMContentLoaded", function() {
    console.log("EKOVERN Landing Page Loaded");
  
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Your custom login logic would go here
      console.log("Username:", username);
      console.log("Password:", password);
      
      alert("Login button clicked! Implement your authentication logic here.");
    });
  });
  