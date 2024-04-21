const modal = document.getElementById('modal');
const button = document.getElementById('open-modal');

button.addEventListener('click', () => {
    modal.showModal();
});

const exit = document.getElementById('exit');

exit.addEventListener('click', () => {
    modal.close();
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        window.modal.close();
    }
});

const nameInput = document.querySelectorAll('input');
const textError = document.getElementById('error');
const passwordInput = document.getElementById('pwd');
const showPassword = document.getElementById('show-password');
const form = document.forms[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for (const i of nameInput) {
        if (!i.checkValidity()) {
            textError.textContent = 'Заполните поле'/* `${i.validationMessage}` */;
            textError.hidden = false;
            i.focus();
            return;
        }
    }
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }
});

nameInput.forEach((i) => i.addEventListener('blur', () => {
    if (i.checkValidity()) {
        textError.textContent = 'успешно';
        textError.hidden = true;
        /*   nameInput.classList.remove('invalid');
          nameInput.classList.add('valid'); */
    } else {
        textError.textContent = `${i.validationMessage}`;
        textError.hidden = false;
        /*   nameInput.classList.remove('valid');
          nameInput.classList.add('invalid'); */
    }
}));


showPassword.addEventListener('pointerdown', () => {
    passwordInput.type = 'text';
});

showPassword.addEventListener('pointerup', () => {
    passwordInput.type = 'password';
});