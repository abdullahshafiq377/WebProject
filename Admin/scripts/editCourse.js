const courseCode = document.getElementById('courseCode');
const courseTitle = document.getElementById('courseTitle');
const courseDes = document.getElementById('codeDescription');

let validCourseCode = false;
let validCourseTitle = false;
let validCourseDes = false;


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
})