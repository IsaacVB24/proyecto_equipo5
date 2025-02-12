const divDeportes =get("deportes");
const divMusica = get("musica");
const divAccesorios = get("accesorios");
const divTecnologia = get("tecnologia");
const divLineaBlanca = get("lineaBlanca");

const productos = JSON.parse(localStorage.getItem('productos')) ||
[
    {
        'name': 'Balon Fútbol Americano',
        'img': "https://m.media-amazon.com/images/I/61b2hkrQarL.jpg",
        'descripcion': "Ovalado, con una longitud de 29cm y u un peso de 400gr. Cuatro paneles de cuero cocidos con hilo resistente ",
        'precio': 420,
        'stock': 3,
        'categoria': 'deportes'
    },
    
    {
        'name': 'Balón Fútbol Soccer',
        'img': "https://www.mueblesamerica.mx/img/1024/1024/resize/P/U/PUMA03911_x1_1.jpg",
        'descripcion': "Diametro de 22cm. Peso de 450gr. Cubierto de peneles de cuero cosidos",
        'precio': 350,
        'stock': 10,
        'categoria': 'deportes'
    },
    {
        'name': 'Guitarra Acústica',
        'img': "https://imgs.search.brave.com/nnvbvP_BJ2j4zmfcSUx6aqvV-eYRLfrHdRhFfKhuL7M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJ0/aW5ndWl0YXJtZXhp/Y28uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAzLzAw/MC0xNVNNX2ZyZW50/ZS5qcGc",
        'descripcion': "Diapason clasico,Trastes 19, Acabado Natural, Mate, Negro y Vino, Aro, Fondo y Mastil Aile, Diapason y Puente Encino, Maquinaria Clasica, Cuerdas Nylon",
        'precio': 1250,
        'stock': 7,
        'categoria': 'musica'
    },
    {
        'name': 'Album Beatles Sergeant Pepper',
        'img': "https://shop.capitolmusic.com/cdn/shop/files/sgtpep.png?v=1714072468",
        'descripcion': "Pepper's Lonely Hearts Club Band , álbum de estudio grabado por la banda de rock británica The Beatles, lanzado en 1967. El álbum resultó revolucionario por su tono psicodélico, sus efectos de estudio experimentales y su contribución musical al espíritu de la época contracultural de finales de los años 1960.",
        'precio': 564,
        'stock': 9,
        'categoria': 'musica'
    },
    {
        'name': 'Nintendo Switch 32GB',
        'img': "https://m.media-amazon.com/images/I/51Gz7IimgoL.AC_SL1024.jpg",
        'descripcion': "Nintendo Switch es la consola de Nintendo híbrida entre portátil y sobremesa. La Nintendo Switch incorpora dos controladores llamados Joy Con que se pueden desacoplar de la consola para juegos multijugador local como el Mario Kart, también tienen giroscopio, cámara infrarroja, NFC y vibración HD tecnologías que son aprovechadas por otros juegos, como 1,2,3 Switch, que acompañó a la consola en su lanzamiento.",
        'precio': 7864.25,
        'stock': 22,
        'categoria': 'tecnologia'
    },
    {
        'name': 'Google Chromecast 4k 4.ª generación ',
        'img': "https://http2.mlstatic.com/D_NQ_NP_2X_635602-MLA74782529607_022024-F.webp",
        'descripcion': "Chromecast con Google TV te ofrece el entretenimiento que amas, en hasta 4K HDR.Obtén recomendaciones personales de tus suscripciones, todo en un solo lugar. No tendrás que saltar entre aplicaciones para decidir qué mirar. Mira contenido de Netflix, Amazon Prime Video, Disney+, YouTube, la aplicación Apple TV, Peacock, HBO Max y muchos más.",
        'precio': 1197,
        'stock': 10,
        'categoria': 'tecnologia'
    },
    {
        'name': 'Licuadora Taurus 10 velocidades  ',
        'img': "https://i5.walmartimages.com/asr/0efb65c8-6988-492a-b662-02fb170310ec.1b5e5523d3a8b18f324967ae248f1ac6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        'descripcion': "Vaso de Vidrio, Libre de BPA de 1,5 litros 500 Watts de potencia 10 Velocidades (6 continuas y 4 pulsos) Tapa de cierre hermético con tapón dosificador Sistema de acople Easy Fitel desgaste de la licuadora FÃCIL DE LAVAR. Sus cuchillas de acero inoxidable son desmontables y el vaso es apto para lavavajillas COMPATIBLE. Se puede utilizar con su jarra o con tarros, botellas para llevar y otros accesorios compatibles",
        'precio': 579,
        'stock': 6,
        'categoria': 'lineaBlanca'
    },
    {
        'name': 'Freidora de Aire T-Fal',
        'img': "https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00001094222890l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        'descripcion': "Estas innovadoras freidoras sin aceite te permiten disfrutar de tus alimentos favoritos de manera más saludable. Ya sea que necesites una freidora eléctrica o una freidora de aire grande, tenemos la opción perfecta para ti. Con una freidora de papas o una freidora de papas fritas, obtendrás resultados crujientes y deliciosos sin el exceso de grasa.",
        'precio': 3199,
        'stock': 17,
        'categoria': 'lineaBlanca'
 },
{'name': 'Pulsera Plata',
    'img': "https://http2.mlstatic.com/D_NQ_NP_634860-MLU74276578390_022024-O.webp",
    'descripcion': "Pulsera para hombre de estilo clásico con eslabones de diseño 3 cortos y 1 largo. Ancho: 4.7 mm. Largo: 20 cm. Broche tipo perico para mayor seguridad. Metal: Plata Ley .925 con certificación #216 CRPT. Diseño de doble vista, con una cara diamantada y otra lisa para dos estilos en uno.",
    'precio': 527,
    'stock': 134,
    'categoria': 'accesorios'
},
{'name': 'Collar Concha',
        'img': "https://http2.mlstatic.com/D_NQ_NP_651771-MLM54804064417_042023-O.webp",
        'descripcion': "Collar Choker de conchitas de mar elaborado con material de alta calidad.",
        'precio': 100,
        'stock': 44,
        'categoria': 'accesorios'
}
];

function mostrarCards(productos) {
    productos.forEach((producto, index) => {
        const descripcionCorta = producto.descripcion.slice(0, 100) + '...'; // Limitar descripción a 100 caracteres
        const card = `
        <div class="card mb-3" id="card_${producto.name}_${producto.categoria}_${index}" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.name}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title" id="${index}_${producto.name}">${producto.name}</h5>
                        <p class="card-text" id="descripcion_${index}" data-full-text="${producto.descripcion}">
                            ${descripcionCorta}
                        </p>
                        <button class="btn btn-link p-0 ver-mas" onclick="toggleDescripcion(${index})">Ver más</button>
                        <p class="card-text mt-2"><strong>Precio:</strong> $<span id="precio_${index}_${producto.name}">${producto.precio}</span> MXN</p>
                        <div class="d-flex align-items-center">
                            <p class="mt-3" style="margin-right:30px">Cantidad: </p>
                            <button class="btn btn-outline-secondary btn-sm" onclick="decrementarCantidad('input_${producto.categoria}_${index}_${producto.name}')">-</button>
                            <p id="input_${producto.categoria}_${index}_${producto.name}" class="pt-3 mx-2 text-center" style="width: 60px;">1</p>
                            <button class="btn btn-outline-secondary btn-sm" onclick="incrementarCantidad('input_${producto.categoria}_${index}_${producto.name}')">+</button>
                        </div>
                        <button class="btn btn-success mt-3" onclick="agregarAlCarrito('card_${producto.name}_${producto.categoria}_${index}')">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>`;
        get(producto.categoria).insertAdjacentHTML("beforeend", card);
    });
}

function toggleDescripcion(index) {
    const descripcion = document.getElementById(`descripcion_${index}`);
    const fullText = descripcion.dataset.fullText;
    const shortText = fullText.slice(0, 100) + '...';

    if (descripcion.classList.contains('expanded')) {
        descripcion.textContent = shortText;
        descripcion.classList.remove('expanded');
        descripcion.nextElementSibling.textContent = "Ver más";
    } else {
        descripcion.textContent = fullText;
        descripcion.classList.add('expanded');
        descripcion.nextElementSibling.textContent = "Ver menos";
    }
}

function incrementarCantidad(idInput) {
    const input = document.getElementById(idInput);
    input.textContent = parseInt(input.textContent) + 1;
}

function decrementarCantidad(idInput) {
    const input = document.getElementById(idInput);
    if (parseInt(input.textContent) > 1) input.textContent = parseInt(input.textContent) - 1;
}

// Se agregan manualmente los productos al localStorage
localStorage.setItem('productos', JSON.stringify(productos));

function mostrarDatos() {
    const datos = JSON.parse(localStorage.getItem('productos'));
    return new Promise((resolve, reject) => {
        if(datos.length == 0 || datos == null) {
            reject(new Error("No hay datos por mostrar"));
        } else {
            resolve(datos);
        }
    });
}

async function fetchingDatos() {
    try {
        const respuesta = await mostrarDatos();
        mostrarCards(respuesta);
    } catch (err) {
        get('contenido').innerHTML = `
            <h1  class="text-center">Lista de Productos</h1>
            <h2 class="text-center" style="text-decoration:underline;">Podrás adquirir productos próximamente.</h2>
        `;
        console.error(err);
    }
}

fetchingDatos();

//Funcion para agregar prodcto al carrito
function agregarAlCarrito(idDivCard) {
    const divCardProducto = document.getElementById(idDivCard);
    if (!divCardProducto) {
        console.error(`No se encontró el producto con ID: ${idDivCard}`);
        return;
    }

    const elementosID = idDivCard.split('_');
    const nombre = elementosID[1];
    const categoria = elementosID[2];
    const indexProducto = elementosID[3];

    const imagen = divCardProducto.querySelector('img').src;
    const cantidad = parseInt(document.getElementById(`input_${categoria}_${indexProducto}_${nombre}`).textContent);
    const precio = parseFloat(document.getElementById(`precio_${indexProducto}_${nombre}`).textContent);
    // Obtener la descripción correctamente desde `data-full-text`
    const descripcionElemento = document.getElementById(`descripcion_${indexProducto}`);
    const descripcion = descripcionElemento ? descripcionElemento.dataset.fullText : "No hay descripción disponible.";


    if (isNaN(cantidad) || isNaN(precio)) {
        console.error("Error al obtener la cantidad o el precio del producto.");
        return;
    }

    // Obtener el carrito desde localStorage o inicializarlo vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Buscar si el producto ya está en el carrito
    let productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += cantidad; // Si existe, aumenta la cantidad
    } else {
        const carritoUsuario = [];
        carritoUsuario.push(localStorage.getItem('correoSesionIniciada'));
        carritoUsuario.push(
            {
                nombre: nombre,
                img: imagen,
                cantidad: cantidad,
                precio: precio,
                descripcion: descripcion
            }
        );
        carrito.push(carritoUsuario);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mostrar mensaje en verde de que se agregó correctamente
    mostrarMensaje(`"${nombre}" se añadió al carrito correctamente.`);
}

// Función para mostrar mensaje flotante sobre todo
function mostrarMensaje(mensaje) {
    let mensajeDiv = document.getElementById("mensaje-carrito");

    if (!mensajeDiv) {
        mensajeDiv = document.createElement("div");
        mensajeDiv.id = "mensaje-carrito";
        mensajeDiv.style.position = "fixed";
        mensajeDiv.style.top = "20px";
        mensajeDiv.style.right = "20px";
        mensajeDiv.style.padding = "15px 25px";
        mensajeDiv.style.backgroundColor = "#28a745"; // Verde de éxito
        mensajeDiv.style.color = "white";
        mensajeDiv.style.fontSize = "18px";
        mensajeDiv.style.borderRadius = "8px";
        mensajeDiv.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
        mensajeDiv.style.zIndex = "99999"; // Asegura que esté sobre todo
        mensajeDiv.style.opacity = "0"; 
        mensajeDiv.style.transform = "translateY(-20px)"; // Animación inicial
        mensajeDiv.style.transition = "opacity 0.4s ease-out, transform 0.4s ease-out";
        document.body.appendChild(mensajeDiv);
    }

    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.display = "block";

    // Animación de aparición
    setTimeout(() => {
        mensajeDiv.style.opacity = "1";
        mensajeDiv.style.transform = "translateY(0)";
    }, 100);

    // Ocultar el mensaje después de 3 segundos con animación
    setTimeout(() => {
        mensajeDiv.style.opacity = "0";
        mensajeDiv.style.transform = "translateY(-20px)";
        setTimeout(() => {
            mensajeDiv.style.display = "none";
        }, 400); // Espera a que termine la animación
    }, 3000);
}









