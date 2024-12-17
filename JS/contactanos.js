
const txtMensaje = document.getElementById('txtMensaje');
const spanCaracteresRestantes = document.getElementById('caracteresRestantes');
let caracteresRestantes = spanCaracteresRestantes.textContent;
const caracteresIniciales = caracteresRestantes;
const errorTelefono = document.getElementById('errorTelefono');
const errorMensaje = document.getElementById('errorMensaje');

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
    
    if (telefono.value.length !== 10 || telefono.value[0] === "0" || !/^\d+$/.test(telefono.value)) {
      errorTelefono.innerHTML = "Número de teléfono inválido. Debe tener 10 dígitos.";
      errorTelefono.style.display = 'block';
      telefono.classList.add('is-invalid');
      return;
    }

    if(txtMensaje.value.trim().length < 10) {
        txtMensaje.classList.add('is-invalid');
        errorMensaje.style.display = 'block';
    }
    return;

    // Enviar el correo si el nombre es válido
    try {
        const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'your-sendinblue-api-key',
            },
            body: JSON.stringify({
                sender: { email: 'uncorreo@example.com' },
                to: [{ email: 'marketmexa@gmail.com' }],
                subject: 'Nuevo formulario de contacto',
                htmlContent: `<p><strong>Nombre:</strong> ${name}</p>`,
            }),
        });

        if (response.ok) {
            alert('¡Mensaje enviado correctamente!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Hubo un problema al enviar el mensaje. Intenta nuevamente.');
        }
    } catch (error) {
        alert('Ocurrió un error inesperado. Intenta más tarde.');
    }
});

function validarTelefono() {
    
  }
 const email = document.getElementById("correo")

 formData.addEventListener("submit", e =>{
     e.preventDefault()
     let warnings = ""
     let entrar = false
      let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
 if(nombre.value.length <6){
     warnings += `El nombre no es valido </br>`
     entrar = true;
 };
 if(!regexEmail.test(email.value)){
     warnings +=`El email no es valido </br>`;
     entrar = true;
 }
 })

