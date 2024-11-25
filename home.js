
const messageBubble = document.querySelector('.message-bubble');

function float() {
    messageBubble.style.transform = 'rotate(0deg) translateY(-5px)';
    setTimeout(() => {
        messageBubble.style.transform = 'rotate(0deg) translateY(0)';
    }, 1000);
}

setInterval(float, 2000);



const loginBtn = document.querySelector('.btn-login');
const signupBtn = document.querySelector('.btn-signup');

loginBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#f5f5f5';
});

loginBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'white';
});

signupBtn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#FFE44D';
});

signupBtn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#FFD700';
});