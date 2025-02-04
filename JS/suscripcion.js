document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".seleccionar");

    botones.forEach(boton => {
        boton.addEventListener("click", function() {
            // Verifica si el usuario ha iniciado sesión en localStorage
            if (localStorage.getItem("logueado") === "true") {
                // Si está logueado, redirige a pago.html
                window.location.href = "pago.html";
            } else {
                // Si no ha iniciado sesión, muestra alerta y luego redirige a iniciarSesion.html
                mostrarAlerta("⚠️ Debes iniciar sesión antes de seleccionar una suscripción.");
            }
        });
    });
});

// Función para mostrar alerta flotante y luego redirigir a iniciarSesion.html
function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("alerta-flotante");

    if (!alerta) {
        alerta = document.createElement("div");
        alerta.id = "alerta-flotante";
        alerta.style.position = "fixed";
        alerta.style.top = "20px";
        alerta.style.right = "20px";
        alerta.style.padding = "15px 25px";
        alerta.style.backgroundColor = "#FABC3F"; 
        alerta.style.color = "black";
        alerta.style.fontSize = "16px";
        alerta.style.borderRadius = "8px";
        alerta.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
        alerta.style.zIndex = "99999";
        alerta.style.opacity = "0";
        alerta.style.transition = "opacity 0.3s ease-in-out";
        document.body.appendChild(alerta);
    }

    alerta.textContent = mensaje;
    alerta.style.display = "block";

    // Animación de aparición
    setTimeout(() => {
        alerta.style.opacity = "1";
    }, 100);

    // Ocultar la alerta después de 3 segundos y redirigir a iniciar sesión
    setTimeout(() => {
        alerta.style.opacity = "0";
        setTimeout(() => {
            alerta.style.display = "none";
            window.location.href = "iniciarSesion.html"; 
        }, 500);
    }, 3000);
}
