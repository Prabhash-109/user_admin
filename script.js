document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if the entered email and password match the predefined credentials
    if (email === 'prabhas@gmail.com' && password === 'prabhash123') {
        alert('Login successful!');
        // Store a token or flag in local storage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the main page
        window.location.href = 'index (1).html';
    } else {
        alert('Login failed! Incorrect email or password.');
    }
});