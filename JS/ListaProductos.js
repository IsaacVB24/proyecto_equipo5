const divDeportes = get("deportes");
const divMusica = get("musica");
const divAccesorios = get("accesorios");
const divTecnologia = get("tecnologia");
const divLineaBlanca = get("lineaBlanca");

//Productos sacados del BackEnd
async function fetchProductos() {
    try {
        const response = await fetch('http://localhost:8080/api/productos'); //Si es que si es Local :C
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

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

// Se agregan manualmente los productos al Baaaaack no al Local

async function init() {
    try {
        const productos = await fetchProductos(); //Obtener los productos del back
        mostrarCards(productos); //Pagina de productos
    } catch (err) {
        get('contenido').innerHTML = `
        <h1  class="text-center">Lista de Productos</h1>
            <h2 class="text-center" style="text-decoration:underline;">Podrás adquirir productos próximamente.</h2>
        `;
        console.error(err);
    }
}

init(); //Llamar a la función para obtener y mostrar nuestros productos

function mostrarDatos() {
    const datos = JSON.parse(localStorage.getItem('productos'));
    return new Promise((resolve, reject) => {
        if (datos.length == 0 || datos == null) {
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

fetchingDatos(); //Obtener y mostrar los productos

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
        carrito.push({
            nombre: nombre,
            img: imagen,
            cantidad: cantidad,
            precio: precio,
            descripcion: descripcion
        });
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