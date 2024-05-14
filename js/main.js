
// Campos relevantes a validar y en un futuro guardar.
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const reason = document.getElementById('reason');
const find = document.getElementById('find');

// futuramente enviar noticias
const subscribe = document.getElementById('subscribe'); 

// constantes importantes
const submit = document.getElementById('submit');
const error = document.getElementById('error');
const form = document.getElementById('contactForm');
let datosComprimidos = '';
let datos = [];

//Funcion de validacion de datos.
submit.addEventListener('click', ()=>{
    if(name.value == '') return error.style.opacity = 100;
    if(email.value == '') return error.style.opacity = 100;
    if(phone.value == '') return error.style.opacity = 100;
    if(message.value == '') return error.style.opacity = 100;
    if(reason.value == '') return error.style.opacity = 100;
    if(find.value == '') return error.style.opacity = 100;

    guardarDatos(name.value, email.value, phone.value, message.value, reason.value, find.value);
    form.submit();
});

// Aca usamos el localstorage para almacenar los datos del usuario.

function guardarDatos (name, email, phone, message, reason, find) {
    datos.push({name: name, email: email, phone: phone, message: message, reason: reason, find: find})
    
    datosComprimidos = JSON.stringify(datos);
    localStorage.setItem('datos', datosComprimidos);
}

// funcion para visualizar si estos datos se guardaron correctamente. (developer)

function mostrar() {
    datosComprimidos = localStorage.getItem('datos');
    datos = JSON.parse(datosComprimidos);
    console.log(datos)
}