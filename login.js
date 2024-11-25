
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login attempt:', { email, password });
});

document.querySelector('.back-button').addEventListener('click', function () {
    console.log('Back clicked');
});

document.querySelector('.google-btn').addEventListener('click', function () {
    console.log('Google login clicked');
});

document.querySelector('.facebook-btn').addEventListener('click', function () {
    console.log('Facebook login clicked');
});
