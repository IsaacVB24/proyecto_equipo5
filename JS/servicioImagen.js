'use strict';
 const botonImagen = document.querySelector('#imageUpload');
 const imagen = document.querySelector('imagenProducto');

let widgetCloudinary =  cloudinary.createUploadWidget({
cloudName : 'marketmexa',
uploadPreset : 'preset_market'

}, (err, result)=>{
if (!err && result && result.event === 'success'){
    console.log('Imagen subida con éxito', result.info)
    imagen.src = result.info.secure_url;
}

});



 botonImagen.addEventListener('click', () => {
    widgetCloudinary.open();

}, false);