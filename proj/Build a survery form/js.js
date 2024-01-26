document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
  
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(registrationForm);
  
      // Convert FormData to JSON
      const formDataJSON = {};
      formData.forEach((value, key) => {
        formDataJSON[key] = value;
      });
  
      // Send form data to server using fetch
      fetch("process.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataJSON),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === "success") {
            // Display success message
            alert("Registration successful! Thank you for signing up.");
            // Optionally, reset the form
            registrationForm.reset();
          } else {
            // Display error message
            alert("Registration failed. Please try again later.");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    });
  });