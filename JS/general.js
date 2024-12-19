// No tocar este documento a menos que sea para estructuras generales, avisar al equipo primero
document.body.insertAdjacentHTML('afterbegin', `<nav class="navbar navbar-expand-sm navbar-light bg-light" id="barra">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../IMG/logo.png" alt="logo" id="logo"></a>
            <div>
                <button type="button" class="btn-nav"><a href="../HTML/iniciarSesion.html">Iniciar sesión</a></button>
                <button type="button" class="btn-nav"><a href="../HTML/registro.html">Registrarse</a></button>
            </div>
        </div>
    </nav>`);

function get(id) {
    return document.getElementById(id);
}