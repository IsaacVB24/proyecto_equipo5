document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".seleccionar");

    botones.forEach(boton => {
        boton.addEventListener("click", function(event) {
            if (localStorage.getItem("logueado") !== "true") {
                event.preventDefault(); 
                mostrarAlerta("⚠️ Debes iniciar sesión antes de seleccionar una suscripción.");
            } else {
                window.location.href = "pago.html";
            }
        });
    });
});