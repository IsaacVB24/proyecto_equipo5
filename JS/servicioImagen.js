'use strict';
const botonImagen = document.querySelector('#imageUpload');
const imagen = document.querySelector('#imagenProducto');
imagen.classList.add("mt-3");

let widgetCloudinary =  cloudinary.createUploadWidget({
cloudName : 'marketmexa',
uploadPreset : 'preset_market'

}, (err, result)=>{
if (!err && result && result.event === 'success'){
    //console.log('Imagen subida con éxito', result.info)
    imagen.src = result.info.secure_url;
    imagen.style.width = "300px";
}

});

 botonImagen.addEventListener('click', () => {
    widgetCloudinary.open();

}, false);