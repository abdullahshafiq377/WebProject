document.getElementById("add-course-btn").setAttribute("disabled","")
document.getElementById("add-course-btn").classList.add("disabled");

const courseCode = document.getElementById('courseCode');
const courseTitle = document.getElementById('courseTitle');
const courseDes = document.getElementById('courseDescription');

let validCourseCode = false;
let validCourseTitle = false;
let validCourseDes = false;


function toggleAddButton(){
    if (validCourseCode && validCourseTitle && validCourseDes){
        document.getElementById("add-course-btn").removeAttribute("disabled");
        document.getElementById("add-course-btn").classList.remove("disabled");
    }
    else {
        document.getElementById("add-course-btn").setAttribute("disabled","")
        document.getElementById("add-course-btn").classList.add("disabled");
    }
}

courseCode.addEventListener('blur', () => {

    let regex = /^[A-Za-z]{3,}[0-9]{3,}$/;
    let str = courseCode.value;

    if (regex.test(str)) {
        courseCode.classList.remove('is-invalid');
        validCourseCode = true;
    }
    else {
        courseCode.classList.add('is-invalid');
        validCourseCode = false;
    }
    toggleAddButton();
})

courseTitle.addEventListener('blur', () => {

    let regex = /^[A-Za-z ]{3,}$/;
    let str = courseTitle.value;

    if (regex.test(str)) {
        courseTitle.classList.remove('is-invalid');
        validCourseTitle = true;
    }
    else {
        courseTitle.classList.add('is-invalid');
        validCourseTitle= false;
    }
    toggleAddButton();
})

courseDes.addEventListener('blur', () => {

    let regex = /^[A-Za-z0-9\. ]{3,}$/;
    let str = courseDes.value;

    if (regex.test(str)) {
        courseDes.classList.remove('is-invalid');
        validCourseDes = true;
    }
    else {
        courseDes.classList.add('is-invalid');
        validCourseDes= false;
    }
    toggleAddButton();
})
