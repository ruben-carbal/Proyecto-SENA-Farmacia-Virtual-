let submit = document.querySelector('.submit');
let formLog = document.querySelector('#inicio_sesion');
let user = document.querySelector('#user');
let cart = document.querySelector('#cart');
let carrito = document.querySelector('#carrito');

submit.addEventListener('click', onSubmit);
user.addEventListener('click', toggleMenu);
cart.addEventListener('click', toggleCart);


//OCULTAR MENUS AL DAR CLICK FUERA DE ELLOS

//document.addEventListener('click', e => {
//    if (!formLog.classList.contains('hide') || !carrito.classList.contains('hide')) {
//        if (!(e.target != user || e.target != cart)
//        && !(user.contains(e.target) || cart.contains(e.target))) {
//        formLog.classList.add('hide');
//        carrito.classList.add('hide');
//    }
//    }
//})

function onSubmit(event) {
    event.preventDefault();
}

function toggleMenu() {
    formLog.classList.toggle("hide");
    carrito.classList.add("hide");
}

function toggleCart() {
    carrito.classList.toggle("hide");
    formLog.classList.add("hide");
}