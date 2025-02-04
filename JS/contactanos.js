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
    contactForm.reset();
});

//Parte del Nombre
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    const name = document.getElementById('name').value.trim();
    const telefono = document.getElementById("telefono");
    const mensaje = txtMensaje.value.trim();
    let isValid = true;

    // Resetear mensajes de error y clases de validación
    document.getElementById('name').classList.remove('is-invalid');
    document.getElementById('nameError').style.display = 'none';
    email.classList.remove('is-invalid');
    errorCorreo.style.display = 'none';
    telefono.classList.remove('is-invalid');
    errorTelefono.style.display = 'none';
    txtMensaje.classList.remove('is-invalid');
    errorMensaje.style.display = 'none';

    // Validaciones
    if (name.length < 2) {
        document.getElementById('name').classList.add('is-invalid');
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (esCorreoInvalido(email.value.trim())) {
        email.classList.add('is-invalid');
        errorCorreo.style.display = 'block';
        isValid = false;
    }

    if (esTelefonoInvalido(telefono.value.trim())) {
        errorTelefono.innerHTML = "Número de teléfono inválido. Debe de tener 10 dígitos, no incluir espacios, no tener más de 5 ceros consecutivos y no iniciar con 0 ni 00.";
        errorTelefono.style.display = 'block';
        telefono.classList.add('is-invalid');
        isValid = false;
    }

    if (mensaje.length < 10) {
        txtMensaje.classList.add('is-invalid');
        errorMensaje.style.display = 'block';
        isValid = false;
    }

    // Mensaje que se enviará si todo el formulario ha sido llenado con exito 
    
    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: '¡Formulario enviado!',
            text: 'Tu formulario se ha enviado con éxito. Te redirigiremos a la página principal.',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            window.location.href = '../index.html';
        });
    }
});