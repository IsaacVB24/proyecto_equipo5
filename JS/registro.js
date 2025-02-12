// Selección del formulario
const registroForm = document.getElementById("formulario");
const verContr = document.getElementById('verContr');
const pass = document.getElementById('pass');

// Validación al enviar el formulario
registroForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    // Valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("phone").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("confirm-pass").value.trim();

    // Limpiar alertas previas
    clearAlerts();

    let hasError = false;

    // Validaciones del nombre
    if (name.length < 2) {
        showAlert("El nombre debe tener al menos 2 caracteres.", "danger");
        document.getElementById("name").classList.add("is-invalid");
        hasError = true;
    }

    // Validación del correo electrónico
    if (esCorreoInvalido(email)) {
        showAlert("El correo electrónico no es válido.", "danger");
        document.getElementById("email").classList.add("is-invalid");
        hasError = true;
    }

    // Validación del teléfono
    if (esTelefonoInvalido(telefono)) {
        showAlert("Número de teléfono inválido. Debe tener 10 dígitos, no incluir espacios y no iniciar con 0 ni 00.", "danger");
        document.getElementById("phone").classList.add("is-invalid");
        hasError = true;
    }

    // Validación de la contraseña
    if (esPasswordIncorrecto(password)) {
        showAlert("La contraseña debe tener al menos 8 caracteres, un carácter especial, un número, una mayúscula y una minúscula.", "danger");
        document.getElementById("pass").classList.add("is-invalid");
        hasError = true;
    }

    // Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
        showAlert("Las contraseñas no coinciden.", "danger");
        document.getElementById("pass").classList.add("is-invalid");
        document.getElementById("confirm-pass").classList.add("is-invalid");
        hasError = true;
    }

    // Si hay errores, detener el proceso
    if (hasError) return;

    // Crear objeto con los datos del usuario
    const formData = {
        username: name,
        password: password,
        phone: telefono,
        email: email
    };

    try {
        // Enviar los datos al backend
        const response = await fetch("http://localhost:8080/api/registro", { // Cambia la URL según tu backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error en el registro:" `${response.statusText}`);
        }

        const result = await response.json();
        console.log("Registro exitoso:", result);
        showAlert("Registro completado con éxito. Redirigiendo al inicio de sesión...", "success");

        // Limpiar el formulario y redirigir a la página de inicio de sesión
        registroForm.reset();
        setTimeout(() => {
            window.location.href = "/HTML/iniciarSesion.html";
        }, 2000);
        
    } catch (error) {
        showAlert("Error en el registro:" `${error.message}, "danger"`);
    }
});

// Función en general.js para mostrar/ocultar contraseña
toggleVisibilidadContraseña(verContr);

// Mostrar alertas
function showAlert(message, type) {
    const alertContainer = document.getElementById("alertContainer");
    const alertHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertContainer.innerHTML += alertHTML;
}

// Función para limpiar alertas y estilos inválidos
function clearAlerts() {
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = "";
    document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
}
