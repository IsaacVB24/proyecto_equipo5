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





// document.body.insertAdjacentHTML('beforeend', `<div id="pie" class="mt-3">
//       <img src="../IMG/banderaMexico.webp" alt="bandera de México" id="bandera">
//       <a href="../HTML/avisoDePrivacidad.html">Aviso de privacidad</a>
//       <a href="../HTML/contactanos.html">Contáctanos</a>
//       <a href="../HTML/listaProductos.html">Productos</a>
//       <a href="../HTML/suscripcion.html">Suscripciones</a>
//     </div>`);

    

document.body.insertAdjacentHTML('beforeend', `
  <div class="row mt-3" id="pie">
  <div class="col-md-2"><img src="../IMG/banderaMexico.webp" alt="bandera de México" id="bandera"></div>
  <div class="col-md-10 text-center row row-cols-2" id="pie-contenido">
    <div class="col col-md-3"><a href="../HTML/avisoDePrivacidad.html">Aviso de privacidad</a></div>
    <div class="col col-md-3"><a href="../HTML/contactanos.html">Contáctanos</a></div>
    <div class="col col-md-3"><a href="../HTML/listaProductos.html">Terminos y condiciones</a></div>
    <div class="col col-md-3"><a href="../HTML/suscripcion.html">Suscripciones</a></div>
  </div>
</div>`);
  


    function get(id) {
        return document.getElementById(id);
    }
