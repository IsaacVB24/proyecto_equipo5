document.addEventListener("DOMContentLoaded", () => {
    const archivoCuenta = JSON.parse(localStorage.getItem("archivoCuenta")) || [];

    // Si hay datos en localStorage, mostrar el último usuario registrado
    if (archivoCuenta.length > 0) {
        const usuario = archivoCuenta[archivoCuenta.length - 1];
        document.getElementById("username").textContent = usuario.username || "No disponible";
        document.getElementById("email").textContent = usuario.email || "No disponible";
        document.getElementById("phone").textContent = usuario.phone || "No disponible";
    } else {
        document.querySelector(".perfil-info").innerHTML = "<p>No hay usuario registrado.</p>";
    }

    // Cerrar sesión (elimina los datos del usuario actual y redirige después de 2 segundos)
    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("archivoCuenta");
        setTimeout(() => {
            window.location.href = "../HTML/iniciarSesion.html"; // Redirige a la página de inicio de sesión
        }, 2000); // 2000 milisegundos = 2 segundos
    });
});
