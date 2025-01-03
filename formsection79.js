document.addEventListener("DOMContentLoaded", () => {
  // Function to apply styles dynamically
   const applyStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
      body {
        position: fixed;
        font-family: 'Roboto', Arial, sans-serif;
        background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjy2cfaQRRkMgdUGuc-4HskPmN9ShQ5ogiRyvKHeN5kBwG-FA2FKqTvim76kcf-1FiAyV7kheyfOkcoWSjybLmp2Y_o0Mp9IK-l8K9fFsy5bG1xlsOriUJa5KfctpIt8dOcMmZ5eaJmMuQByNHFhTmXx8GWwDtYnCMPefJjr6GgOwQDbBttfTpn0Oj-RF2S/s1600/students%201.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: var(--default-color);
      }

      body::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        z-index: -1;
      }
    `;
    document.head.appendChild(style);
    const socialBtn = document.querySelector(".social-btn");
    if (socialBtn) socialBtn.style.display = "none";
  };

  const toggleVisibility = () => {
  const whatsapp = document.getElementById("whatsapp");
  const facebook = document.getElementById("facebook");
  const share = document.getElementById("share");
  const sms = document.getElementById("sms");
  const globe = document.getElementById("globe");
  const close = document.getElementById("close");
  const x = document.getElementById("x");

  if (whatsapp && facebook && share && sms && globe && close) {
    const isGlobeVisible = globe.style.display !== "none";
    whatsapp.style.display = isGlobeVisible ? "block" : "none";
    facebook.style.display = isGlobeVisible ? "block" : "none";
    share.style.display = isGlobeVisible ? "block" : "none";
    sms.style.display = isGlobeVisible ? "block" : "none";
    globe.style.display = isGlobeVisible ? "none" : "block";
    close.style.display = isGlobeVisible ? "block" : "none";
    x.style.display = isGlobeVisible ? "block" : "none";
  }
};

const hideButtonsExceptGlobe = () => {
  const whatsapp = document.getElementById("whatsapp");
  const facebook = document.getElementById("facebook");
  const share = document.getElementById("share");
  const sms = document.getElementById("sms");
  const close = document.getElementById("close");
  const globe = document.getElementById("globe");
  const x = document.getElementById("x");

  if (whatsapp && facebook && share && sms && close && globe) {
    whatsapp.style.display = "none";
    facebook.style.display = "none";
    share.style.display = "none";
    sms.style.display = "none";
    close.style.display = "none";
    globe.style.display = "block";
    x.style.display = "none";
  }
};

const globe = document.getElementById("globe");
if (globe) {
  globe.addEventListener("click", (e) => {
    e.preventDefault();
    toggleVisibility();
  });
}

const close = document.getElementById("close");
if (close) {
  close.addEventListener("click", (e) => {
    e.preventDefault();
    hideButtonsExceptGlobe();
  });
}


  // Get elements
  const accountButton = document.getElementById("accountButton");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");

  // Show the popup and overlay when the account button is clicked
  accountButton.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "block"; // Show the popup
    overlay.style.display = "block"; // Show the overlay
  });

  // Hide the popup and overlay when the overlay is clicked
  overlay.addEventListener("click", () => {
    popup.style.display = "none"; // Hide the popup
    overlay.style.display = "none"; // Hide the overlay
  });

  // Add event listeners for login and register buttons
  if (loginButton && registerButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "none"; // Hide the popup
      overlay.style.display = "none"; // Hide the overlay
      applyStyles(); // Apply the styles dynamically
      document.getElementById("header").style.display = "none";
      document.getElementById("dashboard").style.display = "none";
      document.getElementById("main-id").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector(".footer-bottom").style.display = "none";
      document.querySelector(".login-form").style.display = "block";
      toggleForms("lg-form");
    });

    registerButton.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "none"; // Hide the popup
      overlay.style.display = "none"; // Hide the overlay
      applyStyles(); // Apply the styles dynamically
      document.getElementById("header").style.display = "none";
      document.getElementById("dashboard").style.display = "none";
      document.getElementById("main-id").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector(".footer-bottom").style.display = "none";
      document.querySelector(".login-form").style.display = "block";
      toggleForms("sp-form");
    });
  } else {
    console.error("Login or register button elements not found");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  // Check login state on page load
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  if (isLoggedIn) {
    displayDashboard();
  }

  // Handle token and email in URL parameters for password reset
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');
  const token = urlParams.get('token');
   popup.style.display = "none"; // Hide the popup
      overlay.style.display = "none"; // Hide the overlay
      document.getElementById("header").style.display = "none";
      document.getElementById("dashboard").style.display = "none";
      document.getElementById("main-id").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector(".footer-bottom").style.display = "none";
      document.querySelector(".login-form").style.display = "block";
      toggleForms("newSet-form");

  if (email && token) {
    toggleForms('new-password-form');
    document.querySelector('#new-password-form input[name="email"]').value = email;
    document.querySelector('#new-password-form input[name="token"]').value = token;
  }
});

// Function to toggle between forms
function toggleForms(formIdToShow) {
  // Get all form containers
  const forms = document.querySelectorAll('.form-container');
  
  // Hide all forms
  forms.forEach((form) => {
    form.style.display = 'none';
  });
  
  // Show the selected form
  const selectedForm = document.getElementById(formIdToShow);
  if (selectedForm) {
    selectedForm.style.display = 'block';
  }
}

// Initial setup: Show the login form by default
document.addEventListener('DOMContentLoaded', () => {
  toggleForms('lg-form'); // Show the login form initially
});

// Function to toggle password visibility
function togglePasswordVisibility(inputName) {
  const inputField = document.querySelector(`input[name="${inputName}"]`);
  if (inputField) {
    inputField.type = inputField.type === 'password' ? 'text' : 'password';
  }
}

// Function to handle form submission (dummy example)
function submitForm(formType) {
  console.log(`Form submitted: ${formType}`);
  // Add your form handling logic here
}



function togglePasswordVisibility(inputName) {
  const passwordField = document.querySelector(`input[name="${inputName}"]`);
  if (passwordField) {
    const eyeIcon = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzwTnlPH2wJn3eCP6cVP4Hv1aRP_lnEwTEgDMcThqjKr079o8QLUuZniWBIY5Hs_khG/exec';

function submitForm(action) {
  const formId = (action === 'signup') ? 'signup-form' :
                 (action === 'login') ? 'login-form' :
                 (action === 'generateToken') ? 'reset-form' :
                 (action === 'resetPassword') ? 'new-password-form' : null;

  if (!formId) {
    showMessage("Invalid action specified", false);
    return;
  }

  const form = document.getElementById(formId);

  if (validateForm(form, action)) {
    const formData = new URLSearchParams(new FormData(form));
    formData.append("action", action);

    fetch(scriptURL, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        showMessage(data.message, data.result === "success");

       if (data.result === "success") {
  if (action === 'login') {
    isLoggedIn = true; // Update login state
    
    // Show success message with overlay
    showMessageWithOverlay(
      "Login successful! Redirecting to dashboard...", 
      true
    );

    // Redirect to dashboard after 10 seconds
    setTimeout(() => {
     displayDashboard();
    }, 10000); // 10 seconds
  } else if (['signup', 'resetPassword', 'generateToken'].includes(action)) {
   let additionalMessage = "Please you can log in to your account.";

    // Adjust the last part of the message based on the action
    if (action === 'signup') {
        additionalMessage = "Please now you log in to continue.";
    } else if (action === 'resetPassword') {
        additionalMessage = "Use your new password to log in.";
    } else if (action === 'generateToken') {
        additionalMessage = "Check reset token email that we have sent to your email address.";
    }

    // Show the message with the dynamic part
    showMessageWithOverlay(
      `${action.charAt(0).toUpperCase() + action.slice(1)} successful! ${additionalMessage}`, 
      true
    );
    toggleForms('lg-form');
  }
 }
      })
      .catch(error => {
        console.error('Error:', error); // Log the error for debugging
        showMessage('Error connecting to server', false); // Notify the user
      });
  }
}

function validateForm(form, action) {
  let isValid = true;

  // General required field validation
  form.querySelectorAll('input[required], select[required]').forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = 'red'; // Highlight empty required fields
      showMessage(`${input.previousElementSibling.textContent} is required.`, false);
      isValid = false;
    } else {
      input.style.borderColor = ''; // Reset border color if valid
    }
  });

  // Additional validation logic based on action
  if (action === 'signup' || action === 'resetPassword') {
    const password = form.querySelector('input[name="newPassword"], input[name="password"]');
    const confirmPassword = form.querySelector('input[name="newConfirmPassword"], input[name="confirmPassword"]');

    // Password strength validation
    if (password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}[\]:;"'<>,.?/-]{8,}$/.test(password.value.trim())) {
      password.style.borderColor = 'red';
      showMessage("Password must be at least 8 characters long and contain both letters and numbers.", false);
      isValid = false;
    } else if (password) {
      password.style.borderColor = '';
    }

    // Password match validation
    if (password && confirmPassword && password.value.trim() !== confirmPassword.value.trim()) {
      confirmPassword.style.borderColor = 'red';
      showMessage("Passwords do not match.", false);
      isValid = false;
    } else if (confirmPassword) {
      confirmPassword.style.borderColor = '';
    }
  }

  // Email validation for signup and reset password forms
  if ((action === 'signup' || action === 'resetPassword') && isValid) {
    const email = form.querySelector('input[name="email"]');
    if (email && !/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      email.style.borderColor = 'red';
      showMessage("Please enter a valid email address.", false);
      isValid = false;
    } else if (email) {
      email.style.borderColor = '';
    }
  }

  // Phone number validation for signup
  if (action === 'signup' && isValid) {
    const phone = form.querySelector('input[name="phone"]');
    if (phone && !/^\+?[0-9]{10,15}$/.test(phone.value.trim())) {
      phone.style.borderColor = 'red';
      showMessage("Please enter a valid phone number.", false);
      isValid = false;
    } else if (phone) {
      phone.style.borderColor = '';
    }
  }

  // Specific validation for login form
  if (action === 'login' && isValid) {
    const username = form.querySelector('input[name="username"]');
    const loginPassword = form.querySelector('input[name="loginPassword"]');

    if (!username || !username.value.trim()) {
      username.style.borderColor = 'red';
      showMessage("Username is required.", false);
      isValid = false;
    } else if (username) {
      username.style.borderColor = '';
    }

    if (!loginPassword || !loginPassword.value.trim()) {
      loginPassword.style.borderColor = 'red';
      showMessage("Password is required.", false);
      isValid = false;
    } else if (loginPassword) {
      loginPassword.style.borderColor = '';
    }
  }

  return isValid;
}


function showMessage(message, success = true) {
  const visibleForm = document.querySelector('.form-container[style*="display: block"]');
  if (!visibleForm) {
    console.error("No visible form found.");
    return;
  }

  const messageBox = visibleForm.querySelector(".message-box");
  messageBox.style.display = "block";
  messageBox.className = `message-box ${success ? "success" : "error"}`;
  messageBox.textContent = message;

  setTimeout(() => {
    messageBox.style.display = "none";
  }, 5000);
}

function showMessageWithOverlay(message, success = true, onComplete = null) {
  const visibleForm = document.querySelector('.form-container[style*="display: block"]');
  if (!visibleForm) {
    console.error("No visible form found.");
    return;
  }

  // Show message box
  const messageBox = visibleForm.querySelector(".message-box");
  messageBox.style.display = "block";
  messageBox.className = `message-box ${success ? "success" : "error"}`;
  messageBox.textContent = message;

  // If success, create overlay
 if (success) {
  const overlay = document.createElement("div");
  overlay.className = "overlay-ms-bx"; // Assign CSS class to the overlay

  const messageBox = document.createElement("div");
  messageBox.className = "overlay-message-box"; // Assign CSS class for the message box
  messageBox.textContent = message;

  overlay.appendChild(messageBox); // Add the message box to the overlay
  document.body.appendChild(overlay);

  // Remove overlay after 10 seconds
  setTimeout(() => {
    document.body.removeChild(overlay);
    if (typeof onComplete === "function") {
      onComplete(); // Execute the provided callback function
    }
  }, 10000); // 10 seconds
}

 else {
    // Hide the error message after 5 seconds
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 5000);
  }
}

function displayDashboard() {
    toogleDashboard();
toggleNotification();
toggleUser();

}


 function toggleUser() {
    const dropdown = document.getElementById('user-dropdown');
    const isHidden = dropdown.classList.contains('hidden');
    
    // Toggle visibility by adding/removing 'hidden' class
    dropdown.classList.toggle('hidden', !isHidden);
    
    // Optional: Update user info whenever the dropdown is toggled
    updateUserInfo();
  }

  // Function to update user information (email, username, etc.)
  function updateUserInfo() {
    const userEmail = document.getElementById('user-email');
    const userUsername = document.getElementById('user-username');
    const schoolName = document.getElementById('school-name');
    const schoolIndex = document.getElementById('school-index');
    
    // Example data (Replace with dynamic data or API call)
    userEmail.textContent = 'user@example.com';      // Replace with dynamic email
    userUsername.textContent = 'johndoe';            // Replace with dynamic username
    schoolName.textContent = 'Example High School';  // Replace with dynamic school name
    schoolIndex.textContent = '12345';               // Replace with dynamic school index
  }

  // Logout function (for example purposes, this will just log to the console)
  function logout() {
    // Implement your logout logic here (e.g., redirect, clear session, etc.)
    console.log('User logged out');
    
    // Optional: Close the dropdown after logout (if needed)
    document.getElementById('user-dropdown').classList.add('hidden');
  }
  

  // Function to toggle the dropdown visibility
  function toggleNotification() {
    const dropdownId = 'notification-dropdown';
    const dropdown = document.getElementById(dropdownId);
    const isHidden = dropdown.classList.contains('hidden');
    
    // Toggle visibility by adding/removing 'hidden' class
    dropdown.classList.toggle('hidden', !isHidden);
    
    // Optional: Add logic to update notification count or list if needed
    updateNotificationCount();
  }

  // Function to update the notification count (you can modify the logic based on your use case)
  function updateNotificationCount() {
    const countElement = document.getElementById('hover-icon1');
    const newCount = getNotificationCount();  // Function to get the updated count
    countElement.textContent = newCount;
  }

  // Example function to simulate getting the notification count
  function getNotificationCount() {
    return Math.floor(Math.random() * 10);  // For now, random number
  }

    // Function to set user details in the user menu
    function setUserDetails(email, username, schoolName, schoolIndex) {
      document.getElementById('user-email').textContent = `Email: ${email}`;
      document.getElementById('user-username').textContent = `Username: ${username}`;
      document.getElementById('school-name').textContent = `School: ${schoolName}`;
      document.getElementById('school-index').textContent = `Index: ${schoolIndex}`;
    }

    // Logout function
    function logout() {
      if (confirm('Are you sure you want to log out?')) {
        console.log('User logged out'); // Replace with actual logout logic
        window.location.href = '/login'; // Redirect to login page
      }
    }

   

function toogleDashboard() {
  const dashboardStyles = () => {
    const dashboardStyle = document.createElement("style");
    dashboardStyle.textContent = `
      body {
        position: fixed;
        font-family: 'Roboto', Arial, sans-serif;
        background: #fff;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: var(--default-color);
      }

      body::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        z-index: -1;
      }
    `;
    document.head.appendChild(dashboardStyle);
};
     document.getElementById("header").style.display = "none";
     dashboardStyles();
      document.getElementById("dashboard").style.display = "block";
      document.getElementById("main-id").style.display = "none";
      document.querySelector(".footer").style.display = "none";
      document.querySelector(".footer-bottom").style.display = "none";
      document.querySelector(".login-form").style.display = "none";
}
