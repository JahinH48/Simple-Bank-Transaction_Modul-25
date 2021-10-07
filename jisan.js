/* document.getElementById('button-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-id');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-id');
    const userPassword = passwordField.value;

    if (userEmail == 'jahin@gmail.com' && userPassword == 'Jahin') {
        console.log('valid user');
        // window.location.href = 'bank.html';
    }
}) */


document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'jahin@gmail.com' && userPassword == 'jisan') {
        window.location.href = 'banking.html';
    }
});
