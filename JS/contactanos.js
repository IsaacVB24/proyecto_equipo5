
const txtMensaje = document.getElementById('txtMensaje');
const spanCaracteresRestantes = document.getElementById('caracteresRestantes');
let caracteresRestantes = spanCaracteresRestantes.textContent;
const caracteresIniciales = caracteresRestantes;
const errorTelefono = document.getElementById('errorTelefono');
const errorMensaje = document.getElementById('errorMensaje');
const email = document.getElementById("email");
const errorCorreo = document.getElementById('errorCorreo');
const contactForm = document.getElementById('contactForm');

txtMensaje.addEventListener('input', () => {
    const caracteresUsados = txtMensaje.value.length;
    caracteresRestantes = caracteresIniciales - caracteresUsados;
    spanCaracteresRestantes.textContent = caracteresRestantes;
});

window.addEventListener('load', event => {
    event.preventDefault();
    txtMensaje.maxLength = caracteresRestantes;
});

//Parte del Nombre
contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value.trim();
    const telefono = document.getElementById("telefono");
    document.getElementById('name').classList.remove('is-invalid');
    document.getElementById('nameError').style.display = 'none';
    email.classList.remove('is-invalid');
    errorCorreo.style.display = 'none';
    telefono.classList.remove('is-invalid');
    errorTelefono.style.display = 'none';
    txtMensaje.classList.remove('is-invalid');
    errorMensaje.style.display = 'none';

    if (name.length <= 3) {
        document.getElementById('name').classList.add('is-invalid');
        document.getElementById('nameError').style.display = 'block';
        event.preventDefault();
    }
    
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if(!regexEmail.test(email.value)){
        email.classList.add('is-invalid');
        errorCorreo.style.display = 'block';
        event.preventDefault();
    }
    
    if (telefono.value.length !== 10 || telefono.value[0] === "0" || !/^\d+$/.test(telefono.value)) {
      errorTelefono.innerHTML = "Número de teléfono inválido. Debe tener 10 dígitos.";
      errorTelefono.style.display = 'block';
      telefono.classList.add('is-invalid');
      event.preventDefault();
    }

    if(txtMensaje.value.trim().length < 10) {
        txtMensaje.classList.add('is-invalid');
        errorMensaje.style.display = 'block';
        event.preventDefault();
    }
});