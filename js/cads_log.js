document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const submitBtn = document.getElementById('submit-btn');
    const isLoginPage = window.location.pathname.includes('login.html');
    
    submitBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const fullName = document.getElementById('full-name') ? document.getElementById('full-name').value : null;
        const termsAccepted = document.getElementById('terms') ? document.getElementById('terms').checked : true;

        if (!email || !password || (termsAccepted === false && !isLoginPage)) {
            alert('Por favor, preencha todos os campos e aceite os termos.');
            return;
        }

        if (isLoginPage) {
            // Login logic
            const storedUser = JSON.parse(localStorage.getItem(email));
            if (storedUser && storedUser.password === password) {
                alert('Login bem-sucedido!');
                window.location.href = 'profile.html'; // Redirect to profile page after successful login
            } else {
                alert('Credenciais inválidas.');
            }
        } else {
            // Cadastro logic
            if (localStorage.getItem(email)) {
                alert('Usuário já existe.');
            } else {
                const userProfile = {
                    fullName: fullName,
                    email: email,
                    password: password
                };
                localStorage.setItem(email, JSON.stringify(userProfile));
                alert('Cadastro realizado com sucesso!');
                window.location.href = 'profile.html'; // Redirect to login page after registration
            }
        }
    });
});
