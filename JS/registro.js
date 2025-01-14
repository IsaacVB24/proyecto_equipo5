
document.addEventListener("DOMContentLoaded", () => {


    // Icono que  da la opción de ver o no la contraseña
    const passwordField = document.getElementById("pass");
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

    // Validar que el formulario esté completo
    const submitButton = document.querySelector(".input-submit");
    submitButton.addEventListener("click", (e) => {
        const username = document.getElementById("user").value.trim();
        const password = passwordField.value.trim();

        if (!username || !password) {
            e.preventDefault();
            alert("Por favor, completa todos los campos antes de iniciar sesión.");
        }
    });

    // Enfoque de bordes
    const inputs = document.querySelectorAll(".input_field");
    inputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "var(--second-color)";
        });
        input.addEventListener("blur", () => {
            input.style.borderColor = "var(--primary-color)";
        });
    });
});
