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


//  Función para mostrar alerta flotante
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
