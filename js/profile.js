document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const saveBtn = document.getElementById('save-btn');
    const profilePicInput = document.getElementById('profile-pic');
    const currentNameElem = document.getElementById('current-name');
    const currentEmailElem = document.getElementById('current-email');
    const currentPicElem = document.getElementById('current-pic');

    // Load profile data from localStorage
    const loadProfile = () => {
        const profile = JSON.parse(localStorage.getItem('profile'));
        if (profile) {
            currentNameElem.textContent = `Nome: ${profile.name}`;
            currentEmailElem.textContent = `E-Mail: ${profile.email}`;
            if (profile.pic) {
                currentPicElem.src = profile.pic;
                currentPicElem.style.display = 'block';
            }
        }
    };

    loadProfile();

    saveBtn.addEventListener('click', () => {
        const name = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const picFile = profilePicInput.files[0];
        const picUrl = picFile ? URL.createObjectURL(picFile) : null;

        if (!name || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const profile = { name, email, pic: picUrl };
        localStorage.setItem('profile', JSON.stringify(profile));
        
        alert('Perfil salvo com sucesso!');
        loadProfile();
    });
});
