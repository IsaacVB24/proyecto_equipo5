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
