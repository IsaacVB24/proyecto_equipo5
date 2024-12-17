
const txtMensaje = document.getElementById('txtMensaje');
const spanCaracteresRestantes = document.getElementById('caracteresRestantes');
let caracteresRestantes = spanCaracteresRestantes.textContent;
const caracteresIniciales = caracteresRestantes;
const errorTelefono = document.getElementById('errorTelefono');
const errorMensaje = document.getElementById('errorMensaje');
const email = document.getElementById("email");
const errorCorreo = document.getElementById('errorCorreo');

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
document.getElementById('submitBtn').addEventListener('click', async function() {
    const name = document.getElementById('name').value.trim();
    const telefono = document.getElementById("telefono");

    if (name.length <= 3) {
        document.getElementById('name').classList.add('is-invalid');
        document.getElementById('nameError').style.display = 'block';
        return;
    }
    
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if(!regexEmail.test(email.value)){
        email.classList.add('is-invalid');
        errorCorreo.style.display = 'block';
        return;
    }
    
    if (telefono.value.length !== 10 || telefono.value[0] === "0" || !/^\d+$/.test(telefono.value)) {
      errorTelefono.innerHTML = "Número de teléfono inválido. Debe tener 10 dígitos.";
      errorTelefono.style.display = 'block';
      telefono.classList.add('is-invalid');
      return;
    }

    if(txtMensaje.value.trim().length < 10) {
        txtMensaje.classList.add('is-invalid');
        errorMensaje.style.display = 'block';
        return;
    }
});