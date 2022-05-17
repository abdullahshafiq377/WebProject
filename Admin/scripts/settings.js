
const contact= document.getElementById('contact');
const currentPassword = document.getElementById('current-password');
const newPassword = document.getElementById('new-password');

let validPassword = false;
let validContact = false;

contact.addEventListener('blur', () => {

    let regex = /^[0-9]{11}$/;
    let str = contact.value;

    if (regex.test(str)) {
        contact.classList.remove('is-invalid');
        validContact = true;
    }
    else {
        contact.classList.add('is-invalid');
        validContact= false;
    }
})

newPassword.addEventListener('blur', () => {

    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let str = newPassword.value;

    if (regex.test(str)) {
        newPassword.classList.remove('is-invalid');
        validPassword = true;
    }
    else {
        newPassword.classList.add('is-invalid');
        validPassword= false;
    }
})

