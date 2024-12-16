const txtMensaje = document.getElementById('txtMensaje');
const spanCaracteresRestantes = document.getElementById('caracteresRestantes');
let caracteresRestantes = spanCaracteresRestantes.textContent;
const caracteresIniciales = caracteresRestantes;

txtMensaje.addEventListener('input', () => {
    const caracteresUsados = txtMensaje.value.length;
    caracteresRestantes = caracteresIniciales - caracteresUsados;
    spanCaracteresRestantes.textContent = caracteresRestantes;
});

window.addEventListener('load', event => {
    event.preventDefault();
    txtMensaje.maxLength = caracteresRestantes;
});

function validarTelefono() {
    const telefono = document.getElementById("telefono").value;
    
    if (telefono.length !== 10) {
      document.getElementById("mensaje").innerHTML = "Número de teléfono inválido. Debe tener 10 dígitos.";
      alert("Número de teléfono inválido. Debe tener 10 dígitos.");
    } else if (telefono[0] === "0") {
      document.getElementById("mensaje").innerHTML = "Número de teléfono inválido. El primer dígito no puede ser 0.";
      alert("Número de teléfono inválido. El primer dígito no puede ser 0.");
    } else if (!/^\d+$/.test(telefono)) {
      document.getElementById("mensaje").innerHTML = "Número de teléfono inválido. Solo se permiten dígitos.";
      alert("Número de teléfono inválido. Solo se permiten dígitos.");
    } else {
      document.getElementById("mensaje").innerHTML = "Número de teléfono válido";
    }
  }