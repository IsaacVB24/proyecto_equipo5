// Ser crea la selección del formulario
const registroForm = document.getElementById("formulario");

<<<<<<< HEAD
const verContr = get('verContr');
const pass = document.getElementById('pass');

// Nuestra validación al enviar el formulario
registroForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
=======
 // Guardar
 registroForm.addEventListener("submit", async(event)=>{
  event.preventDefault();
>>>>>>> EC

    // Valores de los campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("phone").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document.getElementById("confirm-pass").value.trim();

    // Limpiar las alertas previas
    clearAlerts();

    let hasError = false;

<<<<<<< HEAD
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
    if (esCorreoInvalido(email)) {
        showAlert("El correo electrónico no es válido.", "danger");
        document.getElementById("email").classList.add("is-invalid");
        hasError = true;
    }

    // Validación del teléfono x3
    if (esTelefonoInvalido(telefono)) {
        showAlert("Número de teléfono inválido. Debe de tener 10 dígitos, no incluir espacios y no iniciar con 0 ni 00.", "danger");
        document.getElementById("phone").classList.add("is-invalid");
        hasError = true;
    }

    // Validación de la contraseña
    if(esPasswordIncorrecto(password)) {
        showAlert("Escriba una contraseña válida. Debe de tener mínimo 8 caracteres, usar al menos un caracter especial, contener al menos un dígito, una minúscula y una mayúscula.", "danger");
        document.getElementById("pass").classList.add("is-invalid");
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
=======
        //validaciones de formulario
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

        //validación de contraseña x4
        if (esPasswordIncorrecto(password)) { 
            showAlert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial (./*$).", "danger"); 
            document.getElementById("pass").classList.add("is-invalid");
             hasError = true; 
        }
    
        // Validación de contraseñas x5
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
                email: email}
>>>>>>> EC
        };
        //crear objeto con los datos del usuario  
        const formData = {
            name:name,
            email:email,
            phone:telefono,
            pass:password,
            address:"direccion predeterminada",
            user_registred:new Date().toISOString().split("T") [0]
        }

        try{
            //llamar a la api usando fetch
            const response = await fetch("link de nuestra pagina", {
                method: "POST",
                 headers:{ 
                    "Content-Type": "application/json" }, 
                    body: JSON.stringify(formData) });
                if (!response.ok) {
                    throw new Error(`Error en el registro: ${response.statusText}`);
        }

        const result = await response.text();
        console.log(" Registro exitoso:", result); 
        showAlert("Registro completado con éxito. Redirigiendo al inicio de sesión...", "success");
        });

        // Limpia el formulario y redirige a la pagina de Inicio de Sesión 
        //Modificaciones del tiempo
        registroForm.reset();
        setTimeout(() => {
            window.location.href = "/HTML/iniciarSesion.html";
        }, 2000);

// Función en general.js
toggleVisibilidadContraseña(verContr);

// Mostrar alertas, estas son modificadas dentro de las validaciones
function showAlert(message, type) {
    const alertContainer = document.getElementById("alertContainer");
    const alertHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    alertContainer.innerHTML += alertHTML;
}

// Función para limpiar las alertas y estilos ino válidos
function clearAlerts() {
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = "";
    document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
}

