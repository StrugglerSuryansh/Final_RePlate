// JavaScript for switching between Sign In and Sign Up forms
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

// Switch to Sign Up form
signUpBtn.onclick = function() {
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
    signUpForm.classList.remove('hidden');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');

    // Clear the Sign Up form fields
    signUpForm.reset();
};

// Switch to Sign In form
signInBtn.onclick = function() {
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');

    // Clear the Sign In form fields
    signInForm.reset();
};

// Prevent form submission for demonstration
signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign In successful!'); // Replace with actual logic
});

signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate Sign Up form fields
    const username = document.getElementById('username').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // If all checks pass, alert success (replace with actual logic)
    alert(`Sign Up successful for ${username}!`); 
});
