const txtMensaje = document.getElementById('txtMensaje');
const spanCaracteresRestantes = document.getElementById('caracteresRestantes');
let caracteresRestantes = spanCaracteresRestantes.textContent;
const caracteresIniciales = caracteresRestantes;

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

    if (name.length <= 3) {
        document.getElementById('name').classList.add('is-invalid');
        document.getElementById('nameError').style.display = 'block';
        return;
    }

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