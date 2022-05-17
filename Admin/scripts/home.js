document.getElementById("reset-btn").setAttribute("disabled","")
document.getElementById("reset-btn").classList.add("disabled");


const email= document.getElementById('modal-email');
let validEmail = false;


function toggleResetButton(){
    if (validEmail){
        document.getElementById("reset-btn").removeAttribute("disabled");
        document.getElementById("reset-btn").classList.remove("disabled");
    }
    else {
        document.getElementById("reset-btn").setAttribute("disabled","")
        document.getElementById("reset-btn").classList.add("disabled");
    }
}


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
    toggleResetButton();
})