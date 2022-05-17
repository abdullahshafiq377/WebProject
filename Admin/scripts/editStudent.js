document.getElementById("update-student-btn").setAttribute("disabled","")
document.getElementById("update-student-btn").classList.add("disabled");


const regNo = document.getElementById('regNo');
const name = document.getElementById('name');
const fname = document.getElementById('fname');
const nationality = document.getElementById('nationality');
const contact= document.getElementById('contact');
const email= document.getElementById('email');


let validRegNo = false;
let validName = false;
let validFname = false;
let validNationality = false;
let validContact = false;
let validEmail = false;


function toggleUpdateButton(){
    if (validName && validFname && validEmail && validContact && validNationality ){
        document.getElementById("update-student-btn").removeAttribute("disabled");
        document.getElementById("update-student-btn").classList.remove("disabled");
    }
    else {
        document.getElementById("update-student-btn").setAttribute("disabled","")
        document.getElementById("update-student-btn").classList.add("disabled");
    }
}


regNo.addEventListener('blur', () => {

    let regex = /^[A-Za-z0-9]{4}-[A-Za-z]{3}-[0-9]{3}$/;
    let str = regNo.value;

    if (regex.test(str)) {
        regNo.classList.remove('is-invalid');
        validRegNo = true;
    }
    else {
        regNo.classList.add('is-invalid');
        validRegNo = false;
    }
})

name.addEventListener('blur', () => {

    let regex = /^[A-Za-z ]{3,}$/;
    let str = name.value;

    if (regex.test(str)) {
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        name.classList.add('is-invalid');
        validName= false;
    }
    toggleUpdateButton();
})

fname.addEventListener('blur', () => {

    let regex = /^[A-Za-z ]{3,}$/;
    let str = fname.value;

    if (regex.test(str)) {
        fname.classList.remove('is-invalid');
        validFname = true;
    }
    else {
        fname.classList.add('is-invalid');
        validFname= false;
    }
    toggleUpdateButton();
})

nationality.addEventListener('blur', () => {

    let regex = /^[A-Za-z ]{3,}$/;
    let str = nationality.value;

    if (regex.test(str)) {
        nationality.classList.remove('is-invalid');
        validNationality = true;
    }
    else {
        nationality.classList.add('is-invalid');
        validNationality= false;
    }
    toggleUpdateButton();
})

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
    toggleUpdateButton();
})

email.addEventListener('blur', () => {

    let regex = /^[A-Za-z0-9_-]{3,}@[A-Za-z]{3,}.[A-Za-z.]{2,6}$/;
    let str = email.value;

    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail= false;
    }
    toggleUpdateButton();
})