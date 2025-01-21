console.log("El archivo JavaScript se ha cargado correctamente.");

document.addEventListener("DOMContentLoaded", () => {
    // Alternar visibilidad de contraseña
    const togglePasswordVisibility = (passwordFieldId) => {
        const passwordField = document.getElementById(passwordFieldId);
        const passwordToggle = document.createElement("i");
        passwordToggle.className = "fa-regular fa-eye icon";
        passwordToggle.style.cursor = "pointer";
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
    };

    togglePasswordVisibility("pass");
    togglePasswordVisibility("confirm-pass");

    // Validación del formulario
    const form = document.getElementById("registroForm");
    const alertContainer = document.createElement("div"); // Contenedor de alertas
    form.prepend(alertContainer);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar el envío del formulario si hay errores
        console.log("diste click");

        // Obtener valores de los campos
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("pass").value.trim();
        const confirmPass = document.getElementById("confirm-pass").value.trim();
        console.log(name)
        console.log(confirmPass)
        console.log(email)
        console.log(phone)
        console.log(pass)



       // Limpiar mensajes de error previos
        //clearErrors();

        let isValid = true;
        const errorMessages = []; // Almacenar mensajes de error
        console.log(errorMessages)
        // Validar nombre
        if (name.length < 3) {
            errorMessages.push("El nombre debe tener al menos 3 caracteres.");
            isValid = false;
        }

        // Validar teléfono
        const phoneRegex = /^\d{10}$/; // Solo 10 dígitos numéricos
        if (!phoneRegex.test(phone)) {
            errorMessages.push("El teléfono debe ser un número de 10 dígitos.");
            isValid = false;
        }

        // Validar correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo estándar
        if (!emailRegex.test(email)) {
            errorMessages.push("Por favor ingresa un correo válido.");
            isValid = false;
        }

        // Validar contraseña
        if (pass.length < 6) {
            errorMessages.push("La contraseña debe tener al menos 6 caracteres.");
            isValid = false;
        }

        // Validar confirmación de contraseña
        if (pass !== confirmPass) {
            errorMessages.push("Las contraseñas no coinciden.");
            isValid = false;
        }

        // Mostrar errores como alertas
        if (!isValid) {
            showErrors(errorMessages);
        } else {
            alert("¡Registro exitoso!");
            form.reset(); // Limpiar formulario
            clearErrors();
        }
    });

    //Función para mostrar errores como alertas de Bootstrap
   function showErrors(messages) {
      alertContainer.innerHTML = ""; // Limpiar contenedor de alertas

        // Crear un contenedor de alerta de Bootstrap
        const alert = document.createElement("div");
        alert.className = "alert alert-danger";
        alert.role = "alert";

        // Concatenar los mensajes de error en una cadena
        const errorMessages = messages.join("<br>"); // Unir los mensajes con un salto de línea entre ellos

        // Establecer el contenido de la alerta con los mensajes de error
        alert.innerHTML = errorMessages;

        // Agregar la alerta al contenedor de alertas
        alertContainer.appendChild(alert);
    }


});

