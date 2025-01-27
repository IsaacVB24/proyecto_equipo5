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
});


// Referencia al formulario
const loginForm = document.getElementById('formulario');

// Manejar el evento de envío del formulario
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    // Obtener los valores de correo y contraseña
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    // Crear un objeto para almacenar los datos del usuario
    const usuario = { email, password };

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Mostrar mensaje de éxito
    alert('Datos guardados en localStorage correctamente.');
    loginForm.reset();
});




