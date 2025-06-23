document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const schoolInput = document.getElementById("school-input");
    const passwordInput = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");
  
    // Set specific valid entries
    const validSchool = "RandomSchool"; // Replace with your specific school name
    const validPassword = "Education"; // Replace with your specific password

    // Set the customizable redirect link
    const redirectLink = "https://www.your-custom-link.com"; // Replace with your desired link
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from submitting normally
  
      // Check entries
      if (schoolInput.value !== validSchool || passwordInput.value !== validPassword) {
        errorMessage.textContent = "Invalid School or Password!"; // Display error message
        errorMessage.style.color = "#f06272"; // Apply error color
      } else {
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green"; // Apply success color
        
        // Redirect to the customizable link
        setTimeout(() => {
          window.location.href = "home.html"; // Navigate to the specified link
        }, 1000); // Optional delay of 1 second before redirecting
      }
    });
});
