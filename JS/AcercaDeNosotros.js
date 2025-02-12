
document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.foto');

    imagenes.forEach(imagen => {
        imagen.addEventListener('mouseenter', () => {
            imagen.classList.add('vibration');

            imagen.addEventListener('animationend', () => {
                imagen.classList.remove('vibration');
            });
        });

        imagen.addEventListener('click', () => {
            vibrateAndLift(imagen);
        });
    });
});

function vibrateAndLift(imagen) {
    let contador = 0;
    const duracion = 500;
    const intervalo = 50;
    const intensidad = 5;

    const posicionOriginal = imagen.style.transform;

    const vibrar = setInterval(() => {
        contador += intervalo;
        imagen.style.transform = contador % 100 < 50 
            ? `translateX(${intensidad}px)`
            : `translateX(-${intensidad}px)`;

        if (contador >= duracion) {
            clearInterval(vibrar);
            imagen.style.transform = posicionOriginal;
        }
    }, intervalo);
}


