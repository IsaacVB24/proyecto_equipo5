document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formPago");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Validaciones básicas
        const titular = document.getElementById("titular").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const expiracion = document.getElementById("expiracion").value.trim();

        if (!titular || !numero || !cvv || !expiracion) {
            mostrarAlerta("⚠️ Todos los campos son obligatorios.");
            return;
        }

        if (!/^\d{16}$/.test(numero.replace(/\s/g, ''))) {
            mostrarAlerta("⚠️ El número de tarjeta debe tener 16 dígitos.");
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            mostrarAlerta("⚠️ El CVV debe tener 3 dígitos.");
            return;
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiracion)) {
            mostrarAlerta("⚠️ Formato de expiración incorrecto (MM/YY).");
            return;
        }

        // Simula una transacción exitosa
        mostrarAlerta("✅ Pago realizado con éxito.", true);

        setTimeout(() => {
            window.location.href = "confirmacion.html"; // Redirige a una página de confirmación
        }, 3000);
    });
});

// Función para mostrar alertas flotantes encima del formulario
function mostrarAlerta(mensaje, exito = false) {
    let alerta = document.getElementById("alerta-pago");

    alerta.textContent = mensaje;
    alerta.style.backgroundColor = exito ? "#28a745" : "#FABC3F"; // Verde si es éxito, amarillo si es error
    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        alerta.style.opacity = "0";
        setTimeout(() => {
            alerta.style.display = "none";
        }, 500);
    }, 3000);
}
