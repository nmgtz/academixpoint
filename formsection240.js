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
const phoneLink = document.getElementById("phoneLink");
const popup1 = document.getElementById("contact-popup");
const overlay1 = document.getElementById("overlay1");

// Function to show the popup and overlay
function showPopup1(e) {
  e.preventDefault();
  popup1.style.display = "block"; // Show the popup
  overlay1.style.display = "block"; // Show the overlay
}

// Add event listener for phone link click
phoneLink.addEventListener("click", showPopup1);

// Hide the popup and overlay when the overlay is clicked
overlay1.addEventListener("click", () => {
  popup1.style.display = "none"; // Hide the popup
  overlay1.style.display = "none"; // Hide the overlay
});



  // Get elements
  const createLoginButton = document.getElementById("createLogin");
  const accountButton = document.getElementById("accountButton");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");

  // Show the popup and overlay when the account button is clicked
// Function to show the popup and overlay
function showPopup(e) {
  e.preventDefault();
  popup.style.display = "block";
  overlay.style.display = "block";
}

// Add event listeners
createLoginButton.addEventListener("click", showPopup);
accountButton.addEventListener("click", showPopup);

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
  } else {
    toggleForms('login-form');
  }

  // Handle token and email in URL parameters for password reset
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');
  const token = urlParams.get('token');

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

const scriptURL = 'https://script.google.com/macros/s/AKfycbzaDX6samwozN8D5AY0u2p800FR218Bf8pJhHEcs_bOr1F_vZBmAvBuiEqnbfzma2B9/exec';

function submitForm(action) {
  const formId = (action === 'signup') ? 'signup-form' :
                 (action === 'login') ? 'login-form' :
                 (action === 'generateToken') ? 'reset-form' :
                 (action === 'resetPassword') ? 'new-password-form' : null;
const formsAndButtons = {
    signup: { formId1: 'signup-form', buttonId: 'submit1' },
    login: { formId1: 'login-form', buttonId: 'submit' },
    generateToken: { formId1: 'reset-form', buttonId: 'submit2' },
    resetPassword: { formId1: 'new-password-form', buttonId: 'submit3' }
  };
const config = formsAndButtons[action];
const { formId1, buttonId } = config;
  const button = document.getElementById(buttonId);
  const originalText = button.textContent;

  // Show loading spinner
  button.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i>`;

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
      // Retrieve username and password from form to pass to loadDashboardData
            const username = form.querySelector('input[name="username"]').value;
            const password = form.querySelector('input[name="loginPassword"]').value;

    // Redirect to dashboard after 10 seconds
    setTimeout(() => {
     loadDashboardData(username, password);
     displayDashboard(); // Display dashboard content

    }, 3000); // 3 seconds
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
 } else {
          button.textContent = originalText; // Restore button text on failure
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
    toggleDashboard();
 const buttons = [
    { buttonId: "user-dashboard", targetClass: ".user" },
    { buttonId: "notification-dashboard", targetClass: ".notification" },
    { buttonId: "message-dashboard", targetClass: ".message" },
  ];

  const targets = buttons.map(({ targetClass }) => document.querySelector(targetClass));

  buttons.forEach(({ buttonId, targetClass }) => {
    const button = document.getElementById(buttonId);
    const target = document.querySelector(targetClass);

    if (button && target) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        // Toggle the visibility
        target.style.display = target.style.display === "block" ? "none" : "block";
      });
    }
  });

  // Hide elements when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside = buttons.some(({ buttonId, targetClass }) => {
      const button = document.getElementById(buttonId);
      const target = document.querySelector(targetClass);
      return button.contains(e.target) || target.contains(e.target);
    });

    // If clicked outside, hide all targets
    if (!clickedInside) {
      targets.forEach((target) => {
        if (target) {
          target.style.display = "none";
        }
      });
    }
  });
}



function toggleDashboard() {
  const dashboardStyles = () => {
    const dashboardStyle = document.createElement("style");
    dashboardStyle.textContent = `
       body {
        position: relative; /* Reset position to allow scrolling */
        font-family: 'Roboto', Arial, sans-serif;
        background: #fff;
        color: var(--default-color);
        overflow-y: auto; /* Allow scrolling if content exceeds viewport height */
        margin: 0; /* Remove any default margin */
      }

      body::before {
        content: '';
        width: 100%;
        height: 100%;
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

// Global Variables
let email, notification, phone, schoolindex, schoolname, usermessage, globalUsername;

async function loadDashboardData(username, password) {
  try {
    const action = 'login';
    const response = await fetch(`${scriptURL}?action=${action}&username=${username}&loginPassword=${password}`);
    const rawResponse = await response.text();

    const parsedResponse = JSON.parse(rawResponse);
    // Access the nested dashboardData object
    const dashboardData = parsedResponse.dashboardData;

    // Assign values from the nested object
    email = dashboardData.email || "Not Provided";
    phone = dashboardData.phone || "Not Provided";
    schoolindex = dashboardData.schoolindex || "N/A";
    schoolname = dashboardData.schoolname || "Unknown School";
    usermessage = dashboardData.usermessage || "No message available";
    globalUsername = dashboardData.username || "Guest";

    if (parsedResponse.result === "success") {
      updateDashboardUI(dashboardData);
    } else {
      console.error("Error:", parsedResponse.message);
      showMessage(parsedResponse.message || "Unknown error", false);
    }
  } catch (error) {
    console.error("Error loading dashboard data:", error);
    showMessage("Failed to load dashboard data. Please try again later.", false);
  }
}


// Robust function to update the dashboard UI
function updateDashboardUI(data) {
  // Update user details in the dropdown
  const userEmail = document.getElementById('user-email');
  const userUsername = document.getElementById('user-username');
  const schoolName = document.getElementById('school-name');
  const schoolIndex = document.getElementById('school-index');
  var nameHomeDiv = document.getElementById('nameHmdiv');
  var hmeIndxDiv = document.getElementById('hmeIndxDiv');
  const schoolLinkH = "https://www.academixpoint.com/p/";
  document.getElementById("alertednotification").textContent = `Hi, ${data.username}: ${data.notification}`;
 document.getElementById("alertedLink").innerHTML = `Open or share this link with your officemates: <a href="${schoolLinkH}${data.schoolindex.toLowerCase()}-teachers-feeding-area.html">${data.schoolindex}-TEACHER'S FEEDING AREA</a>`;
   document.getElementById("sendName").onclick = function() {
     window.location.href = `${schoolLinkH}${data.schoolindex.toLowerCase()}-push-students-names.html`;
   }
document.getElementById("assign-teachers").onclick = function() {
     window.location.href = `${schoolLinkH}${data.schoolindex.toLowerCase()}-push-teachers-names.html`;
   }
document.getElementById("task-status").onclick = function() {
     window.location.href = `${schoolLinkH}${data.schoolindex.toLowerCase()}-task-proggress-status.html`;
   }
 if (userEmail) userEmail.textContent = data.email ? `${data.email}` : "Email not available";
  if (userUsername) userUsername.textContent = data.username ? `${data.username}` : "Username not available";
  if (schoolName) schoolName.textContent = data.schoolname ? `${data.schoolname}` : "School name not available";
  if (schoolIndex) schoolIndex.textContent = data.schoolindex ? `${data.schoolindex}` : "School index not available";
  if (nameHomeDiv) nameHomeDiv.textContent = data.schoolname ? `${data.schoolname}` : "School name not available";
  if (hmeIndxDiv) hmeIndxDiv.textContent = data.schoolindex ? `${data.schoolindex}` : "School index not available";

  // Update notification list and count
  const notificationList = document.getElementById('notification-list');
  const notificationCount = document.getElementById('hover-icon1');
  if (notificationList) {
    const notifications = Array.isArray(data.notification) ? data.notification : [data.notification].filter(Boolean);
    notificationList.innerHTML = ""; // Clear existing notifications
    notifications.forEach(note => {
      const li = document.createElement('li');
      li.textContent = data.username ? `Hi, ${data.username}: ${note}` : note || "No notifications available";
      notificationList.appendChild(li);
    });
    if (notificationCount) notificationCount.textContent = notifications.length || 0;
  }

  // Update message list and count
  const messageList = document.getElementById('message-list');
  const messageCount = document.getElementById('hover-icon2');
  if (messageList) {
    const messages = Array.isArray(data.usermessage) ? data.usermessage : [data.usermessage].filter(Boolean);
    messageList.innerHTML = ""; // Clear existing messages
    messages.forEach(msg => {
      const li = document.createElement('li');
      li.textContent = data.username ? `Hi, ${data.username}: ${msg}` : msg || "No messages available";
      messageList.appendChild(li);
    });
    if (messageCount) messageCount.textContent = messages.length || 0;
  }
}
