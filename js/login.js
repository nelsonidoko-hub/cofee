document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            const remember = document.getElementById('markCheckbox').checked;

            if (!email || !password) {
                alert('please fill in both email and password before logging in.');
                return;
            }
            if (!remember) {
                alert('Please check "check the box" to continue.');
                return;
            }

            window.location.href = 'index.html';
        });
    }
});






