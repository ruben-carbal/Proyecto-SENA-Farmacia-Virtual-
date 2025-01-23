let submit = document.querySelector('.submit');
let formLog = document.querySelector('#inicio_sesion');
let user = document.querySelector('#user');

submit.addEventListener('click', onSubmit);
user.addEventListener('click', toggleMenu);

function onSubmit(event) {
    event.preventDefault();
}

function toggleMenu() {
    formLog.classList.toggle("hide");
}