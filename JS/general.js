// No tocar este documento a menos que sea para estructuras generales, avisar al equipo primero

// Estructura de la barra de navegación que se van a utilizar en todos los HTML
const estructuraNav = `
<nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="barra">
    <div class="container-fluid">
        <a class="navbar-brand" href="../HTML/AcercaDeNosotros.html"><img src="../IMG/logo.png" alt="logo" id="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../HTML/listaProductos.html">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../HTML/mercado.html">Mercado diario</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../HTML/AcercaDeNosotros.html">Acerca de nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../HTML/subirProducto.html">Añadir producto</a>
                </li>
            </ul>
            <div class="d-flex align-items-center">
                <button type="button" class="btn-nav m-2"><a href="../HTML/iniciarSesion.html">Iniciar sesión</a></button>
                <button type="button" class="btn-nav m-2"><a href="../HTML/registro.html">Registrarse</a></button>
                <a href="../HTML/carritoCompras.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4 ms-3" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>`;
document.body.insertAdjacentHTML('afterbegin', estructuraNav);

// Preconectar a Google Fonts
const preconnect1 = document.createElement('link');
preconnect1.rel = 'preconnect';
preconnect1.href = 'https://fonts.googleapis.com';
document.head.appendChild(preconnect1);

// Preconectar a fonts.gstatic.com con crossorigin
const preconnect2 = document.createElement('link');
preconnect2.rel = 'preconnect';
preconnect2.href = 'https://fonts.gstatic.com';
preconnect2.crossOrigin = 'anonymous';
document.head.appendChild(preconnect2);

// Cargar fuentes Comic Neue, Patrick Hand, Roboto Condensed y Roboto Flex
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Patrick+Hand&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap';
document.head.appendChild(fontLink);

document.body.insertAdjacentHTML('beforeend', `
  <div class="row mt-3" id="pie">
  <div class="col-md-2"><img src="../IMG/banderaMexico.webp" alt="bandera de México" id="bandera"></div>
  <div class="col-md-10 text-center row row-cols-2" id="pie-contenido">
    <div class="col col-md-3"><a href="../HTML/avisoDePrivacidad.html">Aviso de privacidad</a></div>
    <div class="col col-md-3"><a href="../HTML/contactanos.html">Contáctanos</a></div>
    <div class="col col-md-3"><a href="../HTML/terminos.html">Términos y condiciones</a></div>
    <div class="col col-md-3"><a href="../HTML/suscripcion.html">Suscripciones</a></div>
  </div>
</div>`);

// Actualizar la barra de navegación al iniciar sesión
function renderNavBar() {
    const navContainer = document.querySelector('.navbar .d-flex');
    const usuarios = JSON.parse(localStorage.getItem('archivoCuenta')) || [];
    const usuarioLogueado = usuarios.find((usuario) => usuario.isLoggedIn);

    if (usuarioLogueado) {
        // Eliminar botones de inicio de sesión y registro
        navContainer.querySelectorAll('button').forEach((btn) => btn.remove());

        // Añadir ícono y nombre del usuario antes del carrito
        navContainer.insertAdjacentHTML(
            'afterbegin',
            `<div class="d-flex align-items-center user-info me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle me-2" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span class="text-light">${usuarioLogueado.username}</span>
            </div>`
        );
    }
}
// Ejecutar la función al cargar la página
window.addEventListener('load', renderNavBar);

