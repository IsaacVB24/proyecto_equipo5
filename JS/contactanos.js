// Selección de elementos
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Función de validación del formulario
function validateForm() {
  let isValid = true;

  // Validar nombre
  if (nameInput.value.trim().length < 3) {
    nameError.innerText = "El nombre debe tener al menos 3 caracteres.";
    isValid = false;
  } else {
    nameError.innerText = "";
  }

  // Validar correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.innerText = "Ingrese un correo válido.";
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  // Validar teléfono
  const phonePattern = /^[0-9]{10,15}$/; // Entre 10 y 15 dígitos
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.innerText = "El teléfono debe tener entre 10 y 15 dígitos.";
    isValid = false;
  } else {
    phoneError.innerText = "";
  }

  // Validar mensaje
  if (messageInput.value.trim().length < 10) {
    messageError.innerText = "El mensaje debe tener al menos 10 caracteres.";
    isValid = false;
  } else {
    messageError.innerText = "";
  }

  return isValid;
}

// Manejar el envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío automático del formulario

  successMessage.innerText = ""; // Limpiar el mensaje de éxito

  if (validateForm()) {
    successMessage.innerText = "Formulario enviado con éxito.";
    console.log("Formulario válido, datos:", {
      nombre: nameInput.value.trim(),
      email: emailInput.value.trim(),
      teléfono: phoneInput.value.trim(),
      mensaje: messageInput.value.trim(),
    });

    // Aquí podrías enviar los datos a tu backend o realizar más acciones
    form.reset(); // Limpiar el formulario
  }
});
