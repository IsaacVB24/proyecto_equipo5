// Ser crea la selección del formulario
const registroForm = document.getElementById("formulario");
const archivoCuenta = JSON.parse(localStorage.getItem("archivoCuenta")) || [];

// Nuestra validación al enviar el formulario
registroForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    // Valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("phone").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("confirm-pass").value.trim();

    // Limpiar las alertas previas
    clearAlerts();

    let hasError = false;

    // Validar si ya existe una cuenta con el correo ingresado
    archivoCuenta.forEach(datoCuenta => {
        if(datoCuenta.email == email) {
            showAlert("El correo ya está registrado.", "danger");
            get('email').classList.add('is-invalid');
            hasError = true;
            return; // Salir del forEach
        }
    });

    // Validaciones del nombre (se usaron las standar, aqui se ponen las que hizo Brenda)
    if (name.length < 2) {
        showAlert("El nombre debe tener al menos 2 caracteres.", "danger");
        document.getElementById("name").classList.add("is-invalid");
        hasError = true;
    }

    // Validación del correo electrónico x2 a lo de arriba
    const regexEmail = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
    if (!regexEmail.test(email)) {
        showAlert("El correo electrónico no es válido.", "danger");
        document.getElementById("email").classList.add("is-invalid");
        hasError = true;
    }

    // Validación del teléfono x3
    if (telefono.length !== 10 || !/^\d+$/.test(telefono) || telefono === "0000000000") {
        showAlert("El número de teléfono debe tener 10 dígitos y no puede ser '0000000000'.", "danger");
        document.getElementById("phone").classList.add("is-invalid");
        hasError = true;
    }

    // Validación de contraseñas x4
    if (password !== confirmPassword) {
        showAlert("Las contraseñas no coinciden.", "danger");
        document.getElementById("pass").classList.add("is-invalid");
        document.getElementById("confirm-pass").classList.add("is-invalid");
        hasError = true;
    }

    // Si no hay errores, guarda el usuario
    if (!hasError) {
        const formData = {
            username: name,
            password: password,
            phone: telefono,
            email: email
        };

        // Guardar en localStorage
        archivoCuenta.push(formData);
        localStorage.setItem("archivoCuenta", JSON.stringify(archivoCuenta));

        showAlert("Registro completado con éxito. Redirigiendo al inicio de sesión...", "success");

        // Limpia el formulario y redirige a la pagina de Inicio de Sesión 
        //Modificaciones del tiempo
        registroForm.reset();
        setTimeout(() => {
            window.location.href = "/HTML/iniciarSesion.html";
        }, 2000);
    }
});

// Mostrar alertas, estas son modificadas dentro de las validaciones
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

// Función para limpiar las alertas y estilos ino válidos
function clearAlerts() {
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = "";
    document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
}

