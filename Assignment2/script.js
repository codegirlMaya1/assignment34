document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Perform validation
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username && email && password) {
        // If validation passes, redirect to another page
        window.location.href = 'shop.html';
    } else {
        alert('Please fill out all fields.');
    }
});