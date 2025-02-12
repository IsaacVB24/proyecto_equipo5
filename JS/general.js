// No tocar este documento a menos que sea para estructuras generales, avisar al equipo primero

// Estructura de la barra de navegación que se van a utilizar en todos los HTML
const estructuraNav = `
<nav class="navbar navbar-expand-sm bg-dark navbar-dark" id="barra">
    <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="../IMG/logo.png" alt="logo" id="logo"></a>
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
                    <a class="nav-link" href="../HTML/subirProducto.html" style="display: ${localStorage.getItem('logueado') == 'true' ? 'block' : 'none'};" id="agregarProductos">Añadir producto</a>
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

// Actualizar la barra de navegación al iniciar sesión
function renderNavBar() {
    const navContainer = document.querySelector('.navbar .d-flex');
    const usuarios = JSON.parse(localStorage.getItem('archivoCuenta')) || [];
    const usuarioLogueado = usuarios.find((usuario) => usuario.isLoggedIn);

    // Control de visibilidad del botón "Añadir producto"
    const agregarProductos = document.getElementById('agregarProductos');
    if (usuarioLogueado) {
        agregarProductos.style.display = 'block'; // Mostrar si está logueado
    } else {
        agregarProductos.style.display = 'none'; // Ocultar si no está logueado
    }

    if (usuarioLogueado) {
        // Eliminar botones de inicio de sesión y registro
        navContainer.querySelectorAll('button').forEach((btn) => btn.remove());

        // Agregar el botón de usuario con el nuevo diseño y dropdown
        navContainer.insertAdjacentHTML(
            'afterbegin',
            `<div class="dropdown user-container">
                <button class="button btn-usuario dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="user-icon" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <span class="user-name">${usuarioLogueado.username}</span>
                    </div>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li><a class="dropdown-item" href="../HTML/perfil.html">Mi Perfil</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><button class="dropdown-item" id="logoutBtn">Cerrar sesión</button></li>
                </ul>
            </div>`
        );

        // Agregar evento para cerrar sesión
        document.getElementById("logoutBtn").addEventListener("click", cerrarSesion);
    }
}

// Función para cerrar sesión y ocultar "Añadir producto"
function cerrarSesion() {
    let usuarios = JSON.parse(localStorage.getItem("archivoCuenta")) || [];

    // Marcar todos los usuarios como NO logueados
    usuarios = usuarios.map(usuario => ({ ...usuario, isLoggedIn: false }));

    // Guardar en localStorage
    localStorage.setItem("archivoCuenta", JSON.stringify(usuarios));
    localStorage.setItem("logueado", "false"); // 🔥 Establece logueado en false 🔥

    mostrarAlerta("✅ Has cerrado sesión correctamente.");

    // Ocultar el botón de "Añadir producto" tras cerrar sesión
    document.getElementById('agregarProductos').style.display = 'none';

    // Redirigir a la página de inicio de sesión
    window.location.href = "../HTML/iniciarSesion.html";
}

// Ejecutar la función al cargar la página
window.addEventListener('load', renderNavBar);



function get(id) {
    return document.getElementById(id);
}

function verificarContainer() {
    if (!document.querySelector('#contenido')) {
        document.body.insertAdjacentHTML('beforeend', `<h1>PÁGINA EN CONSTRUCCIÓN</h1>`);
    }
}

verificarContainer();

document.body.insertAdjacentHTML('beforeend', `
    <footer class="footer mt-auto py-3" id="pie">
        <div><img src="../IMG/banderaMexico.webp" alt="bandera de México" id="bandera"></div>
        <div class="col-md-10 text-center row row-cols-2" id="pie-contenido">
            <div class="col col-md-3"><a href="../HTML/avisoDePrivacidad.html">Aviso de privacidad</a></div>
            <div class="col col-md-3"><a href="../HTML/contactanos.html">Contáctanos</a></div>
            <div class="col col-md-3"><a href="../HTML/terminos.html">Términos y condiciones</a></div>
            <div class="col col-md-3"><a href="../HTML/suscripcion.html">Suscripciones</a></div>
        </div>
    </footer>
`);

function inyectarFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = '/IMG/LOGO.png';
    document.head.appendChild(link);
}

inyectarFavicon();

// Añadir la clase con estilos en general.css
document.body.classList.add('fondoDegradado');

// Ejecutar la función al cargar la página
window.addEventListener('load', renderNavBar);

/* ------------- Funciones de validación -------------- */

const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const regexContr = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// Validación correo
function esCorreoInvalido(correo) {
    return !regexEmail.test(correo);
}

// Validación teléfono
function esTelefonoInvalido(telefono) {
    if(telefono.length !== 10) return true;
    if(telefono[0] == 0) return true;
    if(telefono[0] == 0 && telefono[1] == 0) return true;
    if(telefono.includes(' ')) return true;
    if(!/^\d+$/.test(telefono)) return true;
}

// Validación contraseña
function esPasswordIncorrecto(password) {
    if(password.length < 8) return true;
    return !regexContr.test(password);
}
/* ---------------------------------------------------- */

// Función para mostrar u ocultar la contraseña
function toggleVisibilidadContraseña(icono) {
    icono.addEventListener('click', function() {
        if (pass.type === 'password') {
            pass.type = 'text';
        } else {
            pass.type = 'password';
        }
    });
}

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