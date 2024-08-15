document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username && password) {
        document.getElementById('successMessage').style.display = 'block';
    }
});
       