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

  // Toggle visibility of social buttons
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

  // Hide buttons except the globe button
  const hideButtonsExceptGlobe = () => {
    const buttons = ["whatsapp", "facebook", "share", "sms", "close", "x"];
    buttons.forEach((id) => {
      const button = document.getElementById(id);
      if (button) button.style.display = "none";
    });
    const globe = document.getElementById("globe");
    if (globe) globe.style.display = "block";
  };

  // Add event listeners for toggle visibility
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

  // Account popup logic
  const accountButton = document.getElementById("accountButton");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  if (accountButton && popup && overlay) {
    accountButton.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "block";
      overlay.style.display = "block";
    });

    overlay.addEventListener("click", () => {
      popup.style.display = "none";
      overlay.style.display = "none";
    });
  }

  // Login and Register Button Logic
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");

  if (loginButton && registerButton) {
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "none";
      overlay.style.display = "none";
      applyStyles();
      document.getElementById("nmgContainerDiv").style.display = "none";
      toggleForms("lg-form");
    });

    registerButton.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "none";
      overlay.style.display = "none";
      applyStyles();
      document.getElementById("nmgContainerDiv").style.display = "none";
      toggleForms("sp-form");
    });
  }

  // Reset Password Logic
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");
  const token = urlParams.get("token");

  if (email && token) {
    toggleForms("newSet-form");
    const resetForm = document.getElementById("new-password-form");
    if (resetForm) {
      resetForm.querySelector('input[name="email"]').value = email;
      resetForm.querySelector('input[name="token"]').value = token;
    }
    const homepage = document.getElementById("nmgContainerDiv");
    if (homepage) homepage.style.display = "none";
  } else {
    toggleForms("lg-form");
  }
});

// Function to toggle between forms
function toggleForms(formIdToShow) {
  const forms = document.querySelectorAll(".form-container");
  forms.forEach((form) => (form.style.display = "none"));
  const selectedForm = document.getElementById(formIdToShow);
  if (selectedForm) selectedForm.style.display = "block";
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
            isLoggedIn = true; 
            displayDashboard(data.dashboardData); // Display the user's dashboard
        } else if (['signup', 'resetPassword', 'generateToken'].includes(action)) {
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
  form.querySelectorAll('input[required], select[required]').forEach(input => {
    if (!input.value.trim()) {
      showMessage(`${input.previousElementSibling.textContent} is required.`, false);
      isValid = false;
      return;
    }
  });

  // Additional validation logic (e.g., email, phone number) can go here

  if ((action === 'signup' || action === 'resetPassword') && isValid) {
    const password = form.querySelector('input[name="newPassword"], input[name="password"]');
    const confirmPassword = form.querySelector('input[name="newConfirmPassword"], input[name="confirmPassword"]');
    
    if (password && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/-]{8,}$/.test(password.value.trim())) {
        showMessage("Password must be at least 8 characters long and contain both letters and numbers.", false);
        isValid = false;
    }

    if (password && confirmPassword && password.value.trim() !== confirmPassword.value.trim()) {
        showMessage("Passwords do not match.", false);
        isValid = false;
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


function displayDashboard(dashboardData) {
  const dashboard = document.getElementById('dashboard');
  dashboard.innerHTML = `
    <h2>Welcome, ${dashboardData.username}</h2>
    <p>School Name: ${dashboardData.schoolname}</p>
    <p>School Index: ${dashboardData.schoolindex}</p>
    <p>Email: ${dashboardData.email}</p>
    <p>Phone: ${dashboardData.phone}</p>
  `;
  toggleForms('dashboard');
}
function logout() {
  localStorage.removeItem("isLoggedIn");
  toggleForms('login-form');
}
