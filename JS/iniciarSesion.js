document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("pass");
    const emailField = document.getElementById("email");
    const alertContainer = document.getElementById("alertContainer");
    const rememberMe = document.getElementById("rememberMe");
    const loginForm = document.getElementById("formulario");

    // Restaurar ícono de "ver contraseña"
    const passwordToggle = document.createElement("i");
    passwordToggle.className = "fa-regular fa-eye icon";
    passwordToggle.style.cursor = "pointer";
    passwordToggle.style.position = "absolute";
    passwordToggle.style.right = "15px";
    passwordToggle.style.top = "50%";
    passwordToggle.style.transform = "translateY(-50%)";
    passwordField.parentElement.style.position = "relative";
    passwordField.parentElement.appendChild(passwordToggle);

    // Alternar visibilidad de contraseña
    passwordToggle.addEventListener("click", () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            passwordToggle.className = "fa-regular fa-eye-slash icon";
        } else {
            passwordField.type = "password";
            passwordToggle.className = "fa-regular fa-eye icon";
        }
    });

    // Cargar datos del localStorage si "Recuérdame" está seleccionado
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        emailField.value = savedEmail;
        rememberMe.checked = true;
    }

    // Validar formulario al enviar
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        // Limpiar alertas previas
        alertContainer.innerHTML = "";

        // Validar campos
        if (!email || !password) {
            showAlert("Por favor, completa todos los campos antes de iniciar sesión.", "danger");
            return;
        }

        // Validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showAlert("Por favor, ingresa un correo electrónico válido.", "danger");
            return;
        }

        // Validar usuario en localStorage
        const usuarios = JSON.parse(localStorage.getItem("archivoCuenta")) || [];
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.password === password
        );

        if (!usuarioEncontrado) {
            showAlert("Correo o contraseña inválidos. Inténtalo nuevamente.", "danger");
            return;
        }

        // Actualizar estado del usuario logueado
        usuarios.forEach((usuario) => {
            usuario.isLoggedIn = usuario.email === email;
        });
        localStorage.setItem("archivoCuenta", JSON.stringify(usuarios));

        // Almacenar correo si "Recuérdame" está seleccionado
        if (rememberMe.checked) {
            localStorage.setItem("email", email);
        } else {
            localStorage.removeItem("email");
        }

        // Mostrar bienvenida y redirigir
        showAlert(`¡Bienvenido/a, ${usuarioEncontrado.username}!`, "success");
        localStorage.setItem('logueado', 'true');
        setTimeout(() => {
            window.location.href = "/HTML/listaProductos.html";
        }, 2000);
    });

    // Mostrar alertas
    function showAlert(message, type) {
        const alertHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertContainer.innerHTML = alertHTML;

        // Limpiar alerta después de 3 segundos
        setTimeout(() => {
            alertContainer.innerHTML = "";
        }, 3000);
    }
});
