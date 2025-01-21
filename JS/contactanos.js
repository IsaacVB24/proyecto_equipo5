document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = Array.from(contactForm.querySelectorAll('input, textarea'));
    let isValid = true;

    inputs.forEach((input) => {
      input.classList.remove('is-invalid');
      const feedback = input.nextElementSibling;

      if (input.type === 'text' && input.value.trim().length <= 3) {
        isValid = false;
        input.classList.add('is-invalid');
        feedback.textContent = 'Debe tener más de 3 caracteres.';
      }

      if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        isValid = false;
        input.classList.add('is-invalid');
        feedback.textContent = 'Ingresa un correo válido.';
      }

      if (input.id === 'telefono' && !/^[1-9]\d{9}$/.test(input.value)) {
        isValid = false;
        input.classList.add('is-invalid');
        feedback.textContent = 'Número inválido. Debe tener 10 dígitos.';
      }

      if (input.tagName === 'TEXTAREA' && input.value.trim().length < 10) {
        isValid = false;
        input.classList.add('is-invalid');
        feedback.textContent = 'El mensaje debe tener al menos 10 caracteres.';
      }
    });

    if (isValid) {
      alert('Formulario enviado correctamente');
      contactForm.reset();
    }
  });
});

window.addEventListener('load', event => {
    event.preventDefault();
    // contactForm.reset();
    txtMensaje.maxLength = caracteresRestantes;
});

//Parte del Nombre
contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value.trim();
    const telefono = document.getElementById("telefono");
    const email = document.getElementById('email').value.trim();
    const txtMensaje = document.getElementById('txtMensaje').value.trim();
    document.getElementById('name').classList.remove('is-invalid');
    document.getElementById('nameError').style.display = 'none';
    email.classList.remove('is-invalid');
    errorCorreo.style.display = 'none';
    telefono.classList.remove('is-invalid');
    errorTelefono.style.display = 'none';
    txtMensaje.classList.remove('is-invalid');
    errorMensaje.style.display = 'none';

    if (name.length <= 3) {
        document.getElementById('name').classList.add('is-invalid');
        document.getElementById('nameError').style.display = 'block';
        event.preventDefault();
    }
    
    let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if(!regexEmail.test(email.value)){
        email.classList.add('is-invalid');
        errorCorreo.style.display = 'block';
        event.preventDefault();
    }
    
    if (telefono.value.length !== 10 || telefono.value[0] === "0" || !/^\d+$/.test(telefono.value)) {
      errorTelefono.innerHTML = "Número de teléfono inválido. Debe tener 10 dígitos.";
      errorTelefono.style.display = 'block';
      telefono.classList.add('is-invalid');
      event.preventDefault();
    }

    if(txtMensaje.value.trim().length < 10) {
        txtMensaje.classList.add('is-invalid');
        errorMensaje.style.display = 'block';
        event.preventDefault();
    }

});