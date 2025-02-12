document.addEventListener("DOMContentLoaded", function() {
    //  Bloquear acceso si no hay sesión
    if (localStorage.getItem("logueado") !== "true") {
       
        mostrarAlerta("⚠️ No tienes acceso a esta página. Inicia sesión primero.");
        setTimeout(() => {
            window.location.href = "../HTML/iniciarSesion.html";
        }, 1500);
    }

    const form = document.getElementById("formPago");
    const tarjetaInput = document.getElementById("numero");

    //  Formato del número de tarjeta
    tarjetaInput.addEventListener("input", function() {
        let valor = this.value.replace(/\D/g, '').substring(0, 16);
        this.value = valor.replace(/(\d{4})/g, '$1 ').trim();

        let logo = document.getElementById("tarjeta-logo");
        if (/^4/.test(valor)) {
            logo.src = "../img/visa.png";
            logo.style.display = "block";
        } else if (/^5[1-5]/.test(valor)) {
            logo.src = "../img/mastercard.png";
            logo.style.display = "block";
        } else {
            logo.style.display = "none";
        }
    });

    //  Bloqueo de pago si no hay dirección completa
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const numero = tarjetaInput.value.replace(/\s/g, '');
        const mes = document.getElementById("mes").value.trim();
        const año = document.getElementById("año").value.trim();
        const cp = document.getElementById("cp").value.trim();
        const calle = document.getElementById("calle").value.trim();
        const colonia = document.getElementById("colonia").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();

        if (!/^\d{16}$/.test(numero)) {
            mostrarAlerta("⚠️ El número de tarjeta debe tener 16 dígitos.");
            return;
        }

        if (!/^\d{2}$/.test(mes) || !/^\d{2}$/.test(año)) {
            mostrarAlerta("⚠️ Fecha de expiración incorrecta (MM YY).");
            return;
        }

        if (!cp || !calle || !colonia || !ciudad) {
            mostrarAlerta("⚠️ Debes completar la dirección de envío.");
            return;
        }

        mostrarAlerta("✅ Pago realizado con éxito.", true);

        setTimeout(() => {
            window.location.href = "../index.html";
            vaciarCarrito();
        }, 3000);
    });

    function mostrarAlerta(mensaje, exito = false) {
        let alerta = document.getElementById("alerta-pago");
        alerta.textContent = mensaje;
        alerta.style.backgroundColor = exito ? "#28a745" : "#FABC3F";
        alerta.style.display = "block";

        setTimeout(() => { alerta.style.opacity = "1"; }, 100);
        setTimeout(() => { alerta.style.opacity = "0"; setTimeout(() => { alerta.style.display = "none"; }, 500); }, 3000);
    }
});


// Función para vaciar el carrito después del pago
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    cargarCarrito();
}
