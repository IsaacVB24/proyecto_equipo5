document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById("formulario");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el envío del formulario

        // Obtener los valores del formulario
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("pass").value.trim();

        // Validar los campos que falten de llenado
        if (!email || !password) {
            showAlert("Por favor, completa todos los campos antes de iniciar sesión.", "danger");
            return;
        }

        // Aqui se utiliza el JSON para poder identificar los datos dentro de nuestro LOCALSTORAGE
        const usuarios = JSON.parse(localStorage.getItem("archivoCuenta")) || [];
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.password === password
        );

        if (usuarioEncontrado) {
            showAlert(`¡Bienvenido, ${usuarioEncontrado.username}!`, "success");

        // Redirigir al dashboard después de 2 segundos o podemos ajustarlo a menos o mas
            setTimeout(() => {
                window.location.href = "/HTML/carritoCompras.html"; 
            }, 2000);
    const passwordField = document.getElementById("pass");
    const emailField = document.getElementById("email");
    const alertContainer = document.getElementById("alertContainer");
    const rememberMe = document.getElementById("rememberMe");
    const form = document.getElementById("formulario");

    /*// Simulación de datos de usuario registrados en localStorage
    localStorage.setItem("registeredEmail", "usuario@gmail.com"); // Reemplazar por datos reales
    localStorage.setItem("registeredPassword", "123456"); // Reemplazar por datos reales*/

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
            showAlert("Correo o contraseña inválidos. Inténtalo nuevamente.", "danger");
        }
    });

    // Lo que se utiliza para mostrar las alertas
    function showAlert(message, type) {
        const alertContainer = document.getElementById("alertContainer");
        const alertHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertContainer.innerHTML = alertHTML;

        // Limpiar la alerta después de 3 segundos, si no modificar.
        setTimeout(() => {
            alertContainer.innerHTML = "";
        }, 3000);
    }
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

        // Validar formato de correo electrónico que termine en ".com"
        const emailRegex = /^[^\s@]+@[^\s@]+$/
        if (!emailRegex.test(email)) {
            showAlert("Por favor, ingresa un correo electrónico válido ");
            return;
        }

        // Validar contraseña (al menos 6 caracteres)
        if (password.length < 6) {
            showAlert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Validar si el correo y la contraseña coinciden con los datos registrados en localStorage
        const registeredEmail = localStorage.getItem("registeredEmail");
        const registeredPassword = localStorage.getItem("registeredPassword");

        if (email !== registeredEmail || password !== registeredPassword) {
            showAlert("Correo o contraseña inválidos.");
            return;
        }

        // Almacenar correo en localStorage si "Recuérdame" está seleccionado
        if (rememberMe.checked) {
            localStorage.setItem("email", email);
        } else {
            localStorage.removeItem("email");
        }

        // Redirigir a index.html tras iniciar sesión exitoso
        alert("Inicio de sesión exitoso.");
        window.location.href = "index.html";
    });

    // Función para mostrar alertas
    function showAlert(message) {
        alertContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${message}
            </div>
        `;
    }
        }})})
