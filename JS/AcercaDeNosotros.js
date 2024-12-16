const mision = document.getElementById('mision');

// Función que agrega vibración usando CSS
function vibrateWithCSS(imagen) {
    // Agregar la clase de vibración
    imagen.classList.add('vibration');
    
    // Remover la clase cuando termine la animación
    imagen.addEventListener('animationend', () => {
        imagen.classList.remove('vibration');
    });
}

// Función que crea vibración usando JavaScript puro
function vibrateWithJS(imagen) {
    let contador = 0;
    const duracion = 500;    // Duración total en milisegundos
    const intervalo = 50;    // Intervalo entre movimientos
    const intensidad = 5;    // Píxeles de movimiento
    
    // Guardamos la posición original
    const posicionOriginal = imagen.style.transform;
    
    const vibrar = setInterval(() => {
        contador += intervalo;
        
        if (contador < duracion) {
            // Alternar entre izquierda y derecha
            if (contador % 100 < 50) {
                imagen.style.transform = `translateX(${intensidad}px)`;
            } else {
                imagen.style.transform = `translateX(-${intensidad}px)`;
            }
        } else {
            // Volver a la posición original
            clearInterval(vibrar);
            imagen.style.transform = posicionOriginal;
        }
    }, intervalo);
}

// Función que eleva la imagen suavemente
function liftImage(imagen) {
    const posicionOriginal = imagen.style.transform;
    
    imagen.style.transition = 'transform 0.3s ease';
    imagen.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        imagen.style.transform = posicionOriginal;
    }, 1000);
}

// Función que combina los efectos
function vibrateAndLift(imagen) {
    vibrateWithJS(imagen);
    setTimeout(() => {
        liftImage(imagen);
    }, 500);
}

// Función principal que inicializa los efectos para todas las imágenes
function inicializarEfectos() {
    // Obtener todas las imágenes con la clase 'foto'
    const imagenes = document.querySelectorAll('.foto');
    
    // Agregar los eventos a cada imagen
    imagenes.forEach(imagen => {
        // Agregar evento al pasar el mouse
        imagen.addEventListener('mouseenter', () => {
            vibrateWithCSS(imagen);  // Puedes cambiar el efecto aquí
        });
        
        // Agregar evento al hacer clic
        imagen.addEventListener('click', () => {
            vibrateAndLift(imagen);  // Efecto combinado al hacer clic
        });
    });
}

// mision.addEventListener('mouseover', (event) => {
//     document.querySelector("#mision > p").style.display = 'block';
// });

// Inicializar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', inicializarEfectos);