document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("pass");
    const emailField = document.getElementById("email");
    const alertContainer = document.getElementById("alertContainer");
    const rememberMe = document.getElementById("rememberMe");
    const form = document.getElementById("formulario");

    // Crear y posicionar el ícono de "ver contraseña"
    const passwordToggle = document.createElement("i");
    passwordToggle.className = "fa-regular fa-eye icon";
    passwordToggle.style.cursor = "pointer";
    passwordToggle.style.position = "absolute";
    passwordToggle.style.right = "15px";
    passwordToggle.style.top = "50%";
    passwordToggle.style.transform = "translateY(-50%)";
    passwordField.parentElement.appendChild(passwordToggle);

    passwordToggle.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            passwordToggle.className = "fa-regular fa-eye-slash icon";
        } else {
            passwordField.type = "password";
            passwordToggle.className = "fa-regular fa-eye icon";
        }
    });

    // Cargar datos del localStorage si existe "Recuérdame"
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        emailField.value = savedEmail;
        rememberMe.checked = true;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        // Limpiar alertas previas
        alertContainer.innerHTML = "";

        // Validar campos
        if (!email || !password) {
            showAlert("Por favor, completa todos los campos antes de iniciar sesión.");
            return;
        }

        // Validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Validar contraseña (al menos 6 caracteres)
        if (password.length < 6) {
            showAlert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Validar si el correo y la contraseña coinciden con los datos registrados en localStorage
        const usuarios = JSON.parse(localStorage.getItem("archivoCuenta")) || [];
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.password === password
        );

        if (!usuarioEncontrado) {
            showAlert("Correo o contraseña inválidos.");
            return;
        }

        // Marcar al usuario como logueado
        usuarioEncontrado.isLoggedIn = true;

        // Guardar el estado actualizado en localStorage
        localStorage.setItem(
            "archivoCuenta",
            JSON.stringify(
                usuarios.map((u) =>
                    u.email === usuarioEncontrado.email ? usuarioEncontrado : u
                )
            )
        );

        // Almacenar correo en localStorage si "Recuérdame" está seleccionado
        if (rememberMe.checked) {
            localStorage.setItem("email", email);
        } else {
            localStorage.removeItem("email");
        }

        // Mostrar alerta de inicio de sesión exitoso
        alert(`¡Bienvenido, ${usuarioEncontrado.username}!`);

        // Redirigir a la página principal
        window.location.href = "AcercaDeNosotros.html";
    });

    // Función para mostrar alertas
    function showAlert(message) {
        alertContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${message}
            </div>
        `;
    }
});
