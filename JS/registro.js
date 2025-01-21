// Selección del formulario
const registroForm = document.getElementById('formulario');

// Validación al enviar el formulario
registroForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    // Valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const password = document.getElementById('pass').value.trim();
    const confirmPassword = document.getElementById('confirm-pass').value.trim();

    // Limpiar alertas previas
    clearAlerts();

    let hasError = false;

    // Validación del nombre
    if (name.length < 2) {
        showAlert('El nombre debe tener al menos 2 caracteres.', 'danger');
        document.getElementById('name').classList.add('is-invalid');
        hasError = true;
    }

    // Validación del correo electrónico
    const regexEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    if (!regexEmail.test(email)) {
        showAlert('El correo electrónico no es válido.', 'danger');
        document.getElementById('email').classList.add('is-invalid');
        hasError = true;
    }

    // Validación del teléfono
    if (telefono.length !== 10 || !/^\d+$/.test(telefono)) {
        showAlert('El número de teléfono debe tener 10 dígitos y contener solo números.', 'danger');
        document.getElementById('phone').classList.add('is-invalid');
        hasError = true;
    }

    // Validación de contraseñas
    if (password !== confirmPassword) {
        showAlert('Las contraseñas no coinciden.', 'danger');
        document.getElementById('pass').classList.add('is-invalid');
        document.getElementById('confirm-pass').classList.add('is-invalid');
        hasError = true;
    }

    // Si no hay errores, muestra un mensaje de éxito
    if (!hasError) {
        showAlert('Registro completado con éxito.', 'success');
    }
});

// Función para mostrar alertas de Bootstrap
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alertHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertContainer.innerHTML += alertHTML;
}

// Función para limpiar las alertas y estilos inválidos
function clearAlerts() {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerHTML = '';
    document.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));
}